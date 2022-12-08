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