const CACHE_NAME = 'hisoka-v2';
const ASSETS = [
  './',
  './index.html',
  './arca.html',
  './chrollo.html',
  './nobunaga.html',
  './feitan.html',
  './machi.html',
  './kalluto.html',
  './phinks.html',
  './shalnark.html',
  './franklin.html',
  './shizuku.html',
  './pakunoda.html',
  './bonolenov.html',
  './uvogin.html',
  './kortopi.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetched = fetch(e.request).then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
