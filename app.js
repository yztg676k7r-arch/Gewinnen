
const APP_VERSION='3.7';
const STORAGE_KEY='gewinnen-user-v1';
const STORAGE_BACKUP_KEY='gewinnen-user-backup-v1';
const USER_SCHEMA_VERSION=2;
const CUSTOM_DATA_KEY='winwin-custom-contests-v1';
const IMPORT_BACKUP_KEY='winwin-catalog-backup-v1';
const IMPORT_HISTORY_KEY='winwin-import-history-v1';
const PREFERENCE_KEY='winwin-preferences-v1';
const FILTER_STORAGE_KEY='winwin-discover-filters-v1';
const DASHBOARD_SHOW_ALL_KEY='winwin-dashboard-show-all-v1';
const FULL_BACKUP_ROLLBACK_KEY='winwin-full-backup-rollback-v1';
const DAILY_PLAN_KEY='winwin-daily-plan-v1';
const FULL_BACKUP_FORMAT='winwin-personal-backup';
const FULL_BACKUP_VERSION=1;
const SOURCE_DATA_KEY='winwin-custom-sources-v1';
const SOURCE_BACKUP_KEY='winwin-sources-backup-v1';
let baseSources=[];
let sources=[];
let sourceDataVersion='–';
let sourceFilters={search:'',country:'',type:'',automation:'',review:'',sort:'priority'};
let sourceRenderLimit=30;
let pendingSourceImport=null;

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
let dailyPlan=safeJSON(localStorage.getItem(DAILY_PLAN_KEY),{target:10,mode:'balanced'});
if(!dailyPlan||typeof dailyPlan!=='object')dailyPlan={target:10,mode:'balanced'};
dailyPlan.target=[5,10,15,20].includes(Number(dailyPlan.target))?Number(dailyPlan.target):10;
dailyPlan.mode=['balanced','quick','urgent','chance'].includes(dailyPlan.mode)?dailyPlan.mode:'balanced';
const previousVisit=user.lastVisit ? new Date(user.lastVisit) : null;
let latestDataUpdate=null;
let usingFallback=false;
let dataVersionGlobal='–';
let pendingImport=null;
let importHistory=safeJSON(localStorage.getItem(IMPORT_HISTORY_KEY),[]);
if(!Array.isArray(importHistory))importHistory=[];
let preferences=safeJSON(localStorage.getItem(PREFERENCE_KEY),null);
function defaultPreferences(){return {enabled:true,initialized:false,categories:{},entryTypes:{},updatedAt:null}}
if(!preferences||typeof preferences!=='object')preferences=defaultPreferences();
if(!preferences.categories||typeof preferences.categories!=='object')preferences.categories={};
if(!preferences.entryTypes||typeof preferences.entryTypes!=='object')preferences.entryTypes={};
if(typeof preferences.enabled!=='boolean')preferences.enabled=true;
function savePreferences(){preferences.updatedAt=new Date().toISOString();localStorage.setItem(PREFERENCE_KEY,JSON.stringify(preferences))}
function contestById(id){return contests.find(x=>x.id===id)}
function adjustPreferenceForContest(id,delta){
 const i=contestById(id);if(!i||!delta)return;
 const cat=i.category||'Sonstiges',type=i.entryType||'form';
 preferences.categories[cat]=Math.max(-20,Math.min(30,Number(preferences.categories[cat]||0)+delta));
 preferences.entryTypes[type]=Math.max(-12,Math.min(18,Number(preferences.entryTypes[type]||0)+Math.sign(delta)));
 preferences.initialized=true;savePreferences();
}
function initializePreferences(){
 if(preferences.initialized)return;
 contests.forEach(i=>{const st=user.items[i.id];if(!st)return;let d=0;if(st.done)d+=3;if(st.favorite)d+=2;if(st.won)d+=5;if(st.ignored)d-=4;d+=Math.min(2,Number(user.clicks[i.id]||0));if(d){const cat=i.category||'Sonstiges',type=i.entryType||'form';preferences.categories[cat]=(preferences.categories[cat]||0)+d;preferences.entryTypes[type]=(preferences.entryTypes[type]||0)+Math.sign(d)}});
 preferences.initialized=true;savePreferences();
}
function preferenceBoost(i){
 if(!preferences.enabled)return 0;
 const cat=Math.max(-20,Math.min(30,Number(preferences.categories[i.category||'Sonstiges']||0)));
 const type=Math.max(-12,Math.min(18,Number(preferences.entryTypes[i.entryType||'form']||0)));
 return Math.max(-10,Math.min(12,Math.round(cat*.32+type*.16)));
}
function resetPreferences(){preferences=defaultPreferences();preferences.initialized=true;savePreferences();renderAll();toast('Persönliche Gewichtung zurückgesetzt')}
window.resetPreferences=resetPreferences;

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
 const personalBoost=preferenceBoost(i);
 let priority=chance*.42+time*.28+attractiveness*.18+urgency*.12;
 if(i.daily||i.multipleEntry)priority+=4;
 priority+=personalBoost;
 if(personalBoost>=4)reasons.push('passt zu deinen Interessen');
 else if(personalBoost<=-4)reasons.push('seltener von dir gewählt');
 priority=clampScore(priority);
 const confidence=winners>0&&trust>=4?'hoch':winners>0||trust>=4?'mittel':'begrenzt';
 return {
   score:priority,priorityScore:priority,chanceScore:chance,timeScore:time,
   attractivenessScore:attractiveness,urgencyScore:urgency,personalBoost,
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
function toggleFavorite(id){const s=stateFor(id);s.favorite=!s.favorite;adjustPreferenceForContest(id,s.favorite?2:-2);saveUser();renderAll();toast(s.favorite?'Zu Favoriten hinzugefügt':'Aus Favoriten entfernt')}
function toggleDone(id){const s=stateFor(id);s.done=!s.done;adjustPreferenceForContest(id,s.done?3:-3);if(s.done){s.doneAt=new Date().toISOString();sessionStorage.setItem('winwin-done-session',String(Number(sessionStorage.getItem('winwin-done-session')||0)+1))}else{s.doneAt=null}saveUser();renderAll();toast(s.done?'Als teilgenommen markiert':'Markierung entfernt')}
function toggleIgnored(id){
 const s=stateFor(id);s.ignored=!s.ignored;
 if(s.ignored)s.favorite=false;
 adjustPreferenceForContest(id,s.ignored?-4:4);
 saveUser();renderAll();
 toast(s.ignored?'Als nicht interessant ausgeblendet':'Gewinnspiel wieder eingeblendet')
}
function registerClick(id){user.clicks[id]=(user.clicks[id]||0)+1;adjustPreferenceForContest(id,0.35);saveUser()}
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
 if(!s.won)adjustPreferenceForContest(winDialogContestId,5);
 s.won=true;s.wonAt=new Date().toISOString();s.done=true;s.doneAt=s.doneAt||new Date().toISOString();
 s.winDetails={prizeName:$('#winPrizeName').value.trim(),value:Math.max(0,Number($('#winValue').value)||0),date:$('#winDate').value,deliveryStatus:$('#winDeliveryStatus').value,note:$('#winNote').value.trim()};
 saveUser();$('#winDialog').close();renderAll();toast('Gewinn im Archiv gespeichert 🎉');
}
function removeWin(){
 if(!winDialogContestId)return;const s=stateFor(winDialogContestId);if(s.won)adjustPreferenceForContest(winDialogContestId,-5);s.won=false;s.wonAt=null;s.winDetails={};saveUser();$('#winDialog').close();renderAll();toast('Gewinn aus dem Archiv entfernt');
}
window.toggleFavorite=toggleFavorite;window.toggleDone=toggleDone;window.toggleIgnored=toggleIgnored;window.registerClick=registerClick;window.openWinDialog=openWinDialog;

function label(score){return score>=88?'Unbedingt mitmachen':score>=75?'Sehr empfehlenswert':score>=62?'Gute Chance':'Solide Aktion'}
function badges(i){const left=daysLeft(i);return `<div class="badges">${isNewSinceVisit(i)?'<span class="new-ribbon">NEU</span>':''}<span class="badge">${esc(i.category)}</span><span class="badge score">${i.score}/100</span>${i.score>=80?'<span class="badge score">Top-Chance</span>':''}${secret(i)?'<span class="badge secret">Geheimtipp</span>':''}${left<=3?`<span class="badge hot">Noch ${left} Tag${left===1?'':'e'}</span>`:''}${i.international?'<span class="badge intl">International</span>':''}${i.regional?`<span class="badge regional">📍 ${esc(i.region||'Regional')}</span>`:''}${endingSoon(i)?`<span class="badge ending">⏰ Endet bald</span>`:''}</div>`}
function reasonBox(i){return `<div class="reason-box priority-explain"><strong>Warum diese Priorität?</strong><div class="score-components"><span><b>${i.chanceScore}</b>Chance</span><span><b>${i.timeScore}</b>Zeitnutzen</span><span><b>${i.attractivenessScore}</b>Attraktivität</span><span><b>${i.personalBoost>0?'+':''}${i.personalBoost}</b>Persönlich</span></div><p>${i.reasons.length?i.reasons.map(x=>'✓ '+esc(x)).join(' · '):'Kostenlose, geprüfte Teilnahme'}</p><small>Priorität ${i.score}/100 · Datensicherheit: ${esc(i.scoreConfidence||'begrenzt')}</small></div>`}
function mini(i){const s=stateFor(i.id);return `<article class="mini-card"><div class="provider">${esc(i.provider)}</div><h3>${esc(i.title)}</h3>${badges(i)}<div class="prize">🎁 ${esc(i.prize)}</div>${reasonBox(i)}<div class="mini-actions"><a class="primary" href="${esc(i.url)}" target="_blank" rel="noopener" onclick="registerClick('${esc(i.id)}')">Teilnehmen</a><button class="secondary" onclick="toggleFavorite('${esc(i.id)}')">${s.favorite?'♥':'♡'}</button><button class="secondary ignore-mini" aria-label="Nicht interessant" onclick="toggleIgnored('${esc(i.id)}')">Nicht interessant</button></div></article>`}
function full(i){const s=stateFor(i.id),left=daysLeft(i),wins=i.winners?`${i.winners} bekannte Gewinne`:'Gewinnerzahl nicht angegeben';return `<article class="contest-card ${s.ignored?'ignored-card':''}"><div class="card-top"><div><div class="provider">${esc(i.provider)}</div><h3>${esc(i.title)}</h3></div><button class="heart ${s.favorite?'active':''}" onclick="toggleFavorite('${esc(i.id)}')">${s.favorite?'♥':'♡'}</button></div>${badges(i)}${s.ignored?'<div class="ignored-note">Nicht interessant – nur in dieser Ansicht sichtbar.</div>':''}<div class="prize">🎁 ${esc(i.prize)}</div><div class="scoreline"><strong>${label(i.score)}</strong><div class="scorebar"><i style="width:${i.score}%"></i></div><strong>${i.score}</strong></div>${reasonBox(i)}<div class="details">Teilnahmeschluss: ${esc(i.deadline)} · ${left===0?'endet heute':`${left} Tag${left===1?'':'e'} übrig`}<br>${esc(wins)} · Aufwand: ${'●'.repeat(Math.min(5,i.effort||3))}${'○'.repeat(Math.max(0,5-(i.effort||3)))}<br>${esc(i.country)}${i.region?` · ${esc(i.region)}`:''} · geprüft: ${esc(i.verified||'–')}</div><div class="card-actions"><a href="${esc(i.url)}" target="_blank" rel="noopener" onclick="registerClick('${esc(i.id)}')">Teilnehmen ↗</a><button class="${s.done?'done':''}" onclick="toggleDone('${esc(i.id)}')">${s.done?'✓ Erledigt':'Teilgenommen'}</button><button class="win-button ${s.won?'active':''}" onclick="openWinDialog('${esc(i.id)}')">${s.won?'🏆 Gewonnen':'Gewonnen'}</button><button class="ignore-button ${s.ignored?'active':''}" onclick="toggleIgnored('${esc(i.id)}')">${s.ignored?'Wieder anzeigen':'Nicht interessant'}</button></div></article>`}
function empty(t){return `<div class="empty">${esc(t)}</div>`}

function todayRank(i){
 const left=daysLeft(i),effort=Number(i.effort||3),chance=Number(i.score||0);
 const urgency=left<=0?35:left<=2?24:left<=7?10:0;
 const speed=Math.max(0,6-effort)*6;
 if(dailyPlan.mode==='quick')return chance*.45+speed*1.5+urgency*.45;
 if(dailyPlan.mode==='urgent')return chance*.45+urgency*1.8+speed*.35;
 if(dailyPlan.mode==='chance')return chance*1.35+urgency*.45+speed*.25;
 return chance+urgency+speed*.55;
}
function todayQueue(){
 return scored()
  .filter(i=>{const s=stateFor(i.id);return !s.done&&!s.ignored})
  .sort((a,b)=>todayRank(b)-todayRank(a))
  .slice(0,Math.max(20,dailyPlan.target));
}
function todayStage(i){
 if(daysLeft(i)<=2)return {key:'urgent',label:'Dringend',icon:'⏳'};
 if(Number(i.effort||3)<=1)return {key:'quick',label:'Schnell erledigt',icon:'⚡'};
 return {key:'best',label:'Beste Chancen',icon:'🎯'};
}
function saveDailyPlan(){localStorage.setItem(DAILY_PLAN_KEY,JSON.stringify(dailyPlan));renderToday()}
function renderToday(){
 const queue=todayQueue(),today=dayKey();
 const completed=scored(true).filter(i=>stateFor(i.id).done).length;
 const doneToday=scored(true).filter(i=>{const s=stateFor(i.id);return s.done&&dayKey(s.doneAt)===today}).length;
 const target=Number(dailyPlan.target||10),remaining=Math.max(0,target-doneToday);
 const progress=target?Math.min(100,Math.round(doneToday/target*100)):0;
 const next=queue[0];
 $('#todaySummary').innerHTML=`<div><span>Dein Tagesziel</span><strong>${Math.min(doneToday,target)} / ${target}</strong></div><div class="today-progress"><i style="width:${progress}%"></i></div><p>${remaining?`Noch ${remaining} Teilnahme${remaining===1?'':'n'} bis zu deinem Tagesziel.`:'Tagesziel erreicht – stark!'} Insgesamt hast du ${completed} Teilnahmen markiert.</p>`;
 const nextBox=$('#todayNext');
 if(nextBox)nextBox.innerHTML=next?`<div><p class="section-kicker">ALS NÄCHSTES</p><h3>${esc(next.title)}</h3><p>${esc(next.provider)} · ${todayStage(next).label} · Priorität ${Math.round(todayRank(next))}</p></div><a href="${esc(next.url)}" target="_blank" rel="noopener" onclick="registerClick('${esc(next.id)}')">Jetzt teilnehmen ↗</a>`:`<div><p class="section-kicker">FERTIG FÜR HEUTE</p><h3>Keine offenen Empfehlungen mehr</h3><p>Deine aktuelle Tagesliste ist vollständig erledigt.</p></div>`;
 const groups=[
  ['urgent','⏳ Dringend','Endet spätestens in zwei Tagen'],
  ['quick','⚡ Schnell erledigt','Wenig Aufwand für zwischendurch'],
  ['best','🎯 Beste Chancen','Danach nach persönlicher Priorität']
 ];
 const used=new Set();let html='';
 groups.forEach(([key,title,copy])=>{const items=queue.filter(i=>todayStage(i).key===key&&!used.has(i.id)).slice(0,target);items.forEach(i=>used.add(i.id));if(items.length)html+=`<section class="today-stage"><div class="today-stage-head"><div><h3>${title}</h3><p>${copy}</p></div><span>${items.length}</span></div>${items.map(full).join('')}</section>`});
 $('#todayList').innerHTML=html||empty('Stark – deine heutige Prioritätenliste ist leer.');
 const targetEl=$('#dailyTarget');if(targetEl)targetEl.value=String(target);
 const modeEl=$('#dailyMode');if(modeEl)modeEl.value=dailyPlan.mode;
}
window.saveDailyPlan=saveDailyPlan;
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
function renderPersonalCore(){
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
 try{
 $('#winArchiveList').innerHTML=wins.sort((x,y)=>String(stateFor(y.id).winDetails?.date||stateFor(y.id).wonAt||'').localeCompare(String(stateFor(x.id).winDetails?.date||stateFor(x.id).wonAt||''))).map(i=>{const d=stateFor(i.id).winDetails||{};const val=Number(d.value)||0;let dateLabel='Datum offen';if(d.date){const parsed=new Date(String(d.date).includes('T')?d.date:d.date+'T12:00:00');dateLabel=Number.isNaN(parsed.getTime())?'Datum ungültig':new Intl.DateTimeFormat('de-DE').format(parsed)}return `<article class="win-archive-card"><div><span>🏆 ${esc(i.provider)}</span><h3>${esc(d.prizeName||i.prize)}</h3><p>${dateLabel} · ${esc(d.deliveryStatus==='erhalten'?'Erhalten':d.deliveryStatus==='versendet'?'Versendet':'Ausstehend')}${val?` · ${new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(val)}`:''}</p>${d.note?`<small>${esc(d.note)}</small>`:''}</div><button onclick="openWinDialog('${esc(i.id)}')">Bearbeiten</button></article>`}).join('')||empty('Noch kein Gewinn eingetragen – das ändern wir hoffentlich bald. 🍀');
 }catch(error){console.error('Gewinnarchiv konnte nicht gerendert werden',error);$('#winArchiveList').innerHTML=empty('Das Gewinnarchiv enthält einen unvollständigen Eintrag. Die übrigen Dashboard-Inhalte bleiben verfügbar.')}
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
 const focusBox=$('#dashboardFocus');
 if(focusBox){
  focusBox.innerHTML=focus.length?`<p class="section-kicker">JETZT SINNVOLL</p><h2>Dein nächster Schritt</h2><div>${focus.join('')}</div>`:'';
  focusBox.hidden=!focus.length;
 }
 const todayFirst=pool.filter(i=>!stateFor(i.id).done&&!stateFor(i.id).ignored).sort((x,y)=>((y.score+(daysLeft(y)<=2?12:0))- (x.score+(daysLeft(x)<=2?12:0))));
 const endingToday=pool.filter(i=>daysLeft(i)===0);
 const ending3=pool.filter(i=>daysLeft(i)>=0&&daysLeft(i)<=3).sort((x,y)=>daysLeft(x)-daysLeft(y));
 const top=pool.filter(i=>i.score>=80);
 const highValue=pool.filter(i=>i.highValuePrize).sort((x,y)=>y.score-x.score);
 const quick=pool.filter(i=>(i.effort||3)===1).sort((x,y)=>y.score-x.score);
 const dashboardGroups=[
  ['Heute zuerst teilnehmen','DEINE BESTE REIHENFOLGE',todayFirst,'recommended'],
  ['Endet heute','JETZT ODER NIE',endingToday,'endingSoon'],
  ['Endet in 3 Tagen','SCHNELL SEIN',ending3,'endingSoon'],
  ['Top-Gewinnchancen','HOHE TREFFERCHANCE',top,'top'],
  ['Hoher Gewinnwert','BESONDERS ATTRAKTIV',highValue,'all'],
  ['Schnell erledigt','UNTER 1 MINUTE',quick,'all']
 ].filter(([, ,items])=>items.length);
 $('#dashboardPriorityGroups').innerHTML=dashboardGroups.length
  ?dashboardGroups.map(([title,kicker,items,filter])=>dashboardGroup(title,kicker,items,filter,'')).join('')
  :empty('Aktuell gibt es keine offenen Empfehlungen für dein Dashboard.');
 const counts={};
 done.forEach(i=>{const c=i.category||'Sonstiges';counts[c]=(counts[c]||0)+1});
 const cats=Object.entries(counts).sort((x,y)=>y[1]-x[1]).slice(0,6);
 const max=cats[0]?.[1]||1;
 $('#categoryStats').innerHTML=cats.length?cats.map(([name,n])=>`<button onclick="openDiscover('${esc(name)}')"><span><b>${esc(name)}</b><em>${n} Teilnahme${n===1?'':'n'}</em></span><i><u style="width:${Math.round(n/max*100)}%"></u></i></button>`).join(''):empty('Sobald du Teilnahmen markierst, siehst du hier deine aktivsten Kategorien.');
}


function renderPersonal(){
 const fallbacks={
  statsHero:'Dashboard-Daten konnten nicht vollständig geladen werden.',
  statsGrid:'', winOfDay:'', dashboardFocus:'', dashboardPriorityGroups:'',
  categoryStats:'Noch keine Kategorien verfügbar.', winArchiveSummary:'',
  winArchiveList:'Noch kein Gewinn eingetragen.', doneList:'Noch keine Teilnahmen markiert.'
 };
 try{
  renderPersonalCore();
 }catch(error){
  console.error('Win Win: Dashboard konnte nicht vollständig gerendert werden',error);
  Object.entries(fallbacks).forEach(([id,text])=>{
   const el=$('#'+id);if(!el||el.innerHTML.trim())return;
   el.innerHTML=text?empty(text):'';
  });
  const note=$('#dashboardModeNote');if(note)note.textContent='Ein lokaler Datensatz konnte nicht vollständig gelesen werden. Deine Status bleiben gespeichert.';
 }
}

function renderPreferencePanel(){
 const box=$('#preferencePanel');if(!box)return;
 const cats=Object.entries(preferences.categories||{}).filter(([,v])=>Math.abs(Number(v))>=1).sort((a,b)=>b[1]-a[1]);
 const positive=cats.filter(([,v])=>v>0).slice(0,5),negative=cats.filter(([,v])=>v<0).sort((a,b)=>a[1]-b[1]).slice(0,3);
 box.innerHTML=`<div class="preference-head"><div><p class="section-kicker">LOKAL & PRIVAT</p><h2>Deine persönliche Gewichtung</h2><p>Win Win berücksichtigt Kategorien, die du häufig favorisierst oder an denen du teilnimmst. Alles bleibt nur auf diesem Gerät.</p></div><label class="preference-switch"><input id="preferenceEnabled" type="checkbox" ${preferences.enabled?'checked':''}><span>Lernen aktiv</span></label></div><div class="preference-chips">${positive.length?positive.map(([c,v])=>`<span class="positive">↑ ${esc(c)} <b>+${Math.min(12,Math.round(v*.32))}</b></span>`).join(''):'<span>Noch keine deutlichen Vorlieben erkannt.</span>'}${negative.map(([c,v])=>`<span class="negative">↓ ${esc(c)}</span>`).join('')}</div><div class="preference-actions"><small>Die persönliche Anpassung verändert nur die Reihenfolge, niemals deine Status.</small><button id="resetPreferencesBtn">Zurücksetzen</button></div>`;
 $('#preferenceEnabled').onchange=e=>{preferences.enabled=e.target.checked;savePreferences();renderAll();toast(preferences.enabled?'Persönliche Gewichtung aktiviert':'Persönliche Gewichtung pausiert')};
 $('#resetPreferencesBtn').onclick=()=>{if(confirm('Persönliche Gewichtung wirklich zurücksetzen? Deine Teilnahmen, Favoriten und Gewinne bleiben erhalten.'))resetPreferences()};
}
function safeRender(name,fn){
 try{fn()}catch(error){console.error(`Win Win: ${name} konnte nicht gerendert werden`,error)}
}
function renderAll(){
 safeRender('Start-Kennzahlen',renderMetrics);
 safeRender('Startseite',renderHome);
 safeRender('Heute',renderToday);
 safeRender('Entdecken',renderDiscover);
 safeRender('Dashboard',renderPersonal);
 safeRender('Vorlieben',renderPreferencePanel);
}
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
function prepareImport(payload,source='JSON'){
 const incoming=extractContestArray(payload);
 const result=mergeCatalog(baseContests,customContests.concat(incoming));
 const customResult=mergeCatalog([],customContests.concat(incoming));
 pendingImport={incoming,customContests:customResult.contests,report:result.report,source,preparedAt:new Date().toISOString()};
 renderImportPreview();
 return pendingImport
}
function applyPendingImport(){
 if(!pendingImport)return toast('Kein geprüfter Import vorhanden');
 // Katalog sichern – persönliche Status liegen getrennt in STORAGE_KEY und werden niemals verändert.
 localStorage.setItem(IMPORT_BACKUP_KEY,JSON.stringify({savedAt:new Date().toISOString(),contests:customContests}));
 customContests=pendingImport.customContests;
 localStorage.setItem(CUSTOM_DATA_KEY,JSON.stringify(customContests));
 const entry={date:new Date().toISOString(),source:pendingImport.source,...pendingImport.report};
 importHistory=[entry,...importHistory].slice(0,20);
 localStorage.setItem(IMPORT_HISTORY_KEY,JSON.stringify(importHistory));
 const report=pendingImport.report;pendingImport=null;
 applyCustomData(report);renderImportPreview();renderImportHistory();
 toast(`${report.added} neu · ${report.updated} aktualisiert`)
}
function cancelPendingImport(){pendingImport=null;renderImportPreview();toast('Import verworfen')}
function restoreCatalogBackup(){
 const backup=safeJSON(localStorage.getItem(IMPORT_BACKUP_KEY),null);
 if(!backup||!Array.isArray(backup.contests))return toast('Keine Katalog-Sicherung vorhanden');
 if(!confirm('Letzten lokalen Katalogstand wiederherstellen? Persönliche Status bleiben erhalten.'))return;
 customContests=backup.contests;localStorage.setItem(CUSTOM_DATA_KEY,JSON.stringify(customContests));
 applyCustomData();renderImportHistory();toast('Katalog-Sicherung wiederhergestellt')
}
function renderImportPreview(){
 const box=$('#importPreview');if(!box)return;
 if(!pendingImport){box.hidden=true;box.innerHTML='';return}
 const r=pendingImport.report;box.hidden=false;
 box.innerHTML=`<div class="preview-head"><div><p class="section-kicker">IMPORTVORSCHAU</p><h3>Noch nicht übernommen</h3></div><span>${pendingImport.incoming.length} geprüft</span></div><div class="preview-grid"><div><strong>${r.added}</strong><span>neu</span></div><div><strong>${r.updated}</strong><span>aktualisiert</span></div><div><strong>${r.duplicates||0}</strong><span>Dubletten</span></div><div><strong>${r.invalid}</strong><span>ungültig</span></div></div><p class="preview-note">Deine Markierungen wie „Teilgenommen“, Favoriten, „Nicht interessant“ und Gewinne liegen getrennt und werden durch diesen Import nicht verändert.</p>${r.idConflicts?`<p class="preview-warning">⚠ ${r.idConflicts} ID-Konflikt${r.idConflicts===1?'':'e'} erkannt. Bestehende stabile IDs werden geschützt.</p>`:''}<div class="data-actions"><button id="applyImportBtn" class="data-primary">Änderungen übernehmen</button><button id="cancelImportBtn">Verwerfen</button></div>`;
 $('#applyImportBtn').onclick=applyPendingImport;$('#cancelImportBtn').onclick=cancelPendingImport
}
function renderImportHistory(){
 const box=$('#importHistory');if(!box)return;
 box.innerHTML=importHistory.length?importHistory.slice(0,8).map(x=>`<div class="history-row"><div><strong>${esc(x.source||'JSON-Import')}</strong><span>${new Intl.DateTimeFormat('de-DE',{dateStyle:'short',timeStyle:'short'}).format(new Date(x.date))}</span></div><p>${x.added||0} neu · ${x.updated||0} aktualisiert · ${x.invalid||0} ungültig</p></div>`).join(''):empty('Noch keine Katalog-Updates übernommen.')
}
function downloadJSON(filename,payload){
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)
}

function buildFullBackup(){
 return {
   format:FULL_BACKUP_FORMAT,
   backupVersion:FULL_BACKUP_VERSION,
   appVersion:APP_VERSION,
   exportedAt:new Date().toISOString(),
   deviceData:{
     user:normalizeUser(JSON.parse(JSON.stringify(user))),
     preferences:JSON.parse(JSON.stringify(preferences)),
     discoverFilters:JSON.parse(JSON.stringify(advancedFilters)),
     dashboardShowAll:Boolean(dashboardShowAll),
     dailyPlan:JSON.parse(JSON.stringify(dailyPlan)),
     customContests:JSON.parse(JSON.stringify(customContests)),
     catalogBackup:safeJSON(localStorage.getItem(IMPORT_BACKUP_KEY),null),
     importHistory:JSON.parse(JSON.stringify(importHistory))
   },
   summary:{
     statuses:Object.keys(user.items||{}).length,
     participated:Object.values(user.items||{}).filter(x=>x&&x.done).length,
     ignored:Object.values(user.items||{}).filter(x=>x&&x.ignored).length,
     favorites:Object.values(user.items||{}).filter(x=>x&&x.favorite).length,
     wins:Object.values(user.items||{}).filter(x=>x&&x.won).length,
     customContests:customContests.length
   }
 }
}
function validateFullBackup(payload){
 if(!payload||payload.format!==FULL_BACKUP_FORMAT)throw new Error('Keine gültige Win-Win-Komplettsicherung');
 if(Number(payload.backupVersion)!==FULL_BACKUP_VERSION)throw new Error('Diese Sicherungsversion wird noch nicht unterstützt');
 const d=payload.deviceData;if(!d||typeof d!=='object')throw new Error('Sicherungsdaten fehlen');
 if(!d.user||typeof d.user!=='object'||!d.user.items||typeof d.user.items!=='object')throw new Error('Persönliche Status fehlen');
 if(d.customContests!=null&&!Array.isArray(d.customContests))throw new Error('Lokaler Katalog ist ungültig');
 return d
}
function exportFullBackup(){
 const backup=buildFullBackup();
 downloadJSON(`win-win-persoenliche-sicherung-${new Date().toISOString().slice(0,10)}.json`,backup);
 toast('Persönliche Sicherung erstellt')
}
function applyFullBackup(payload){
 const d=validateFullBackup(payload);
 const summary=payload.summary||{};
 const date=payload.exportedAt?new Intl.DateTimeFormat('de-DE',{dateStyle:'medium',timeStyle:'short'}).format(new Date(payload.exportedAt)):'unbekannt';
 const message=`Sicherung vom ${date} wiederherstellen?\n\n${summary.participated||0} Teilnahmen · ${summary.ignored||0} nicht interessant · ${summary.favorites||0} Favoriten · ${summary.wins||0} Gewinne\n\nDer aktuelle Stand wird vorher automatisch gesichert.`;
 if(!confirm(message))return;
 localStorage.setItem(FULL_BACKUP_ROLLBACK_KEY,JSON.stringify(buildFullBackup()));
 user=normalizeUser(JSON.parse(JSON.stringify(d.user)));
 preferences=d.preferences&&typeof d.preferences==='object'?JSON.parse(JSON.stringify(d.preferences)):defaultPreferences();
 advancedFilters=d.discoverFilters&&typeof d.discoverFilters==='object'?JSON.parse(JSON.stringify(d.discoverFilters)):advancedFilters;
 dashboardShowAll=Boolean(d.dashboardShowAll);
 dailyPlan=d.dailyPlan&&typeof d.dailyPlan==='object'?JSON.parse(JSON.stringify(d.dailyPlan)):dailyPlan;
 customContests=Array.isArray(d.customContests)?JSON.parse(JSON.stringify(d.customContests)):[];
 importHistory=Array.isArray(d.importHistory)?JSON.parse(JSON.stringify(d.importHistory)):[];
 localStorage.setItem(STORAGE_KEY,JSON.stringify(user));
 localStorage.setItem(STORAGE_BACKUP_KEY,JSON.stringify(user));
 localStorage.setItem(PREFERENCE_KEY,JSON.stringify(preferences));
 localStorage.setItem(FILTER_STORAGE_KEY,JSON.stringify(advancedFilters));
 localStorage.setItem(DASHBOARD_SHOW_ALL_KEY,String(dashboardShowAll));
 localStorage.setItem(DAILY_PLAN_KEY,JSON.stringify(dailyPlan));
 if(customContests.length)localStorage.setItem(CUSTOM_DATA_KEY,JSON.stringify(customContests));else localStorage.removeItem(CUSTOM_DATA_KEY);
 if(d.catalogBackup)localStorage.setItem(IMPORT_BACKUP_KEY,JSON.stringify(d.catalogBackup));else localStorage.removeItem(IMPORT_BACKUP_KEY);
 localStorage.setItem(IMPORT_HISTORY_KEY,JSON.stringify(importHistory));
 const toggle=$('#dashboardShowAll');if(toggle)toggle.checked=dashboardShowAll;
 syncFilterUI();applyCustomData();renderImportHistory();renderBackupSummary();
 toast('Persönliche Sicherung wiederhergestellt')
}
function restoreBeforeBackupImport(){
 const rollback=safeJSON(localStorage.getItem(FULL_BACKUP_ROLLBACK_KEY),null);
 if(!rollback)return toast('Keine vorherige Sicherung vorhanden');
 if(!confirm('Den Stand vor der letzten Wiederherstellung zurückholen?'))return;
 applyFullBackupWithoutPrompt(rollback);
 localStorage.removeItem(FULL_BACKUP_ROLLBACK_KEY);
 toast('Vorheriger Stand wiederhergestellt')
}
function applyFullBackupWithoutPrompt(payload){
 const d=validateFullBackup(payload);
 user=normalizeUser(JSON.parse(JSON.stringify(d.user)));
 preferences=d.preferences&&typeof d.preferences==='object'?JSON.parse(JSON.stringify(d.preferences)):defaultPreferences();
 advancedFilters=d.discoverFilters&&typeof d.discoverFilters==='object'?JSON.parse(JSON.stringify(d.discoverFilters)):advancedFilters;
 dashboardShowAll=Boolean(d.dashboardShowAll);
 dailyPlan=d.dailyPlan&&typeof d.dailyPlan==='object'?JSON.parse(JSON.stringify(d.dailyPlan)):dailyPlan;
 customContests=Array.isArray(d.customContests)?JSON.parse(JSON.stringify(d.customContests)):[];
 importHistory=Array.isArray(d.importHistory)?JSON.parse(JSON.stringify(d.importHistory)):[];
 localStorage.setItem(STORAGE_KEY,JSON.stringify(user));localStorage.setItem(STORAGE_BACKUP_KEY,JSON.stringify(user));localStorage.setItem(PREFERENCE_KEY,JSON.stringify(preferences));localStorage.setItem(FILTER_STORAGE_KEY,JSON.stringify(advancedFilters));localStorage.setItem(DASHBOARD_SHOW_ALL_KEY,String(dashboardShowAll));localStorage.setItem(DAILY_PLAN_KEY,JSON.stringify(dailyPlan));
 if(customContests.length)localStorage.setItem(CUSTOM_DATA_KEY,JSON.stringify(customContests));else localStorage.removeItem(CUSTOM_DATA_KEY);
 if(d.catalogBackup)localStorage.setItem(IMPORT_BACKUP_KEY,JSON.stringify(d.catalogBackup));else localStorage.removeItem(IMPORT_BACKUP_KEY);
 localStorage.setItem(IMPORT_HISTORY_KEY,JSON.stringify(importHistory));
 const toggle=$('#dashboardShowAll');if(toggle)toggle.checked=dashboardShowAll;syncFilterUI();applyCustomData();renderImportHistory();renderBackupSummary()
}
function renderBackupSummary(){
 const box=$('#personalBackupSummary');if(!box)return;
 const states=Object.values(user.items||{});
 const hasRollback=Boolean(localStorage.getItem(FULL_BACKUP_ROLLBACK_KEY));
 box.innerHTML=`<div class="backup-summary-grid"><div><strong>${states.filter(x=>x&&x.done).length}</strong><span>Teilnahmen</span></div><div><strong>${states.filter(x=>x&&x.ignored).length}</strong><span>nicht interessant</span></div><div><strong>${states.filter(x=>x&&x.favorite).length}</strong><span>Favoriten</span></div><div><strong>${states.filter(x=>x&&x.won).length}</strong><span>Gewinne</span></div></div><p>${customContests.length} lokal ergänzte Gewinnspiele werden ebenfalls gesichert.</p>${hasRollback?'<p class="backup-rollback-note">Eine Sicherung des Stands vor der letzten Wiederherstellung ist verfügbar.</p>':''}`;
 const undo=$('#undoBackupImportBtn');if(undo)undo.disabled=!hasRollback
}
function setupPersonalBackup(){
 const input=$('#personalBackupFile');if(!input)return;
 $('#exportPersonalBackupBtn').onclick=exportFullBackup;
 $('#choosePersonalBackupBtn').onclick=()=>input.click();
 input.onchange=async()=>{const f=input.files[0];if(!f)return;try{applyFullBackup(JSON.parse(await f.text()))}catch(e){toast('Wiederherstellung fehlgeschlagen: '+e.message)}finally{input.value=''}};
 $('#undoBackupImportBtn').onclick=restoreBeforeBackupImport;
 renderBackupSummary()
}


function renderDataCenter(report=null){
 const summary=$('#importSummary');
 const quality=$('#qualityOverview');
 const warnings=$('#qualityWarnings');
 const providers=$('#providerQuality');
 const localText=$('#localDataText');
 const backupBtn=$('#restoreCatalogBtn');
 const all=Array.isArray(contests)?contests:[];
 const activeRows=all.filter(i=>{try{return active(i)}catch{return false}});
 const warningRows=all.map(i=>({i,w:contestWarnings(i)})).filter(x=>x.w.length);
 const providerMap=new Map();
 all.forEach(i=>{
   const name=String(i.provider||'Unbekannt');
   const row=providerMap.get(name)||{name,total:0,active:0,trust:0};
   row.total++; if(activeRows.includes(i))row.active++; row.trust+=Number(i.providerTrust)||3;
   providerMap.set(name,row);
 });
 if(summary){
   const r=report||{};
   summary.innerHTML=`<div><strong>${all.length}</strong><span>Gewinnspiele</span></div><div><strong>${activeRows.length}</strong><span>aktuell aktiv</span></div><div><strong>${customContests.length}</strong><span>lokale Ergänzungen</span></div><div><strong>${r.added||0}</strong><span>zuletzt neu</span></div>`;
 }
 if(quality){
   const validLinks=all.filter(i=>/^https?:\/\//i.test(i.url||'')).length;
   const dated=all.filter(i=>Boolean(parseGermanDate(i.deadline))).length;
   const verified=all.filter(i=>Boolean(i.verified)).length;
   quality.innerHTML=`<div><strong>${validLinks}/${all.length}</strong><span>gültige Links</span></div><div><strong>${dated}/${all.length}</strong><span>lesbare Fristen</span></div><div><strong>${verified}/${all.length}</strong><span>mit Prüfdatum</span></div><div><strong>${warningRows.length}</strong><span>mit Hinweisen</span></div>`;
 }
 if(warnings){
   warnings.innerHTML=warningRows.length?warningRows.slice(0,20).map(({i,w})=>`<div class="quality-warning-row"><strong>${esc(i.title)}</strong><span>${esc(w.join(' · '))}</span></div>`).join(''):empty('Keine auffälligen Datensätze gefunden.');
 }
 if(providers){
   const rows=[...providerMap.values()].map(x=>({...x,avg:x.total?x.trust/x.total:0})).sort((a,b)=>b.avg-a.avg||b.active-a.active).slice(0,20);
   providers.innerHTML=rows.length?rows.map(x=>`<div class="provider-quality-row"><div><strong>${esc(x.name)}</strong><span>${x.active} aktiv · ${x.total} gesamt</span></div><b>${x.avg.toFixed(1)}/5</b></div>`).join(''):empty('Noch keine Anbieter vorhanden.');
 }
 if(localText)localText.textContent=customContests.length?`${customContests.length} lokale Ergänzung${customContests.length===1?'':'en'} gespeichert.`:'Noch keine lokalen Ergänzungen gespeichert.';
 if(backupBtn)backupBtn.disabled=!localStorage.getItem(IMPORT_BACKUP_KEY);
 renderImportPreview();renderImportHistory();renderBackupSummary();
}
function setupDataCenter(){
 const importFile=$('#importFile');
 $('#chooseImportBtn')?.addEventListener('click',()=>importFile?.click());
 if(importFile)importFile.addEventListener('change',async()=>{
   const f=importFile.files?.[0];if(!f)return;
   try{prepareImport(JSON.parse(await f.text()),f.name);toast('Import geprüft – Vorschau beachten')}catch(e){toast('Import fehlgeschlagen: '+(e?.message||e))}finally{importFile.value=''}
 });
 $('#pasteImportBtn')?.addEventListener('click',()=>{const value=$('#jsonPaste')?.value?.trim();if(!value)return toast('Bitte zuerst JSON einfügen');try{prepareImport(JSON.parse(value),'Eingefügtes JSON');toast('Import geprüft – Vorschau beachten')}catch(e){toast('Import fehlgeschlagen: '+(e?.message||e))}});
 $('#clearPasteBtn')?.addEventListener('click',()=>{const el=$('#jsonPaste');if(el)el.value=''});
 $('#exportMergedBtn')?.addEventListener('click',()=>downloadJSON(`win-win-gesamtkatalog-${new Date().toISOString().slice(0,10)}.json`,{version:APP_VERSION,updated:new Date().toISOString(),contests}));
 $('#exportLocalBtn')?.addEventListener('click',()=>downloadJSON(`win-win-lokale-ergaenzungen-${new Date().toISOString().slice(0,10)}.json`,{version:APP_VERSION,updated:new Date().toISOString(),contests:customContests}));
 $('#clearLocalBtn')?.addEventListener('click',()=>{if(!customContests.length)return toast('Keine lokalen Ergänzungen vorhanden');if(!confirm('Lokale Ergänzungen löschen? Persönliche Status bleiben erhalten.'))return;localStorage.setItem(IMPORT_BACKUP_KEY,JSON.stringify({savedAt:new Date().toISOString(),contests:customContests}));customContests=[];localStorage.removeItem(CUSTOM_DATA_KEY);applyCustomData();toast('Lokale Ergänzungen gelöscht')});
 $('#restoreCatalogBtn')?.addEventListener('click',restoreCatalogBackup);
 setupPersonalBackup();renderDataCenter();
}

function normalizeSource(raw,index=0){
 if(!raw||typeof raw!=='object')return null;
 const id=String(raw.id||'').trim();const name=String(raw.name||'').trim();
 if(!id||!name)return null;
 return {id,name,domain:String(raw.domain||'').trim().replace(/^https?:\/\//i,'').replace(/\/$/,''),country:String(raw.country||'Unbekannt').trim(),countriesAllowed:Array.isArray(raw.countriesAllowed)?raw.countriesAllowed.map(String):[],type:String(raw.type||'Sonstige Quelle').trim(),categories:Array.isArray(raw.categories)?raw.categories.map(String).filter(Boolean):[],automation:['green','yellow','red'].includes(raw.automation)?raw.automation:'red',quality:Math.max(1,Math.min(5,Number(raw.quality)||3)),active:raw.active!==false,requiresLogin:Boolean(raw.requiresLogin),socialOnly:Boolean(raw.socialOnly),checkIntervalDays:Math.max(1,Number(raw.checkIntervalDays)||7),lastChecked:raw.lastChecked||null,notes:String(raw.notes||'').trim(),germanyEligibility:['yes','check','no'].includes(raw.germanyEligibility)?raw.germanyEligibility:'check',verification:['verified','candidate','blocked'].includes(raw.verification)?raw.verification:'candidate',successfulChecks:Math.max(0,Number(raw.successfulChecks)||0),emptyChecks:Math.max(0,Number(raw.emptyChecks)||0),lastResultCount:Math.max(0,Number(raw.lastResultCount)||0),favorite:Boolean(raw.favorite),local:Boolean(raw.local),_index:index};
}
function localSources(){const raw=safeJSON(localStorage.getItem(SOURCE_DATA_KEY),[]);return Array.isArray(raw)?raw.map(normalizeSource).filter(Boolean):[]}
function mergeSources(){const map=new Map(baseSources.map((s,i)=>[s.id,normalizeSource(s,i)]));localSources().forEach((s,i)=>map.set(s.id,{...s,local:true,_index:baseSources.length+i}));sources=[...map.values()]}
function sourceById(id){return sources.find(s=>s.id===id)||null}
function sourceForContest(i){return sourceById(i.sourceId)||sources.find(s=>s.name.toLowerCase()===(i.provider||'').toLowerCase())||null}
function sourceContestCounts(){const map=new Map(sources.map(s=>[s.id,{total:0,active:0,top:0}]));contests.forEach(i=>{const s=sourceForContest(i);if(!s)return;const r=map.get(s.id)||{total:0,active:0,top:0};r.total++;if(active(i))r.active++;if(active(i)&&scoreContest(i).score>=80)r.top++;map.set(s.id,r)});return map}
function sourcePriority(s,counts){
 const c=counts||{active:0,total:0,top:0};let score=s.quality*12+(s.automation==='green'?16:s.automation==='yellow'?9:3)+(s.germanyEligibility==='yes'?12:s.germanyEligibility==='check'?4:-30)+(s.verification==='verified'?10:s.verification==='blocked'?-35:2)+Math.min(16,c.active*4)+Math.min(8,c.top*3)+Math.min(8,s.successfulChecks*2)-Math.min(14,s.emptyChecks*2);if(sourceReviewState(s).due)score+=5;return Math.max(0,Math.min(100,Math.round(score)))}
function sourceHealthLabel(s){if(s.verification==='blocked'||s.germanyEligibility==='no')return {key:'bad',label:'Nicht geeignet'};if(s.emptyChecks>=4)return {key:'weak',label:'Kaum Ertrag'};if(s.verification==='verified'&&s.germanyEligibility==='yes')return {key:'good',label:'Verifiziert'};return {key:'check',label:'Prüfen'}}
function sourceAutomationLabel(v){return v==='green'?'Grün · automatisierbar':v==='yellow'?'Gelb · halbautomatisch':'Rot · manuell'}
function sourceReviewState(s){
 if(!s.active)return {key:'inactive',label:'Inaktiv',due:false,days:0};
 if(!s.lastChecked)return {key:'never',label:'Noch nie geprüft',due:true,days:null};
 const checked=new Date(String(s.lastChecked).slice(0,10)+'T12:00:00');
 if(Number.isNaN(checked.getTime()))return {key:'never',label:'Noch nie geprüft',due:true,days:null};
 const dueDate=new Date(checked);dueDate.setDate(dueDate.getDate()+Math.max(1,Number(s.checkIntervalDays)||7));
 const today=new Date();today.setHours(12,0,0,0);dueDate.setHours(12,0,0,0);
 const delta=Math.floor((today-dueDate)/86400000);
 if(delta>=0)return {key:'due',label:delta===0?'Heute prüfen':`${delta} T. überfällig`,due:true,days:delta};
 const remaining=Math.ceil((dueDate-today)/86400000);return {key:'ok',label:`in ${remaining} T.`,due:false,days:-remaining};
}
function sourceHomepage(s){return s.domain?`https://${s.domain.replace(/^https?:\/\//i,'')}`:''}
function sourceSlug(value){return String(value||'quelle').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60)||`quelle-${Date.now()}`}
function persistSource(source,originalId=''){
 const clean=normalizeSource({...source,local:true});if(!clean)throw new Error('Name und ID fehlen');
 const list=localSources();const map=new Map(list.map(x=>[x.id,x]));
 if(originalId&&originalId!==clean.id)map.delete(originalId);
 map.set(clean.id,{...clean,local:true});
 localStorage.setItem(SOURCE_DATA_KEY,JSON.stringify([...map.values()]));mergeSources();renderSourceFilters();renderSourceManager();
}
function renderSourceFilters(){
 const countries=[...new Set(sources.map(s=>s.country).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'de'));const types=[...new Set(sources.map(s=>s.type).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'de'));
 const country=$('#sourceCountryFilter'),type=$('#sourceTypeFilter');
 if(country){const v=country.value;country.innerHTML='<option value="">Alle Länder</option>'+countries.map(x=>`<option>${esc(x)}</option>`).join('');country.value=v}
 if(type){const v=type.value;type.innerHTML='<option value="">Alle Typen</option>'+types.map(x=>`<option>${esc(x)}</option>`).join('');type.value=v}
}
function renderSourceManager(){
 const box=$('#sourceOverview'),badge=$('#sourceCountBadge'),stats=$('#sourceStats');if(!box)return;
 try{
  const counts=sourceContestCounts();
  const review=s=>sourceReviewState(s);
  const rows=visibleSources().sort((a,b)=>{const ca=counts.get(a.id)||{},cb=counts.get(b.id)||{};if(sourceFilters.sort==='name')return a.name.localeCompare(b.name,'de');if(sourceFilters.sort==='quality')return b.quality-a.quality||a.name.localeCompare(b.name,'de');if(sourceFilters.sort==='yield')return (cb.active||0)-(ca.active||0)||sourcePriority(b,cb)-sourcePriority(a,ca);if(sourceFilters.sort==='due')return Number(review(b).due)-Number(review(a).due)||a.name.localeCompare(b.name,'de');return sourcePriority(b,cb)-sourcePriority(a,ca)||a.name.localeCompare(b.name,'de')});
  const visible=rows.slice(0,sourceRenderLimit);
  if(badge)badge.textContent=`${rows.length} von ${sources.length} Quellen`;
  if(stats){const activeSources=sources.filter(s=>s.active).length;const verified=sources.filter(s=>s.verification==='verified'&&s.germanyEligibility==='yes').length;const due=sources.filter(s=>sourceReviewState(s).due).length;const linked=contests.filter(i=>sourceForContest(i)).length;stats.innerHTML=`<div><strong>${sources.length}</strong><span>Quellen gesamt</span></div><div><strong>${activeSources}</strong><span>aktiv</span></div><div><strong>${verified}</strong><span>DE verifiziert</span></div><div><strong>${due}</strong><span>jetzt prüfen</span></div><div><strong>${linked}/${contests.length}</strong><span>verknüpft</span></div><div><strong>${sources.filter(s=>s.favorite).length}</strong><span>Favoriten</span></div>`;renderSourceCoverage()}
  const cards=visible.map(s=>{try{const c=counts.get(s.id)||{total:0,active:0,top:0};const r=review(s);const home=sourceHomepage(s);const priority=sourcePriority(s,c),health=sourceHealthLabel(s);return `<article class="source-card ${r.due?'source-due':''} ${!s.active?'source-inactive':''}"><div class="source-card-head"><div><strong>${esc(s.name)}</strong><span>${esc(s.domain||s.country)}</span></div><b class="source-priority">${priority}</b></div><div class="source-card-meta"><span>${esc(s.type)}</span><span>${esc(s.country)}</span><span>Qualität ${s.quality}/5</span><span class="source-health ${health.key}">${esc(health.label)}</span><span class="review-chip ${r.key}">${esc(r.label)}</span>${s.favorite?'<span>★ Favorit</span>':''}${s.local?'<span>Lokal</span>':''}</div><p>${esc(s.notes||'Keine Notiz')}</p><div class="source-card-foot"><span>${c.active} aktiv · ${c.total} gesamt${c.top?` · ${c.top} Top`:''}</span><small>${esc(sourceAutomationLabel(s.automation))}${s.lastChecked?` · ${esc(s.lastChecked)}`:''}</small></div><div class="source-card-actions">${home?`<a href="${esc(home)}" target="_blank" rel="noopener">Website ↗</a>`:''}<button type="button" data-source-favorite="${esc(s.id)}">${s.favorite?'★ Favorit':'☆ Favorit'}</button><button type="button" data-source-found="${esc(s.id)}">＋ Treffer</button><button type="button" data-source-empty="${esc(s.id)}">0 Leer</button><button type="button" data-source-edit="${esc(s.id)}">Bearbeiten</button><button type="button" data-source-toggle="${esc(s.id)}">${s.active?'Pausieren':'Aktivieren'}</button></div></article>`}catch(err){console.warn('Win Win: Quelle konnte nicht dargestellt werden',s,err);return ''}}).join('');
  const more=rows.length>visible.length?`<button type="button" id="loadMoreSourcesBtn" class="source-load-more">Weitere ${Math.min(30,rows.length-visible.length)} Quellen anzeigen</button>`:'';
  box.innerHTML=rows.length?cards+more:empty('Keine Quellen passen zu den Filtern.');
  $('#loadMoreSourcesBtn')?.addEventListener('click',()=>{sourceRenderLimit+=30;renderSourceManager()});
  const note=$('#sourceDataNote');if(note)note.textContent=`Quellen-Daten ${sourceDataVersion} · ${sources.length} geladen · ${visible.length} angezeigt · lokale Änderungen bleiben nur auf diesem Gerät.`;
 }catch(err){
  console.error('Win Win: Quellenanzeige fehlgeschlagen',err);
  box.innerHTML=`<div class="source-render-error"><strong>Quellen konnten nicht angezeigt werden.</strong><p>${esc(err?.message||'Unbekannter Fehler')}</p><button type="button" id="retrySourcesBtn">Erneut versuchen</button></div>`;
  $('#retrySourcesBtn')?.addEventListener('click',()=>{sourceRenderLimit=30;renderSourceManager()});
  if(badge)badge.textContent=`${sources.length} Quellen geladen`;
 }
}
function renderSourceCoverage(){const box=$('#sourceCoverage');if(!box)return;const categoryCounts={};sources.filter(s=>s.active&&s.germanyEligibility!=='no').forEach(s=>(s.categories||[]).forEach(c=>categoryCounts[c]=(categoryCounts[c]||0)+1));const wanted=['Beauty','Mode','Wohnen','Technik','Reisen','Freizeit','Food','Auto','Regional'];box.innerHTML=wanted.map(c=>`<div class="coverage-item ${(categoryCounts[c]||0)<3?'gap':''}"><span>${esc(c)}</span><strong>${categoryCounts[c]||0}</strong><small>${(categoryCounts[c]||0)<3?'Ausbauen':'gut abgedeckt'}</small></div>`).join('')}
function recordSourceResult(id,found){const s=sourceById(id);if(!s)return;const today=new Date().toISOString().slice(0,10);persistSource({...s,lastChecked:today,successfulChecks:s.successfulChecks+(found?1:0),emptyChecks:s.emptyChecks+(found?0:1),lastResultCount:found?Math.max(1,s.lastResultCount):0},s.id);toast(found?`${s.name}: Treffer erfasst`:`${s.name}: leere Prüfung erfasst`)}
async function fetchJsonFromPaths(paths, validator){
 const errors=[];
 for(const path of paths){
  try{
   const r=await fetch(path,{cache:'no-store',headers:{'Accept':'application/json'}});
   if(!r.ok)throw new Error(`HTTP ${r.status}`);
   const raw=await r.text();
   if(raw.trim().startsWith('<'))throw new Error('HTML statt JSON');
   const payload=JSON.parse(raw);
   if(validator&&!validator(payload))throw new Error('Ungültiges Datenformat');
   return {payload,path};
  }catch(error){errors.push(`${path}: ${error.message}`)}
 }
 throw new Error(errors.join(' · '));
}
async function loadSources(){
 const badge=$('#sourceCountBadge'),note=$('#sourceDataNote'),box=$('#sourceOverview');
 if(badge)badge.textContent='Quellen werden geladen …';
 if(note)note.textContent='Quellen-Datenbank wird unabhängig von den Gewinnspielen geladen.';
 try{
  const result=await fetchJsonFromPaths(
   ['./data/sources.json','./sources.json'],
   p=>p&&Array.isArray(p.sources)
  );
  const p=result.payload;
  baseSources=p.sources.map(normalizeSource).filter(Boolean);
  sourceDataVersion=p.version||'unbekannt';
  if(note)note.textContent=`Quellen aus ${result.path} geladen.`;
 }catch(e){
  console.warn('Win Win: Quellen konnten nicht geladen werden',e);
  baseSources=[];sourceDataVersion='lokal';
  if(box)box.innerHTML=`<div class="source-render-error"><strong>Quellen-Datei konnte nicht geladen werden.</strong><p>${esc(e?.message||'Unbekannter Fehler')}</p><button type="button" id="retrySourcesBtn">Erneut versuchen</button></div>`;
  $('#retrySourcesBtn')?.addEventListener('click',loadSources);
 }
 try{
  mergeSources();renderSourceFilters();renderSourceManager();
 }catch(e){
  console.error('Win Win: Quelleninitialisierung fehlgeschlagen',e);
  if(box)box.innerHTML=`<div class="source-render-error"><strong>Quellen konnten nicht initialisiert werden.</strong><p>${esc(e?.message||'Unbekannter Fehler')}</p><button type="button" id="retrySourcesBtn">Erneut versuchen</button></div>`;
  $('#retrySourcesBtn')?.addEventListener('click',loadSources);
  if(badge)badge.textContent=`${baseSources.length} Basisquellen gefunden`;
 }
}
function validateSourceImport(payload){
 const list=Array.isArray(payload)?payload:Array.isArray(payload?.sources)?payload.sources:null;if(!list)throw new Error('Keine Quellenliste gefunden');
 const clean=list.map(normalizeSource).filter(Boolean);if(!clean.length)throw new Error('Keine gültigen Quellen gefunden');return {list,clean,invalid:list.length-clean.length}
}
function normalizedDomain(value){return String(value||'').trim().toLowerCase().replace(/^https?:\/\//,'').replace(/^www\./,'').split('/')[0].replace(/\/$/,'')}
function analyzeSourceImport(payload){
 const {list,clean,invalid}=validateSourceImport(payload);const seenIds=new Map(),seenDomains=new Map();
 const report={total:list.length,valid:clean.length,invalid,added:0,updated:0,idDuplicates:[],domainDuplicates:[],internalDuplicates:[]};
 clean.forEach(s=>{
   const domain=normalizedDomain(s.domain),existingId=sourceById(s.id),existingDomain=sources.find(x=>normalizedDomain(x.domain)===domain&&x.id!==s.id);
   if(seenIds.has(s.id))report.internalDuplicates.push(`${s.name}: ID ${s.id}`);else seenIds.set(s.id,s);
   if(domain&&seenDomains.has(domain)&&seenDomains.get(domain).id!==s.id)report.internalDuplicates.push(`${s.name}: Domain ${domain}`);else if(domain)seenDomains.set(domain,s);
   if(existingId){report.updated++;report.idDuplicates.push(`${s.name} ↔ ${existingId.name}`)}else report.added++;
   if(existingDomain)report.domainDuplicates.push(`${s.name} ↔ ${existingDomain.name} (${domain})`);
 });
 return {clean,report,preparedAt:new Date().toISOString()}
}
function renderSourceImportPreview(){
 const panel=$('#sourceImportPreview');if(!panel)return;if(!pendingSourceImport){panel.hidden=true;panel.innerHTML='';return}
 const r=pendingSourceImport.report;const warnings=[...r.internalDuplicates,...r.domainDuplicates];
 panel.hidden=false;panel.innerHTML=`<div class="section-head compact"><div><p class="section-kicker">IMPORTVORSCHAU</p><h3>Quellen vor Übernahme prüfen</h3></div></div><div class="source-import-stats"><div><strong>${r.total}</strong><span>eingelesen</span></div><div><strong>${r.added}</strong><span>neu</span></div><div><strong>${r.updated}</strong><span>Updates</span></div><div><strong>${r.invalid}</strong><span>ungültig</span></div></div>${warnings.length?`<div class="source-import-warnings"><strong>${warnings.length} Domain-/Dublettenhinweise</strong>${warnings.slice(0,8).map(x=>`<p>⚠ ${esc(x)}</p>`).join('')}${warnings.length>8?`<small>und ${warnings.length-8} weitere Hinweise</small>`:''}</div>`:'<p class="source-import-clean">✓ Keine Domain-Dubletten erkannt.</p>'}<div class="data-actions"><button id="confirmSourceImportBtn" class="data-primary">Import übernehmen</button><button id="cancelSourceImportBtn">Abbrechen</button></div>`;
 $('#confirmSourceImportBtn').onclick=applyPendingSourceImport;$('#cancelSourceImportBtn').onclick=()=>{pendingSourceImport=null;renderSourceImportPreview()}
}
function prepareSourceImport(payload){pendingSourceImport=analyzeSourceImport(payload);renderSourceImportPreview();toast('Quellen geprüft – Vorschau beachten')}
function applyPendingSourceImport(){
 if(!pendingSourceImport)return;const clean=pendingSourceImport.clean,previous=localSources();localStorage.setItem(SOURCE_BACKUP_KEY,JSON.stringify({savedAt:new Date().toISOString(),sources:previous}));
 const map=new Map(previous.map(s=>[s.id,s]));clean.forEach(s=>map.set(s.id,{...s,local:true}));localStorage.setItem(SOURCE_DATA_KEY,JSON.stringify([...map.values()]));
 const r=pendingSourceImport.report;pendingSourceImport=null;mergeSources();renderSourceFilters();renderSourceManager();renderSourceImportPreview();toast(`${r.added} neue · ${r.updated} aktualisierte Quellen`)
}
function visibleSources(){
 const q=sourceFilters.search.trim().toLowerCase();return sources.filter(s=>(!q||[s.name,s.domain,s.notes,...s.categories].join(' ').toLowerCase().includes(q))&&(!sourceFilters.country||s.country===sourceFilters.country)&&(!sourceFilters.type||s.type===sourceFilters.type)&&(!sourceFilters.automation||s.automation===sourceFilters.automation)&&(!sourceFilters.review||(sourceFilters.review==='due'?sourceReviewState(s).due:sourceFilters.review==='favorite'?s.favorite:sourceReviewState(s).key===sourceFilters.review)))
}
function markVisibleSourcesChecked(){
 const due=visibleSources().filter(s=>s.active&&sourceReviewState(s).due);if(!due.length)return toast('Keine sichtbaren fälligen Quellen');
 if(!confirm(`${due.length} sichtbare fällige Quellen als heute geprüft markieren?`))return;const today=new Date().toISOString().slice(0,10);const local=new Map(localSources().map(s=>[s.id,s]));due.forEach(s=>local.set(s.id,{...s,lastChecked:today,local:true}));localStorage.setItem(SOURCE_DATA_KEY,JSON.stringify([...local.values()]));mergeSources();renderSourceManager();toast(`${due.length} Quellen als geprüft markiert`)
}
function exportVisibleSources(){const rows=visibleSources();downloadJSON(`win-win-quellen-auswahl-${new Date().toISOString().slice(0,10)}.json`,{version:APP_VERSION,updated:new Date().toISOString(),filters:sourceFilters,sources:rows});toast(`${rows.length} Quellen exportiert`)}
function openSourceDialog(source=null){
 const d=$('#sourceDialog');if(!d)return;const s=source||{};
 $('#sourceDialogTitle').textContent=source?'Quelle bearbeiten':'Neue Quelle';$('#sourceEditOriginalId').value=s.id||'';$('#sourceName').value=s.name||'';$('#sourceDomain').value=s.domain||'';$('#sourceCountry').value=s.country||'Deutschland';$('#sourceType').value=s.type||'Direkter Veranstalter';$('#sourceAutomation').value=s.automation||'yellow';$('#sourceQuality').value=String(s.quality||4);$('#sourceInterval').value=String(s.checkIntervalDays||7);$('#sourceCategories').value=(s.categories||[]).join(', ');$('#sourceNotes').value=s.notes||'';$('#sourceRequiresLogin').checked=Boolean(s.requiresLogin);$('#sourceSocialOnly').checked=Boolean(s.socialOnly);$('#sourceActive').checked=s.active!==false;$('#sourceEligibility').value=s.germanyEligibility||'check';$('#sourceVerification').value=s.verification||'candidate';$('#sourceFormHint').textContent=source?`ID: ${s.id} · Änderungen werden lokal gespeichert.`:'Die Quelle wird lokal ergänzt und ist in deiner persönlichen Sicherung enthalten.';d.showModal();
}
function saveSourceForm(e){
 e.preventDefault();const original=$('#sourceEditOriginalId').value.trim();const name=$('#sourceName').value.trim();const domain=$('#sourceDomain').value.trim().replace(/^https?:\/\//i,'').replace(/\/$/,'');if(!name||!domain)return toast('Bitte Name und Domain eintragen');
 const id=original||sourceSlug(name+'-'+domain.split('.')[0]);const duplicate=sources.find(x=>x.id!==original&&x.domain.toLowerCase()===domain.toLowerCase());if(duplicate&&!confirm(`Die Domain ist bereits bei „${duplicate.name}“ vorhanden. Trotzdem speichern?`))return;
 const previous=sourceById(original);persistSource({...(previous||{}),id,name,domain,country:$('#sourceCountry').value.trim()||'Deutschland',countriesAllowed:previous?.countriesAllowed||[$('#sourceCountry').value.trim()||'Deutschland'],type:$('#sourceType').value,categories:$('#sourceCategories').value.split(',').map(x=>x.trim()).filter(Boolean),automation:$('#sourceAutomation').value,quality:Number($('#sourceQuality').value),active:$('#sourceActive').checked,requiresLogin:$('#sourceRequiresLogin').checked,socialOnly:$('#sourceSocialOnly').checked,checkIntervalDays:Number($('#sourceInterval').value),lastChecked:previous?.lastChecked||null,notes:$('#sourceNotes').value.trim(),germanyEligibility:$('#sourceEligibility').value,verification:$('#sourceVerification').value,successfulChecks:previous?.successfulChecks||0,emptyChecks:previous?.emptyChecks||0,lastResultCount:previous?.lastResultCount||0},original);$('#sourceDialog').close();toast(sourceById(original)?'Quelle aktualisiert':'Quelle gespeichert');
}
function setupSourceManager(){
 const search=$('#sourceSearch'),country=$('#sourceCountryFilter'),type=$('#sourceTypeFilter'),auto=$('#sourceAutomationFilter'),review=$('#sourceReviewFilter'),sort=$('#sourceSort'),file=$('#sourceImportFile');
 search?.addEventListener('input',e=>{sourceFilters.search=e.target.value;sourceRenderLimit=30;renderSourceManager()});country?.addEventListener('change',e=>{sourceFilters.country=e.target.value;sourceRenderLimit=30;renderSourceManager()});type?.addEventListener('change',e=>{sourceFilters.type=e.target.value;sourceRenderLimit=30;renderSourceManager()});auto?.addEventListener('change',e=>{sourceFilters.automation=e.target.value;sourceRenderLimit=30;renderSourceManager()});review?.addEventListener('change',e=>{sourceFilters.review=e.target.value;sourceRenderLimit=30;renderSourceManager()});sort?.addEventListener('change',e=>{sourceFilters.sort=e.target.value;sourceRenderLimit=30;renderSourceManager()});
 $('#addSourceBtn')?.addEventListener('click',()=>openSourceDialog());$('#chooseSourceImportBtn')?.addEventListener('click',()=>file?.click());
 if(file)file.onchange=async()=>{const f=file.files[0];if(!f)return;try{prepareSourceImport(JSON.parse(await f.text()))}catch(e){toast('Quellenimport fehlgeschlagen: '+e.message)}finally{file.value=''}};
 $('#markVisibleSourcesBtn')?.addEventListener('click',markVisibleSourcesChecked);$('#exportVisibleSourcesBtn')?.addEventListener('click',exportVisibleSources);
 $('#exportSourcesBtn')?.addEventListener('click',()=>downloadJSON(`win-win-quellen-${new Date().toISOString().slice(0,10)}.json`,{version:APP_VERSION,updated:new Date().toISOString(),sources}));
 $('#resetSourcesBtn')?.addEventListener('click',()=>{if(!localStorage.getItem(SOURCE_DATA_KEY))return toast('Keine lokalen Quellenänderungen vorhanden');if(confirm('Lokale Quellenänderungen zurücksetzen? Die Basisliste bleibt erhalten.')){localStorage.removeItem(SOURCE_DATA_KEY);mergeSources();renderSourceFilters();renderSourceManager();toast('Lokale Quellen zurückgesetzt')}});
 $('#sourceForm')?.addEventListener('submit',saveSourceForm);$('#closeSourceDialog')?.addEventListener('click',()=>$('#sourceDialog')?.close());$('#cancelSourceDialog')?.addEventListener('click',()=>$('#sourceDialog')?.close());
 $('#sourceOverview')?.addEventListener('click',e=>{const favorite=e.target.closest('[data-source-favorite]'),found=e.target.closest('[data-source-found]'),emptyBtn=e.target.closest('[data-source-empty]'),edit=e.target.closest('[data-source-edit]'),toggle=e.target.closest('[data-source-toggle]');if(favorite){const s=sourceById(favorite.dataset.sourceFavorite);if(s){persistSource({...s,favorite:!s.favorite},s.id);toast(s.favorite?'Favorit entfernt':'Quelle als Favorit gespeichert')}}else if(found)recordSourceResult(found.dataset.sourceFound,true);else if(emptyBtn)recordSourceResult(emptyBtn.dataset.sourceEmpty,false);else if(edit){const s=sourceById(edit.dataset.sourceEdit);if(s)openSourceDialog(s)}else if(toggle){const s=sourceById(toggle.dataset.sourceToggle);if(s){persistSource({...s,active:!s.active},s.id);toast(`${s.name} ${s.active?'pausiert':'aktiviert'}`)}}});
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
   const result=await fetchJsonFromPaths(
     ['./data/contests.json','./contests.json'],
     p=>p&&Array.isArray(p.contests)
   );
   const p=result.payload;
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
 try{migrateContestStates()}catch(e){console.warn('Win Win: Statusmigration fehlgeschlagen',e)}
 initializePreferences();
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
$('#searchInput')?.addEventListener('input',renderDiscover);$('#sortSelect')?.addEventListener('change',renderDiscover);
$('#filterToggle')?.addEventListener('click',()=>{const panel=$('#advancedFilters');if(!panel)return;panel.hidden=!panel.hidden;$('#filterToggle')?.classList.toggle('active',!panel.hidden)});
const filterBindings={filterEntryType:'entryType',filterEffort:'effort',filterWinners:'winners',filterDeadline:'deadline',filterDaily:'daily',filterNoApp:'noApp',filterNoSocial:'noSocial',filterKnownWinners:'knownWinners',filterOnlyOpen:'onlyOpen'};
Object.entries(filterBindings).forEach(([id,key])=>$('#'+id)?.addEventListener('change',e=>{advancedFilters[key]=e.target.type==='checkbox'?e.target.checked:e.target.value;saveAdvancedFilters()}));
$('#resetFilters')?.addEventListener('click',()=>{advancedFilters={entryType:'',effort:'',winners:'',deadline:'',daily:false,noApp:false,noSocial:false,knownWinners:false,onlyOpen:false};saveAdvancedFilters();toast('Zusatzfilter zurückgesetzt')});
syncFilterUI();
const dashboardToggle=$('#dashboardShowAll');if(dashboardToggle){dashboardToggle.checked=dashboardShowAll;dashboardToggle.addEventListener('change',e=>{dashboardShowAll=e.target.checked;localStorage.setItem(DASHBOARD_SHOW_ALL_KEY,String(dashboardShowAll));renderPersonal()})}
$('#dailyTarget')?.addEventListener('change',e=>{dailyPlan.target=Number(e.target.value)||10;saveDailyPlan()});
$('#dailyMode')?.addEventListener('change',e=>{dailyPlan.mode=e.target.value||'balanced';saveDailyPlan()});
$('#refreshBtn')?.addEventListener('click',async()=>{await Promise.allSettled([loadData(),loadSources()]);toast('Daten neu geladen')});
document.addEventListener('click',e=>{const m=e.target.closest('[data-metric]');if(!m)return;m.dataset.metric==='statsView'?openView('statsView'):openDiscover(m.dataset.metric)});
if($('#saveWinBtn'))$('#saveWinBtn').onclick=saveWin;if($('#removeWinBtn'))$('#removeWinBtn').onclick=removeWin;if($('#cancelWinBtn'))$('#cancelWinBtn').onclick=()=>$('#winDialog')?.close();
setupDataCenter();
setupSourceManager();
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
Promise.allSettled([loadSources(),loadData()]).finally(()=>{
 setTimeout(()=>{user.lastVisit=new Date().toISOString();saveUser()},1200)
});
setInterval(()=>loadData(true),30*60*1000);
