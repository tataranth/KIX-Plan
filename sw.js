// Service worker: เปิดแผนได้แม้ไม่มีอินเทอร์เน็ต
// - ไฟล์หลักของเว็บ: stale-while-revalidate (ใช้ของที่เก็บไว้ก่อน แล้วอัปเดตเบื้องหลัง)
// - ฟอนต์ / Leaflet: cache-first
// - แผนที่ (tiles): cache-first เก็บเฉพาะบริเวณที่เคยเปิดดู จำกัดจำนวน
// เมื่อแก้ไฟล์ในเว็บ ให้เปลี่ยน VERSION เพื่อล้างแคชเก่า
const VERSION = 'kyoto-handbook-v2';
const CORE = ['./', 'index.html', 'style.css', 'app.js', 'data.js', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png', 'icon-180.png'];
const STATIC = `${VERSION}-static`;
const TILES = 'kyoto-handbook-tiles';
const MAX_TILES = 800;

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== VERSION && key !== STATIC && key !== TILES).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

async function trimTiles() {
  const cache = await caches.open(TILES); const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_TILES; i += 1) await cache.delete(keys[i]);
}

async function cacheFirst(request, cacheName, onStore) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(request);
  if (hit) return hit;
  try {
    const response = await fetch(request);
    if (response && (response.ok || response.type === 'opaque')) { await cache.put(request, response.clone()); if (onStore) onStore(); }
    return response;
  } catch (error) {
    return hit || Response.error();
  }
}

async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(request, { ignoreSearch: true });
  const network = fetch(request).then(response => { if (response && response.ok) cache.put(request, response.clone()); return response; }).catch(() => null);
  if (hit) { event.waitUntil(network); return hit; }
  const response = await network;
  if (response) return response;
  if (request.mode === 'navigate') return (await cache.match('index.html')) || Response.error();
  return Response.error();
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin === self.location.origin) { event.respondWith(staleWhileRevalidate(request, event)); return; }
  if (/(^|\.)google\.com$/.test(url.hostname) && url.pathname.startsWith('/vt')) { event.respondWith(cacheFirst(request, TILES, trimTiles)); return; }
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com' || url.hostname === 'unpkg.com') { event.respondWith(cacheFirst(request, STATIC)); }
});
