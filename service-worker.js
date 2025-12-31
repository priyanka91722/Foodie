const CACHE_NAME = "foodie-cache-v1";

const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/js/app.js",
  "/js/i18n.js",
  "/locales/en.json",
  "/locales/hi.json",
  "/locales/mr.json",
  "/locales/ta.json",
  "/locales/gu.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
