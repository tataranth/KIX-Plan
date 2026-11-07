document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const plan = (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA) || (typeof PLAN_A_DATA !== 'undefined' && PLAN_A_DATA);
  if (!plan) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const state = { day: 1, category: 'all', query: '', currency: 'JPY', routes: true, map: null, markerGroup: null, routeGroup: null, markers: new Map(), toastTimer: null };
  const dayNotes = [
    { short: 'ถึงแล้วพัก', route: 'KIX → กินใกล้สถานี → เช็คอิน / นอนพัก → Gion ตามแรง', critical: 'เช็คอิน 15:00 แล้วพักถึงราว 17:30', risk: 'เที่ยวเย็นเป็นตัวเลือกทั้งหมด ถ้ายังเพลียให้กินใกล้โรงแรมแล้วพักต่อ' },
    { short: 'Uji & Nara', route: 'Kyoto → Uji → Nara → Kyoto', critical: 'ออกจาก Uji ไม่เกิน 12:30–13:00', risk: 'รักษารอบชาที่จองไว้ แล้วเข้าวิหาร Todaiji ก่อนเดินเล่นกับกวาง' },
    { short: 'Arashiyama', route: 'Kyoto → Arashiyama → Randen → Kinkakuji', critical: 'เลือกร้านหลักหนึ่งร้าน', risk: 'เลือก Yoshimura หรือ eX café; ถ้ารอเกิน 30 นาทีให้เปลี่ยนร้าน' },
    { short: 'East Kyoto', route: 'Kiyomizu → Asahido / ถนนเก่า → Shimogamo → Nanzenji → พัก → Eikando', critical: 'Kiyomizu / Shimogamo / Eikando เป็นจุดหลัก', risk: 'เมื่อช้าลดเดินป่าและ Nanzenji ก่อน รักษามื้อกลางวันและเวลานั่งพัก' },
    { short: 'Osaka day', route: 'Kyoto → Osaka Castle → Kaiyukan → Dotonbori → Kyoto', critical: 'Kaiyukan เป้าหมายรอบ 13:00 · กลับ Kyoto 60–90 นาที', risk: 'ซื้อตั๋วระบุวัน/เวลาตามที่ว่าง; เมื่อช้าลดเดินสวนปราสาทก่อน' },
    { short: 'กลับไทย', route: 'โรงแรม → Fushimi ช่วงล่าง → Nishiki แบบสั้น → รับกระเป๋า → KIX T2', critical: 'ออกจาก Nishiki ไม่เกิน 11:15 · ถึง T2 ไม่เกิน 16:00', risk: 'ออกจาก Fushimi หลัง 09:30 ให้งดตลาด; กลับโรงแรมราว 12:00 รับกระเป๋า/เข้าสถานี 12:00–13:00' }
  ];
  const allDays = () => plan.days.slice().sort((a, b) => a.dayNum - b.dayNum);
  const currentDay = () => allDays().find(day => day.dayNum === state.day);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const formatNumber = value => Number(value).toLocaleString('en-US');
  const fmt = jpy => state.currency === 'JPY' ? `${formatNumber(jpy)} JPY` : `≈ ${formatNumber(Math.round(jpy * plan.exchangeRate))} THB`;
  const costText = cost => state.currency === 'JPY' ? String(cost || 'ตามจริง') : String(cost || 'ตามจริง').replace(/([\d,]+)(?:\s*[–-]\s*([\d,]+))?\s*JPY/gi, (_, low, high) => `≈ ${formatNumber(Math.round(Number(low.replace(/,/g, '')) * plan.exchangeRate))}${high ? `–${formatNumber(Math.round(Number(high.replace(/,/g, '')) * plan.exchangeRate))}` : ''} THB`);
  const navUrl = checkpoint => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(checkpoint.navigationQuery || `${checkpoint.lat},${checkpoint.lng}`)}`;
  const mapSearchUrl = checkpoint => checkpoint.link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(checkpoint.name)}`;
  const checkpointMatches = cp => (state.category === 'all' || cp.category === state.category) && (!state.query || `${cp.name} ${cp.jpName || ''} ${cp.desc} ${cp.transportInfo} ${cp.cost}`.toLocaleLowerCase().includes(state.query));
  const safeLink = (url, label) => `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`;

  function showToast(message) {
    const toast = $('#toast'); toast.textContent = message; toast.classList.add('show');
    clearTimeout(state.toastTimer); state.toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }
  function setPage(name) {
    $$('.page').forEach(page => { page.hidden = page.id !== `page-${name}`; });
    $$('.main-nav button').forEach(button => { if (button.dataset.page === name) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current'); });
    if (name === 'daily' && state.map) setTimeout(() => state.map.invalidateSize(), 80);
  }
  function renderDayTabs() {
    const host = $('#dayTabs');
    if (!host.children.length) {
      allDays().forEach(day => {
        const note = dayNotes[day.dayNum - 1]; const button = document.createElement('button');
        button.type = 'button'; button.className = 'day-tab'; button.dataset.day = String(day.dayNum);
        const weekday = day.date.match(/\(([^)]+)\)/)?.[1];
        button.innerHTML = `<small>DAY ${day.dayNum} · ${escapeHTML(day.date.split(' ')[0])} ธ.ค.${weekday ? ` · ${escapeHTML(weekday)}` : ''}</small><strong>${escapeHTML(note.short)}</strong>`;
        button.addEventListener('click', () => selectDay(day.dayNum)); host.append(button);
      });
    }
    $$('.day-tab', host).forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.day) === state.day)));
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
  function renderTimeline() {
    const host = $('#timeline'); host.replaceChildren();
    if (state.day === 0) { renderOverview(host); return; }
    const day = currentDay(); if (!day) return;
    const note = dayNotes[day.dayNum - 1]; const intro = document.createElement('header'); intro.className = 'day-intro';
    intro.innerHTML = `<div class="date">DAY ${day.dayNum} / ${escapeHTML(day.date)} · งบรถ ${fmt(day.totalFareJPY)} / คน</div><h2>${escapeHTML(day.title)}</h2><p class="route-summary">${escapeHTML(note.route)}</p>`; host.append(intro);
    const notice = document.createElement('aside'); notice.className = 'critical-note'; notice.innerHTML = `<strong>${escapeHTML(note.critical)}</strong>${escapeHTML(note.risk)}`; host.append(notice);
    const shown = day.checkpoints.filter(checkpointMatches).sort((a, b) => a.order - b.order);
    shown.forEach(cp => host.append(makeCheckpoint(day, cp)));
    if (!shown.length) host.insertAdjacentHTML('beforeend', '<div class="empty-state"><p>ไม่พบจุดที่ตรงกับการค้นหาหรือตัวกรอง</p><button type="button" class="text-button" id="resetFilters">ล้างการค้นหาและตัวกรอง</button></div>');
    const reset = $('#resetFilters', host); if (reset) reset.addEventListener('click', clearFilters);
    host.append(makeSourceNotes(day));
  }
  function renderOverview(host) {
    const intro = document.createElement('header'); intro.className = 'day-intro'; intro.innerHTML = `<div class="date">KYOTO · UJI · NARA · OSAKA · 1–6 ธันวาคม 2026</div><h2>ภาพรวมทั้งทริป</h2><p class="route-summary">เดินทางช้าได้ ตัดกิจกรรมเสริมได้ และรักษาเวลาเดินทางสำคัญของแต่ละวัน</p>`; host.append(intro);
    let visibleCount = 0;
    allDays().forEach(day => {
      const checkpoints = day.checkpoints.filter(checkpointMatches).sort((a, b) => a.order - b.order); if (!checkpoints.length) return;
      visibleCount += checkpoints.length;
      const wrap = document.createElement('section'); wrap.className = 'overview-day'; wrap.innerHTML = `<header class="day-intro"><div class="date">DAY ${day.dayNum} · ${escapeHTML(day.date)} · งบรถ ${fmt(day.totalFareJPY)} / คน</div><h2>${escapeHTML(day.title)}</h2></header>`;
      const note = document.createElement('aside'); note.className = 'critical-note'; note.innerHTML = `<strong>${escapeHTML(dayNotes[day.dayNum - 1].critical)}</strong>${escapeHTML(dayNotes[day.dayNum - 1].risk)}`; wrap.append(note);
      checkpoints.forEach(cp => wrap.append(makeCheckpoint(day, cp)));
      wrap.append(makeSourceNotes(day)); host.append(wrap);
    });
    if (!visibleCount) host.insertAdjacentHTML('beforeend', '<div class="empty-state"><p>ไม่พบจุดที่ตรงกับการค้นหาหรือตัวกรอง</p><button type="button" class="text-button" id="resetFilters">ล้างการค้นหาและตัวกรอง</button></div>');
    const reset = $('#resetFilters', host); if (reset) reset.addEventListener('click', clearFilters);
  }
  function makeCheckpoint(day, cp) {
    const card = document.createElement('article'); card.className = 'timeline-card'; card.id = `card-${cp.id}`;
    const cat = plan.categories[cp.category];
    const fullDescription = cp.desc || 'ดูรายละเอียดจากแหล่งข้อมูลของสถานที่';
    const descriptionParts = fullDescription.split(/(?<=[.!?])\s+|[;；]\s*/).map(part => part.trim()).filter(Boolean);
    const expandable = fullDescription.length > 145;
    const summary = escapeHTML(expandable ? (descriptionParts[0] || fullDescription).slice(0, 155) : fullDescription);
    const cautionParts = expandable ? [...new Set(descriptionParts.filter(part => /ไม่|หาก|ต้อง|อย่า|เผื่อ|เป้าหมาย|ตรวจ|คิว|จอง|รับประกัน|สำรอง|ก่อน|ช้า|ตัวเลือก|เสริม|ระวัง/i.test(part) && part !== descriptionParts[0]))] : [];
    const warning = cautionParts.length ? `<p class="checkpoint-warning compact-note"><strong>ข้อควรจำ</strong>${escapeHTML(cautionParts.join(' · '))}</p>` : '';
    const options = (cp.optionalActivities || []).map(item => `<span class="optional-tag">เสริม: ${escapeHTML(item)}</span>`).join(' ');
    const choice = cp.choiceNote ? `<p class="choice-note">${escapeHTML(cp.choiceNote)}</p>` : '';
    card.innerHTML = `<div class="time-col">${escapeHTML(cp.time)}<br><span>${escapeHTML(cat?.name || '')}</span></div><div class="stop-card"><h3>${escapeHTML(cp.name)}</h3>${cp.jpName ? `<p class="jp">${escapeHTML(cp.jpName)}</p>` : ''}<p class="desc">${summary}${expandable && summary.length < fullDescription.length ? '…' : ''}</p>${options ? `<div class="activity-options">${options}</div>` : ''}${choice}${warning}${expandable ? `<details><summary>รายละเอียดทั้งหมด</summary><p class="long-detail">${escapeHTML(fullDescription)}</p></details>` : ''}<div class="stop-meta"><span>การเดินทาง: ${escapeHTML(cp.transportInfo || 'ตรวจเส้นทางจริง')}</span><span>ค่าใช้จ่าย: ${escapeHTML(costText(cp.cost))}</span></div><div class="stop-actions"><button type="button" data-map-id="${escapeHTML(cp.id)}">แสดงบนแผนที่</button>${safeLink(navUrl(cp), 'นำทาง Google Maps')}${safeLink(mapSearchUrl(cp), cp.link && /google\.com\/maps/i.test(cp.link) ? 'ค้นหาบนแผนที่' : 'แหล่งข้อมูล')}</div></div>`;
    $('[data-map-id]', card).addEventListener('click', () => focusCheckpoint(cp)); return card;
  }
  function inlineMarkdown(text) {
    const links = [];
    let html = escapeHTML(text).replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (_, label, url) => {
      const key = `%%LINK${links.length}%%`;
      links.push(`<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`);
      return key;
    });
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
    return html.replace(/%%LINK(\d+)%%/g, (_, index) => links[Number(index)]);
  }
  function markdownToHtml(markdown) {
    const output = []; let paragraph = []; let inList = false;
    const closeParagraph = () => { if (paragraph.length) output.push(`<p>${paragraph.map(inlineMarkdown).join(' ')}</p>`); paragraph = []; };
    const closeList = () => { if (inList) output.push('</ul>'); inList = false; };
    markdown.split(/\r?\n/).forEach(line => {
      const heading = line.match(/^#{3,6}\s+(.+)$/);
      const item = line.match(/^\s*[-*]\s+(.+)$/);
      if (heading) { closeParagraph(); closeList(); output.push(`<h4>${inlineMarkdown(heading[1])}</h4>`); }
      else if (item) { closeParagraph(); if (!inList) { output.push('<ul>'); inList = true; } output.push(`<li>${inlineMarkdown(item[1])}</li>`); }
      else if (/^\s*[-*_]{3,}\s*$/.test(line) || !line.trim()) { closeParagraph(); closeList(); }
      else { closeList(); paragraph.push(line.trim()); }
    });
    closeParagraph(); closeList();
    return output.join('');
  }
  function makeSourceNotes(day) {
    const details = document.createElement('details'); details.className = 'source-notes';
    details.innerHTML = `<summary>อ่านแผนต้นฉบับของวันนี้ · Day ${day.dayNum}</summary><div class="source-note-content">${markdownToHtml(plan.dailySourceNotes?.[day.dayNum - 1] || '')}</div>`;
    return details;
  }
  function markdownToPlainText(markdown) {
    return markdown.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '$1 ($2)').replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1');
  }
  function clearFilters() { state.category = 'all'; state.query = ''; $('#searchInput').value = ''; $('#clearSearch').hidden = true; renderFilters(); renderTimeline(); renderMap(); }
  function selectDay(day) { state.day = day; renderDayTabs(); renderTimeline(); renderRail(); renderMap(); if (state.map) fitMap(); }
  function renderRail() {
    if (state.day === 0) { $('#routeList').innerHTML = '<li><span>06</span><span>ภาพรวม · Kyoto / Uji / Nara / Osaka</span></li>'; $('#dayFare').textContent = state.currency === 'JPY' ? formatNumber(plan.totalICCardCostJPY) : formatNumber(Math.round(plan.totalICCardCostJPY * plan.exchangeRate)); $('#fareUnit').textContent = state.currency; $('#contingencySummary').textContent = 'เลือกวันด้านบนเพื่ออ่านเส้นทาง เวลาเตือน และแผนสำรองรายวัน'; return; }
    const day = currentDay(); if (!day) return;
    $('#routeList').innerHTML = day.checkpoints.map((cp, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><span>${escapeHTML(cp.name)}</span></li>`).join('');
    $('#dayFare').textContent = state.currency === 'JPY' ? formatNumber(day.totalFareJPY) : formatNumber(Math.round(day.totalFareJPY * plan.exchangeRate)); $('#fareUnit').textContent = state.currency;
    $('#contingencySummary').textContent = plan.contingencies?.find(item => item.title.toLowerCase().includes(`day ${day.dayNum}`))?.detail || dayNotes[day.dayNum - 1].risk;
  }
  function initializeMap() {
    const mapHost = $('#map');
    if (!mapHost) return;
    if (typeof L === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'; script.async = true;
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
      const tiles = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en', { maxZoom: 20, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'], attribution: '&copy; <a href="https://maps.google.com" target="_blank" rel="noopener">Google Maps</a>' });
      tiles.on('tileerror', () => { $('#mapFallback').hidden = false; }); tiles.addTo(state.map);
      state.markerGroup = L.layerGroup().addTo(state.map); state.routeGroup = L.layerGroup().addTo(state.map);
      state.map.on('load', () => { $('#mapFallback').hidden = true; });
      setTimeout(() => state.map.invalidateSize(), 100); renderMap();
    } catch (_) { mapHost.hidden = true; $('#mapFallback').hidden = false; }
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
        const marker = L.marker([cp.lat, cp.lng], { icon, title: `Day ${day.dayNum} · จุด ${number} · ${cp.name}` }).bindPopup(`<strong>Day ${day.dayNum} · จุด ${number}: ${escapeHTML(cp.name)}</strong><br>${escapeHTML(cp.time)}<br>${safeLink(navUrl(cp), 'นำทาง')} · ${safeLink(mapSearchUrl(cp), 'ข้อมูล')}`);
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
          ${safeLink(flight.sourceLink, 'ตารางฤดูหนาว Peach · อ้างอิง 16 ก.ย. 2026')}
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
          ${safeLink(hotel.sourceLink, 'เว็บไซต์โรงแรม')} · ${safeLink(hotel.mapLink, 'แผนที่')}
        </section>
        <section class="info-card">
          <h3>เวลาตามแผน</h3>
          <p>ปรับแผน 6 พ.ย. 2026: Osaka Castle / Kaiyukan / Dotonbori พร้อมงบใหม่; Shimogamo เป็น Day 4 โดยเก็บวัดทอง Day 3; ข้อมูลสถานที่เดิมตรวจ 3 พ.ย. ตารางบินอ้างอิงฉบับ 21 ต.ค. 2026 ยังต้องยืนยันใบจอง ขบวนรถ ที่ว่างกิจกรรม และวันเปิดพิเศษของร้านสำรอง เวลารายวันเป็นกรอบเผื่อเดินและรอ ไม่ใช่รอบรถที่จองแล้ว ให้ตรวจใบจองและประกาศก่อนเดินทาง</p>
        </section>
      </div>`;
    const tips = (plan.travelTips || []).map(tip => `<section class="info-card"><h3>${escapeHTML(tip.title)}</h3><p>${escapeHTML(tip.desc)}</p>${tip.link ? safeLink(tip.link, tip.linkLabel || 'แหล่งข้อมูล') : ''}${tip.secondaryLink ? ` · ${safeLink(tip.secondaryLink, tip.secondaryLinkLabel || 'ข้อมูลเพิ่มเติม')}` : ''}</section>`).join('');
    const checklist = ['เทียบ MM092/MM091 เวลา กระเป๋า และเงื่อนไขเช็คอินกับใบจองล่าสุด', 'ยืนยันฝากกระเป๋าและภาษีที่พักจากราคาต่อคนต่อคืนกับโรงแรม', 'เลือก Usucha หรือคอร์สลงมือชง และจอง Taiho-an ตามปฏิทินจริง; หากเลือก CHAZUNA ตรวจตารางเดือน ธ.ค. ที่ประกาศ 28 ต.ค. และจองรอบ', 'Haruka ซื้อใหม่ 2,700 เยน/เที่ยว หากมีตั๋วเดิมตรวจเงื่อนไขก่อน เลือกช่องทางให้ชัด; จองขากลับเพื่อรักษาเป้าหมายถึง T2 16:00', 'Murin-an เลือกแทนคาเฟ่ จองรอบ 16:00 ตามที่ว่างและตรวจเงื่อนไขยกเลิก; Menami จองทางโทรศัพท์โดยเผื่อออกจาก Eikando', 'Kaiyukan 5 ธ.ค. รอบเป้าหมาย 13:00 ตามที่ว่าง ตรวจราคาและเวลาเปิดก่อนซื้อ; Shimogamo เป็นแผนหลัก Day 4 แทนวัดเงินแล้ว', '24–27 พ.ย. ตรวจวันหยุดร้าน รอบรถ/ค่าโดยสาร สภาพใบไม้และประกาศไฟประดับ', 'เตรียม VJW และวิธีรับเงินคืนตามร้าน ตรวจแผนผัง Tax-free ที่ KIX T2 International; ยืนยันสินค้าก่อนโหลดกระเป๋าที่บรรจุสินค้า', 'ก่อนแต่ละวัน ดูฝนและสถานะรถ กำหนดจุดหลักหนึ่งถึงสองแห่งและตัดกิจกรรมเสริมเมื่อช้า'];
    const alternatives = (plan.alternatives || []).map(item => `<li><strong>${escapeHTML(item.name)}</strong> — ${escapeHTML(item.replaces)}. ${escapeHTML(item.note)} ${item.link ? safeLink(item.link, 'ข้อมูลสถานที่') : ''}</li>`).join('');
    const contingencies = (plan.contingencies || []).map(item => `<section class="info-card"><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.detail)}</p></section>`).join('');
    host.innerHTML = `${flights}
      <section class="info-card">
        <h3>ก่อนเดินทาง · เช็กลิสต์</h3>
        <ul class="checklist">${checklist.map(item => `<li><label><input type="checkbox">${escapeHTML(item)}</label></li>`).join('')}</ul>
      </section>
      <div class="content-grid">${tips}</div>
      <section class="info-card">
        <h3>สถานที่ทดแทน · เลือกแทน ไม่เพิ่มทุกแห่ง</h3>
        <ul>${alternatives}</ul>
      </section>
      <h2>แผนสำรองรายวัน</h2>
      <div class="content-grid">${contingencies}</div>`;
  }
  function renderRestaurants() {
    $('#restaurantNote').textContent = plan.nearbyRestaurantsNote || 'เวลาเดินเป็นค่าประมาณ ร้านบางแห่งอยู่คนละฝั่งสถานีหรือภายในห้าง โปรดเผื่อเวลาเดินและตรวจวันเปิด/คิว';
    const host = $('#restaurantContent'); const groups = new Map();
    (plan.nearbyRestaurants || []).forEach(item => { if (!groups.has(item.category)) groups.set(item.category, []); groups.get(item.category).push(item); });
    host.innerHTML = [...groups.entries()].map(([category, items]) => `<section class="info-card"><h3>${escapeHTML(category)}</h3>${items.map(item => `<p><strong>${escapeHTML(item.name)}</strong><br>${escapeHTML(item.walkTime)} · ${escapeHTML(item.desc)}<br>${safeLink(item.link, 'เปิดแผนที่')}</p>`).join('<hr>')}</section>`).join('');
  }
  function renderBudget() {
    const data = plan.budget; const host = $('#budgetContent'); if (!data) return;
    const rows = [['รถสาธารณะ รวม Haruka', data.transport], ['อาหารและคาเฟ่', data.meals], ['ค่าเข้าชม + Taiho-an + Kaiyukan', data.admissions], ['ภาษีที่พัก · สมมติ 400 × 5 คืน', data.accommodationTax], ['รวมก่อนเงินสำรอง', data.beforeReserve], ['เงินสำรอง', data.reserve], ['รวมพร้อมเงินสำรอง', data.total]];
    const budgetRows = rows.map(([label, item], index) => {
      const maximum = item.maxJPY !== item.minJPY
        ? `–${formatNumber(state.currency === 'JPY' ? item.maxJPY : Math.round(item.maxJPY * data.exchangeRate))} ${state.currency}`
        : '';
      return `<div class="budget-row ${index === rows.length - 1 ? 'total' : ''}">
        <span>${escapeHTML(label)}</span>
        <strong>${fmt(item.minJPY)}${maximum}</strong>
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
          <p>ฐานค่าเข้า ${fmt(data.admissionBaseJPY)}: Kiyomizu 500 + Byodoin 700 + Todaiji 800 + Tenryuji Garden 500 + Kinkakuji 500 + Shimogamo เข้าสักการะฟรี + Eikando Night 1,000 + Kaiyukan งบเผื่อ ${fmt(data.kaiyukanEstimateJPY)}; รวม Taiho-an Usucha ${fmt(data.usuchaJPY)} เป็น ${fmt(data.admissionBaseJPY + data.usuchaJPY)}.</p>
          <ul>
            <li>Phoenix Hall เพิ่ม ${fmt(data.phoenixHallExtraJPY)}</li>
            <li>เปลี่ยนเป็นคอร์สลงมือชงเพิ่ม ${fmt(data.handsOnTeaExtraJPY)}</li>
            <li>งบสูงสุด ${fmt(data.admissions.maxJPY)} รองรับสองตัวเลือกข้างต้นตามสมมติฐาน Kaiyukan 3,500 JPY ซึ่งต้องปรับตามราคาจริง; ยังไม่รวม Murin-an, Nishinomaru หรือ Tenshukaku; หักค่าเข้า Ginkakuji ออกแล้วและเก็บ Kinkakuji ตามแผน</li>
          </ul>
          <p>เงินสำรองรองรับค่าใช้จ่ายเพิ่มบางส่วนเท่านั้น. ไม่รวมเที่ยวบิน ค่าห้อง และช้อปปิ้ง.</p>
        </section>
      </div>`;
  }
  async function copyDay() {
    const lines = ['Kyoto Trip Handbook'];
    const days = state.day === 0 ? allDays() : [currentDay()];
    days.filter(Boolean).forEach(day => {
      lines.push('', `DAY ${day.dayNum} · ${day.date}`, day.title, `งบรถโดยประมาณ ${formatNumber(day.totalFareJPY)} JPY / คน`);
      day.checkpoints.forEach(cp => lines.push(`${cp.time} · ${cp.name}`, cp.desc, `การเดินทาง: ${cp.transportInfo}`, `ค่าใช้จ่าย: ${cp.cost}`));
      lines.push('', 'รายละเอียดจากแผนต้นฉบับ:', markdownToPlainText(plan.dailySourceNotes?.[day.dayNum - 1] || ''));
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
  $('#themeToggle').addEventListener('click', () => { const active = document.body.classList.toggle('dark'); $('#themeToggle').setAttribute('aria-pressed', String(active)); $('#themeToggle').textContent = active ? 'ธีมสว่าง' : 'ธีมมืด'; try { localStorage.setItem('kyoto-handbook-theme', active ? 'dark' : 'light'); } catch (_) { /* storage can be unavailable for file URLs */ } });
  try { if (localStorage.getItem('kyoto-handbook-theme') === 'dark') { document.body.classList.add('dark'); $('#themeToggle').setAttribute('aria-pressed', 'true'); $('#themeToggle').textContent = 'ธีมสว่าง'; } } catch (_) { /* storage can be unavailable for file URLs */ }
  $('#currencyToggle').addEventListener('click', () => { state.currency = state.currency === 'JPY' ? 'THB' : 'JPY'; $('#currencyToggle').innerHTML = state.currency === 'JPY' ? 'JPY <span>↔</span> THB' : 'THB <span>↔</span> JPY'; $('#currencyToggle').setAttribute('aria-label', `สกุลเงินปัจจุบัน ${state.currency}; กดเพื่อสลับ`); renderTimeline(); renderRail(); renderBudget(); renderMap(); });
  renderDayTabs(); renderFilters(); renderTimeline(); renderRail(); renderEssentials(); renderRestaurants(); renderBudget(); initializeMap();
});
