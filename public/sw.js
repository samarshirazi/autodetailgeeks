// Service Worker for AutoDetail Geeks
// Aggressive caching strategy for third-party resources

const CACHE_VERSION = 'v1';
const CACHE_NAME = `autodetail-geeks-${CACHE_VERSION}`;

// Resources to cache
const THIRD_PARTY_CACHE = 'third-party-cache-v1';
const FONT_CACHE = 'fonts-cache-v1';
const IMAGE_CACHE = 'images-cache-v1';

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/mainlogo.png'
      ]);
    })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME &&
                                 cacheName !== THIRD_PARTY_CACHE &&
                                 cacheName !== FONT_CACHE &&
                                 cacheName !== IMAGE_CACHE)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Font caching - Cache first, network fallback (1 year)
  if (url.hostname.includes('fonts.googleapis.com') ||
      url.hostname.includes('fonts.gstatic.com') ||
      url.hostname.includes('fonts.bunny.net') ||
      request.destination === 'font') {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            return response;
          }
          return fetch(request).then((networkResponse) => {
            // Cache for 1 year
            const clonedResponse = networkResponse.clone();
            const headers = new Headers(clonedResponse.headers);
            headers.set('Cache-Control', 'public, max-age=31536000, immutable');

            cache.put(request, new Response(clonedResponse.body, {
              status: clonedResponse.status,
              statusText: clonedResponse.statusText,
              headers: headers
            }));
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Third-party chat widget - Cache with network fallback
  if (url.hostname.includes('leadconnectorhq.com') ||
      url.hostname.includes('msgsndr.com')) {
    event.respondWith(
      caches.open(THIRD_PARTY_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          const fetchPromise = fetch(request).then((networkResponse) => {
            // Cache for 24 hours instead of 4 hours
            const clonedResponse = networkResponse.clone();
            const headers = new Headers(clonedResponse.headers);
            headers.set('Cache-Control', 'public, max-age=86400');

            cache.put(request, new Response(clonedResponse.body, {
              status: clonedResponse.status,
              statusText: clonedResponse.statusText,
              headers: headers
            }));
            return networkResponse;
          }).catch(() => {
            // Return cached version if network fails
            return response;
          });

          // Return cached version immediately if available
          return response || fetchPromise;
        });
      })
    );
    return;
  }

  // Image caching - Cache first, network fallback
  if (request.destination === 'image' ||
      /\.(png|jpg|jpeg|webp|svg|gif)$/.test(url.pathname)) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            return response;
          }
          return fetch(request).then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Default: Network first, cache fallback
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});
