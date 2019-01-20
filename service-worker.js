self.addEventListener('install', function(event)
{
    caches
    .open("v1")
    .then(function(inCache)
    {
        return inCache.addAll([
            "/.",
            "/index.html"
        ]);
    })
    .then(function()
    {
        console.log("installed and cache added");
    });
});

self.addEventListener('activate', function(event) {
    console.log("activated");
});

self.addEventListener('fetch', function(event) {
    console.log(event.request);
});