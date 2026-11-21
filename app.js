document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const plan = (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA) || (typeof PLAN_A_DATA !== 'undefined' && PLAN_A_DATA);
  if (!plan) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const state = { day: 1, page: 'daily', category: 'all', query: '', currency: 'JPY', routes: true, mapStyle: 'google', tiles: null, map: null, markerGroup: null, routeGroup: null, markers: new Map(), toastTimer: null };
  const allDays = () => plan.days.slice().sort((a, b) => a.dayNum - b.dayNum);
  const currentDay = () => allDays().find(day => day.dayNum === state.day);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const formatNumber = value => Number(value).toLocaleString('en-US');
  const root = document.documentElement;
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) { /* storage unavailable */ } }
  };
  const PAGES = ['daily', 'essentials', 'food', 'budget'];
  // วันของทริปตามเวลาญี่ปุ่น; คืน null เมื่อวันนี้อยู่นอกช่วงทริป
  const tripDayToday = () => {
    if (!plan.tripStartDate) return null;
    try {
      const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tokyo' }).format(new Date());
      const dayNum = Math.round((Date.parse(today) - Date.parse(plan.tripStartDate)) / 864e5) + 1;
      return plan.days.some(day => day.dayNum === dayNum) ? dayNum : null;
    } catch (_) { return null; }
  };
  const todayNum = tripDayToday();
  const defaultDay = todayNum || 1;
  const moneyRange = (min, max) => {
    const convert = value => state.currency === 'JPY' ? value : Math.round(value * plan.exchangeRate);
    return `${state.currency === 'JPY' ? '' : '≈ '}${formatNumber(convert(min))}${max !== min ? `–${formatNumber(convert(max))}` : ''} ${state.currency}`;
  };
  function syncUrl() {
    const query = new URLSearchParams();
    if (state.page !== 'daily') query.set('page', state.page);
    if (state.day !== defaultDay) query.set('day', state.day === 0 ? 'all' : String(state.day));
    const search = query.toString();
    try { history.replaceState(null, '', `${location.pathname}${search ? `?${search}` : ''}${location.hash}`); } catch (_) { /* file URLs can refuse history changes */ }
  }
  // เรทแลกเปลี่ยน: ค่าเริ่มต้นจาก data.js; ผู้ใช้กรอกเองได้ที่หน้างบประมาณ และจำไว้ใน localStorage
  const RATE_KEY = 'kyoto-handbook-rate';
  const CHECKLIST_KEY = 'kyoto-handbook-checklist';
  const CURRENCY_KEY = 'kyoto-handbook-currency';
  const MAP_KEY = 'kyoto-handbook-map';
  const THEME_KEY = 'kyoto-handbook-theme';
  const defaultRate = Number(plan.exchangeRate) || 0.212;
  const validRate = value => Number.isFinite(value) && value >= 0.1 && value <= 0.5;
  const applyRate = value => { plan.exchangeRate = value; };
  const saveRate = value => { try { if (value === defaultRate) localStorage.removeItem(RATE_KEY); else localStorage.setItem(RATE_KEY, String(value)); } catch (error) { /* storage unavailable */ } };
  try { const saved = Number(localStorage.getItem(RATE_KEY)); if (localStorage.getItem(RATE_KEY) !== null && validRate(saved)) applyRate(saved); } catch (error) { /* storage unavailable */ }
  const fmt = jpy => state.currency === 'JPY' ? `${formatNumber(jpy)} JPY` : `≈ ${formatNumber(Math.round(jpy * plan.exchangeRate))} THB`;
  const costText = cost => state.currency === 'JPY' ? String(cost || 'ตามจริง') : String(cost || 'ตามจริง').replace(/([\d,]+)(?:\s*[–-]\s*([\d,]+))?\s*JPY/gi, (_, low, high) => `≈ ${formatNumber(Math.round(Number(low.replace(/,/g, '')) * plan.exchangeRate))}${high ? `–${formatNumber(Math.round(Number(high.replace(/,/g, '')) * plan.exchangeRate))}` : ''} THB`);
  const navUrl = checkpoint => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(checkpoint.navigationQuery || `${checkpoint.lat},${checkpoint.lng}`)}`;
  const isMapLink = url => String(url || '').startsWith('https://www.google.com/maps/');
  const mapSearchUrl = checkpoint => {
    if (isMapLink(checkpoint.link)) return checkpoint.link;
    const query = checkpoint.navigationQuery || (Number.isFinite(checkpoint.lat) && Number.isFinite(checkpoint.lng) ? `${checkpoint.lat},${checkpoint.lng}` : checkpoint.name);
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };
  const checkpointMatches = cp => (state.category === 'all' || cp.category === state.category) && (!state.query || `${cp.name} ${cp.jpName || ''} ${cp.desc} ${cp.transportInfo} ${cp.cost || ''} ${transitText(cp)}`.toLocaleLowerCase().includes(state.query));
  const safeLink = (url, label) => `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`;

  function showToast(message) {
    const toast = $('#toast'); toast.textContent = message; toast.classList.add('show');
    clearTimeout(state.toastTimer); state.toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }
  function setPage(name) {
    state.page = name; syncUrl();
    $$('.page').forEach(page => { page.hidden = page.id !== `page-${name}`; });
    $$('.main-nav button').forEach(button => { if (button.dataset.page === name) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current'); });
    if (name === 'daily' && state.map) setTimeout(() => state.map.invalidateSize(), 80);
  }
  function renderDayTabs() {
    const host = $('#dayTabs');
    const firstRender = !host.children.length;
    if (firstRender) {
      allDays().forEach(day => {
        const button = document.createElement('button');
        button.type = 'button'; button.className = 'day-tab'; button.dataset.day = String(day.dayNum);
        const weekday = day.date.match(/\(([^)]+)\)/)?.[1];
        button.innerHTML = `<small>DAY ${day.dayNum} · ${escapeHTML(day.date.split(' ')[0])} ธ.ค.${weekday ? ` · ${escapeHTML(weekday)}` : ''}${day.dayNum === todayNum ? ' · <b>วันนี้</b>' : ''}</small><strong>${escapeHTML(day.short || day.theme || '')}</strong>`;
        button.addEventListener('click', () => selectDay(day.dayNum)); host.append(button);
      });
    }
    $$('.day-tab', host).forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.day) === state.day)));
    // on load only: bring the selected day into view in the swipeable row (phones); later taps leave the row where it is
    const active = $('.day-tab[aria-pressed=true]', host);
    if (firstRender && active && host.scrollWidth > host.clientWidth) host.scrollLeft += active.getBoundingClientRect().left - host.getBoundingClientRect().left - 16;
    $('#overviewToggle').setAttribute('aria-pressed', String(state.day === 0));
  }
  function renderFilters() {
    const host = $('#categoryFilters');
    if (!host.children.length) {
      const options = [['all', 'ทั้งหมด'], ...Object.entries(plan.categories).map(([key, item]) => [key, item.name])];
      options.forEach(([key, label]) => {
        const button = document.createElement('button'); button.type = 'button'; button.dataset.category = key; button.textContent = label;
        button.addEventListener('click', () => { state.category = key; renderFilters(); renderTimeline(); renderMap(); }); host.append(button);
      });
    }
    $$('button', host).forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === state.category)));
  }
  function announceResults(count) {
    const status = $('#resultStatus'); if (!status) return;
    status.textContent = state.query || state.category !== 'all' ? `พบ ${count} จุดที่ตรงกับการค้นหาหรือตัวกรอง` : '';
  }
  function renderTimeline() {
    const host = $('#timeline'); host.replaceChildren();
    if (state.day === 0) { renderOverview(host); return; }
    const day = currentDay(); if (!day) return;
    const intro = document.createElement('header'); intro.className = 'day-intro';
    intro.innerHTML = `<div class="date">DAY ${day.dayNum} / ${escapeHTML(day.date)} · งบรถ ${fmt(day.totalFareJPY)} / คน</div><h2>${escapeHTML(day.title)}</h2><p class="route-summary">เส้นทางรถตรวจ 19 พ.ย. 2026 · ดูชานชาลาและป้ายหน้ารถจริงก่อนขึ้น</p>`; host.append(intro);
    const notice = document.createElement('aside'); notice.className = 'critical-note'; notice.innerHTML = `<strong>${escapeHTML(day.critical || '')}</strong>${escapeHTML(day.risk || '')}`; host.append(notice);
    const shown = day.checkpoints.filter(checkpointMatches).sort((a, b) => a.order - b.order);
    shown.forEach(cp => host.append(makeCheckpoint(day, cp)));
    announceResults(shown.length);
    if (!shown.length) host.insertAdjacentHTML('beforeend', '<div class="empty-state"><p>ไม่พบจุดที่ตรงกับการค้นหาหรือตัวกรอง</p><button type="button" class="text-button" id="resetFilters">ล้างการค้นหาและตัวกรอง</button></div>');
    const reset = $('#resetFilters', host); if (reset) reset.addEventListener('click', clearFilters);
  }
  function renderOverview(host) {
    const intro = document.createElement('header'); intro.className = 'day-intro'; intro.innerHTML = `<div class="date">KYOTO · UJI · NARA · OSAKA · 1–6 ธันวาคม 2026</div><h2>ภาพรวมทั้งทริป</h2><p class="route-summary">เดินทางช้าได้ ตัดกิจกรรมเสริมได้ และรักษาเวลาเดินทางสำคัญของแต่ละวัน</p>`; host.append(intro);
    let visibleCount = 0;
    allDays().forEach(day => {
      const checkpoints = day.checkpoints.filter(checkpointMatches).sort((a, b) => a.order - b.order); if (!checkpoints.length) return;
      visibleCount += checkpoints.length;
      const wrap = document.createElement('section'); wrap.className = 'overview-day'; wrap.innerHTML = `<header class="day-intro"><div class="date">DAY ${day.dayNum} · ${escapeHTML(day.date)} · งบรถ ${fmt(day.totalFareJPY)} / คน</div><h2>${escapeHTML(day.title)}</h2></header>`;
      const note = document.createElement('aside'); note.className = 'critical-note'; note.innerHTML = `<strong>${escapeHTML(day.critical || '')}</strong>${escapeHTML(day.risk || '')}`; wrap.append(note);
      checkpoints.forEach(cp => wrap.append(makeCheckpoint(day, cp)));
      host.append(wrap);
    });
    announceResults(visibleCount);
    if (!visibleCount) host.insertAdjacentHTML('beforeend', '<div class="empty-state"><p>ไม่พบจุดที่ตรงกับการค้นหาหรือตัวกรอง</p><button type="button" class="text-button" id="resetFilters">ล้างการค้นหาและตัวกรอง</button></div>');
    const reset = $('#resetFilters', host); if (reset) reset.addEventListener('click', clearFilters);
  }
  function makeCheckpoint(day, cp) {
    const card = document.createElement('article'); card.className = 'timeline-card'; card.id = `card-${cp.id}`;
    const cat = plan.categories[cp.category];
    // สรุป = ช่วงแรกของ desc (คั่นด้วย ;) หรือ cp.summary ถ้ากำหนดไว้; ส่วนที่เหลืออยู่ใน "รายละเอียดเพิ่มเติม" โดยไม่ซ้ำกับสรุป
    const fullDescription = cp.desc || 'ดูรายละเอียดจากแหล่งข้อมูลของสถานที่';
    const parts = fullDescription.split(/[;；]\s*/).map(part => part.trim()).filter(Boolean);
    let summary = cp.summary || parts[0] || fullDescription;
    let rest = cp.summary ? parts : parts.slice(1);
    if (!cp.summary && summary.length > 170) {
      const cutAt = summary.lastIndexOf(' ', 160);
      if (cutAt > 60) { rest = [`… ${summary.slice(cutAt + 1)}`, ...rest]; summary = `${summary.slice(0, cutAt)} …`; }
    }
    const warning = cp.warning ? `<p class="checkpoint-warning"><strong>ข้อควรจำ</strong>${escapeHTML(cp.warning)}</p>` : '';
    const more = rest.length ? `<details><summary>รายละเอียดเพิ่มเติม</summary><ul class="long-detail">${rest.map(part => `<li>${escapeHTML(part)}</li>`).join('')}</ul></details>` : '';
    const options = (cp.optionalActivities || []).map(item => `<span class="optional-tag">เสริม: ${escapeHTML(item)}</span>`).join(' ');
    const choice = cp.choiceNote ? `<p class="choice-note">${escapeHTML(cp.choiceNote)}</p>` : '';
    card.innerHTML = `<div class="time-col">${escapeHTML(cp.time)}<br><span>${escapeHTML(cat?.name || '')}</span></div><div class="stop-card"><h3>${escapeHTML(cp.name)}</h3>${cp.jpName ? `<p class="jp">${escapeHTML(cp.jpName)}</p>` : ''}<p class="desc">${escapeHTML(summary)}</p>${options ? `<div class="activity-options">${options}</div>` : ''}${choice}${warning}${more}${transitHTML(cp)}<div class="stop-meta">${cp.transit ? '' : `<span>การเดินทาง: ${escapeHTML(cp.transportInfo || 'ตรวจเส้นทางจริง')}</span>`}${cp.cost ? `<span>ค่าใช้จ่าย: ${escapeHTML(costText(cp.cost))}</span>` : ''}</div><div class="stop-actions"><button type="button" data-map-id="${escapeHTML(cp.id)}">แสดงบนแผนที่</button>${safeLink(navUrl(cp), 'นำทาง Google Maps')}${safeLink(mapSearchUrl(cp), 'ค้นหาสถานที่')}${cp.link && !isMapLink(cp.link) ? safeLink(cp.link, 'แหล่งข้อมูล') : ''}${(cp.bookingLinks || []).map(item => safeLink(item.url, item.label)).join('')}</div></div>`;
    $('[data-map-id]', card).addEventListener('click', () => focusCheckpoint(cp)); return card;
  }
  const TRANSIT_MODES = { walk:'เดิน', train:'รถไฟ', subway:'Subway', bus:'บัส', shuttle:'ชัทเทิล' };
  const legText = leg => leg.mode === 'walk' ? `เดิน ~${leg.min} นาที · ${leg.from} → ${leg.to}${leg.tip ? ` (${leg.tip})` : ''}` : `${leg.line}: ${leg.from} → ${leg.to} · ~${leg.min} นาที · ${[leg.board, leg.dir, leg.tip].filter(Boolean).join(' · ')}`;
  const transitText = cp => (cp.transit || []).map(legText).join(' ');
  const shortLine = line => line.replace(/s*[぀-ヿ一-鿿].*$/, '');
  // transit = ขาเดินทางจากจุดก่อนหน้ามาถึงจุดนี้; ขาที่ต่อกันโดยไม่เดินคั่น = เปลี่ยนสายที่สถานีนั้น
  function transitHTML(cp) {
    const legs = cp.transit || []; if (!legs.length) return '';
    const footer = cp.transportInfo ? `<p class="transit-note">${escapeHTML(cp.transportInfo)}</p>` : '';
    if (legs.every(leg => leg.mode === 'walk')) return `<p class="transit-walk"><span class="transit-mode mode-walk">เดิน</span>${legs.map(leg => escapeHTML(`~${leg.min} นาที · ${leg.from} → ${leg.to}${leg.tip ? ` · ${leg.tip}` : ''}`)).join('<br>')}</p>`;
    const chain = legs.map(leg => leg.mode === 'walk' ? `เดิน ${leg.min}′` : shortLine(leg.line)).join(' → ');
    const steps = legs.map((leg, i) => {
      const prev = legs[i - 1];
      const marker = leg.back ? '<li class="transit-marker">ขากลับ</li>' : (prev && prev.mode !== 'walk' && leg.mode !== 'walk' ? `<li class="transit-marker">เปลี่ยนสายที่ ${escapeHTML(leg.from)}</li>` : '');
      const body = leg.mode === 'walk'
        ? `<span class="transit-route">~${escapeHTML(String(leg.min))} นาที · ${escapeHTML(leg.from)} → ${escapeHTML(leg.to)}</span>`
        : `<strong>${escapeHTML(leg.line)}</strong><span class="transit-route">${escapeHTML(leg.from)} → ${escapeHTML(leg.to)} · ~${escapeHTML(String(leg.min))} นาที</span><span class="transit-dir">${escapeHTML([leg.board, leg.dir].filter(Boolean).join(' · '))}</span>`;
      return `${marker}<li class="transit-leg"><span class="transit-mode mode-${escapeHTML(leg.mode)}">${escapeHTML(TRANSIT_MODES[leg.mode] || leg.mode)}</span><div class="transit-body">${body}${leg.tip ? `<span class="transit-tip">${escapeHTML(leg.tip)}</span>` : ''}</div></li>`;
    }).join('');
    return `<details class="transit"><summary><span class="transit-label">วิธีไปจุดนี้</span> ${escapeHTML(chain)}</summary><ol class="transit-steps">${steps}</ol>${footer}</details>`;
  }
  function clearFilters() { state.category = 'all'; state.query = ''; $('#searchInput').value = ''; $('#clearSearch').hidden = true; renderFilters(); renderTimeline(); renderMap(); }
  // ถ้าเลื่อนผ่านแท็บวัน (แท็บติดอยู่บนสุด) ให้เลื่อนกลับมาให้เนื้อหาเริ่มต่อจากแท็บพอดี ไม่ขึ้นสุดหน้า
  function scrollToDayContent() {
    const tabs = $('#dayTabs'), content = $('#planColumn');
    const target = window.scrollY + content.getBoundingClientRect().top - tabs.offsetHeight - 8;
    if (window.scrollY <= target) return;
    // CSS ตั้ง scroll-behavior:smooth ไว้ จึงปิดชั่วคราวเพื่อเลื่อนทันที (ไม่ใช้ behavior:'instant' เพราะเบราว์เซอร์เก่าอาจ throw)
    const root = document.documentElement, prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto'; window.scrollTo(0, Math.max(0, target)); root.style.scrollBehavior = prev;
  }
  function selectDay(day) { state.day = day; syncUrl(); renderDayTabs(); renderTimeline(); renderRail(); renderMap(); if (state.map) fitMap(); scrollToDayContent(); }
  function renderRail() {
    if (state.day === 0) { $('#routeList').innerHTML = '<li><span>06</span><span>ภาพรวม · Kyoto / Uji / Nara / Osaka</span></li>'; $('#dayFare').textContent = state.currency === 'JPY' ? formatNumber(plan.totalICCardCostJPY) : formatNumber(Math.round(plan.totalICCardCostJPY * plan.exchangeRate)); $('#fareUnit').textContent = state.currency; $('#contingencySummary').textContent = 'เลือกวันด้านบนเพื่ออ่านเส้นทาง เวลาเตือน และแผนสำรองรายวัน'; return; }
    const day = currentDay(); if (!day) return;
    $('#routeList').innerHTML = day.checkpoints.map((cp, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><span>${escapeHTML(cp.name)}</span></li>`).join('');
    $('#dayFare').textContent = state.currency === 'JPY' ? formatNumber(day.totalFareJPY) : formatNumber(Math.round(day.totalFareJPY * plan.exchangeRate)); $('#fareUnit').textContent = state.currency;
    $('#contingencySummary').textContent = plan.contingencies?.find(item => item.title.toLowerCase().includes(`day ${day.dayNum}`))?.detail || day.risk || '';
  }
  function initializeMap() {
    const mapHost = $('#map');
    if (!mapHost) return;
    if (typeof L === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'; script.async = true;
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='; script.crossOrigin = '';
      script.onload = () => createMap();
      script.onerror = () => { mapHost.hidden = true; $('#mapFallback').hidden = false; };
      document.head.append(script);
      return;
    }
    createMap();
  }
  function createMap() {
    const mapHost = $('#map');
    try {
      state.map = L.map(mapHost, { zoomControl: true, scrollWheelZoom: false }).setView([34.9858, 135.7588], 11);
      if ($('.map-section').classList.contains('expanded')) state.map.scrollWheelZoom.enable();
      setTileLayer();
      state.markerGroup = L.layerGroup().addTo(state.map); state.routeGroup = L.layerGroup().addTo(state.map);
      setTimeout(() => state.map.invalidateSize(), 100); renderMap();
    } catch (_) { mapHost.hidden = true; $('#mapFallback').hidden = false; }
  }
  // แผนที่ฐาน 2 แบบ: Google Maps และ Esri World Street Map (ไม่ต้องใช้ API key และไม่บล็อกเมื่อเปิดจากไฟล์ในเครื่อง)
  function setTileLayer() {
    if (!state.map) return;
    if (state.tiles) state.tiles.remove();
    state.tiles = state.mapStyle === 'esri'
      ? L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, attribution: 'Tiles &copy; <a href="https://www.esri.com/" target="_blank" rel="noopener">Esri</a>' })
      : L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en', { maxZoom: 20, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'], attribution: '&copy; <a href="https://maps.google.com" target="_blank" rel="noopener">Google Maps</a>' });
    $('#mapFallback').hidden = true;
    state.tiles.on('tileerror', () => { $('#mapFallback').hidden = false; });
    state.tiles.on('load', () => { $('#mapFallback').hidden = true; });
    state.tiles.addTo(state.map); state.tiles.bringToBack();
  }
  function visibleDays() { return state.day === 0 ? allDays() : allDays().filter(day => day.dayNum === state.day); }
  function renderMap() {
    if (!state.map || !state.markerGroup || !state.routeGroup) return;
    state.markerGroup.clearLayers(); state.routeGroup.clearLayers(); state.markers.clear();
    visibleDays().forEach(day => {
      if (state.routes && day.routeCoords?.length > 1) L.polyline(day.routeCoords, { color: day.color || '#a74630', weight: 2, opacity: .65, dashArray: '5 7' }).addTo(state.routeGroup);
      day.checkpoints.forEach((cp, index) => {
        if (!checkpointMatches(cp)) return;
        if (!Number.isFinite(cp.lat) || !Number.isFinite(cp.lng)) return;
        const number = index + 1;
        const label = state.day === 0 ? `${day.dayNum}-${number}` : String(number);
        const icon = L.divIcon({ className: 'numbered-marker', html: `<span>${escapeHTML(label)}</span>`, iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -16] });
        const marker = L.marker([cp.lat, cp.lng], { icon, title: `Day ${day.dayNum} · จุด ${number} · ${cp.name}` }).bindPopup(`<strong>Day ${day.dayNum} · จุด ${number}: ${escapeHTML(cp.name)}</strong><br>${escapeHTML(cp.time)}<br>${safeLink(navUrl(cp), 'นำทาง')} · ${safeLink(mapSearchUrl(cp), 'ค้นหาสถานที่')}${cp.link && !isMapLink(cp.link) ? ` · ${safeLink(cp.link, 'แหล่งข้อมูล')}` : ''}`);
        marker.addTo(state.markerGroup); state.markers.set(cp.id, marker);
      });
    });
  }
  function fitMap() {
    if (!state.map) return; const points = [];
    visibleDays().forEach(day => day.checkpoints.filter(checkpointMatches).forEach(cp => { if (Number.isFinite(cp.lat) && Number.isFinite(cp.lng)) points.push([cp.lat, cp.lng]); }));
    if (points.length) state.map.fitBounds(points, { padding: [18, 18], maxZoom: 14 });
  }
  function setMapExpanded(expanded) {
    const section = $('.map-section'); const button = $('#fitMap');
    section.classList.toggle('expanded', expanded);
    button.textContent = expanded ? 'ย่อ' : 'ขยาย';
    button.setAttribute('aria-label', expanded ? 'ย่อแผนที่' : 'ขยายแผนที่');
    button.setAttribute('aria-expanded', String(expanded));
    if (state.map) {
      if (expanded) state.map.scrollWheelZoom.enable(); else state.map.scrollWheelZoom.disable();
      state.map.invalidateSize(); if (expanded) fitMap();
    }
  }
  function focusCheckpoint(cp) {
    const marker = state.markers.get(cp.id); if (marker && state.map) { state.map.setView([cp.lat, cp.lng], 15); marker.openPopup(); $('#mapPanel').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }
  function renderEssentials() {
    const host = $('#essentialsContent'); const flight = plan.flightInfo; const hotel = plan.hotelInfo;
    const flights = `
      <div class="content-grid">
        <section class="info-card">
          <h3>ขาไป · ${escapeHTML(flight.departure.flight)}</h3>
          <p>${escapeHTML(flight.departure.from)}
          ${escapeHTML(flight.departure.to)}
          ไปสุวรรณภูมิคืนวันที่ 30 พ.ย. และเผื่อเวลา Shuttle ที่ KIX T2</p>
          ${safeLink(flight.sourceLink, 'ตารางฤดูหนาว Peach · ฉบับ 21 ต.ค. 2026')}
        </section>
        <section class="info-card">
          <h3>ขากลับ · ${escapeHTML(flight.return.flight)}</h3>
          <p>${escapeHTML(flight.return.from)}
          ${escapeHTML(flight.return.to)}
          เป้าหมายถึง T2 ไม่เกิน 16:00; ตรวจใบจองและขั้นตอนเช็คอินล่าสุด</p>
          ${safeLink(flight.sourceLink, 'ตารางเที่ยวบิน')}
        </section>
        <section class="info-card">
          <h3>${escapeHTML(hotel.name)}</h3>
          <p>${escapeHTML(hotel.address)}
          ${escapeHTML(hotel.nights)} · ${escapeHTML(hotel.features)}</p>
          ${safeLink(hotel.sourceLink, 'เว็บไซต์โรงแรม')} · ${safeLink(hotel.mapLink, 'ค้นหาสถานที่')}
        </section>
      </div>`;
    const tips = (plan.travelTips || []).map(tip => `<section class="info-card"><h3>${escapeHTML(tip.title)}</h3><p>${escapeHTML(tip.desc)}</p>${tip.link ? safeLink(tip.link, tip.linkLabel || 'แหล่งข้อมูล') : ''}${tip.secondaryLink ? ` · ${safeLink(tip.secondaryLink, tip.secondaryLinkLabel || 'ข้อมูลเพิ่มเติม')}` : ''}</section>`).join('');
    const checklist = plan.preTripChecklist || [];
    let checkedItems = [];
    try { checkedItems = JSON.parse(store.get(CHECKLIST_KEY) || '[]'); } catch (_) { checkedItems = []; }
    const alternatives = (plan.alternatives || []).map(item => `<li><strong>${escapeHTML(item.name)}</strong> — ${escapeHTML(item.replaces)}. ${escapeHTML(item.note)} ${safeLink(mapSearchUrl(item), 'ค้นหาสถานที่')}${item.link && !isMapLink(item.link) ? ` · ${safeLink(item.link, 'ข้อมูลสถานที่')}` : ''}</li>`).join('');
    const contingencies = (plan.contingencies || []).map(item => `<section class="info-card"><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.detail)}</p></section>`).join('');
    host.innerHTML = `${flights}
      <section class="info-card">
        <h3>ก่อนเดินทาง · เช็กลิสต์</h3>
        <ul class="checklist">${checklist.map((item, index) => `<li><label><input type="checkbox" data-check="${index}"${checkedItems.includes(item) ? ' checked' : ''}>${escapeHTML(item)}</label></li>`).join('')}</ul>
      </section>
      <div class="content-grid">${tips}</div>
      <section class="info-card">
        <h3>สถานที่ทดแทน · เลือกแทน ไม่เพิ่มทุกแห่ง</h3>
        <ul>${alternatives}</ul>
      </section>
      <h2>แผนสำรองรายวัน</h2>
      <div class="content-grid">${contingencies}</div>`;
    // จำรายการที่ติ๊กไว้ในเบราว์เซอร์นี้ โดยอ้างจากข้อความของรายการ
    host.addEventListener('change', event => {
      if (!event.target.matches('[data-check]')) return;
      store.set(CHECKLIST_KEY, JSON.stringify($$('[data-check]', host).filter(box => box.checked).map(box => checklist[Number(box.dataset.check)])));
    });
  }
  function renderRestaurants() {
    $('#restaurantNote').textContent = plan.nearbyRestaurantsNote || 'เวลาเดินเป็นค่าประมาณ ร้านบางแห่งอยู่คนละฝั่งสถานีหรือภายในห้าง โปรดเผื่อเวลาเดินและตรวจวันเปิด/คิว';
    const host = $('#restaurantContent'); const groups = new Map();
    (plan.nearbyRestaurants || []).forEach(item => { if (!groups.has(item.category)) groups.set(item.category, []); groups.get(item.category).push(item); });
    host.innerHTML = [...groups.entries()].map(([category, items]) => `<section class="info-card"><h3>${escapeHTML(category)}</h3>${items.map(item => `<p><strong>${escapeHTML(item.name)}</strong><br>${escapeHTML(item.walkTime)} · ${escapeHTML(item.desc)}<br>${safeLink(mapSearchUrl(item), 'ค้นหาสถานที่')}</p>`).join('<hr>')}</section>`).join('');
  }
  function renderBudget() {
    const data = plan.budget; const host = $('#budgetContent'); if (!data) return;
    const travelers = data.travelers || 1;
    const rows = [['รถสาธารณะ รวม Haruka', data.transport], ['อาหารและคาเฟ่', data.meals], ['ค่าเข้าชม + CHAZUNA + Kaiyukan', data.admissions], ['ภาษีที่พัก · สมมติ 400 × 5 คืน', data.accommodationTax], ['รวมก่อนเงินสำรอง', data.beforeReserve], ['เงินสำรอง', data.reserve], ['รวมพร้อมเงินสำรอง', data.total]];
    const budgetRows = rows.map(([label, item], index) => {
      return `<div class="budget-row ${index === rows.length - 1 ? 'total' : ''}">
        <span>${escapeHTML(label)}</span>
        <strong>${moneyRange(item.minJPY, item.maxJPY)}<span class="budget-group">${travelers} คน ${moneyRange(item.minJPY * travelers, item.maxJPY * travelers)}</span></strong>
        <small>${escapeHTML(item.note || '')}</small>
      </div>`;
    }).join('');
    const taxBands = data.accommodationTaxBands.map(band =>
      `<li>${escapeHTML(band.threshold)} · ${fmt(band.amountJPY)} / คน / คืน</li>`
    ).join('');
    host.innerHTML = `
      <div class="budget-table">${budgetRows}</div>
      <div class="budget-details">
        <section>
          <h3>ภาษีที่พัก Kyoto</h3>
          <p>มีผลตั้งแต่ 1 มี.ค. 2026; คิดจากราคาที่พักต่อคนต่อคืนตามฐานเมือง. แผนสมมติ 400 × 5 คืน = 2,000 JPY; โรงแรมต้องยืนยันตามราคาจองจริง.</p>
          <ul>${taxBands}</ul>
          ${safeLink('https://kyoto.travel/en/news/tax-change/', 'Kyoto City · Accommodation Tax')}
        </section>
        <section>
          <h3>ตัวเลือกที่ยังไม่รวมทั้งหมด</h3>
          <p>ฐานค่าเข้า ${fmt(data.admissionBaseJPY)}: Kiyomizu 500 + Byodoin 700 + Todaiji 800 + Tenryuji Garden 500 + Kinkakuji 500 + Shimogamo เข้าสักการะฟรี + Eikando Night 1,000 + Kaiyukan งบเผื่อ ${fmt(data.kaiyukanEstimateJPY)}; รวม CHAZUNA ${fmt(data.chazunaJPY)} (ราคาจริง) เป็น ${fmt(data.admissionBaseJPY + data.chazunaJPY)}.</p>
          <ul>
            <li>Phoenix Hall เพิ่ม ${fmt(data.phoenixHallExtraJPY)}</li>
            <li>งบสูงสุด ${fmt(data.admissions.maxJPY)} รวม Phoenix Hall และค่าเข้า Tenjuan หรือ Tenshukaku 1,200 JPY ตามสมมติฐาน Kaiyukan 3,500 JPY ซึ่งต้องปรับตามราคาจริง; ยังไม่รวม Nishinomaru; หักค่าเข้า Ginkakuji ออกแล้วและเก็บ Kinkakuji ตามแผน</li>
          </ul>
          <p>เงินสำรองรองรับค่าใช้จ่ายเพิ่มบางส่วนเท่านั้น. ไม่รวมเที่ยวบิน ค่าห้อง และช้อปปิ้ง.</p>
        </section>
      </div>`;
  }
  function setupRateInput() {
    const input = $('#rateInput'); const note = $('#rateNote'); const reset = $('#rateReset');
    if (!input || !note) return;
    const updateNote = () => {
      const rate = plan.exchangeRate; const total = plan.budget && plan.budget.total; const people = (plan.budget && plan.budget.travelers) || 1;
      const custom = rate !== defaultRate ? ' · ใช้เรทที่กรอกเอง' : ' · ค่าเริ่มต้น (อ้างอิง 6 พ.ย. 2026)';
      note.textContent = (total ? `งบพร้อมสำรองต่อคน ${formatNumber(total.minJPY)}–${formatNumber(total.maxJPY)} JPY ≈ ${formatNumber(Math.round(total.minJPY * rate))}–${formatNumber(Math.round(total.maxJPY * rate))} THB` + (people > 1 ? ` · รวม ${people} คน ${formatNumber(total.minJPY * people)}–${formatNumber(total.maxJPY * people)} JPY ≈ ${formatNumber(Math.round(total.minJPY * people * rate))}–${formatNumber(Math.round(total.maxJPY * people * rate))} THB` : '') : '') + ` (1 THB ≈ ${(1 / rate).toFixed(3)} JPY)${custom}`;
    };
    const rerenderAll = () => { renderTimeline(); renderRail(); renderBudget(); renderMap(); };
    input.value = String(plan.exchangeRate); updateNote();
    input.addEventListener('input', () => {
      const value = Number(input.value); const ok = input.value !== '' && validRate(value);
      input.setAttribute('aria-invalid', String(!ok));
      if (!ok) return;
      applyRate(value); saveRate(value); updateNote(); renderBudget();
    });
    input.addEventListener('change', () => {
      const value = Number(input.value);
      if (input.value === '' || !validRate(value)) { input.value = String(plan.exchangeRate); input.setAttribute('aria-invalid', 'false'); }
      updateNote(); rerenderAll();
    });
    reset.addEventListener('click', () => { applyRate(defaultRate); saveRate(defaultRate); input.value = String(defaultRate); input.setAttribute('aria-invalid', 'false'); updateNote(); rerenderAll(); });
  }
  async function copyDay() {
    const lines = ['Kyoto Trip Handbook'];
    const days = state.day === 0 ? allDays() : [currentDay()];
    days.filter(Boolean).forEach(day => {
      lines.push('', `DAY ${day.dayNum} · ${day.date}`, day.title, `งบรถโดยประมาณ ${formatNumber(day.totalFareJPY)} JPY / คน`);
      day.checkpoints.forEach(cp => lines.push(`${cp.time} · ${cp.name}`, cp.desc, `การเดินทาง: ${cp.transportInfo}`, ...(cp.transit || []).map(leg => `  · ${legText(leg)}`), ...(cp.cost ? [`ค่าใช้จ่าย: ${cp.cost}`] : [])));
    });
    try { if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(lines.join('\n')); showToast('คัดลอกแผนแล้ว'); return; } } catch (_) { /* use fallback below for denied clipboard and file URLs */ }
    const textarea = document.createElement('textarea'); textarea.value = lines.join('\n'); textarea.setAttribute('readonly', ''); textarea.style.position = 'fixed'; textarea.style.opacity = '0'; document.body.append(textarea); textarea.select();
    try { const copied = document.execCommand('copy'); showToast(copied ? 'คัดลอกแผนแล้ว' : 'คัดลอกไม่ได้ · เลือกและคัดลอกข้อความด้วยตนเอง'); if (!copied) { textarea.removeAttribute('readonly'); textarea.style.position = 'static'; textarea.style.opacity = '1'; textarea.focus(); } else textarea.remove(); } catch (_) { textarea.removeAttribute('readonly'); textarea.style.position = 'static'; textarea.style.opacity = '1'; textarea.focus(); showToast('เลือกข้อความแล้ว · คัดลอกด้วยตนเอง'); }
  }

  $$('.main-nav button').forEach(button => button.addEventListener('click', () => setPage(button.dataset.page)));
  $$('[data-open-page]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); setPage(link.dataset.openPage); $('#page-essentials').scrollIntoView({ behavior: 'smooth' }); }));
  $('#overviewToggle').addEventListener('click', () => selectDay(0));
  $('#searchInput').addEventListener('input', event => { state.query = event.target.value.trim().toLocaleLowerCase(); $('#clearSearch').hidden = !state.query; renderTimeline(); renderMap(); });
  $('#clearSearch').addEventListener('click', clearFilters);
  $('#copyDay').addEventListener('click', copyDay);
  $('#showRoutes').addEventListener('change', event => { state.routes = event.target.checked; renderMap(); });
  $('#fitMap').setAttribute('aria-controls', 'map');
  $('#fitMap').setAttribute('aria-expanded', 'false');
  $('#fitMap').setAttribute('aria-label', 'ขยายแผนที่');
  $('#fitMap').addEventListener('click', () => setMapExpanded(!$('.map-section').classList.contains('expanded')));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('.map-section').classList.contains('expanded')) { setMapExpanded(false); $('#fitMap').focus(); } });
  function applyTheme(dark) {
    root.classList.toggle('dark', dark);
    $('#themeToggle').setAttribute('aria-pressed', String(dark)); $('#themeToggle').textContent = dark ? 'ธีมสว่าง' : 'ธีมมืด';
    const meta = $('meta[name="theme-color"]'); if (meta) meta.content = dark ? '#232821' : '#f7f4ed';
  }
  // ธีมเริ่มต้นถูกตั้งโดยสคริปต์ใน <head> (ค่าที่บันทึกไว้ หรือค่าของระบบ) ก่อนหน้าเว็บวาดครั้งแรก
  applyTheme(root.classList.contains('dark'));
  $('#themeToggle').addEventListener('click', () => { const dark = !root.classList.contains('dark'); applyTheme(dark); store.set(THEME_KEY, dark ? 'dark' : 'light'); });
  function applyCurrencyLabel() {
    $('#currencyToggle').innerHTML = state.currency === 'JPY' ? 'JPY <span>↔</span> THB' : 'THB <span>↔</span> JPY';
    $('#currencyToggle').setAttribute('aria-label', `สกุลเงินปัจจุบัน ${state.currency}; กดเพื่อสลับ`);
  }
  $('#currencyToggle').addEventListener('click', () => { state.currency = state.currency === 'JPY' ? 'THB' : 'JPY'; store.set(CURRENCY_KEY, state.currency); applyCurrencyLabel(); renderTimeline(); renderRail(); renderBudget(); renderMap(); });
  $('#mapStyle').addEventListener('change', event => { state.mapStyle = event.target.value === 'esri' ? 'esri' : 'google'; store.set(MAP_KEY, state.mapStyle); setTileLayer(); });
  window.addEventListener('beforeprint', () => $$('details').forEach(details => { details.open = true; }));

  // คืนค่าสถานะที่จำไว้: สกุลเงินและแบบแผนที่จาก localStorage, หน้าและวันจาก URL (ถ้าไม่ระบุวัน ใช้วันนี้ระหว่างทริป)
  if (store.get(CURRENCY_KEY) === 'THB') state.currency = 'THB';
  if (store.get(MAP_KEY) === 'esri') state.mapStyle = 'esri';
  $('#mapStyle').value = state.mapStyle; applyCurrencyLabel();
  const params = new URLSearchParams(location.search);
  const dayParam = params.get('day');
  state.day = dayParam === 'all' ? 0 : plan.days.some(day => String(day.dayNum) === dayParam) ? Number(dayParam) : defaultDay;
  if ($('#footerNote')) $('#footerNote').textContent = plan.footerNote || '';
  renderDayTabs(); renderFilters(); renderTimeline(); renderRail(); renderEssentials(); renderRestaurants(); renderBudget(); setupRateInput(); initializeMap();
  setPage(PAGES.includes(params.get('page')) ? params.get('page') : 'daily');
  if ('serviceWorker' in navigator && window.isSecureContext && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => { /* offline cache is optional */ });
});
