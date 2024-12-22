const CACHE_NAME = "bizkey-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css", // Replace with your actual CSS file path
  "/img/logo.jpeg",
  "/img/logo-192x192.png",
  "/img/logo-512x512.png",
  "/js/script.js" // Replace with your actual JS file path
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
