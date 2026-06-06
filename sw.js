const CACHE_NAME = 'canvas-caresse-v1.5';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/artwork/flower2.jpg',
  '/artwork/more2.jpg',
  '/artwork/new_roses_bouquet.jpg'
];

// Install event - 緩存資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event - 清除舊緩存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - 網絡優先，回退到緩存
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // 跳過非GET請求
  if (request.method !== 'GET') {
    return;
  }

  // 對於HTML和JSON，優先網絡
  if (request.headers.get('accept')?.includes('text/html') || request.url.includes('.json')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 對於資源，使用緩存優先
  event.respondWith(
    caches.match(request).then((response) => {
      return response || fetch(request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, clone);
        });
        return response;
      });
    })
  );
});
