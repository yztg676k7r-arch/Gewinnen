const CACHE='win-win-4.3';
const CORE=[
 './','./index.html','./styles.css?v=4.3','./app.js?v=4.3','./manifest.webmanifest',
 './apple-touch-icon.png','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'
];
const OPTIONAL_DATA=['./data/contests.json','./contests.json','./data/sources.json','./sources.json'];

self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(CORE);
  await Promise.allSettled(OPTIONAL_DATA.map(path=>cache.add(path)));
 })());
 self.skipWaiting();
});

self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
  await self.clients.claim();
 })());
});

self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 const isJson=url.pathname.endsWith('/contests.json')||url.pathname.endsWith('/sources.json');
 if(isJson){
  event.respondWith((async()=>{
   try{
    const response=await fetch(event.request,{cache:'no-store'});
    if(!response.ok)throw new Error('JSON HTTP '+response.status);
    const cache=await caches.open(CACHE);
    cache.put(event.request,response.clone());
    return response;
   }catch(error){
    const cached=await caches.match(event.request,{ignoreSearch:true});
    if(cached)return cached;
    return new Response(JSON.stringify({error:'Datei nicht verfügbar'}),{status:404,headers:{'Content-Type':'application/json'}});
   }
  })());
  return;
 }
 event.respondWith((async()=>{
  try{
   const response=await fetch(event.request);
   if(response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone())}
   return response;
  }catch(error){
   return (await caches.match(event.request,{ignoreSearch:true}))||(await caches.match('./index.html'));
  }
 })());
});
