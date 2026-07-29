
const $ = s => document.querySelector(s);
let contests = [];
let state = JSON.parse(localStorage.getItem('gewinnen-state') || '{}');
let settings = JSON.parse(localStorage.getItem('gewinnen-settings') || '{"showArchive":false}');
let currentFilter = 'all';

function parseGermanDate(d){
  if(!d) return null;
  const parts=d.split('.');
  if(parts.length!==3) return null;
  const [dd,mm,yy]=parts.map(Number);
  return new Date(yy,mm-1,dd,23,59,59);
}
function isExpired(x){
  const end=parseGermanDate(x.deadline);
  return end ? end < new Date() : false;
}
function isArchived(x){
  return isExpired(x) || x.winnerKnown === true || x.status === 'Gewinner feststehend' || x.status === 'Abgelaufen';
}
function eligible(x){
  return x.purchaseRequired !== true && !isArchived(x);
}
async function loadData(){
  try{
    const res = await fetch(`data/contests.json?v=${Date.now()}`, {cache:'no-store'});
    const payload = await res.json();
    contests = (payload.contests || []).filter(x => x.purchaseRequired !== true);
    $('#updated').textContent = payload.updated ? new Date(payload.updated).toLocaleString('de-DE') : 'unbekannt';
  }catch(e){
    const cached = localStorage.getItem('gewinnen-cache');
    if(cached) contests = JSON.parse(cached);
  }
  localStorage.setItem('gewinnen-cache', JSON.stringify(contests));
  render();
}
function saveState(){
  localStorage.setItem('gewinnen-state',JSON.stringify(state));
  localStorage.setItem('gewinnen-settings',JSON.stringify(settings));
}
function daysLeft(d){
  const end=parseGermanDate(d);
  return end ? Math.ceil((end-new Date())/86400000) : 99999;
}
function filtered(){
  const q=$('#search').value.toLowerCase().trim();
  let a=contests.filter(x=>settings.showArchive ? true : eligible(x));
  a=a.filter(x=>!q || JSON.stringify(x).toLowerCase().includes(q));
  a=a.filter(x=>{
    const s=state[x.id]||{};
    if(currentFilter==='new') return x.new && !isArchived(x);
    if(currentFilter==='daily') return (x.frequency||'').toLowerCase().includes('täglich') && !isArchived(x);
    if(currentFilter==='regional') return x.region && x.region!=='Deutschland' && !isArchived(x);
    if(currentFilter==='fav') return s.fav && !isArchived(x);
    if(currentFilter==='open') return !s.done && !isArchived(x);
    if(currentFilter==='archive') return isArchived(x);
    return true;
  });
  const sort=$('#sort').value;
  a.sort((a,b)=> sort==='chance'?(b.chance||0)-(a.chance||0):
                      sort==='deadline'?daysLeft(a.deadline)-daysLeft(b.deadline):
                      sort==='new'?(b.new?1:0)-(a.new?1:0):
                      (a.provider||'').localeCompare(b.provider||''));
  return a;
}
function toggle(id,key){
  state[id]=state[id]||{};
  state[id][key]=!state[id][key];
  saveState();render();
}
function toggleArchive(){
  settings.showArchive=!settings.showArchive;
  saveState();
  $('#archiveToggle').textContent=settings.showArchive?'Archiv ausblenden':'Archiv anzeigen';
  render();
}
function render(){
  const active=contests.filter(eligible);
  const archived=contests.filter(isArchived);
  const a=filtered();
  const done=Object.values(state).filter(x=>x.done).length;
  const daily=active.filter(x=>(x.frequency||'').toLowerCase().includes('täglich')).length;
  $('#stats').innerHTML=`<span class="stat">${active.length} aktiv</span><span class="stat">${daily} täglich</span><span class="stat">${done} erledigt</span><span class="stat">${archived.length} archiviert</span>`;
  $('#archiveToggle').textContent=settings.showArchive?'Archiv ausblenden':'Archiv anzeigen';
  $('#cards').innerHTML=a.length?a.map(x=>{
    const s=state[x.id]||{};
    const stars='★'.repeat(x.chance||0)+'☆'.repeat(5-(x.chance||0));
    const d=(x.frequency||'').toLowerCase().includes('täglich');
    const archivedFlag=isArchived(x);
    return `<article class="card ${archivedFlag?'archived':''}">
      <div class="cardtop"><div><h3>${x.title}</h3><div class="provider">${x.provider||''}</div></div>
      <button class="fav" onclick="toggle('${x.id}','fav')">${s.fav?'⭐':'☆'}</button></div>
      <div class="badges">
        ${x.category?`<span class="badge">${x.category}</span>`:''}
        ${x.new&&!archivedFlag?'<span class="badge new">Neu</span>':''}
        ${d&&!archivedFlag?'<span class="badge daily">Täglich möglich</span>':''}
        ${x.region?`<span class="badge">${x.region}</span>`:''}
        ${archivedFlag?'<span class="badge hot">Archiv</span>':''}
      </div>
      <div class="prize">🎁 ${x.prize}</div>
      <div class="meta">Chance: ${stars}<br>
      ${x.deadline?'Teilnahmeschluss: '+x.deadline+'<br>':''}
      ${x.winners?'Bekannte Gewinnerzahl: '+x.winners+'<br>':''}
      ${x.winnerKnown===true?'Gewinner stehen fest<br>':''}
      Geprüft: ${x.verified||'unbekannt'}${x.note?'<br>'+x.note:''}</div>
      <div class="actions">
        ${archivedFlag?'<span class="go disabled">Nicht mehr aktiv</span>':`<a class="go" href="${x.url}" target="_blank" rel="noopener">Teilnehmen</a>`}
        <button class="${s.done?'done':''}" onclick="toggle('${x.id}','done')">${s.done?'✓ Erledigt':'Teilgenommen'}</button>
        <button onclick="navigator.share?navigator.share({title:'${x.title}',url:'${x.url}'}):navigator.clipboard.writeText('${x.url}')">Teilen</button>
      </div>
    </article>`
  }).join(''):'<div class="empty">Keine passenden Gewinnspiele gefunden.</div>';
}
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');currentFilter=b.dataset.filter;render();
}));
$('#search').addEventListener('input',render);
$('#sort').addEventListener('change',render);
$('#refresh').addEventListener('click',loadData);
$('#archiveToggle').addEventListener('click',toggleArchive);
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
loadData();
