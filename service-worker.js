importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox)
{
    workbox.precaching.precacheAndRoute([
        '/index.html',
    ]);

    workbox.routing.registerRoute(
        '//api.boxcast.com/channels/zqpjrxasjzj9eugdcdxg/broadcasts',
        workbox.strategies.cacheFirst(
        {
            plugins: [
                new workbox.cacheableResponse.Plugin(
                {
                    statuses: [0, 200]
                })
            ]
        }),
    );

    workbox.routing.registerRoute(
        /.*\.(?:png|jpg|jpeg|svg|gif)/,
        workbox.strategies.cacheFirst(
        {
            cacheName: 'images',
            plugins: [
                new workbox.expiration.Plugin(
                {
                    maxEntries: 20,
                    maxAgeSeconds: 2 * 60 * 60,
                })
            ],
        })
    );

}