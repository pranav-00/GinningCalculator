self.addEventListener("install", e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(["./index.html", "./export.html", "./conv.html", "./oil.html", "./logo.png", "./screen.js", "./script.js", "./style.css"]);
        })
    );
});
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(Response => {
            return Response || fetch(e.request)
        })
    )
})
self.addEventListener('activate', (event) => {
    const ca = [];
    ca.push('static');

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!ca.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})