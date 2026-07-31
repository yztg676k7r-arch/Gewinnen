const CACHE='win-win-5.0';
const CORE=['./','./index.html','./styles.css?v=5.0','./app.js?v=5.0','./manifest.webmanifest','./version.json','./apple-touch-icon.png','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
const DATA_PATHS=['./contests.json','./data/sources.json','./sources.json'];
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(CORE);await Promise.allSettled(DATA_PATHS.map(path=>fetch(path,{cache:'no-store'}).then(r=>r.ok?cache.put(path,r):null)))})());self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 const isJson=url.pathname.endsWith('.json');
 const isNavigation=event.request.mode==='navigate';
 if(isJson||isNavigation){
  event.respondWith((async()=>{try{const response=await fetch(event.request,{cache:'no-store'});if(!response.ok)throw new Error('HTTP '+response.status);const cache=await caches.open(CACHE);cache.put(event.request,response.clone());return response}catch(error){return (await caches.match(event.request,{ignoreSearch:true}))||(isNavigation?await caches.match('./index.html'):new Response(JSON.stringify({error:'Datei nicht verfügbar'}),{status:404,headers:{'Content-Type':'application/json'}}))}})());return;
 }
 event.respondWith((async()=>{try{const response=await fetch(event.request);if(response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone())}return response}catch(error){return (await caches.match(event.request,{ignoreSearch:true}))||(await caches.match('./index.html'))}})());
});
