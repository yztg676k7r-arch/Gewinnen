
const APP_VERSION = '1.0.0';
const VERIFIED_AT = '29.07.2026';
const STORAGE_KEY = 'gewinnen-user-v1';

const FALLBACK = [{"id": "dm-ob-starterset-2026", "title": "100 limitierte o.b. Startersets", "provider": "dm", "prize": "100 × limitiertes o.b. Starterset", "url": "https://www.dm.de/neu/gewinnspiele/ob-3493126", "category": "Beauty", "country": "Deutschland", "deadline": "13.08.2026", "winners": 100, "score": 91, "new": true, "daily": false, "international": false, "requirements": "Kostenloses Mein-dm-Konto", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026"}, {"id": "dm-adventskalender-2026", "title": "70 Adventskalender gewinnen", "provider": "dm", "prize": "70 Adventskalender verschiedener Marken", "url": "https://www.dm.de/neu/gewinnspiele/adventskalender-gewinnspiel-2948470", "category": "Beauty", "country": "Deutschland", "deadline": "16.08.2026", "winners": 70, "score": 88, "new": true, "daily": false, "international": false, "requirements": "Kostenloses Mein-dm-Konto", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026"}, {"id": "dm-seeberger-2026", "title": "VAUDE-Rucksack mit Snacks", "provider": "dm / Seeberger", "prize": "5 × VAUDE-Rucksack mit Seeberger-Snacks", "url": "https://www.dm.de/neu/gewinnspiele/seeberger-3487062", "category": "Freizeit", "country": "Deutschland", "deadline": "04.08.2026", "winners": 5, "score": 70, "new": true, "daily": false, "international": false, "requirements": "Kostenloses Mein-dm-Konto", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026"}, {"id": "dm-borotalco-2026", "title": "Borotalco-Produktpakete", "provider": "dm / Borotalco", "prize": "Borotalco-Produktpakete", "url": "https://www.dm.de/neu/gewinnspiele/borotalco-3487104", "category": "Beauty", "country": "Deutschland", "deadline": "05.08.2026", "winners": null, "score": 66, "new": true, "daily": false, "international": false, "requirements": "Kostenloses Mein-dm-Konto", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026"}, {"id": "rossmann-neonail-2026", "title": "100 NEONAIL-Sommerpakete", "provider": "ROSSMANN", "prize": "100 × NEONAIL-Sommerpaket mit Kosmetiktasche", "url": "https://www.rossmann.de/de/service-und-hilfe/rossmann-app", "category": "Beauty", "country": "Deutschland", "deadline": "02.08.2026", "winners": 100, "score": 90, "new": true, "daily": false, "international": false, "requirements": "Kostenlose ROSSMANN-App und Registrierung", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "note": "Teilnahme im Aktionsbereich der ROSSMANN-App."}, {"id": "rossmann-centaur-juli-2026", "title": "Centaur-Rätsel Juli", "provider": "ROSSMANN", "prize": "Reise-, Wellness- und Freizeitgewinne", "url": "https://www.rossmann.de/cms/gewinnspiele/centaur-raetsel-202607.html", "category": "Reisen", "country": "Deutschland", "deadline": "09.08.2026", "winners": null, "score": 65, "new": true, "daily": false, "international": false, "requirements": "ROSSMANN-App erforderlich", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026"}, {"id": "qvc-insider-2026", "title": "10 QVC-INSIDER-Jahresabos", "provider": "QVC", "prize": "10 × Jahresabo des QVC-Kundenmagazins INSIDER", "url": "https://www.qvc.de/content/nichts-verpassen/gewinnspiel/teilnahmebedingungen.html", "category": "Wohnen", "country": "Deutschland & Österreich", "deadline": "10.08.2026", "winners": 10, "score": 75, "new": true, "daily": false, "international": true, "requirements": "Teilnahmebedingungen auf der QVC-Seite beachten", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026"}, {"id": "schoener-wohnen-2026", "title": "Aktuelle Monatsgewinnspiele", "provider": "SCHÖNER WOHNEN", "prize": "Design-, Wohn-, Technik- und Reisegewinne", "url": "https://www.schoener-wohnen.de/gewinnspiele/", "category": "Wohnen", "country": "Deutschland", "deadline": "31.08.2026", "winners": null, "score": 59, "new": true, "daily": false, "international": false, "requirements": "Kostenlose Teilnahme über Bilderpuzzle und Formular", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "note": "Sammelseite; die genaue Frist steht beim jeweiligen Gewinnspiel."}, {"id": "dm-produkttests-2026", "title": "Aktuelle dm-Produkttests", "provider": "dm Produkttester", "prize": "Produkte kostenlos testen und bewerten", "url": "https://www.dm.de/neu/produkttest", "category": "Produkttests", "country": "Deutschland", "deadline": "31.08.2026", "winners": null, "score": 72, "new": true, "daily": false, "international": false, "requirements": "Kostenloses Mein-dm-Konto", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "note": "Sammelseite mit wechselnden Produkttests."}];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const safeJSON = (v, fallback) => { try { return v ? JSON.parse(v) : fallback; } catch { return fallback; } };

let contests = [...FALLBACK];
let user = safeJSON(localStorage.getItem(STORAGE_KEY), {items:{}, lastVisit:null});
let currentFilter = 'all';

function saveUser(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}
function stateFor(id){
  user.items[id] ??= {favorite:false, done:false};
  return user.items[id];
}
function parseDate(value){
  if(!value) return null;
  const [d,m,y] = value.split('.').map(Number);
  return new Date(y, m-1, d, 23, 59, 59);
}
function daysLeft(item){
  const date = parseDate(item.deadline);
  return date ? Math.ceil((date - new Date()) / 86400000) : 9999;
}
function isActive(item){
  return !item.purchaseRequired &&
         !item.receiptRequired &&
         !item.winnerKnown &&
         daysLeft(item) >= 0;
}
function activeContests(){
  return contests.filter(isActive);
}
function isNewSinceLastVisit(item){
  return item.new === true;
}
function matchesFilter(item, filter){
  if(filter === 'all') return true;
  if(filter === 'new') return isNewSinceLastVisit(item);
  if(filter === 'top') return (item.score || 0) >= 75;
  if(filter === 'ending') return daysLeft(item) <= 7;
  if(filter === 'international') return item.international === true;
  return item.category === filter;
}
function escapeHTML(value=''){
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}
function toast(message){
  const node = $('#toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => node.classList.remove('show'), 1700);
}
function toggleFavorite(id){
  const s = stateFor(id);
  s.favorite = !s.favorite;
  saveUser();
  renderAll();
  toast(s.favorite ? 'Zu Favoriten hinzugefügt' : 'Aus Favoriten entfernt');
}
function toggleDone(id){
  const s = stateFor(id);
  s.done = !s.done;
  saveUser();
  renderAll();
  toast(s.done ? 'Als teilgenommen markiert' : 'Markierung entfernt');
}
window.toggleFavorite = toggleFavorite;
window.toggleDone = toggleDone;

function badges(item){
  const left = daysLeft(item);
  return `
    <div class="badges">
      <span class="badge">${escapeHTML(item.category)}</span>
      ${(item.score||0)>=75 ? '<span class="badge score">Top-Chance</span>' : ''}
      ${left<=3 ? `<span class="badge hot">Noch ${left} Tag${left===1?'':'e'}</span>` : ''}
      ${item.international ? '<span class="badge intl">International</span>' : ''}
    </div>`;
}
function miniCard(item){
  const s = stateFor(item.id);
  return `<article class="mini-card">
    <div class="provider">${escapeHTML(item.provider)}</div>
    <h3>${escapeHTML(item.title)}</h3>
    ${badges(item)}
    <div class="prize">🎁 ${escapeHTML(item.prize)}</div>
    <div class="mini-actions">
      <a class="primary" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">Teilnehmen</a>
      <button class="secondary" onclick="toggleFavorite('${escapeHTML(item.id)}')" aria-label="Favorit">${s.favorite?'♥':'♡'}</button>
    </div>
  </article>`;
}
function fullCard(item){
  const s = stateFor(item.id);
  const left = daysLeft(item);
  const winnerText = item.winners ? `${item.winners} bekannte Gewinne` : 'Gewinnerzahl nicht angegeben';
  return `<article class="contest-card">
    <div class="card-top">
      <div>
        <div class="provider">${escapeHTML(item.provider)}</div>
        <h3>${escapeHTML(item.title)}</h3>
      </div>
      <button class="heart ${s.favorite?'active':''}" onclick="toggleFavorite('${escapeHTML(item.id)}')" aria-label="Favorit">${s.favorite?'♥':'♡'}</button>
    </div>
    ${badges(item)}
    <div class="prize">🎁 ${escapeHTML(item.prize)}</div>
    <div class="scoreline"><strong>${item.score || 0}/100</strong><div class="scorebar"><i style="width:${Math.min(100,item.score||0)}%"></i></div></div>
    <div class="details">
      Teilnahmeschluss: ${escapeHTML(item.deadline)} · ${left===0?'endet heute':`${left} Tag${left===1?'':'e'} übrig`}<br>
      ${escapeHTML(winnerText)} · ${escapeHTML(item.country)}<br>
      ${escapeHTML(item.requirements || 'Keine zusätzlichen Angaben')}
      ${item.note ? `<br>${escapeHTML(item.note)}` : ''}
      <br>Geprüft: ${escapeHTML(item.verified || VERIFIED_AT)}
    </div>
    <div class="card-actions">
      <a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">Teilnehmen ↗</a>
      <button class="${s.done?'done':''}" onclick="toggleDone('${escapeHTML(item.id)}')">${s.done?'✓ Erledigt':'Teilgenommen'}</button>
    </div>
  </article>`;
}
function renderMetrics(){
  const all = activeContests();
  const done = all.filter(x => stateFor(x.id).done).length;
  const metrics = [
    ['🎁', all.filter(isNewSinceLastVisit).length, 'neu geprüft', 'new'],
    ['⭐', all.filter(x => (x.score||0)>=75).length, 'Top-Chancen', 'top'],
    ['⏳', all.filter(x => daysLeft(x)<=7).length, 'enden bald', 'ending'],
    ['✓', done, 'teilgenommen', 'doneView']
  ];
  $('#metrics').innerHTML = metrics.map(([icon,n,label,target]) =>
    `<button class="metric" data-metric="${target}"><b>${icon}</b><strong>${n}</strong><span>${label}</span></button>`
  ).join('');
}
function renderHome(){
  const all = activeContests();
  $('#topCarousel').innerHTML = all.filter(x => (x.score||0)>=75).sort((a,b)=>b.score-a.score).slice(0,5).map(miniCard).join('') || empty('Noch keine Top-Chancen vorhanden.');
  $('#newCarousel').innerHTML = all.filter(isNewSinceLastVisit).slice(0,5).map(miniCard).join('') || empty('Seit dem letzten Update nichts Neues.');
  $('#endingCarousel').innerHTML = all.filter(x=>daysLeft(x)<=7).sort((a,b)=>daysLeft(a)-daysLeft(b)).slice(0,5).map(miniCard).join('') || empty('In den nächsten sieben Tagen endet nichts.');
}
function empty(text){
  return `<div class="empty">${escapeHTML(text)}</div>`;
}
function discoverItems(){
  const q = ($('#searchInput')?.value || '').trim().toLowerCase();
  const sort = $('#sortSelect')?.value || 'score';
  let list = activeContests().filter(x => matchesFilter(x,currentFilter));
  if(q){
    list = list.filter(x => JSON.stringify(x).toLowerCase().includes(q));
  }
  list.sort((a,b)=>{
    if(sort==='deadline') return daysLeft(a)-daysLeft(b);
    if(sort==='new') return Number(b.new)-Number(a.new);
    if(sort==='provider') return a.provider.localeCompare(b.provider,'de');
    return (b.score||0)-(a.score||0);
  });
  return list;
}
function renderDiscover(){
  const list = discoverItems();
  $('#resultCount').textContent = `${list.length} Ergebnis${list.length===1?'':'se'}`;
  $('#contestList').innerHTML = list.map(fullCard).join('') || empty('Keine passenden aktiven Gewinnspiele gefunden.');
}
function renderPersonal(){
  const all = activeContests();
  const favorites = all.filter(x=>stateFor(x.id).favorite);
  const done = all.filter(x=>stateFor(x.id).done);
  $('#favoriteList').innerHTML = favorites.map(fullCard).join('') || empty('Deine Favoriten erscheinen hier.');
  $('#doneList').innerHTML = done.map(fullCard).join('') || empty('Hier siehst du später alle markierten Teilnahmen.');
}
function renderAll(){
  renderMetrics();
  renderHome();
  renderDiscover();
  renderPersonal();
}
function openView(viewId){
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===viewId));
  $$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.view===viewId));
  window.scrollTo({top:0,behavior:'smooth'});
}
function openDiscover(filter){
  currentFilter = filter;
  $$('.chip').forEach(c=>c.classList.toggle('active',c.dataset.filter===filter));
  openView('discoverView');
  renderDiscover();
}
async function loadData(){
  let usedFallback = true;
  try{
    const response = await fetch(`./data/contests.json?v=${Date.now()}`, {cache:'no-store'});
    if(response.ok){
      const payload = await response.json();
      if(Array.isArray(payload.contests) && payload.contests.length){
        contests = payload.contests;
        usedFallback = false;
      }
    }
  }catch(error){
    console.warn('Datendatei nicht verfügbar, integrierte Daten werden verwendet.', error);
  }
  renderAll();
  if(usedFallback) toast('Offline-Daten geladen');
}

$$('.nav-item').forEach(btn=>btn.addEventListener('click',()=>openView(btn.dataset.view)));
$$('.chip').forEach(btn=>btn.addEventListener('click',()=>{
  currentFilter=btn.dataset.filter;
  $$('.chip').forEach(c=>c.classList.toggle('active',c===btn));
  renderDiscover();
}));
$$('[data-show]').forEach(btn=>btn.addEventListener('click',()=>openDiscover(btn.dataset.show)));
$('#searchInput').addEventListener('input',renderDiscover);
$('#sortSelect').addEventListener('change',renderDiscover);
$('#refreshBtn').addEventListener('click', async ()=>{
  $('#refreshBtn').animate([{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{duration:500});
  await loadData();
  toast('Daten neu geladen');
});
document.addEventListener('click',e=>{
  const metric=e.target.closest('[data-metric]');
  if(!metric) return;
  const target=metric.dataset.metric;
  if(target==='doneView') openView('doneView'); else openDiscover(target);
});

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
user.lastVisit = new Date().toISOString();
saveUser();
loadData();
