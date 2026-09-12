const CACHE_NAME = 'mmc-scanner-v3.46'; // ⬅️ GI-UPDATE NATO ANG VERSION

// KINI ANG MGA FILES NGA I-DOWNLOAD UG I-SAVE SA SELPON
const assetsToCache = [
    './',
    './index.html',
    './database.js',
    './mmc.png',
    './scan.html',
    './scan.json',
    './scan.png',
    './map.html',
    './logo.png',
    './tour-bg.jpg',
    './never_say_never.mp3',
    'https://unpkg.com/html5-qrcode',
    'https://lh3.googleusercontent.com/d/1m1NrFKOMKh4YjoUdXD0KvxcpySM5RuwU',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/sweetalert2@8',
];

// 1. I-install ug i-cache ang mga files (Gamit ang Promise.allSettled aron dili mag-crash ang SW kung naay external link nga mapakyas)
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return Promise.allSettled(
                assetsToCache.map(url => 
                    cache.add(url).catch(err => console.log('Skipped/Failed to cache external asset:', url))
                )
            );
        })
    );
    self.skipWaiting();
});

// 2. I-activate ug limpyohi ang mga daan nga cache
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clientsClaim();
});

// 3. Intercept ang mga request: kuhaa sa cache kon offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('./scan.html');
                }
            });
        })
    );
});