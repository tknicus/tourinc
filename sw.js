const CACHE_NAME = 'mmc-scanner-v3.40'; // ⬅️ GI-UPDATE NATO ANG VERSION ARON MO-DOWNLOAD OG BAG-O

// KINI ANG MGA FILES NGA I-DOWNLOAD UG I-SAVE SA SELPON INIG UNANG ABLI
const urlsToCache = [
  './',
  './index.html',
  './database.js', // ⬅️ IDUGANG: Ang imong masterlist
  './mmc.png', // ⬅️ IDUGANG: Ang watermark logo para sa picture
  './scan.html',
  './scan.json',
  './scan.png',
  './map.html',
  './logo.png',
  './tour-bg.jpg',
  './never_say_never.mp3', // ⬅️ IDUGANG: Ang para tugtog inig mag SEND sa DATA
  'https://unpkg.com/html5-qrcode', // ⬅️ IDUGANG: Ang utok sa QR Scanner
  'https://lh3.googleusercontent.com/d/1m1NrFKOMKh4YjoUdXD0KvxcpySM5RuwU', // Ang imong banner image
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/sweetalert2@8',
];


// 1. I-install ug i-cache ang mga files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache);
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
                // Kon walay internet ug gi-request ang scan.html, i-serve kini offline
                if (event.request.mode === 'navigate') {
                    return caches.match('./scan.html');
                }
            });
        })
    );
});