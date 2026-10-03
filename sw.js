const CACHE_NAME = 'ar7-portfolio-offline-v1';

const OFFLINE_FALLBACK_URL = 'offline.html';
const PRECACHE_ASSETS = [
  'offline.html',
  'style.css',
  'images/ar-logo.svg',
  'images/ar-logo1.svg',
  'images/favicon-32.png',
  'images/favicon-16.png',
  'images/favicon1-32.png',
  'images/favicon1-16.png',
  'images/favicon-180.png',
  'site.webmanifest'
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('SW pre-cache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});


self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});


self.addEventListener('fetch', (event) => {
  
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);

  
  if (url.origin !== self.location.origin) {
    return;
  }

  
  if (event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          
          return response;
        })
        .catch(() => {
          
          return caches.match(OFFLINE_FALLBACK_URL, { ignoreSearch: true });
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        
        return new Response('', { status: 408, statusText: 'Request timed out / offline' });
      });
    })
  );
});
