
const APP_VERSION='2.5.1';
const STORAGE_KEY='gewinnen-user-v1';
const STORAGE_BACKUP_KEY='gewinnen-user-backup-v1';
const USER_SCHEMA_VERSION=2;
const CUSTOM_DATA_KEY='winwin-custom-contests-v1';
const FILTER_STORAGE_KEY='winwin-discover-filters-v1';
const DASHBOARD_SHOW_ALL_KEY='winwin-dashboard-show-all-v1';
const FALLBACK=[{"id": "dm-ob-starterset-2026", "title": "100 limitierte o.b. Startersets", "provider": "dm", "prize": "100 × limitiertes o.b. Starterset", "url": "https://www.dm.de/neu/gewinnspiele/ob-3493126", "category": "Beauty", "country": "Deutschland", "deadline": "13.08.2026", "winners": 100, "new": true, "daily": false, "international": false, "requirements": "Kostenloses Mein-dm-Konto", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "providerTrust": 5, "effort": 1, "entryType": "form", "multipleEntry": false, "highValuePrize": false, "tags": ["Beauty", "viele Gewinner", "schnell"]}, {"id": "dm-adventskalender-2026", "title": "70 Adventskalender gewinnen", "provider": "dm", "prize": "70 Adventskalender verschiedener Marken", "url": "https://www.dm.de/neu/gewinnspiele/adventskalender-gewinnspiel-2948470", "category": "Beauty", "country": "Deutschland", "deadline": "16.08.2026", "winners": 70, "new": true, "daily": false, "international": false, "requirements": "Kostenloses Mein-dm-Konto", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "providerTrust": 5, "effort": 1, "entryType": "form", "multipleEntry": false, "highValuePrize": false, "tags": ["Beauty", "viele Gewinner", "schnell"]}, {"id": "dm-seeberger-2026", "title": "VAUDE-Rucksack mit Snacks", "provider": "dm / Seeberger", "prize": "5 × VAUDE-Rucksack mit Seeberger-Snacks", "url": "https://www.dm.de/neu/gewinnspiele/seeberger-3487062", "category": "Freizeit", "country": "Deutschland", "deadline": "04.08.2026", "winners": 5, "new": true, "daily": false, "international": false, "requirements": "Kostenloses Mein-dm-Konto", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "providerTrust": 5, "effort": 1, "entryType": "form", "multipleEntry": false, "highValuePrize": true, "tags": ["Freizeit", "schnell"]}, {"id": "dm-borotalco-2026", "title": "Borotalco-Produktpakete", "provider": "dm / Borotalco", "prize": "Borotalco-Produktpakete", "url": "https://www.dm.de/neu/gewinnspiele/borotalco-3487104", "category": "Beauty", "country": "Deutschland", "deadline": "05.08.2026", "winners": null, "new": true, "daily": false, "international": false, "requirements": "Kostenloses Mein-dm-Konto", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "providerTrust": 5, "effort": 1, "entryType": "form", "multipleEntry": false, "highValuePrize": false, "tags": ["Beauty", "schnell"]}, {"id": "rossmann-neonail-2026", "title": "100 NEONAIL-Sommerpakete", "provider": "ROSSMANN", "prize": "100 × NEONAIL-Sommerpaket mit Kosmetiktasche", "url": "https://www.rossmann.de/de/service-und-hilfe/rossmann-app", "category": "Beauty", "country": "Deutschland", "deadline": "02.08.2026", "winners": 100, "new": true, "daily": false, "international": false, "requirements": "Kostenlose ROSSMANN-App und Registrierung", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "note": "Teilnahme im Aktionsbereich der ROSSMANN-App.", "providerTrust": 5, "effort": 2, "entryType": "app", "multipleEntry": false, "highValuePrize": false, "tags": ["Beauty", "viele Gewinner"]}, {"id": "rossmann-centaur-juli-2026", "title": "Centaur-Rätsel Juli", "provider": "ROSSMANN", "prize": "Reise-, Wellness- und Freizeitgewinne", "url": "https://www.rossmann.de/cms/gewinnspiele/centaur-raetsel-202607.html", "category": "Reisen", "country": "Deutschland", "deadline": "09.08.2026", "winners": null, "new": true, "daily": false, "international": false, "requirements": "ROSSMANN-App erforderlich", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "providerTrust": 5, "effort": 3, "entryType": "app", "multipleEntry": false, "highValuePrize": true, "tags": ["Reisen"]}, {"id": "qvc-insider-2026", "title": "10 QVC-INSIDER-Jahresabos", "provider": "QVC", "prize": "10 × Jahresabo des QVC-Kundenmagazins INSIDER", "url": "https://www.qvc.de/content/nichts-verpassen/gewinnspiel/teilnahmebedingungen.html", "category": "Wohnen", "country": "Deutschland & Österreich", "deadline": "10.08.2026", "winners": 10, "new": true, "daily": false, "international": true, "requirements": "Teilnahmebedingungen auf der QVC-Seite beachten", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "providerTrust": 5, "effort": 2, "entryType": "form", "multipleEntry": false, "highValuePrize": false, "tags": ["Wohnen", "international"]}, {"id": "schoener-wohnen-2026", "title": "Aktuelle Monatsgewinnspiele", "provider": "SCHÖNER WOHNEN", "prize": "Design-, Wohn-, Technik- und Reisegewinne", "url": "https://www.schoener-wohnen.de/gewinnspiele/", "category": "Wohnen", "country": "Deutschland", "deadline": "31.08.2026", "winners": null, "new": true, "daily": false, "international": false, "requirements": "Kostenlose Teilnahme über Bilderpuzzle und Formular", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "note": "Sammelseite; die genaue Frist steht beim jeweiligen Gewinnspiel.", "providerTrust": 4, "effort": 3, "entryType": "form", "multipleEntry": false, "highValuePrize": true, "tags": ["Wohnen"]}, {"id": "dm-produkttests-2026", "title": "Aktuelle dm-Produkttests", "provider": "dm Produkttester", "prize": "Produkte kostenlos testen und bewerten", "url": "https://www.dm.de/neu/produkttest", "category": "Produkttests", "country": "Deutschland", "deadline": "31.08.2026", "winners": null, "new": true, "daily": false, "international": false, "requirements": "Kostenloses Mein-dm-Konto", "purchaseRequired": false, "receiptRequired": false, "winnerKnown": false, "verified": "29.07.2026", "note": "Sammelseite mit wechselnden Produkttests.", "providerTrust": 5, "effort": 2, "entryType": "form", "multipleEntry": false, "highValuePrize": false, "tags": ["Produkttests"]}];
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const safeJSON=(v,f)=>{try{return v?JSON.parse(v):f}catch{return f}};
let contests=[...FALLBACK];
let baseContests=[...FALLBACK];
let customContests=safeJSON(localStorage.getItem(CUSTOM_DATA_KEY),[]);
if(!Array.isArray(customContests))customContests=[];
function normalizeUser(raw){
 const u=raw&&typeof raw==='object'?raw:{};
 if(!u.items||typeof u.items!=='object'||Array.isArray(u.items))u.items={};
 if(!u.clicks||typeof u.clicks!=='object'||Array.isArray(u.clicks))u.clicks={};
 if(!u.urlIndex||typeof u.urlIndex!=='object'||Array.isArray(u.urlIndex))u.urlIndex={};
 u.schemaVersion=USER_SCHEMA_VERSION;
 u.lastVisit=u.lastVisit||null;
 return u;
}
const storedUserRaw=localStorage.getItem(STORAGE_KEY);
if(storedUserRaw&&!localStorage.getItem(STORAGE_BACKUP_KEY))localStorage.setItem(STORAGE_BACKUP_KEY,storedUserRaw);
let user=normalizeUser(safeJSON(storedUserRaw,{items:{},lastVisit:null,clicks:{},urlIndex:{}}));
let currentFilter='all';
let advancedFilters=safeJSON(localStorage.getItem(FILTER_STORAGE_KEY),{entryType:'',effort:'',winners:'',deadline:'',daily:false,noApp:false,noSocial:false,knownWinners:false,onlyOpen:true});
let dashboardShowAll=localStorage.getItem(DASHBOARD_SHOW_ALL_KEY)==='true';
const previousVisit=user.lastVisit ? new Date(user.lastVisit) : null;
let latestDataUpdate=null;
let usingFallback=false;
let dataVersionGlobal='–';

function saveUser(){
 user.schemaVersion=USER_SCHEMA_VERSION;
 const serialized=JSON.stringify(user);
 localStorage.setItem(STORAGE_KEY,serialized);
 localStorage.setItem(STORAGE_BACKUP_KEY,serialized);
}
function migrateContestStates(){
 let changed=false;
 contests.forEach(i=>{
   const key=normalizeUrl(i.url||'');
   if(!key)return;
   const oldId=user.urlIndex[key];
   if(!user.items[i.id]&&oldId&&user.items[oldId]){
     user.items[i.id]=JSON.parse(JSON.stringify(user.items[oldId]));
     changed=true;
   }
   if(user.urlIndex[key]!==i.id){user.urlIndex[key]=i.id;changed=true}
 });
 if(changed)saveUser();
}
function stateFor(id){
 const s=user.items[id]??={favorite:false,done:false,won:false,ignored:false};
 if(typeof s.ignored!=='boolean')s.ignored=false;
 if(typeof s.won!=='boolean')s.won=false;
 if(!s.winDetails||typeof s.winDetails!=='object')s.winDetails={};
 return s
}
function parseDate(v){if(!v)return null;const[d,m,y]=v.split('.').map(Number);return new Date(y,m-1,d,23,59,59)}
function parseFlexibleDate(v){
 if(!v)return null;
 if(/^\d{2}\.\d{2}\.\d{4}$/.test(v))return parseDate(v);
 const d=new Date(v);return Number.isNaN(d.getTime())?null:d
}
function isNewSinceVisit(i){
 if(!previousVisit)return Boolean(i.new);
 const d=parseFlexibleDate(i.addedAt||i.verified);
 if(!d)return Boolean(i.new);
 d.setHours(23,59,59,999);
 return d>previousVisit
}
function formatUpdate(v){
 const d=parseFlexibleDate(v);
 if(!d)return 'Aktualisierungsdatum unbekannt';
 return `Datenstand: ${new Intl.DateTimeFormat('de-DE',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(d)} Uhr`
}
function daysLeft(i){const d=parseDate(i.deadline);return d?Math.ceil((d-new Date())/86400000):9999}
function active(i){return !i.purchaseRequired&&!i.receiptRequired&&!i.winnerKnown&&daysLeft(i)>=0}
function allActive(){return contests.filter(active)}
function esc(v=''){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
function toast(m){const n=$('#toast');n.textContent=m;n.classList.add('show');clearTimeout(window.t);window.t=setTimeout(()=>n.classList.remove('show'),1700)}

function clampScore(v){return Math.max(0,Math.min(100,Math.round(v)))}
function scoreContest(i){
 // Prioritäts-Engine v1: Chance, Zeitnutzen und Attraktivität werden getrennt bewertet.
 const winners=Number(i.winners)||0;
 const trust=Number(i.providerTrust)||3;
 const effort=Math.max(1,Math.min(5,Number(i.effort)||3));
 const left=daysLeft(i);
 const reasons=[];

 let chance=35;
 if(winners>=100){chance+=45;reasons.push(`${winners} Gewinner`)}
 else if(winners>=50){chance+=36;reasons.push(`${winners} Gewinner`)}
 else if(winners>=20){chance+=27;reasons.push(`${winners} Gewinne`)}
 else if(winners>=10){chance+=20;reasons.push(`${winners} Gewinne`)}
 else if(winners>=3){chance+=11;reasons.push(`${winners} Gewinne`)}
 else if(winners===1){chance+=3}
 else {chance-=8;reasons.push('Gewinnerzahl offen')}
 if(i.regional){chance+=15;reasons.push('kleinerer regionaler Kreis')}
 if(i.international)chance-=7;
 if(trust>=5){chance+=10;reasons.push('sehr seriöser Anbieter')}
 else if(trust===4){chance+=6;reasons.push('seriöser Anbieter')}
 else if(trust<=2)chance-=18;
 chance=clampScore(chance);

 let time=100-(effort-1)*20;
 if(i.entryType==='social')time-=8;
 if(i.entryType==='app')time-=5;
 if(i.purchaseRequired||i.receiptRequired)time-=25;
 if(i.daily||i.multipleEntry){time+=8;reasons.push('mehrfach teilnehmbar')}
 if(effort===1)reasons.push('in unter 1 Minute');
 else if(effort===2)reasons.push('geringer Aufwand');
 time=clampScore(time);

 let attractiveness=48;
 if(i.highValuePrize)attractiveness+=28;
 if(['Reisen','Technik','Wohnen','Beauty'].includes(i.category))attractiveness+=6;
 if(winners>=20)attractiveness+=5;
 if(i.prizeValue){
   const value=Number(i.prizeValue)||0;
   attractiveness+=value>=1000?25:value>=300?16:value>=100?9:3;
 }
 attractiveness=clampScore(attractiveness);

 let urgency=50;
 if(left===0){urgency=100;reasons.push('endet heute')}
 else if(left<=2){urgency=88;reasons.push('endet sehr bald')}
 else if(left<=7)urgency=72;
 else if(left<=21)urgency=56;
 else if(left>60)urgency=35;

 // Ziel: hohe reale Trefferchance und viel Nutzen pro Minute; Preisattraktivität bleibt relevant, dominiert aber nicht.
 let priority=chance*.42+time*.28+attractiveness*.18+urgency*.12;
 if(i.daily||i.multipleEntry)priority+=4;
 priority=clampScore(priority);
 const confidence=winners>0&&trust>=4?'hoch':winners>0||trust>=4?'mittel':'begrenzt';
 return {
   score:priority,priorityScore:priority,chanceScore:chance,timeScore:time,
   attractivenessScore:attractiveness,urgencyScore:urgency,
   reasons:[...new Set(reasons)].slice(0,4),scoreConfidence:confidence
 };
}
function scored(includeIgnored=false){return allActive().map(i=>({...i,...scoreContest(i)})).filter(i=>includeIgnored||!stateFor(i.id).ignored)}
function recommended(i){return i.score>=72&&!stateFor(i.id).done}
function secret(i){return i.score>=62&&i.score<78&&(i.winners||0)<50&&(i.effort||3)<=2}
function matches(i,f){
 if(f==='ignored')return stateFor(i.id).ignored;
 if(stateFor(i.id).ignored)return false;
 if(f==='all')return true;if(f==='recommended')return recommended(i);if(f==='newVisit')return isNewSinceVisit(i);
 if(f==='top')return i.score>=80;if(f==='secret')return secret(i);if(f==='ending')return daysLeft(i)<=7;
 if(f==='daily')return i.daily||i.multipleEntry;
 if(f==='international')return i.international;if(f==='regional')return Boolean(i.regional);return i.category===f
}
function toggleFavorite(id){const s=stateFor(id);s.favorite=!s.favorite;saveUser();renderAll();toast(s.favorite?'Zu Favoriten hinzugefügt':'Aus Favoriten entfernt')}
function toggleDone(id){const s=stateFor(id);s.done=!s.done;if(s.done){s.doneAt=new Date().toISOString();sessionStorage.setItem('winwin-done-session',String(Number(sessionStorage.getItem('winwin-done-session')||0)+1))}else{s.doneAt=null}saveUser();renderAll();toast(s.done?'Als teilgenommen markiert':'Markierung entfernt')}
function toggleIgnored(id){
 const s=stateFor(id);s.ignored=!s.ignored;
 if(s.ignored)s.favorite=false;
 saveUser();renderAll();
 toast(s.ignored?'Als nicht interessant ausgeblendet':'Gewinnspiel wieder eingeblendet')
}
function registerClick(id){user.clicks[id]=(user.clicks[id]||0)+1;saveUser()}
let winDialogContestId=null;
function openWinDialog(id){
 const i=contests.find(x=>x.id===id);if(!i)return;
 const s=stateFor(id),d=s.winDetails||{};winDialogContestId=id;
 $('#winDialogTitle').textContent=s.won?'Gewinn bearbeiten':'Gewinn eintragen';
 $('#winPrizeName').value=d.prizeName||i.prize||'';
 $('#winValue').value=d.value??'';
 $('#winDate').value=d.date||new Date().toISOString().slice(0,10);
 $('#winDeliveryStatus').value=d.deliveryStatus||'ausstehend';
 $('#winNote').value=d.note||'';
 $('#removeWinBtn').hidden=!s.won;
 $('#winDialog').showModal();
}
function saveWin(){
 if(!winDialogContestId)return;const s=stateFor(winDialogContestId);
 s.won=true;s.wonAt=new Date().toISOString();s.done=true;s.doneAt=s.doneAt||new Date().toISOString();
 s.winDetails={prizeName:$('#winPrizeName').value.trim(),value:Math.max(0,Number($('#winValue').value)||0),date:$('#winDate').value,deliveryStatus:$('#winDeliveryStatus').value,note:$('#winNote').value.trim()};
 saveUser();$('#winDialog').close();renderAll();toast('Gewinn im Archiv gespeichert 🎉');
}
function removeWin(){
 if(!winDialogContestId)return;const s=stateFor(winDialogContestId);s.won=false;s.wonAt=null;s.winDetails={};saveUser();$('#winDialog').close();renderAll();toast('Gewinn aus dem Archiv entfernt');
}
window.toggleFavorite=toggleFavorite;window.toggleDone=toggleDone;window.toggleIgnored=toggleIgnored;window.registerClick=registerClick;window.openWinDialog=openWinDialog;

function label(score){return score>=88?'Unbedingt mitmachen':score>=75?'Sehr empfehlenswert':score>=62?'Gute Chance':'Solide Aktion'}
function badges(i){const left=daysLeft(i);return `<div class="badges">${isNewSinceVisit(i)?'<span class="new-ribbon">NEU</span>':''}<span class="badge">${esc(i.category)}</span><span class="badge score">${i.score}/100</span>${i.score>=80?'<span class="badge score">Top-Chance</span>':''}${secret(i)?'<span class="badge secret">Geheimtipp</span>':''}${left<=3?`<span class="badge hot">Noch ${left} Tag${left===1?'':'e'}</span>`:''}${i.international?'<span class="badge intl">International</span>':''}${i.regional?`<span class="badge regional">📍 ${esc(i.region||'Regional')}</span>`:''}${endingSoon(i)?`<span class="badge ending">⏰ Endet bald</span>`:''}</div>`}
function reasonBox(i){return `<div class="reason-box priority-explain"><strong>Warum diese Priorität?</strong><div class="score-components"><span><b>${i.chanceScore}</b>Chance</span><span><b>${i.timeScore}</b>Zeitnutzen</span><span><b>${i.attractivenessScore}</b>Attraktivität</span></div><p>${i.reasons.length?i.reasons.map(x=>'✓ '+esc(x)).join(' · '):'Kostenlose, geprüfte Teilnahme'}</p><small>Priorität ${i.score}/100 · Datensicherheit: ${esc(i.scoreConfidence||'begrenzt')}</small></div>`}
function mini(i){const s=stateFor(i.id);return `<article class="mini-card"><div class="provider">${esc(i.provider)}</div><h3>${esc(i.title)}</h3>${badges(i)}<div class="prize">🎁 ${esc(i.prize)}</div>${reasonBox(i)}<div class="mini-actions"><a class="primary" href="${esc(i.url)}" target="_blank" rel="noopener" onclick="registerClick('${esc(i.id)}')">Teilnehmen</a><button class="secondary" onclick="toggleFavorite('${esc(i.id)}')">${s.favorite?'♥':'♡'}</button><button class="secondary ignore-mini" aria-label="Nicht interessant" onclick="toggleIgnored('${esc(i.id)}')">Nicht interessant</button></div></article>`}
function full(i){const s=stateFor(i.id),left=daysLeft(i),wins=i.winners?`${i.winners} bekannte Gewinne`:'Gewinnerzahl nicht angegeben';return `<article class="contest-card ${s.ignored?'ignored-card':''}"><div class="card-top"><div><div class="provider">${esc(i.provider)}</div><h3>${esc(i.title)}</h3></div><button class="heart ${s.favorite?'active':''}" onclick="toggleFavorite('${esc(i.id)}')">${s.favorite?'♥':'♡'}</button></div>${badges(i)}${s.ignored?'<div class="ignored-note">Nicht interessant – nur in dieser Ansicht sichtbar.</div>':''}<div class="prize">🎁 ${esc(i.prize)}</div><div class="scoreline"><strong>${label(i.score)}</strong><div class="scorebar"><i style="width:${i.score}%"></i></div><strong>${i.score}</strong></div>${reasonBox(i)}<div class="details">Teilnahmeschluss: ${esc(i.deadline)} · ${left===0?'endet heute':`${left} Tag${left===1?'':'e'} übrig`}<br>${esc(wins)} · Aufwand: ${'●'.repeat(Math.min(5,i.effort||3))}${'○'.repeat(Math.max(0,5-(i.effort||3)))}<br>${esc(i.country)}${i.region?` · ${esc(i.region)}`:''} · geprüft: ${esc(i.verified||'–')}</div><div class="card-actions"><a href="${esc(i.url)}" target="_blank" rel="noopener" onclick="registerClick('${esc(i.id)}')">Teilnehmen ↗</a><button class="${s.done?'done':''}" onclick="toggleDone('${esc(i.id)}')">${s.done?'✓ Erledigt':'Teilgenommen'}</button><button class="win-button ${s.won?'active':''}" onclick="openWinDialog('${esc(i.id)}')">${s.won?'🏆 Gewonnen':'Gewonnen'}</button><button class="ignore-button ${s.ignored?'active':''}" onclick="toggleIgnored('${esc(i.id)}')">${s.ignored?'Wieder anzeigen':'Nicht interessant'}</button></div></article>`}
function empty(t){return `<div class="empty">${esc(t)}</div>`}

function todayQueue(){
 return scored()
  .filter(i=>!stateFor(i.id).done)
  .sort((a,b)=>{
    const aUrg=daysLeft(a)<=2?12:daysLeft(a)<=7?5:0;
    const bUrg=daysLeft(b)<=2?12:daysLeft(b)<=7?5:0;
    return (b.score+bUrg)-(a.score+aUrg);
  })
  .slice(0,20);
}
function renderToday(){
 const queue=todayQueue();
 const completed=scored(true).filter(i=>stateFor(i.id).done).length;
 const totalToday=queue.length;
 const target=Math.min(10,totalToday);
 const doneToday=Number(sessionStorage.getItem('winwin-done-session')||0);
 const progress=target?Math.min(100,Math.round(doneToday/target*100)):0;
 $('#todaySummary').innerHTML=`<div><span>Dein Tagesziel</span><strong>${Math.min(doneToday,target)} / ${target}</strong></div><div class="today-progress"><i style="width:${progress}%"></i></div><p>${totalToday?`${totalToday} priorisierte Gewinnspiele warten noch auf dich.`:'Für heute ist alles erledigt.'} Insgesamt hast du ${completed} Teilnahmen markiert.</p>`;
 $('#todayList').innerHTML=queue.map(full).join('')||empty('Stark – deine heutige Prioritätenliste ist leer.');
}
function renderMetrics(){
 const a=scored(),done=a.filter(i=>stateFor(i.id).done).length;
 const m=[['🆕',a.filter(isNewSinceVisit).length,'neu seit Besuch','newVisit'],['🎯',a.filter(recommended).length,'heute lohnenswert','recommended'],['⭐',a.filter(i=>i.score>=80).length,'Top-Chancen','top'],['✓',done,'teilgenommen','statsView']];
 $('#metrics').innerHTML=m.map(([ic,n,l,t])=>`<button class="metric" data-metric="${t}"><b>${ic}</b><strong>${n}</strong><span>${l}</span></button>`).join('');
}
function renderHome(){
 const a=scored().sort((x,y)=>y.score-x.score);
 const fresh=a.filter(isNewSinceVisit).sort((x,y)=>y.score-x.score);
 const picks=a.filter(recommended).slice(0,6);
 $('#newCarousel').innerHTML=fresh.slice(0,6).map(mini).join('')||empty('Seit deinem letzten Besuch sind noch keine neuen Gewinnspiele hinzugekommen.');
 $('#newSection').style.display=fresh.length?'block':'none';
 $('#recommendedCarousel').innerHTML=picks.map(mini).join('')||empty('Heute ist noch nichts empfohlen.');
 $('#topCarousel').innerHTML=a.filter(i=>i.score>=80).slice(0,6).map(mini).join('')||empty('Noch keine Top-Chancen.');
 $('#secretCarousel').innerHTML=a.filter(secret).slice(0,6).map(mini).join('')||empty('Aktuell keine Geheimtipps.');
 $('#endingCarousel').innerHTML=a.filter(i=>daysLeft(i)<=7).sort((x,y)=>daysLeft(x)-daysLeft(y)).slice(0,6).map(mini).join('')||empty('In den nächsten sieben Tagen endet nichts.');
 $('#heroTitle').textContent=picks.length?`${picks.length} Gewinnspiele lohnen sich heute.`:'Die besten Chancen auf einen Blick.';
}
function normalizedSearchText(i){return [i.title,i.provider,i.prize,i.category,i.country,i.region,i.requirements,i.note,...(i.tags||[])].filter(Boolean).join(' ').toLocaleLowerCase('de-DE')}
function passesAdvancedFilters(i){
 const f=advancedFilters||{};
 if(f.entryType&&String(i.entryType||'').toLowerCase()!==f.entryType)return false;
 if(f.effort&&Number(i.effort||3)>Number(f.effort))return false;
 if(f.winners&&Number(i.winners||0)<Number(f.winners))return false;
 if(f.deadline&&daysLeft(i)>Number(f.deadline))return false;
 if(f.daily&&!(i.daily||i.multipleEntry))return false;
 if(f.noApp&&String(i.entryType||'').toLowerCase()==='app')return false;
 if(f.noSocial&&String(i.entryType||'').toLowerCase()==='social')return false;
 if(f.knownWinners&&!(Number(i.winners)>0))return false;
 if(f.onlyOpen&&stateFor(i.id).done)return false;
 return true
}
function discoverItems(){
 const q=($('#searchInput')?.value||'').trim().toLocaleLowerCase('de-DE'),sort=$('#sortSelect')?.value||'score';
 let l=(currentFilter==='ignored'?scored(true):scored()).filter(i=>matches(i,currentFilter)).filter(passesAdvancedFilters);
 if(q){const terms=q.split(/\s+/).filter(Boolean);l=l.filter(i=>{const hay=normalizedSearchText(i);return terms.every(term=>hay.includes(term))})}
 l.sort((a,b)=>sort==='deadline'?daysLeft(a)-daysLeft(b):sort==='winners'?(b.winners||0)-(a.winners||0):sort==='effort'?(a.effort||3)-(b.effort||3):sort==='provider'?a.provider.localeCompare(b.provider,'de'):b.score-a.score);
 return l
}
function activeFilterLabels(){const f=advancedFilters||{},labels=[];if(f.entryType)labels.push(`Teilnahme: ${f.entryType}`);if(f.effort)labels.push(`Aufwand ≤ ${f.effort}`);if(f.winners)labels.push(`ab ${f.winners} Gewinnern`);if(f.deadline)labels.push(`Frist ≤ ${f.deadline} Tage`);if(f.daily)labels.push('täglich möglich');if(f.noApp)labels.push('ohne App');if(f.noSocial)labels.push('ohne Social Media');if(f.knownWinners)labels.push('Gewinnerzahl bekannt');if(f.onlyOpen)labels.push('noch nicht teilgenommen');return labels}
function syncFilterUI(){
 const map={filterEntryType:'entryType',filterEffort:'effort',filterWinners:'winners',filterDeadline:'deadline',filterDaily:'daily',filterNoApp:'noApp',filterNoSocial:'noSocial',filterKnownWinners:'knownWinners',filterOnlyOpen:'onlyOpen'};
 Object.entries(map).forEach(([id,key])=>{const el=$('#'+id);if(!el)return;el.type==='checkbox'?el.checked=Boolean(advancedFilters[key]):el.value=advancedFilters[key]||''});
 const labels=activeFilterLabels(),count=labels.length;const badge=$('#activeFilterCount');if(badge){badge.textContent=String(count);badge.dataset.zero=String(count===0)}
 const summary=$('#activeFilterSummary');if(summary)summary.textContent=count?`Aktiv: ${labels.join(' · ')}`:'Keine Zusatzfilter aktiv.';
}
function saveAdvancedFilters(){localStorage.setItem(FILTER_STORAGE_KEY,JSON.stringify(advancedFilters));syncFilterUI();renderDiscover()}
function renderDiscover(){const l=discoverItems();const extra=activeFilterLabels().length;$('#resultCount').textContent=`${l.length} Ergebnis${l.length===1?'':'se'}${extra?` · ${extra} Filter`:''}`;$('#contestList').innerHTML=l.map(full).join('')||empty('Keine passenden aktiven Gewinnspiele gefunden. Passe Suche oder Filter an.')}
function dayKey(value){
 const d=value?new Date(value):new Date();
 if(Number.isNaN(d.getTime()))return '';
 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
}
function inLastDays(value,days){
 if(!value)return false;
 const d=new Date(value);if(Number.isNaN(d.getTime()))return false;
 return Date.now()-d.getTime() < days*86400000 && d.getTime()<=Date.now()+60000
}
function dashboardPool(){
 const all=scored(true);
 if(dashboardShowAll)return all;
 return all.filter(i=>{const s=stateFor(i.id);return !s.done&&!s.ignored});
}
function dashboardMini(i){
 const s=stateFor(i.id),status=s.ignored?'Nicht interessant':s.done?'Teilgenommen':'';
 return `<article class="dashboard-mini ${status?'has-status':''}">${status?`<span class="dashboard-status">${esc(status)}</span>`:''}<div class="provider">${esc(i.provider)}</div><h3>${esc(i.title)}</h3>${badges(i)}<div class="prize">🎁 ${esc(i.prize)}</div><div class="dashboard-mini-meta"><span>${i.winners?`${i.winners} Gewinner`:'Gewinnerzahl offen'}</span><span>${daysLeft(i)===0?'endet heute':`${daysLeft(i)} Tage`}</span><span>Aufwand ${i.effort||3}/5</span></div><div class="mini-actions"><a class="primary" href="${esc(i.url)}" target="_blank" rel="noopener" onclick="registerClick('${esc(i.id)}')">Teilnehmen</a><button class="secondary" onclick="toggleFavorite('${esc(i.id)}')">${s.favorite?'♥':'♡'}</button><button class="secondary ignore-mini" onclick="toggleIgnored('${esc(i.id)}')">Nicht interessant</button></div></article>`;
}
function dashboardGroup(title,kicker,items,filter,emptyText){
 return `<section class="dashboard-priority-section"><div class="section-head"><div><p class="section-kicker">${esc(kicker)}</p><h2>${esc(title)}</h2></div>${filter?`<button class="text-button" onclick="openDiscover('${esc(filter)}')">Alle</button>`:''}</div><div class="card-row">${items.length?items.slice(0,6).map(dashboardMini).join(''):empty(emptyText)}</div></section>`;
}
function renderPersonal(){
 const a=scored(),all=scored(true),fav=a.filter(i=>stateFor(i.id).favorite),done=all.filter(i=>stateFor(i.id).done),ignored=all.filter(i=>stateFor(i.id).ignored),wins=all.filter(i=>stateFor(i.id).won);
 const today=dayKey();
 const doneToday=done.filter(i=>dayKey(stateFor(i.id).doneAt)===today).length;
 const doneWeek=done.filter(i=>inLastDays(stateFor(i.id).doneAt,7)).length;
 const openPool=all.filter(i=>{const s=stateFor(i.id);return !s.done&&!s.ignored});
 const ending=openPool.filter(i=>daysLeft(i)<=3).length;
 const daily=openPool.filter(i=>i.daily||i.multipleEntry).length;
 const topOpen=openPool.filter(i=>i.score>=80).length;
 $('#favoriteList').innerHTML=fav.map(full).join('')||empty('Deine Favoriten erscheinen hier.');
 $('#doneList').innerHTML=done.sort((x,y)=>String(stateFor(y.id).doneAt||'').localeCompare(String(stateFor(x.id).doneAt||''))).map(full).join('')||empty('Hier erscheinen deine markierten Teilnahmen.');
 const totalValue=wins.reduce((sum,i)=>sum+(Number(stateFor(i.id).winDetails?.value)||0),0);
 $('#winArchiveSummary').innerHTML=`<div><strong>${wins.length}</strong><span>Gewinne</span></div><div><strong>${new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(totalValue)}</strong><span>erfasster Wert</span></div>`;
 $('#winArchiveList').innerHTML=wins.sort((x,y)=>String(stateFor(y.id).winDetails?.date||stateFor(y.id).wonAt||'').localeCompare(String(stateFor(x.id).winDetails?.date||stateFor(x.id).wonAt||''))).map(i=>{const d=stateFor(i.id).winDetails||{};const val=Number(d.value)||0;return `<article class="win-archive-card"><div><span>🏆 ${esc(i.provider)}</span><h3>${esc(d.prizeName||i.prize)}</h3><p>${d.date?new Intl.DateTimeFormat('de-DE').format(new Date(d.date+'T12:00:00')):'Datum offen'} · ${esc(d.deliveryStatus==='erhalten'?'Erhalten':d.deliveryStatus==='versendet'?'Versendet':'Ausstehend')}${val?` · ${new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(val)}`:''}</p>${d.note?`<small>${esc(d.note)}</small>`:''}</div><button onclick="openWinDialog('${esc(i.id)}')">Bearbeiten</button></article>`}).join('')||empty('Noch kein Gewinn eingetragen – das ändern wir hoffentlich bald. 🍀');
 const avg=done.length?Math.round(done.reduce((sum,i)=>sum+i.score,0)/done.length):0;
 $('#statsHero').innerHTML=`<strong>${done.length}</strong><p>Teilnahmen insgesamt · ${doneToday} heute · ${doneWeek} in den letzten 7 Tagen</p>`;
 const stats=[['🏆',wins.length,'Gewinne'],['☀',doneToday,'Heute erledigt'],['7',doneWeek,'Letzte 7 Tage'],['⭐',topOpen,'Offene Top-Chancen'],['⏳',ending,'Enden in 3 Tagen'],['↻',daily,'Täglich möglich'],['♡',fav.length,'Favoriten'],['⊘',ignored.length,'Nicht interessant'],['Ø',avg,'Ø Teilnahme-Score']];
 $('#statsGrid').innerHTML=stats.map(([ic,n,l])=>`<button class="stat-card dashboard-stat" data-dashboard="${l}"><span>${ic}</span><strong>${n}</strong><span>${l}</span></button>`).join('');
 const pool=dashboardPool().sort((x,y)=>y.score-x.score);
 const modeNote=$('#dashboardModeNote');
 if(modeNote)modeNote.textContent=dashboardShowAll?'Kontrollansicht: Auch erledigte und ausgeblendete Gewinnspiele werden angezeigt.':'Aufgeräumt: Teilgenommene und nicht interessante Gewinnspiele sind ausgeblendet.';
 const win=pool.find(i=>!stateFor(i.id).done&&!stateFor(i.id).ignored)||pool[0];
 $('#winOfDay').innerHTML=win?`<p class="section-kicker">🏆 WIN DES TAGES</p><div class="win-of-day-card"><div><span class="provider">${esc(win.provider)}</span><h2>${esc(win.title)}</h2><p>Heute besonders sinnvoll: ${esc(win.reasons.slice(0,3).join(' · ')||'gute Kombination aus Chance und Aufwand')}.</p><div class="badges"><span class="badge score">${win.score}/100</span><span class="badge">${win.winners?`${win.winners} Gewinner`:'Gewinnerzahl offen'}</span><span class="badge">Aufwand ${win.effort||3}/5</span></div></div><a href="${esc(win.url)}" target="_blank" rel="noopener" onclick="registerClick('${esc(win.id)}')">Jetzt teilnehmen ↗</a></div>`:empty('Aktuell ist kein offenes Gewinnspiel verfügbar.');
 const focus=[];
 if(ending)focus.push(`<button onclick="openDiscover('endingSoon')"><b>${ending}</b><span>offene Gewinnspiele enden in höchstens 3 Tagen</span><em>Jetzt prüfen →</em></button>`);
 if(topOpen)focus.push(`<button onclick="openDiscover('top')"><b>${topOpen}</b><span>offene Top-Chancen warten auf dich</span><em>Priorisieren →</em></button>`);
 if(daily)focus.push(`<button onclick="openDiscover('daily')"><b>${daily}</b><span>Gewinnspiele erlauben eine Wiederholung</span><em>Täglich teilnehmen →</em></button>`);
 $('#dashboardFocus').innerHTML=focus.length?`<p class="section-kicker">JETZT SINNVOLL</p><h2>Dein nächster Schritt</h2><div>${focus.join('')}</div>`:'';
 const todayFirst=pool.filter(i=>!stateFor(i.id).done&&!stateFor(i.id).ignored).sort((x,y)=>((y.score+(daysLeft(y)<=2?12:0))- (x.score+(daysLeft(x)<=2?12:0))));
 const endingToday=pool.filter(i=>daysLeft(i)===0);
 const ending3=pool.filter(i=>daysLeft(i)>=0&&daysLeft(i)<=3).sort((x,y)=>daysLeft(x)-daysLeft(y));
 const top=pool.filter(i=>i.score>=80);
 const highValue=pool.filter(i=>i.highValuePrize).sort((x,y)=>y.score-x.score);
 const quick=pool.filter(i=>(i.effort||3)===1).sort((x,y)=>y.score-x.score);
 $('#dashboardPriorityGroups').innerHTML=[
  dashboardGroup('Heute zuerst teilnehmen','DEINE BESTE REIHENFOLGE',todayFirst,'recommended','Für heute ist alles erledigt.'),
  dashboardGroup('Endet heute','JETZT ODER NIE',endingToday,'endingSoon','Heute endet kein offenes Gewinnspiel.'),
  dashboardGroup('Endet in 3 Tagen','SCHNELL SEIN',ending3,'endingSoon','In den nächsten drei Tagen endet nichts.'),
  dashboardGroup('Top-Gewinnchancen','HOHE TREFFERCHANCE',top,'top','Aktuell gibt es keine offene Top-Chance.'),
  dashboardGroup('Hoher Gewinnwert','BESONDERS ATTRAKTIV',highValue,'all','Keine offenen hochwertigen Gewinne markiert.'),
  dashboardGroup('Schnell erledigt','UNTER 1 MINUTE',quick,'all','Aktuell ist kein besonders schnelles Gewinnspiel offen.')
 ].join('');
 const counts={};
 done.forEach(i=>{const c=i.category||'Sonstiges';counts[c]=(counts[c]||0)+1});
 const cats=Object.entries(counts).sort((x,y)=>y[1]-x[1]).slice(0,6);
 const max=cats[0]?.[1]||1;
 $('#categoryStats').innerHTML=cats.length?cats.map(([name,n])=>`<button onclick="openDiscover('${esc(name)}')"><span><b>${esc(name)}</b><em>${n} Teilnahme${n===1?'':'n'}</em></span><i><u style="width:${Math.round(n/max*100)}%"></u></i></button>`).join(''):empty('Sobald du Teilnahmen markierst, siehst du hier deine aktivsten Kategorien.');
}

function renderAll(){renderMetrics();renderHome();renderToday();renderDiscover();renderPersonal()}
function openView(id){$$('.view').forEach(v=>v.classList.toggle('active',v.id===id));$$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.view===id));window.scrollTo({top:0,behavior:'smooth'})}
function openDiscover(f){currentFilter=f;$$('.chip').forEach(c=>c.classList.toggle('active',c.dataset.filter===f));openView('discoverView');renderDiscover()}

function parseGermanDate(value){
 const m=String(value||'').match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
 if(!m)return null;
 const d=new Date(Number(m[3]),Number(m[2])-1,Number(m[1]),23,59,59);
 return Number.isNaN(d.getTime())?null:d;
}
function daysUntil(value){
 const d=parseGermanDate(value);
 if(!d)return 9999;
 const now=new Date();
 const start=new Date(now.getFullYear(),now.getMonth(),now.getDate());
 return Math.ceil((d-start)/86400000);
}
function formatDataDate(value){
 if(!value)return 'unbekannt';
 const raw=String(value);
 const iso=raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
 if(iso)return `${iso[3]}.${iso[2]}.${iso[1]}`;
 return raw;
}
function endingSoon(i){
 const days=daysUntil(i.deadline);
 return days>=0&&days<=3;
}


function normalizeUrl(value=''){
 try{const u=new URL(value,location.href);u.hash='';['utm_source','utm_medium','utm_campaign','utm_term','utm_content','fbclid','gclid'].forEach(k=>u.searchParams.delete(k));return u.href.replace(/\/$/,'').toLowerCase()}catch{return String(value).trim().replace(/\/$/,'').toLowerCase()}
}
function makeContestId(i){
 const raw=`${i.provider||'anbieter'}-${i.title||'gewinnspiel'}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 return raw.slice(0,80)||`import-${Date.now()}`
}
function normalizeText(value=''){
 return String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim()
}
function contestFingerprint(i){
 const provider=normalizeText(i.provider).split(' ').slice(0,4).join('-');
 const title=normalizeText(i.title).split(' ').filter(x=>x.length>2).slice(0,8).join('-');
 const deadline=String(i.deadline||'').replace(/\D/g,'');
 return `${provider}|${title}|${deadline}`
}
function tokenSimilarity(a,b){
 const A=new Set(normalizeText(a).split(' ').filter(x=>x.length>2));
 const B=new Set(normalizeText(b).split(' ').filter(x=>x.length>2));
 if(!A.size||!B.size)return 0;
 let hit=0;A.forEach(x=>{if(B.has(x))hit++});
 return hit/Math.max(A.size,B.size)
}
function areSimilarContests(a,b){
 if(normalizeText(a.provider)!==normalizeText(b.provider))return false;
 if(a.deadline&&b.deadline&&a.deadline!==b.deadline)return false;
 return tokenSimilarity(`${a.title} ${a.prize}`,`${b.title} ${b.prize}`)>=.68
}
function contestWarnings(i){
 const warnings=[];
 if(!/^https?:\/\//i.test(i.url||''))warnings.push('Direktlink fehlt');
 if(!parseGermanDate(i.deadline))warnings.push('Datum unklar');
 if(!Number(i.winners))warnings.push('Gewinnerzahl fehlt');
 if(!i.verified)warnings.push('Prüfdatum fehlt');
 if((Number(i.providerTrust)||0)<=2)warnings.push('Anbieterqualität niedrig');
 if(!i.id||i.id.startsWith('import-'))warnings.push('ID instabil');
 return warnings
}
function normalizeContest(raw){
 const i={...raw};
 i.id=String(i.id||makeContestId(i)).trim();i.title=String(i.title||'').trim();i.provider=String(i.provider||'').trim();i.url=String(i.url||'').trim();i.deadline=String(i.deadline||'').trim();
 i.prize=String(i.prize||'Gewinn nicht näher bezeichnet').trim();i.category=String(i.category||'Sonstiges').trim();i.country=String(i.country||'Deutschland').trim();
 i.winners=i.winners==null||i.winners===''?null:Math.max(0,Number(i.winners)||0);i.providerTrust=Math.max(1,Math.min(5,Number(i.providerTrust)||3));i.effort=Math.max(1,Math.min(5,Number(i.effort)||3));
 ['new','daily','international','regional','purchaseRequired','receiptRequired','winnerKnown','multipleEntry','highValuePrize'].forEach(k=>i[k]=Boolean(i[k]));
 if(!Array.isArray(i.tags))i.tags=i.tags?[String(i.tags)]:[i.category];
 i.importedAt=new Date().toISOString();
 return i
}
function mergeCatalog(base,extra){
 const out=[];const byId=new Map(),byUrl=new Map(),byFingerprint=new Map();
 let added=0,updated=0,duplicates=0,invalid=0,idConflicts=0,similar=0;
 const similarPairs=[];
 const put=(raw,isImport=false)=>{
   const i=normalizeContest(raw);
   if(!validContest(i)||!/^https?:\/\//i.test(i.url)){if(isImport)invalid++;return}
   const urlKey=normalizeUrl(i.url),fp=contestFingerprint(i);
   let pos=byId.get(i.id);
   if(pos!==undefined&&normalizeUrl(out[pos].url)!==urlKey){idConflicts++;pos=undefined}
   if(pos===undefined)pos=byUrl.get(urlKey);
   if(pos===undefined)pos=byFingerprint.get(fp);
   if(pos!==undefined){
     if(isImport){
       const stableId=out[pos].id;
       out[pos]={...out[pos],...i,id:stableId};updated++;duplicates++;
     } else out[pos]={...out[pos],...i,id:out[pos].id||i.id};
     byId.set(out[pos].id,pos);byUrl.set(normalizeUrl(out[pos].url),pos);byFingerprint.set(contestFingerprint(out[pos]),pos);return
   }
   const near=out.findIndex(x=>areSimilarContests(x,i));
   if(near>=0){similar++;if(similarPairs.length<20)similarPairs.push({a:out[near].title,b:i.title,provider:i.provider})}
   const n=out.length;out.push(i);byId.set(i.id,n);byUrl.set(urlKey,n);byFingerprint.set(fp,n);if(isImport)added++
 };
 base.forEach(x=>put(x,false));extra.forEach(x=>put(x,true));
 return {contests:out,report:{added,updated,duplicates,invalid,idConflicts,similar,similarPairs,total:out.length}}
}
function applyCustomData(report=null){
 const merged=mergeCatalog(baseContests,customContests);contests=merged.contests;migrateContestStates();renderAll();renderDataCenter(report||merged.report);updateDiagnostics(dataVersionGlobal);return merged
}
function extractContestArray(payload){
 if(Array.isArray(payload))return payload;
 if(payload&&Array.isArray(payload.contests))return payload.contests;
 throw new Error('Keine Gewinnspiel-Liste gefunden')
}
function importPayload(payload){
 const incoming=extractContestArray(payload);const result=mergeCatalog(baseContests,customContests.concat(incoming));
 // Store only imported records, deduplicated amongst themselves and against future base updates.
 const customResult=mergeCatalog([],customContests.concat(incoming));customContests=customResult.contests;
 localStorage.setItem(CUSTOM_DATA_KEY,JSON.stringify(customContests));
 applyCustomData(result.report);toast(`${result.report.added} neu · ${result.report.updated} aktualisiert`)
}
function downloadJSON(filename,payload){
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)
}
function renderDataCenter(report=null){
 const el=$('#importSummary'),local=$('#localDataText');if(!el||!local)return;
 const activeCount=allActive().length;
 el.innerHTML=`<div class="data-stat"><strong>${contests.length}</strong><span>gesamt</span></div><div class="data-stat"><strong>${activeCount}</strong><span>aktiv</span></div><div class="data-stat"><strong>${customContests.length}</strong><span>lokal ergänzt</span></div>${report?`<div class="import-report"><strong>Letzter Import:</strong> ${report.added} neu, ${report.updated} aktualisiert, ${report.invalid} ungültig, ${report.duplicates||0} Dubletten, ${report.idConflicts||0} ID-Konflikte.</div>`:''}`;
 local.textContent=customContests.length?`${customContests.length} lokal importierte Datensätze sind auf diesem Gerät gespeichert.`:'Noch keine lokalen Ergänzungen gespeichert.'
 renderSourceOverview();
 renderQualityOverview();
}
function renderSourceOverview(){
 const box=$('#sourceOverview'),badge=$('#sourceCountBadge');if(!box)return;
 const map=new Map();
 contests.forEach(i=>{const key=(i.provider||'Unbekannt').trim();const row=map.get(key)||{name:key,total:0,active:0,top:0};row.total++;if(active(i))row.active++;if(active(i)&&scoreContest(i).score>=80)row.top++;map.set(key,row)});
 const rows=[...map.values()].sort((a,b)=>b.active-a.active||a.name.localeCompare(b.name,'de'));
 if(badge)badge.textContent=`${rows.length} Quellen`;
 box.innerHTML=rows.length?rows.slice(0,30).map(r=>`<div class="source-row"><div><strong>${esc(r.name)}</strong><span>${r.active} aktiv${r.top?` · ${r.top} Top-Chance${r.top===1?'':'n'}`:''}</span></div><b>${r.total}</b></div>`).join(''):empty('Noch keine Quellen vorhanden.');
}
function renderQualityOverview(){
 const box=$('#qualityOverview');if(!box)return;
 const total=contests.length||1;
 const checks=[
  ['Direktlink vorhanden',contests.filter(i=>/^https?:\/\//i.test(i.url||'')).length],
  ['Gewinnerzahl bekannt',contests.filter(i=>Number(i.winners)>0).length],
  ['Anbieter bewertet',contests.filter(i=>Number(i.providerTrust)>0).length],
  ['Aufwand bewertet',contests.filter(i=>Number(i.effort)>0).length],
  ['Aktuell verifiziert',contests.filter(i=>i.verified).length],
  ['Stabile ID',contests.filter(i=>i.id&&!i.id.startsWith('import-')).length]
 ];
 box.innerHTML=checks.map(([name,count])=>{const pct=Math.round(count/total*100);return `<div class="quality-row"><span><strong>${esc(name)}</strong><em>${count} von ${contests.length}</em></span><i><u style="width:${pct}%"></u></i><b>${pct}%</b></div>`}).join('');
 renderQualityWarnings();renderProviderQuality();
}
function renderQualityWarnings(){
 const box=$('#qualityWarnings');if(!box)return;
 const rows=contests.map(i=>({i,w:contestWarnings(i)})).filter(x=>x.w.length).sort((a,b)=>b.w.length-a.w.length);
 const similar=[];for(let a=0;a<contests.length;a++)for(let b=a+1;b<contests.length;b++)if(areSimilarContests(contests[a],contests[b]))similar.push([contests[a],contests[b]]);
 box.innerHTML=`<div class="warning-summary"><div><strong>${rows.length}</strong><span>Einträge mit Hinweisen</span></div><div><strong>${similar.length}</strong><span>ähnliche Paare</span></div></div>`+
 (rows.length?rows.slice(0,12).map(({i,w})=>`<div class="quality-warning"><div><strong>${esc(i.title)}</strong><span>${esc(i.provider)}</span></div><p>${w.map(esc).join(' · ')}</p></div>`).join(''):empty('Keine auffälligen Datensätze gefunden.'))+
 (similar.length?`<details class="similar-details"><summary>${similar.length} ähnliche Gewinnspiel-Paare prüfen</summary>${similar.slice(0,12).map(([a,b])=>`<p><strong>${esc(a.provider)}</strong><br>${esc(a.title)} ↔ ${esc(b.title)}</p>`).join('')}</details>`:'');
}
function renderProviderQuality(){
 const box=$('#providerQuality');if(!box)return;
 const map=new Map();contests.forEach(i=>{const k=i.provider||'Unbekannt',r=map.get(k)||{n:0,trust:0,warn:0};r.n++;r.trust+=Number(i.providerTrust)||3;r.warn+=contestWarnings(i).length;map.set(k,r)});
 const rows=[...map].map(([name,r])=>({name,...r,avg:Math.round(r.trust/r.n*10)/10})).sort((a,b)=>b.avg-a.avg||b.n-a.n);
 box.innerHTML=rows.map(r=>`<div class="provider-quality-row"><div><strong>${esc(r.name)}</strong><span>${r.n} Einträge · ${r.warn} Hinweise</span></div><b>${r.avg}/5</b></div>`).join('')||empty('Keine Anbieter vorhanden.');
}
function setupDataCenter(){
 const input=$('#importFile');if(!input)return;
 $('#chooseImportBtn').onclick=()=>input.click();
 input.onchange=async()=>{const f=input.files[0];if(!f)return;try{importPayload(JSON.parse(await f.text()))}catch(e){toast('Import fehlgeschlagen: '+e.message)}finally{input.value=''}};
 $('#pasteImportBtn').onclick=()=>{try{importPayload(JSON.parse($('#jsonPaste').value))}catch(e){toast('Import fehlgeschlagen: '+e.message)}};
 $('#clearPasteBtn').onclick=()=>{$('#jsonPaste').value=''};
 $('#exportMergedBtn').onclick=()=>downloadJSON(`win-win-gesamtkatalog-${new Date().toISOString().slice(0,10)}.json`,{version:APP_VERSION,updated:new Date().toISOString(),contests});
 $('#exportLocalBtn').onclick=()=>downloadJSON(`win-win-lokale-ergaenzungen-${new Date().toISOString().slice(0,10)}.json`,{version:APP_VERSION,updated:new Date().toISOString(),contests:customContests});
 $('#clearLocalBtn').onclick=()=>{if(!customContests.length)return toast('Keine lokalen Ergänzungen vorhanden');if(confirm('Alle lokal importierten Gewinnspiele löschen?')){customContests=[];localStorage.removeItem(CUSTOM_DATA_KEY);applyCustomData({added:0,updated:0,invalid:0});toast('Lokale Ergänzungen gelöscht')}};
 renderDataCenter()
}

function validContest(i){
 return i && typeof i.id==='string' && typeof i.title==='string' &&
        typeof i.provider==='string' && typeof i.url==='string' &&
        typeof i.deadline==='string';
}
function updateDiagnostics(dataVersion='–'){
 const el=$('#dataDiagnostics');
 if(!el)return;
 const activeCount=allActive().length;
 el.textContent=`App ${APP_VERSION} · Daten ${dataVersion} · ${contests.length} geladen · ${activeCount} aktiv`;
 el.classList.toggle('fallback',usingFallback);
}
async function loadData(silent=false){
 usingFallback=true;
 const status=$('#updateStatus'),text=$('#updateText');
 if(!silent){
   status.classList.remove('error');
   text.textContent='Gewinnspiele werden geprüft …';
 }
 let dataVersion='Notfalldaten';
 try{
   // Keine wechselnde Query-Zeichenfolge: ältere Service Worker konnten
   // JSON-Anfragen mit Cache-Buster fälschlich als HTML beantworten.
   const r=await fetch('./data/contests.json',{
     cache:'no-store',
     headers:{'Accept':'application/json'}
   });
   if(!r.ok)throw new Error(`HTTP ${r.status}`);
   const contentType=r.headers.get('content-type')||'';
   const raw=await r.text();
   if(contentType.includes('text/html')||raw.trim().startsWith('<')){
     throw new Error('Statt JSON wurde HTML geliefert');
   }
   const p=JSON.parse(raw);
   if(!p || !Array.isArray(p.contests))throw new Error('Ungültiges Datenformat');
   const clean=p.contests.filter(validContest);
   if(!clean.length)throw new Error('Keine gültigen Gewinnspiele gefunden');
   baseContests=clean;
   const merged=mergeCatalog(baseContests,customContests);
   contests=merged.contests;
   latestDataUpdate=p.updated||null;
   dataVersion=p.version||'unbekannt';
   dataVersionGlobal=dataVersion;
   usingFallback=false;
 }catch(e){
   console.warn('Win Win: Daten konnten nicht geladen werden',e);
   baseContests=[...FALLBACK];
   const merged=mergeCatalog(baseContests,customContests);contests=merged.contests;
   dataVersionGlobal=dataVersion;
 }
 migrateContestStates();
 renderAll();
 renderDataCenter();
 status.classList.toggle('error',usingFallback);
 text.textContent=usingFallback
   ?'Notfalldaten aktiv – bitte erneut laden'
   :`Datenstand: ${formatDataDate(latestDataUpdate)} · ${contests.length} Einträge geladen`;
 updateDiagnostics(dataVersion);
 if(!silent&&usingFallback)toast('Notfalldaten geladen');
}
$$('.nav-item').forEach(b=>b.addEventListener('click',()=>openView(b.dataset.view)));
$$('.chip').forEach(b=>b.addEventListener('click',()=>{currentFilter=b.dataset.filter;$$('.chip').forEach(c=>c.classList.toggle('active',c===b));renderDiscover()}));
$$('[data-show]').forEach(b=>b.addEventListener('click',()=>openDiscover(b.dataset.show)));
$('#searchInput').addEventListener('input',renderDiscover);$('#sortSelect').addEventListener('change',renderDiscover);
$('#filterToggle').addEventListener('click',()=>{const panel=$('#advancedFilters');panel.hidden=!panel.hidden;$('#filterToggle').classList.toggle('active',!panel.hidden)});
const filterBindings={filterEntryType:'entryType',filterEffort:'effort',filterWinners:'winners',filterDeadline:'deadline',filterDaily:'daily',filterNoApp:'noApp',filterNoSocial:'noSocial',filterKnownWinners:'knownWinners',filterOnlyOpen:'onlyOpen'};
Object.entries(filterBindings).forEach(([id,key])=>$('#'+id)?.addEventListener('change',e=>{advancedFilters[key]=e.target.type==='checkbox'?e.target.checked:e.target.value;saveAdvancedFilters()}));
$('#resetFilters').addEventListener('click',()=>{advancedFilters={entryType:'',effort:'',winners:'',deadline:'',daily:false,noApp:false,noSocial:false,knownWinners:false,onlyOpen:false};saveAdvancedFilters();toast('Zusatzfilter zurückgesetzt')});
syncFilterUI();
const dashboardToggle=$('#dashboardShowAll');if(dashboardToggle){dashboardToggle.checked=dashboardShowAll;dashboardToggle.addEventListener('change',e=>{dashboardShowAll=e.target.checked;localStorage.setItem(DASHBOARD_SHOW_ALL_KEY,String(dashboardShowAll));renderPersonal()})}
$('#refreshBtn').addEventListener('click',async()=>{await loadData();toast('Daten neu geladen')});
document.addEventListener('click',e=>{const m=e.target.closest('[data-metric]');if(!m)return;m.dataset.metric==='statsView'?openView('statsView'):openDiscover(m.dataset.metric)});
$('#saveWinBtn').onclick=saveWin;$('#removeWinBtn').onclick=removeWin;$('#cancelWinBtn').onclick=()=>$('#winDialog').close();
setupDataCenter();
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
loadData().finally(()=>{
 setTimeout(()=>{user.lastVisit=new Date().toISOString();saveUser()},1200)
});
setInterval(()=>loadData(true),30*60*1000);
