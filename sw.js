const CACHE_NAME = 'mmc-scanner-v3.36'; // ⬅️ GI-UPDATE NATO ANG VERSION ARON MO-DOWNLOAD OG BAG-O

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


// 1. INSTALL EVENT: I-download ug i-save ang mga files sa celfon cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// 2. FETCH EVENT: I-serve ang files gikan sa cache kung offline na
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Kung naa sa cache, ihatag dayon bisan walay internet
        if (response) {
          return response;
        }
        // Kung wala, kuhaa sa network kung online
        return fetch(event.request);
      })
  );
});

// 3. ACTIVATE EVENT: Limpyohi ang mga karaan nga cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 1. Paspas nga i-activate ang bag-ong Service Worker nga walay hulat-hulat
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// 2. Kuhaon dayon ang kontrol sa mga bukas nga tabs sa app
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});