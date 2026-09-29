/* ==========================================================================
   AR7 Portfolio Service Worker
   Lightweight Offline Fallback Engine
   ========================================================================== */

const CACHE_NAME = 'ar7-portfolio-offline-v1';

// Essential minimal assets required for offline fallback (no bloat)
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

// Install Event: Pre-cache only essential offline assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('SW pre-cache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up outdated caches
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

// Fetch Event: Network-first for navigations; offline.html only on network disconnect
self.addEventListener('fetch', (event) => {
  // Never intercept non-GET requests (e.g. Formspree contact form submissions)
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);

  // Ignore cross-origin external API requests or special browser schemes
  if (url.origin !== self.location.origin) {
    return;
  }

  // Handle HTML navigation requests
  if (event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // If server responds (including valid pages and 404s), return network response
          return response;
        })
        .catch(() => {
          // Network connection failed -> Serve offline fallback page
          return caches.match(OFFLINE_FALLBACK_URL, { ignoreSearch: true });
        })
    );
    return;
  }

  // For static cached assets (CSS, SVG icons, favicons)
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Return empty or fallback if asset fetch fails while offline
        return new Response('', { status: 408, statusText: 'Request timed out / offline' });
      });
    })
  );
});
