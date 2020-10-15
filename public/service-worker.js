const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/styles.css",
    "/index.js",
    "/manifest.json",
   ];
   
const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
   
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(DATA_CACHE_NAME).then(cache => {
        console.log("cache installing");
        return cache.addAll(FILES_TO_CACHE)
    })
    );
    self.skipWaiting();
});