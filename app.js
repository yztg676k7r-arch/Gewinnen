const VERIFIED_AT = '29.07.2026';
const FALLBACK = [
 {id:'dm-ob-2026',title:'100 o.b. Startersets',provider:'dm',prize:'100 × limitiertes o.b. Starterset',url:'https://www.dm.de/neu/gewinnspiele/ob-3493126',category:'Beauty',country:'Deutschland',deadline:'13.08.2026',winners:100,chance:88,new:true,account:'dm-Konto erforderlich',purchaseRequired:false,verified:VERIFIED_AT},
 {id:'dm-seeberger-2026',title:'VAUDE Rucksack & Snacks',provider:'dm / Seeberger',prize:'5 × VAUDE Rucksack mit Seeberger-Snacks',url:'https://www.dm.de/neu/gewinnspiele/seeberger-3487062',category:'Freizeit',country:'Deutschland',deadline:'04.08.2026',winners:5,chance:67,new:true,account:'dm-Konto erforderlich',purchaseRequired:false,verified:VERIFIED_AT},
 {id:'dm-borotalco-2026',title:'Borotalco-Pakete oder dm-Gutscheine',provider:'dm / Borotalco',prize:'Produktpakete und dm-Gutscheine',url:'https://www.dm.de/neu/gewinnspiele/borotalco-3487104',category:'Beauty',country:'Deutschland',deadline:'05.08.2026',winners:null,chance:64,new:true,account:'dm-Konto erforderlich',purchaseRequired:false,verified:VERIFIED_AT},
 {id:'hammerite-2026',title:'Feuerschale Moon & Metall-Schutzlack',provider:'Hammerite / BILD',prize:'Höfats Feuerschale Moon plus Lack, über 500 €',url:'https://www.bild.de/service/gewinnspiel/hammerite-gewinnspiel-teilnahmebedingungen-6a4f61a1bb0cf80de56a334e',category:'Garten',country:'Deutschland',deadline:'05.08.2026',winners:1,chance:46,new:true,purchaseRequired:false,verified:VERIFIED_AT},
 {id:'qvc-insider-2026',title:'10 QVC-INSIDER-Jahresabos',provider:'QVC',prize:'10 × Jahresabo des Kundenmagazins INSIDER',url:'https://www.qvc.de/content/nichts-verpassen/gewinnspiel/teilnahmebedingungen.html',category:'Wohnen',country:'Deutschland & Österreich',deadline:'10.08.2026',winners:10,chance:70,new:true,account:'QVC-Kundenkonto erforderlich',purchaseRequired:false,verified:VERIFIED_AT,international:true},
 {id:'ferrero-july-2026',title:'200 nivocase-Gutscheine',provider:'Ferrero',prize:'200 × Gutschein im Wert von 35 €',url:'https://www.myferrero.de/loyalty-route/teilnahmebedingungen',category:'Gutscheine',country:'Deutschland',deadline:'31.07.2026',winners:200,chance:92,new:true,account:'Newsletter-Anmeldung erforderlich',purchaseRequired:false,verified:VERIFIED_AT},
 {id:'rossmann-hub-2026',title:'Aktuelle ROSSMANN-Gewinnspiele',provider:'ROSSMANN',prize:'Mehrere laufende Aktionen in der ROSSMANN-App',url:'https://www.rossmann.de/de/gewinnspiele',category:'Beauty',country:'Deutschland',deadline:'09.08.2026',winners:null,chance:60,new:true,account:'ROSSMANN-App und Registrierung erforderlich',purchaseRequired:false,verified:VERIFIED_AT,note:'Sammelseite mit mehreren aktiven Aktionen.'},
 {id:'schoener-wohnen-hub-2026',title:'SCHÖNER WOHNEN Monatsgewinnspiele',provider:'SCHÖNER WOHNEN',prize:'Aktuelle Preise aus Wohnen, Garten, Reisen und Technik',url:'https://www.schoener-wohnen.de/gewinnspiele/',category:'Wohnen',country:'Deutschland',deadline:'31.08.2026',winners:null,chance:54,new:true,purchaseRequired:false,verified:VERIFIED_AT,note:'Sammelseite; Frist beim jeweiligen Gewinnspiel prüfen.'}
];
const $=s=>document.querySelector(s);
let contests=[...FALLBACK];
let filter='all';
let saved=safeParse(localStorage.getItem('gewinnen-state'),{});
function safeParse(v,f){try{return v?JSON.parse(v):f}catch{return f}}
function parseDate(s){if(!s)return null;const [d,m,y]=s.split('.').map(Number);return new Date(y,m-1,d,23,59,59)}
function expired(x){const d=parseDate(x.deadline);return d&&d<new Date()}
function active(){return contests.filter(x=>!x.purchaseRequired&&!x.winnerKnown&&!expired(x))}
function days(x){const d=parseDate(x.deadline);return d?Math.ceil((d-new Date())/86400000):9999}
function toggle(id,key){saved[id]=saved[id]||{};saved[id][key]=!saved[id][key];localStorage.setItem('gewinnen-state',JSON.stringify(saved));render()}
window.toggle=toggle;
async function load(){
  let source='integrierte geprüfte Daten';
  try{
    const r=await fetch('./data/contests.json?v='+Date.now(),{cache:'no-store'});
    if(r.ok){const p=await r.json();if(Array.isArray(p.contests)&&p.contests.length){contests=p.contests;source='aktualisierte Datendatei'}}
  }catch(e){}
  $('#status').textContent=`Stand ${VERIFIED_AT} · ${source} · ${active().length} aktive Einträge`;
  render();
}
function matches(x){
 const q=$('#search').value.trim().toLowerCase();
 if(q&&!JSON.stringify(x).toLowerCase().includes(q))return false;
 if(filter==='new'&&!x.new)return false;
 if(filter==='beauty'&&x.category!=='Beauty')return false;
 if(filter==='home'&&!['Wohnen','Garten'].includes(x.category))return false;
 if(filter==='international'&&!x.international)return false;
 if(filter==='fav'&&!(saved[x.id]||{}).fav)return false;
 return true;
}
function render(){
 const all=active();let list=all.filter(matches);const sort=$('#sort').value;
 list.sort((a,b)=>sort==='deadline'?days(a)-days(b):sort==='new'?(b.new?1:0)-(a.new?1:0):sort==='provider'?a.provider.localeCompare(b.provider):(b.chance||0)-(a.chance||0));
 const done=all.filter(x=>(saved[x.id]||{}).done).length;
 $('#stats').innerHTML=`<span class="stat">${all.length} aktiv</span><span class="stat">${all.filter(x=>x.winners>=10).length} viele Gewinner</span><span class="stat">${done} erledigt</span>`;
 $('#archiveInfo').textContent=`${contests.filter(expired).length} abgelaufene Einträge werden derzeit automatisch ausgeblendet.`;
 $('#cards').innerHTML=list.length?list.map(x=>{
  const s=saved[x.id]||{},left=days(x),urgent=left<=3;
  return `<article class="card"><div class="cardtop"><div><h3>${x.title}</h3><div class="provider">${x.provider}</div></div><button class="fav" onclick="toggle('${x.id}','fav')" aria-label="Favorit">${s.fav?'★':'☆'}</button></div><div class="badges"><span class="badge">${x.category}</span>${x.new?'<span class="badge new">Neu geprüft</span>':''}${x.international?'<span class="badge intl">International</span>':''}${urgent?`<span class="badge deadline">Noch ${left} Tag${left===1?'':'e'}</span>`:''}</div><div class="prize">🎁 ${x.prize}</div><div class="meta"><span class="score">Gewinn-Score ${x.chance}/100</span><br>Teilnahmeschluss: ${x.deadline}<br>${x.winners?`${x.winners} bekannte Gewinne<br>`:''}${x.country}${x.account?`<br>${x.account}`:''}${x.note?`<br>${x.note}`:''}<br>Link geprüft: ${x.verified}</div><div class="actions"><a href="${x.url}" target="_blank" rel="noopener noreferrer">Teilnehmen ↗</a><button class="${s.done?'done':''}" onclick="toggle('${x.id}','done')">${s.done?'✓ Erledigt':'Teilgenommen'}</button></div></article>`
 }).join(''):'<div class="empty">Hier ist gerade nichts zu sehen. Wähle „Alle“ oder lösche den Suchbegriff.</div>';
}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;render()});
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>document.querySelector(`.tab[data-filter="${b.dataset.go}"]`).click());
$('#search').oninput=render;$('#sort').onchange=render;$('#refresh').onclick=()=>{location.reload()};
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js?v=3');
load();
