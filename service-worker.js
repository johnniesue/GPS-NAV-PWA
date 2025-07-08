
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('gps-nav-cache').then(cache => {
      return cache.addAll(['/', '/index.html', '/style.css', '/theme.css', '/scripts/map.js']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
