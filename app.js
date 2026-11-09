document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const plan = (typeof TRAVEL_DATA !== 'undefined' && TRAVEL_DATA) || (typeof PLAN_A_DATA !== 'undefined' && PLAN_A_DATA);
  if (!plan) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const state = { day: 1, category: 'all', query: '', currency: 'JPY', routes: true, view: 'plan', map: null, markerGroup: null, routeGroup: null, markers: new Map(), toastTimer: null, liveDay: 0, now: null };
  const mobileQuery = matchMedia('(max-width: 850px)');
  const darkQuery = matchMedia('(prefers-color-scheme: dark)');

  // keys = ป้ายเวลา/จุดสำคัญที่ติดกับการ์ดในเส้นเวลา (อ้างอิงตาม order ของ checkpoint)
  const dayNotes = [
    { short: 'ถึงแล้วพัก', route: 'KIX → กินใกล้สถานี → เช็คอิน / นอนพัก → Gion ตามแรง', critical: 'เช็คอิน 15:00 แล้วพักถึงราว 17:30', risk: 'เที่ยวเย็นเป็นตัวเลือกทั้งหมด ถ้ายังเพลียให้กินใกล้โรงแรมแล้วพักต่อ', keys: { 4: 'เช็คอิน 15:00' } },
    { short: 'Uji & Nara', route: 'Kyoto → Uji → Nara → Kyoto', critical: 'ออกจาก Uji ไม่เกิน 12:30–13:00', risk: 'รักษารอบชาที่จองไว้ แล้วเข้าวิหาร Todaiji ก่อนเดินเล่นกับกวาง', keys: { 3: 'รอบชาที่จองไว้', 4: 'ออกจาก Uji ≤ 13:00', 5: 'เข้าวิหารก่อน' } },
    { short: 'Arashiyama', route: 'Kyoto → Arashiyama → Randen → Kinkakuji', critical: 'เลือกร้านหลักหนึ่งร้าน', risk: 'เลือก Yoshimura หรือ eX café; ถ้ารอเกิน 30 นาทีให้เปลี่ยนร้าน', keys: { 2: 'รอเกิน 30 นาที = เปลี่ยนร้าน' } },
    { short: 'East Kyoto', route: 'Kiyomizu → Asahido / ถนนเก่า → Shimogamo → Nanzenji → พัก → Eikando', critical: 'Kiyomizu / Shimogamo / Eikando เป็นจุดหลัก', risk: 'เมื่อช้าลดเดินป่าและ Nanzenji ก่อน รักษามื้อกลางวันและเวลานั่งพัก', keys: { 1: 'จุดหลัก', 3: 'จุดหลัก', 8: 'จุดหลัก' } },
    { short: 'Osaka day', route: 'Kyoto → Osaka Castle → Kaiyukan → Dotonbori → Kyoto', critical: 'Kaiyukan เป้าหมายรอบ 13:00 · กลับ Kyoto 60–90 นาที', risk: 'ซื้อตั๋วระบุวัน/เวลาตามที่ว่าง; เมื่อช้าลดเดินสวนปราสาทก่อน', keys: { 2: 'ช้า = ลดเดินสวนก่อน', 5: 'รอบเป้าหมาย 13:00' } },
    { short: 'กลับไทย', route: 'โรงแรม → Fushimi ช่วงล่าง → Nishiki แบบสั้น → รับกระเป๋า → KIX T2', critical: 'ออกจาก Nishiki ไม่เกิน 11:15 · ถึง T2 ไม่เกิน 16:00', risk: 'ออกจาก Fushimi หลัง 09:30 ให้งดตลาด; กลับโรงแรมราว 12:00 รับกระเป๋า/เข้าสถานี 12:00–13:00', keys: { 2: 'ออกหลัง 09:30 = งดตลาด', 3: 'ออกจาก Nishiki ≤ 11:15', 5: 'ถึง T2 ≤ 16:00', 6: 'บิน 19:15' } }
  ];
  const CAT = {
    spot: { label: 'เที่ยว' },
    nature: { label: 'ธรรมชาติ · ใบไม้' },
    food: { label: 'กิน · คาเฟ่' },
    shopping: { label: 'ช้อป · ตลาด' },
    transport: { label: 'เดินทาง · พัก' }
  };
  const icon = name => `<svg class="ico" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const catLabel = key => CAT[key]?.label || plan.categories[key]?.name || '';

  const allDays = () => plan.days.slice().sort((a, b) => a.dayNum - b.dayNum);
  const currentDay = () => allDays().find(day => day.dayNum === state.day);
  const stops = day => day.checkpoints.slice().sort((a, b) => a.order - b.order);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const formatNumber = value => Number(value).toLocaleString('en-US');
  const isMobile = () => mobileQuery.matches;
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) { /* storage unavailable */ } },
    remove(key) { try { localStorage.removeItem(key); } catch (_) { /* storage unavailable */ } }
  };

  // ---------- เรทแลกเปลี่ยน ----------
  const RATE_KEY = 'kyoto-handbook-rate';
  const defaultRate = Number(plan.exchangeRate) || 0.212;
  const validRate = value => Number.isFinite(value) && value >= 0.1 && value <= 0.5;
  const applyRate = value => { plan.exchangeRate = value; if (plan.budget) plan.budget.exchangeRate = value; };
  const saveRate = value => { if (value === defaultRate) storage.remove(RATE_KEY); else storage.set(RATE_KEY, String(value)); };
  { const raw = storage.get(RATE_KEY); const saved = Number(raw); if (raw !== null && validRate(saved)) applyRate(saved); }
  const fmt = jpy => state.currency === 'JPY' ? `${formatNumber(jpy)} JPY` : `≈ ${formatNumber(Math.round(jpy * plan.exchangeRate))} THB`;
  const costText = cost => state.currency === 'JPY' ? String(cost || 'ตามจริง') : String(cost || 'ตามจริง').replace(/([\d,]+)(?:\s*[–-]\s*([\d,]+))?\s*JPY/gi, (_, low, high) => `≈ ${formatNumber(Math.round(Number(low.replace(/,/g, '')) * plan.exchangeRate))}${high ? `–${formatNumber(Math.round(Number(high.replace(/,/g, '')) * plan.exchangeRate))}` : ''} THB`);

  // ---------- ลิงก์ ----------
  const navUrl = checkpoint => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(checkpoint.navigationQuery || `${checkpoint.lat},${checkpoint.lng}`)}`;
  const isMapLink = url => String(url || '').startsWith('https://www.google.com/maps/');
  const mapSearchUrl = checkpoint => {
    if (isMapLink(checkpoint.link)) return checkpoint.link;
    const query = checkpoint.navigationQuery || (Number.isFinite(checkpoint.lat) && Number.isFinite(checkpoint.lng) ? `${checkpoint.lat},${checkpoint.lng}` : checkpoint.name);
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };
  const checkpointMatches = cp => (state.category === 'all' || cp.category === state.category) && (!state.query || `${cp.name} ${cp.jpName || ''} ${cp.desc} ${cp.transportInfo} ${cp.cost}`.toLocaleLowerCase().includes(state.query));
  const safeLink = (url, label, cls = '') => `<a${cls ? ` class="${cls}"` : ''} href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`;

  // ---------- เวลาญี่ปุ่น & โหมด "ตอนนี้ / ถัดไป" ----------
  // ทดสอบได้ด้วย ?now=2026-12-02T10:30 (เวลาญี่ปุ่น)
  const parseTimes = text => [...String(text).matchAll(/(\d{1,2}):(\d{2})/g)].map(m => Number(m[1]) * 60 + Number(m[2]));
  const timeSpan = cp => { const t = parseTimes(cp.time); if (!t.length) return null; const end = t[t.length - 1]; return { start: t[0], end: end > t[0] ? end : t[0] + 60 }; };
  const hhmm = min => `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
  function japanNow() {
    const override = new URLSearchParams(location.search).get('now');
    const m = override && override.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T ](\d{1,2}):(\d{2}))?/);
    if (m) return { y: +m[1], mo: +m[2], d: +m[3], min: m[4] ? +m[4] * 60 + +m[5] : 9 * 60, simulated: true };
    const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tokyo', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date()).map(p => [p.type, p.value]));
    return { y: +parts.year, mo: +parts.month, d: +parts.day, min: (+parts.hour % 24) * 60 + +parts.minute, simulated: false };
  }
  const dayOfMonth = day => parseInt(day.date, 10);
  const tripStart = () => Date.UTC(2026, 11, dayOfMonth(allDays()[0]));
  const tripEnd = () => Date.UTC(2026, 11, dayOfMonth(allDays()[allDays().length - 1]));
  const todayUTC = now => Date.UTC(now.y, now.mo - 1, now.d);
  const liveDayFor = now => (now.y === 2026 && now.mo === 12 ? allDays().find(day => dayOfMonth(day) === now.d)?.dayNum : 0) || 0;
  function liveStatus(day, min) {
    const list = stops(day).map((cp, index) => ({ cp, index, ...(timeSpan(cp) || {}) })).filter(item => Number.isFinite(item.start));
    let current = null;
    list.forEach(item => { if (item.start <= min && min < item.end) current = item; });
    const next = list.find(item => item.start > min) || null;
    return { list, current, next, beforeStart: !!list.length && min < list[0].start, done: !current && !next };
  }

  function showToast(message) {
    const toast = $('#toast'); toast.textContent = message; toast.classList.add('show');
    clearTimeout(state.toastTimer); state.toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }
  function setPage(name) {
    $$('.page').forEach(page => { page.hidden = page.id !== `page-${name}`; });
    $$('.main-nav button').forEach(button => { if (button.dataset.page === name) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current'); });
    if (name === 'daily' && state.map) setTimeout(() => state.map.invalidateSize(), 80);
    if (isMobile()) window.scrollTo({ top: 0 });
  }

  // ---------- Hero ----------
  function renderHero() {
    const now = state.now; const hero = $('.hero'); const eyebrow = $('#heroEyebrow');
    const untilStart = Math.round((tripStart() - todayUTC(now)) / 86400000);
    const afterEnd = todayUTC(now) > tripEnd();
    hero.classList.toggle('is-compact', untilStart <= 0);
    if (state.liveDay) eyebrow.textContent = `วันนี้ · DAY ${state.liveDay} · ${dayNotes[state.liveDay - 1].short}`;
    else if (afterEnd) eyebrow.textContent = 'จบทริปแล้ว · ขอบคุณเกียวโต';
    else if (untilStart === 1) eyebrow.textContent = 'พรุ่งนี้ออกเดินทาง · SIX DAYS · ONE KYOTO BASE';
    else eyebrow.textContent = `อีก ${untilStart} วันออกเดินทาง · SIX DAYS · ONE KYOTO BASE`;
  }

  // ---------- Day strip ----------
  function renderDayTabs() {
    const host = $('#dayTabs');
    if (!host.children.length) {
      [...allDays(), null].forEach(day => {
        const button = document.createElement('button'); button.type = 'button'; button.className = 'day-tab';
        if (day) {
          const note = dayNotes[day.dayNum - 1]; const weekday = day.date.match(/\(([^)]+)\)/)?.[1];
          button.dataset.day = String(day.dayNum);
          button.innerHTML = `<small>DAY ${day.dayNum} · ${escapeHTML(day.date.split(' ')[0])} ธ.ค.${weekday ? ` · ${escapeHTML(weekday)}` : ''}</small><strong>${escapeHTML(note.short)}</strong>`;
        } else {
          button.dataset.day = '0'; button.classList.add('overview-tab');
          button.innerHTML = '<small>1–6 ธ.ค.</small><strong>ภาพรวมทั้งทริป</strong>';
        }
        button.addEventListener('click', () => selectDay(Number(button.dataset.day))); host.append(button);
      });
    }
    $$('.day-tab', host).forEach(button => {
      const dayNum = Number(button.dataset.day);
      button.setAttribute('aria-pressed', String(dayNum === state.day));
      $('.today-pill', button)?.remove();
      if (dayNum && dayNum === state.liveDay) button.insertAdjacentHTML('beforeend', '<span class="today-pill">วันนี้</span>');
    });
    const active = $('.day-tab[aria-pressed=true]', host);
    if (active && host.scrollWidth > host.clientWidth) {
      const offset = active.getBoundingClientRect().left - host.getBoundingClientRect().left + host.scrollLeft;
      host.scrollTo({ left: Math.max(0, offset - 20), behavior: 'smooth' });
    }
  }

  function renderFilters() {
    const host = $('#categoryFilters');
    if (!host.children.length) {
      [['all', 'ทั้งหมด'], ...Object.keys(plan.categories).map(key => [key, catLabel(key)])].forEach(([key, label]) => {
        const button = document.createElement('button'); button.type = 'button'; button.dataset.category = key;
        if (key !== 'all') { button.className = `cat-${key}`; button.title = plan.categories[key]?.name || label; }
        button.innerHTML = `${key !== 'all' ? '<span class="dot" aria-hidden="true"></span>' : ''}${escapeHTML(label)}`;
        button.addEventListener('click', () => { state.category = key; renderFilters(); renderTimeline(); renderMap(); }); host.append(button);
      });
    }
    $$('button', host).forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === state.category)));
  }

  // ---------- Timeline ----------
  const emptyState = '<div class="empty-state"><p>ไม่พบจุดที่ตรงกับการค้นหาหรือตัวกรอง</p><button type="button" class="text-button" id="resetFilters">ล้างการค้นหาและตัวกรอง</button></div>';
  const criticalNote = note => `<aside class="critical-note">${icon('alert')}<div><strong>${escapeHTML(note.critical)}</strong>${escapeHTML(note.risk)}</div></aside>`;
  function renderTimeline() {
    const host = $('#timeline'); host.replaceChildren();
    if (state.day === 0) { renderOverview(host); renderNowPanel(); return; }
    const day = currentDay(); if (!day) return;
    const note = dayNotes[day.dayNum - 1];
    host.insertAdjacentHTML('beforeend', `<header class="day-intro"><div class="date">DAY ${day.dayNum} / ${escapeHTML(day.date)} · งบรถ ${fmt(day.totalFareJPY)} / คน</div><h2>${escapeHTML(day.title)}</h2><p class="route-summary">${escapeHTML(note.route)}</p></header>${criticalNote(note)}`);
    let shown = 0;
    stops(day).forEach((cp, index) => { if (!checkpointMatches(cp)) return; shown += 1; host.append(makeCheckpoint(day, cp, index + 1)); });
    if (!shown) host.insertAdjacentHTML('beforeend', emptyState);
    $('#resetFilters', host)?.addEventListener('click', clearFilters);
    host.append(makeSourceNotes(day));
    renderNowPanel();
  }
  function renderOverview(host) {
    host.insertAdjacentHTML('beforeend', '<header class="day-intro"><div class="date">KYOTO · UJI · NARA · OSAKA · 1–6 ธันวาคม 2026</div><h2>ภาพรวมทั้งทริป</h2><p class="route-summary">เดินทางช้าได้ ตัดกิจกรรมเสริมได้ และรักษาเวลาเดินทางสำคัญของแต่ละวัน</p></header>');
    let visibleCount = 0;
    allDays().forEach(day => {
      const list = stops(day).map((cp, index) => [cp, index + 1]).filter(([cp]) => checkpointMatches(cp)); if (!list.length) return;
      visibleCount += list.length;
      const wrap = document.createElement('section'); wrap.className = 'overview-day';
      wrap.innerHTML = `<header class="day-intro"><div class="date">DAY ${day.dayNum} · ${escapeHTML(day.date)} · งบรถ ${fmt(day.totalFareJPY)} / คน</div><h2>${escapeHTML(day.title)}</h2></header>${criticalNote(dayNotes[day.dayNum - 1])}`;
      list.forEach(([cp, number]) => wrap.append(makeCheckpoint(day, cp, number)));
      wrap.append(makeSourceNotes(day)); host.append(wrap);
    });
    if (!visibleCount) host.insertAdjacentHTML('beforeend', emptyState);
    $('#resetFilters', host)?.addEventListener('click', clearFilters);
  }
  function makeCheckpoint(day, cp, number) {
    const card = document.createElement('article'); card.className = `timeline-card cat-${cp.category}`; card.id = `card-${cp.id}`; card.dataset.cp = cp.id;
    const fullDescription = cp.desc || 'ดูรายละเอียดจากแหล่งข้อมูลของสถานที่';
    const descriptionParts = fullDescription.split(/(?<=[.!?])\s+|[;；]\s*/).map(part => part.trim()).filter(Boolean);
    const expandable = fullDescription.length > 145;
    const summary = escapeHTML(expandable ? (descriptionParts[0] || fullDescription).slice(0, 155) : fullDescription);
    const cautionParts = expandable ? [...new Set(descriptionParts.filter(part => /ไม่|หาก|ต้อง|อย่า|เผื่อ|เป้าหมาย|ตรวจ|คิว|จอง|รับประกัน|สำรอง|ก่อน|ช้า|ตัวเลือก|เสริม|ระวัง/i.test(part) && part !== descriptionParts[0]))] : [];
    const warning = cautionParts.length ? `<p class="checkpoint-warning compact-note"><strong>ข้อควรจำ</strong>${escapeHTML(cautionParts.join(' · '))}</p>` : '';
    const options = (cp.optionalActivities || []).map(item => `<span class="optional-tag">เสริม: ${escapeHTML(item)}</span>`).join(' ');
    const choice = cp.choiceNote ? `<p class="choice-note">${escapeHTML(cp.choiceNote)}</p>` : '';
    const key = dayNotes[day.dayNum - 1]?.keys?.[cp.order];
    const span = timeSpan(cp);
    const plainRange = span && cp.time.trim() === `${hhmm(span.start)}–${hhmm(span.end)}`;
    const timeCol = span ? `<span class="start">${hhmm(span.start)}</span>${plainRange ? `ถึง ${hhmm(span.end)}` : escapeHTML(cp.time)}` : escapeHTML(cp.time);
    card.innerHTML = `<div class="time-col">${timeCol}</div>
      <div class="stop-card">
        <span class="stop-num" aria-hidden="true">${number}</span>
        <div class="stop-body">
          <div class="stop-tags"><span class="cat-chip">${icon(cp.category)}${escapeHTML(catLabel(cp.category))}</span>${key ? `<span class="key-badge">${icon('alert')}${escapeHTML(key)}</span>` : ''}</div>
          <h3><span class="visually-hidden">จุดที่ ${number}: </span>${escapeHTML(cp.name)}</h3>
          ${cp.jpName ? `<p class="jp" lang="ja">${escapeHTML(cp.jpName)}</p>` : ''}
          <p class="desc">${summary}${expandable && summary.length < fullDescription.length ? '…' : ''}</p>
          ${options ? `<div class="activity-options">${options}</div>` : ''}${choice}${warning}
          ${expandable ? `<details><summary>รายละเอียดทั้งหมด</summary><p class="long-detail">${escapeHTML(fullDescription)}</p></details>` : ''}
          <div class="transit-row">${icon('transport')}<span><b>การเดินทาง</b> · ${escapeHTML(cp.transportInfo || 'ตรวจเส้นทางจริง')}</span></div>
          <div class="stop-meta"><span class="cost-chip">ค่าใช้จ่าย · ${escapeHTML(costText(cp.cost))}</span></div>
          <div class="stop-actions"><button type="button" data-map-id="${escapeHTML(cp.id)}">แสดงบนแผนที่</button>${safeLink(navUrl(cp), 'นำทาง Google Maps')}${safeLink(mapSearchUrl(cp), 'ค้นหาสถานที่')}${cp.link && !isMapLink(cp.link) ? safeLink(cp.link, 'แหล่งข้อมูล') : ''}</div>
        </div>
      </div>`;
    $('[data-map-id]', card).addEventListener('click', () => focusCheckpoint(cp, day));
    return card;
  }

  // ---------- Now / Next panel ----------
  function renderNowPanel() {
    const host = $('#nowPanel'); host.replaceChildren();
    $$('.timeline-card').forEach(card => { card.classList.remove('is-now', 'is-next', 'is-past'); $('.state-badge', card)?.remove(); });
    if (!state.liveDay) return;
    const liveDay = allDays().find(day => day.dayNum === state.liveDay);
    if (state.day !== state.liveDay) {
      host.innerHTML = `<div class="now-panel"><div class="now-head"><span><span class="live-dot"></span>วันนี้คือ Day ${state.liveDay} · ${escapeHTML(dayNotes[state.liveDay - 1].short)}</span><button type="button" class="chip-button" id="goToday">ไปที่แผนวันนี้</button></div></div>`;
      $('#goToday').addEventListener('click', () => selectDay(state.liveDay));
      return;
    }
    const status = liveStatus(liveDay, state.now.min);
    status.list.forEach(item => {
      const card = $(`#card-${CSS.escape(item.cp.id)}`); if (!card) return;
      const isNow = item === status.current; const isNext = item === status.next;
      card.classList.toggle('is-now', isNow); card.classList.toggle('is-next', isNext);
      card.classList.toggle('is-past', !isNow && item.end <= state.now.min);
      if (isNow || isNext) $('.stop-tags', card)?.insertAdjacentHTML('afterbegin', `<span class="state-badge">${isNow ? 'ตอนนี้' : 'ถัดไป'}</span>`);
    });
    const row = (label, item, withTransit) => `<div class="now-row"><span class="label">${label}</span><div>
        <strong>${hhmm(item.start)} · ${escapeHTML(item.cp.name)}</strong>
        <div class="sub">${withTransit ? `${icon('transport')} ${escapeHTML(item.cp.transportInfo || 'ตรวจเส้นทางจริง')}` : escapeHTML(item.cp.time)}</div>
        <div class="now-actions">${withTransit ? `<a class="chip-link primary" href="${escapeHTML(navUrl(item.cp))}" target="_blank" rel="noopener noreferrer">${icon('nav')}นำทาง</a>` : ''}<button type="button" class="chip-button" data-jump="${escapeHTML(item.cp.id)}">ดูการ์ด</button></div>
      </div></div>`;
    let body = '';
    if (status.current) body += row('ตอนนี้', status.current, false);
    if (status.next) body += row(status.beforeStart ? 'เริ่มวัน' : 'ถัดไป', status.next, true);
    if (status.done) {
      const tomorrow = allDays().find(day => day.dayNum === state.liveDay + 1);
      const first = tomorrow && stops(tomorrow)[0];
      body += `<div class="now-row"><span class="label">จบวัน</span><div><strong>จบแผนวันนี้แล้ว พักผ่อนได้</strong>${first ? `<div class="sub">พรุ่งนี้ ${escapeHTML(first.time)} · ${escapeHTML(first.name)}</div>` : ''}</div></div>`;
    }
    host.innerHTML = `<section class="now-panel" aria-label="สถานะตามเวลาจริง"><div class="now-head"><span><span class="live-dot"></span>DAY ${state.liveDay} · ${hhmm(state.now.min)} เวลาญี่ปุ่น${state.now.simulated ? ' (จำลอง)' : ''}</span></div>${body}</section>`;
    $$('[data-jump]', host).forEach(button => button.addEventListener('click', () => {
      const card = $(`#card-${CSS.escape(button.dataset.jump)}`);
      if (!card) { clearFilters(); }
      $(`#card-${CSS.escape(button.dataset.jump)}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
  }
  function tick() {
    state.now = japanNow();
    const live = liveDayFor(state.now);
    if (live !== state.liveDay) { state.liveDay = live; renderDayTabs(); }
    renderHero(); renderNowPanel();
  }

  // ---------- Source notes ----------
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
  const markdownToPlainText = markdown => markdown.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '$1 ($2)').replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1');

  function clearFilters() { state.category = 'all'; state.query = ''; $('#searchInput').value = ''; $('#clearSearch').hidden = true; renderFilters(); renderTimeline(); renderMap(); }
  function selectDay(day) { state.day = day; renderDayTabs(); renderTimeline(); renderRail(); renderMap(); if (state.map) fitMap(); }

  // ---------- Right rail ----------
  function renderRail() {
    const list = $('#routeList');
    if (state.day === 0) {
      list.innerHTML = allDays().map(day => `<li><button type="button" data-day-link="${day.dayNum}"><span class="route-num">${day.dayNum}</span><span>${escapeHTML(dayNotes[day.dayNum - 1].short)} · ${escapeHTML(day.date.split(' (')[0])}</span></button></li>`).join('');
      $$('[data-day-link]', list).forEach(button => button.addEventListener('click', () => { selectDay(Number(button.dataset.dayLink)); if (isMobile()) setMobileView('plan'); }));
      $('#dayFare').textContent = state.currency === 'JPY' ? formatNumber(plan.totalICCardCostJPY) : formatNumber(Math.round(plan.totalICCardCostJPY * plan.exchangeRate)); $('#fareUnit').textContent = `${state.currency} · ทั้งทริป`;
      $('#contingencySummary').textContent = 'เลือกวันด้านบนเพื่ออ่านเส้นทาง เวลาเตือน และแผนสำรองรายวัน';
      return;
    }
    const day = currentDay(); if (!day) return;
    list.innerHTML = stops(day).map((cp, i) => `<li class="cat-${cp.category}"><button type="button" data-route-id="${escapeHTML(cp.id)}"><span class="route-num">${i + 1}</span><span>${escapeHTML(cp.name)}</span></button></li>`).join('');
    $$('[data-route-id]', list).forEach(button => button.addEventListener('click', () => focusCheckpoint(day.checkpoints.find(cp => cp.id === button.dataset.routeId), day)));
    $('#dayFare').textContent = state.currency === 'JPY' ? formatNumber(day.totalFareJPY) : formatNumber(Math.round(day.totalFareJPY * plan.exchangeRate)); $('#fareUnit').textContent = state.currency;
    $('#contingencySummary').textContent = plan.contingencies?.find(item => item.title.toLowerCase().includes(`day ${day.dayNum}`))?.detail || dayNotes[day.dayNum - 1].risk;
  }

  // ---------- Mobile plan / map switch ----------
  function setMobileView(view) {
    state.view = view; $('#dailyGrid').dataset.view = view;
    $$('.view-switch button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
    // แผนที่ถูกสร้าง/เปลี่ยนวันขณะซ่อนอยู่ จึงต้องคำนวณขนาดและกรอบใหม่เมื่อเปิดดู
    if (view === 'map' && state.map) setTimeout(() => { state.map.invalidateSize(); fitMap(); }, 60);
    const top = $('#dailyGrid').getBoundingClientRect().top;
    if (top < 0) $('#dailyGrid').scrollIntoView({ block: 'start' });
  }

  // ---------- Map ----------
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
      tiles.on('tileerror', () => { if (!navigator.onLine) $('#mapFallback').hidden = false; });
      tiles.on('tileload', () => { $('#mapFallback').hidden = true; });
      tiles.addTo(state.map);
      state.markerGroup = L.layerGroup().addTo(state.map); state.routeGroup = L.layerGroup().addTo(state.map);
      setTimeout(() => state.map.invalidateSize(), 100); renderMap(); fitMap();
    } catch (_) { mapHost.hidden = true; $('#mapFallback').hidden = false; }
  }
  const visibleDays = () => state.day === 0 ? allDays() : allDays().filter(day => day.dayNum === state.day);
  function renderMap() {
    if (!state.map || !state.markerGroup || !state.routeGroup) return;
    state.markerGroup.clearLayers(); state.routeGroup.clearLayers(); state.markers.clear();
    visibleDays().forEach(day => {
      if (state.routes && day.routeCoords?.length > 1) L.polyline(day.routeCoords, { color: day.color || '#a3432d', weight: 3, opacity: .7, dashArray: '5 7' }).addTo(state.routeGroup);
      stops(day).forEach((cp, index) => {
        if (!checkpointMatches(cp)) return;
        if (!Number.isFinite(cp.lat) || !Number.isFinite(cp.lng)) return;
        const number = index + 1;
        const label = state.day === 0 ? `${day.dayNum}-${number}` : String(number);
        const markerIcon = L.divIcon({ className: `numbered-marker cat-${cp.category}`, html: `<span>${escapeHTML(label)}</span>`, iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, -15] });
        const marker = L.marker([cp.lat, cp.lng], { icon: markerIcon, title: `Day ${day.dayNum} · จุด ${number} · ${cp.name}` }).bindPopup(`<strong>Day ${day.dayNum} · จุด ${number}: ${escapeHTML(cp.name)}</strong><br>${escapeHTML(cp.time)} · ${escapeHTML(catLabel(cp.category))}<br>${safeLink(navUrl(cp), 'นำทาง')} · ${safeLink(mapSearchUrl(cp), 'ค้นหาสถานที่')}${cp.link && !isMapLink(cp.link) ? ` · ${safeLink(cp.link, 'แหล่งข้อมูล')}` : ''}`);
        marker.addTo(state.markerGroup); state.markers.set(cp.id, marker);
      });
    });
  }
  function fitMap() {
    if (!state.map) return; const points = [];
    visibleDays().forEach(day => day.checkpoints.filter(checkpointMatches).forEach(cp => { if (Number.isFinite(cp.lat) && Number.isFinite(cp.lng)) points.push([cp.lat, cp.lng]); }));
    if (points.length) state.map.fitBounds(points, { padding: [24, 24], maxZoom: 14 });
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
  function focusCheckpoint(cp, day) {
    if (!cp) return;
    if (state.day !== 0 && day && day.dayNum !== state.day) selectDay(day.dayNum);
    if (isMobile() && state.view !== 'map') setMobileView('map');
    else if (!isMobile()) $('#mapPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    const marker = state.markers.get(cp.id);
    if (!marker || !state.map) { if (!state.map) showToast('แผนที่ยังไม่พร้อม · ต้องใช้อินเทอร์เน็ต'); return; }
    setTimeout(() => { state.map.invalidateSize(); state.map.setView([cp.lat, cp.lng], 15); marker.openPopup(); }, isMobile() ? 90 : 0);
  }

  // ---------- Essentials (พร้อมเช็กลิสต์ที่จำสถานะ) ----------
  const CHECK_KEY = 'kyoto-handbook-checklist';
  const loadChecks = () => { try { return new Set(JSON.parse(storage.get(CHECK_KEY) || '[]')); } catch (_) { return new Set(); } };
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
          ${safeLink(hotel.sourceLink, 'เว็บไซต์โรงแรม')} · ${safeLink(hotel.mapLink, 'ค้นหาสถานที่')}
        </section>
        <section class="info-card">
          <h3>เวลาตามแผน</h3>
          <p>ปรับแผน 6 พ.ย. 2026: Osaka Castle / Kaiyukan / Dotonbori พร้อมงบใหม่; Shimogamo เป็น Day 4 โดยเก็บวัดทอง Day 3; ข้อมูลสถานที่เดิมตรวจ 3 พ.ย. ตารางบินอ้างอิงฉบับ 21 ต.ค. 2026 ยังต้องยืนยันใบจอง ขบวนรถ ที่ว่างกิจกรรม และวันเปิดพิเศษของร้านสำรอง เวลารายวันเป็นกรอบเผื่อเดินและรอ ไม่ใช่รอบรถที่จองแล้ว ให้ตรวจใบจองและประกาศก่อนเดินทาง</p>
        </section>
      </div>`;
    const tips = (plan.travelTips || []).map(tip => `<section class="info-card"><h3>${escapeHTML(tip.title)}</h3><p>${escapeHTML(tip.desc)}</p>${tip.link ? safeLink(tip.link, tip.linkLabel || 'แหล่งข้อมูล') : ''}${tip.secondaryLink ? ` · ${safeLink(tip.secondaryLink, tip.secondaryLinkLabel || 'ข้อมูลเพิ่มเติม')}` : ''}</section>`).join('');
    const checklist = ['เทียบ MM092/MM091 เวลา กระเป๋า และเงื่อนไขเช็คอินกับใบจองล่าสุด', 'ยืนยันฝากกระเป๋าและภาษีที่พักจากราคาต่อคนต่อคืนกับโรงแรม', 'เลือก Usucha หรือคอร์สลงมือชง และจอง Taiho-an ตามปฏิทินจริง; หากเลือก CHAZUNA ตรวจตารางเดือน ธ.ค. ที่ประกาศ 28 ต.ค. และจองรอบ', 'Haruka ซื้อใหม่ 2,700 เยน/เที่ยว หากมีตั๋วเดิมตรวจเงื่อนไขก่อน เลือกช่องทางให้ชัด; จองขากลับเพื่อรักษาเป้าหมายถึง T2 16:00', 'Murin-an เลือกแทนคาเฟ่ จองรอบ 16:00 ตามที่ว่างและตรวจเงื่อนไขยกเลิก; Menami จองทางโทรศัพท์โดยเผื่อออกจาก Eikando', 'Kaiyukan 5 ธ.ค. รอบเป้าหมาย 13:00 ตามที่ว่าง ตรวจราคาและเวลาเปิดก่อนซื้อ; Shimogamo เป็นแผนหลัก Day 4 แทนวัดเงินแล้ว', '24–27 พ.ย. ตรวจวันหยุดร้าน รอบรถ/ค่าโดยสาร สภาพใบไม้และประกาศไฟประดับ', 'เตรียม VJW และวิธีรับเงินคืนตามร้าน ตรวจแผนผัง Tax-free ที่ KIX T2 International; ยืนยันสินค้าก่อนโหลดกระเป๋าที่บรรจุสินค้า', 'ก่อนแต่ละวัน ดูฝนและสถานะรถ กำหนดจุดหลักหนึ่งถึงสองแห่งและตัดกิจกรรมเสริมเมื่อช้า'];
    const checked = loadChecks();
    const alternatives = (plan.alternatives || []).map(item => `<li><strong>${escapeHTML(item.name)}</strong> — ${escapeHTML(item.replaces)}. ${escapeHTML(item.note)} ${safeLink(mapSearchUrl(item), 'ค้นหาสถานที่')}${item.link && !isMapLink(item.link) ? ` · ${safeLink(item.link, 'ข้อมูลสถานที่')}` : ''}</li>`).join('');
    const contingencies = (plan.contingencies || []).map(item => `<section class="info-card"><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.detail)}</p></section>`).join('');
    host.innerHTML = `${flights}
      <section class="info-card">
        <h3>ก่อนเดินทาง · เช็กลิสต์<span class="checklist-progress" id="checkProgress"></span></h3>
        <ul class="checklist">${checklist.map(item => `<li><label><input type="checkbox" data-check="${escapeHTML(item)}"${checked.has(item) ? ' checked' : ''}><span>${escapeHTML(item)}</span></label></li>`).join('')}</ul>
      </section>
      <div class="content-grid">${tips}</div>
      <section class="info-card">
        <h3>สถานที่ทดแทน · เลือกแทน ไม่เพิ่มทุกแห่ง</h3>
        <ul>${alternatives}</ul>
      </section>
      <h2>แผนสำรองรายวัน</h2>
      <div class="content-grid">${contingencies}</div>`;
    const boxes = $$('[data-check]', host);
    const updateProgress = () => { $('#checkProgress').textContent = `${boxes.filter(box => box.checked).length}/${boxes.length} เสร็จแล้ว`; };
    boxes.forEach(box => box.addEventListener('change', () => {
      const done = boxes.filter(item => item.checked).map(item => item.dataset.check);
      storage.set(CHECK_KEY, JSON.stringify(done)); updateProgress();
    }));
    updateProgress();
  }
  function renderRestaurants() {
    $('#restaurantNote').textContent = plan.nearbyRestaurantsNote || 'เวลาเดินเป็นค่าประมาณ ร้านบางแห่งอยู่คนละฝั่งสถานีหรือภายในห้าง โปรดเผื่อเวลาเดินและตรวจวันเปิด/คิว';
    const host = $('#restaurantContent'); const groups = new Map();
    (plan.nearbyRestaurants || []).forEach(item => { if (!groups.has(item.category)) groups.set(item.category, []); groups.get(item.category).push(item); });
    host.innerHTML = [...groups.entries()].map(([category, items]) => `<section class="info-card"><h3>${escapeHTML(category)}</h3>${items.map(item => `<p><strong>${escapeHTML(item.name)}</strong><br>${escapeHTML(item.walkTime)} · ${escapeHTML(item.desc)}<br>${safeLink(mapSearchUrl(item), 'ค้นหาสถานที่')}</p>`).join('<hr>')}</section>`).join('');
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
    const taxBands = data.accommodationTaxBands.map(band => `<li>${escapeHTML(band.threshold)} · ${fmt(band.amountJPY)} / คน / คืน</li>`).join('');
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
  function setupRateInput() {
    const input = $('#rateInput'); const note = $('#rateNote'); const reset = $('#rateReset');
    if (!input || !note) return;
    const updateNote = () => {
      const rate = plan.exchangeRate; const total = plan.budget && plan.budget.total;
      const custom = rate !== defaultRate ? ' · ใช้เรทที่กรอกเอง' : ' · ค่าเริ่มต้น (อ้างอิง 6 พ.ย. 2026)';
      note.textContent = (total ? `งบรวมพร้อมสำรอง ${formatNumber(total.minJPY)}–${formatNumber(total.maxJPY)} JPY ≈ ${formatNumber(Math.round(total.minJPY * rate))}–${formatNumber(Math.round(total.maxJPY * rate))} THB` : '') + ` (1 THB ≈ ${(1 / rate).toFixed(3)} JPY)${custom}`;
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
      stops(day).forEach((cp, i) => lines.push(`${i + 1}. ${cp.time} · ${cp.name}`, cp.desc, `การเดินทาง: ${cp.transportInfo}`, `ค่าใช้จ่าย: ${cp.cost}`));
      lines.push('', 'รายละเอียดจากแผนต้นฉบับ:', markdownToPlainText(plan.dailySourceNotes?.[day.dayNum - 1] || ''));
    });
    try { if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(lines.join('\n')); showToast('คัดลอกแผนแล้ว'); return; } } catch (_) { /* use fallback below for denied clipboard and file URLs */ }
    const textarea = document.createElement('textarea'); textarea.value = lines.join('\n'); textarea.setAttribute('readonly', ''); textarea.style.position = 'fixed'; textarea.style.opacity = '0'; document.body.append(textarea); textarea.select();
    try { const copied = document.execCommand('copy'); showToast(copied ? 'คัดลอกแผนแล้ว' : 'คัดลอกไม่ได้ · เลือกและคัดลอกข้อความด้วยตนเอง'); if (!copied) { textarea.removeAttribute('readonly'); textarea.style.position = 'static'; textarea.style.opacity = '1'; textarea.focus(); } else textarea.remove(); } catch (_) { textarea.removeAttribute('readonly'); textarea.style.position = 'static'; textarea.style.opacity = '1'; textarea.focus(); showToast('เลือกข้อความแล้ว · คัดลอกด้วยตนเอง'); }
  }

  // ---------- Theme (ตามระบบ + สลับเองได้) ----------
  const THEME_KEY = 'kyoto-handbook-theme';
  const root = document.documentElement;
  const effectiveTheme = () => root.getAttribute('data-theme') || (darkQuery.matches ? 'dark' : 'light');
  function syncThemeButton() {
    const dark = effectiveTheme() === 'dark'; const button = $('#themeToggle');
    button.textContent = dark ? 'ธีมสว่าง' : 'ธีมมืด';
    button.setAttribute('aria-label', dark ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด');
  }
  $('#themeToggle').addEventListener('click', () => {
    const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    const system = darkQuery.matches ? 'dark' : 'light';
    if (next === system) { root.removeAttribute('data-theme'); storage.remove(THEME_KEY); }
    else { root.setAttribute('data-theme', next); storage.set(THEME_KEY, next); }
    syncThemeButton();
  });
  darkQuery.addEventListener?.('change', syncThemeButton);
  syncThemeButton();

  // ---------- Offline / PWA ----------
  const syncOnline = () => { $('#offlineBadge').hidden = navigator.onLine; };
  window.addEventListener('online', syncOnline); window.addEventListener('offline', syncOnline); syncOnline();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { /* ไม่มี service worker ก็ยังใช้งานออนไลน์ได้ */ }));
  }

  // ---------- Events ----------
  $$('.main-nav button').forEach(button => button.addEventListener('click', () => setPage(button.dataset.page)));
  $$('[data-open-page]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); setPage(link.dataset.openPage); $('#page-essentials').scrollIntoView({ behavior: 'smooth' }); }));
  $$('.view-switch button').forEach(button => button.addEventListener('click', () => setMobileView(button.dataset.view)));
  $('#searchInput').addEventListener('input', event => { state.query = event.target.value.trim().toLocaleLowerCase(); $('#clearSearch').hidden = !state.query; renderTimeline(); renderMap(); });
  $('#clearSearch').addEventListener('click', clearFilters);
  $('#copyDay').addEventListener('click', copyDay);
  $('#showRoutes').addEventListener('change', event => { state.routes = event.target.checked; renderMap(); });
  $('#fitMap').setAttribute('aria-controls', 'map');
  $('#fitMap').setAttribute('aria-expanded', 'false');
  $('#fitMap').addEventListener('click', () => setMapExpanded(!$('.map-section').classList.contains('expanded')));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('.map-section').classList.contains('expanded')) { setMapExpanded(false); $('#fitMap').focus(); } });
  $('#currencyToggle').addEventListener('click', () => { state.currency = state.currency === 'JPY' ? 'THB' : 'JPY'; $('#currencyToggle').innerHTML = state.currency === 'JPY' ? 'JPY <span>↔</span> THB' : 'THB <span>↔</span> JPY'; $('#currencyToggle').setAttribute('aria-label', `สกุลเงินปัจจุบัน ${state.currency}; กดเพื่อสลับ`); renderTimeline(); renderRail(); renderBudget(); renderMap(); });
  mobileQuery.addEventListener?.('change', () => { if (state.map) setTimeout(() => state.map.invalidateSize(), 60); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });

  // ---------- Start ----------
  state.now = japanNow(); state.liveDay = liveDayFor(state.now);
  if (state.liveDay) state.day = state.liveDay;
  renderHero(); renderDayTabs(); renderFilters(); renderTimeline(); renderRail(); renderEssentials(); renderRestaurants(); renderBudget(); setupRateInput(); initializeMap();
  setInterval(tick, 60000);
});
