var cacheName = 'menacing-media-page';
var filesToCache = [
  '/',
  '/index.html',
  '/assets/icons/128x128.png',
  '/assets/icons/144x144.png',
  '/assets/icons/152x152.png',
  '/assets/icons/192x192.png',
  '/assets/icons/512x512.png',
  '/assets/img/icon.jpg',
  '/assets/img/london.jpg',
  '/assets/img/london2.jpg',
  '/assets/img/mm_transparent.png',
  '/assets/img/rainbow.jpg',
  '/assets/img/craft.jpg',
  '/style.css'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});