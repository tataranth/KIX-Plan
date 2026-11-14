// Offline support for the Kyoto handbook.
// App files: network first (so plan edits show up as soon as there is a connection), cache as fallback.
// Leaflet from the CDN: cache first (the URL is versioned and never changes).
// Map tiles and external links are not handled here; they always need a connection.
const CACHE = 'kyoto-handbook-v1';
const APP_FILES = ['./', 'index.html', 'style.css', 'app.js', 'data.js', 'manifest.json', 'icon.svg', 'icon-192.png', 'icon-512.png'];
const CDN_FILES = ['https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'];
const NETWORK_TIMEOUT_MS = 4000;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(APP_FILES);
    // The CDN copy is a bonus: the plan pages must install even if the CDN is unreachable.
    await Promise.all(CDN_FILES.map(url => cache.add(url).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), NETWORK_TIMEOUT_MS);
    const response = await fetch(request, { signal: controller.signal });
    clearTimeout(timer);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (error) {
    // ignoreSearch: the page keeps its state in ?page=&day=, which must not miss the cache.
    const cached = await cache.match(request, { ignoreSearch: true }) || (request.mode === 'navigate' && await cache.match('index.html'));
    if (cached) return cached;
    throw error;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin === self.location.origin) event.respondWith(networkFirst(request));
  else if (CDN_FILES.includes(url.href)) event.respondWith(cacheFirst(request));
});
