const CACHE_NAME = 'anna-portfolio-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/sw.js',
  '/images/me.jpg',
  '/images/Pixelify Sans/favicon-32x32.png',
  '/images/Pixelify Sans/favicon-16x16.png'
];

// Установка сервис-воркера и кэширование ресурсов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Обработка запросов (сеть -> кэш)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});images