const CACHE='win-win-2.5';
const CORE=[
 './','./index.html','./styles.css','./app.js','./manifest.webmanifest',
 './apple-touch-icon.png','./icons/icon-180.png','./icons/icon-192.png',
 './icons/icon-512.png','./data/contests.json'
];

self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
 self.skipWaiting();
});

self.addEventListener('activate',event=>{
 event.waitUntil(
   caches.keys().then(keys=>Promise.all(
     keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))
   ))
 );
 self.clients.claim();
});

self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);

 // JSON: Netzwerk zuerst, danach ausschließlich die echte JSON-Kopie.
 // Niemals index.html als Ersatz liefern.
 if(url.pathname.endsWith('/data/contests.json')){
   event.respondWith(
     fetch(event.request,{cache:'no-store'})
       .then(response=>{
         if(!response.ok)throw new Error('JSON HTTP '+response.status);
         const copy=response.clone();
         caches.open(CACHE).then(cache=>cache.put('./data/contests.json',copy));
         return response;
       })
       .catch(()=>caches.match('./data/contests.json'))
   );
   return;
 }

 // App-Dateien: Netzwerk zuerst, Cache als Offline-Ersatz.
 event.respondWith(
   fetch(event.request)
     .then(response=>{
       const copy=response.clone();
       caches.open(CACHE).then(cache=>cache.put(event.request,copy));
       return response;
     })
     .catch(async()=>{
       const cached=await caches.match(event.request,{ignoreSearch:true});
       return cached || caches.match('./index.html');
     })
 );
});
