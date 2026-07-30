const CACHE='win-win-4.5';
const CORE=['./','./index.html','./styles-4.5.css','./app-4.5.js','./manifest.webmanifest','./version.json','./apple-touch-icon.png','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
const OPTIONAL_DATA=['./data/contests.json','./contests.json','./data/sources.json','./sources.json'];
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(CORE);await Promise.allSettled(OPTIONAL_DATA.map(path=>cache.add(path)))})());self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 const isJson=url.pathname.endsWith('.json');
 const isNavigation=event.request.mode==='navigate';
 if(isJson||isNavigation){
  event.respondWith((async()=>{try{const response=await fetch(event.request,{cache:'no-store'});if(!response.ok)throw new Error('HTTP '+response.status);const cache=await caches.open(CACHE);cache.put(event.request,response.clone());return response}catch(error){return (await caches.match(event.request,{ignoreSearch:true}))||(isNavigation?await caches.match('./index.html'):new Response(JSON.stringify({error:'Datei nicht verfügbar'}),{status:404,headers:{'Content-Type':'application/json'}}))}})());return;
 }
 event.respondWith((async()=>{const cached=await caches.match(event.request,{ignoreSearch:true});const network=fetch(event.request).then(async response=>{if(response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone())}return response}).catch(()=>null);return cached||(await network)||(await caches.match('./index.html'))})());
});
