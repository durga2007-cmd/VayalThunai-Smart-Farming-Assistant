/* VayalThunai - Smart Farming Assistant
   Weather source: Open-Meteo (non-commercial use; attribution in UI).
*/
"use strict";

const STORAGE_KEYS = { crops: "vayalthunai.crops.v1", reminders: "vayalthunai.reminders.v1", language: "vayalthunai.language.v1", weather: "vayalthunai.lastWeather.v1" };

const I18N = {
 en: {
  tagline:"Your farming companion",workspace:"WORKSPACE",navDashboard:"Overview",navWeather:"Weather",navCrops:"My crops",navReminders:"Reminders",
  smallSteps:"Small steps, better harvests.",helpText:"Keep an eye on the weather and your farm tasks.",prototype:"Student mini project",
  farmerWorkspace:"FARMER WORKSPACE",welcome:"Good day. Let's grow better. 🌱",welcomeSub:"Your local weather, crops and important farm tasks — in one place.",
  totalCrops:"Crops you're tracking",cropMetricHint:"Saved in this browser",openTasks:"Upcoming tasks",taskMetricHint:"Not marked as completed",localWeather:"Local weather",weatherNotLoaded:"Search for your town",
  atAGlance:"AT A GLANCE",weatherSnapshot:"Weather snapshot",viewWeather:"View weather ↗",noWeather:"No weather loaded yet",searchWeatherHint:"Search a town in the Weather section.",
  humidity:"Humidity",rainChance:"Rain (today)",wind:"Wind",stayOnTrack:"STAY ON TRACK",nextTasks:"Next farm tasks",seeAll:"See all ↗",noTasks:"No reminders yet. Add your first farm task.",
  yourFarm:"YOUR FARM",cropOverview:"Crop overview",addCrop:"Add crop",noCrops:"No crops added yet.",localStorageNote:"Your crop and reminder data stays in this browser on this device.",
  weatherCentre:"WEATHER CENTRE",weatherTitle:"Weather for your area",weatherIntro:"Look up a town to see current conditions and a 7-day outlook.",townLabel:"Town or village",search:"Search weather",
  weatherSourceHint:"Weather is provided by Open-Meteo. Internet access is required.",currentConditions:"CURRENT CONDITIONS",planAhead:"PLAN AHEAD",sevenDay:"7-day forecast",daily:"DAILY",
  precipitation:"Precipitation",uvIndex:"UV index",weatherDisclaimer:"Weather information is general guidance. Check local conditions before making irrigation or pesticide decisions.",
  farmRecords:"FARM RECORDS",cropsTitle:"My crops",cropsIntro:"Keep a simple record of what you are growing.",addCropTitle:"Add a crop",cropFormHint:"Enter the crop and the date you planted it.",
  cropNameLabel:"Crop name",varietyLabel:"Variety (optional)",plantDateLabel:"Planting date",areaLabel:"Area (optional)",saveCrop:"Save crop",clear:"Clear",
  savedRecords:"SAVED RECORDS",yourCrops:"Your crops",farmCalendar:"FARM CALENDAR",remindersTitle:"Farm reminders",remindersIntro:"Plan watering, fertilizer, field checks and harvest tasks.",
  createReminder:"Create a reminder",reminderHint:"Choose a task and the date you want to be reminded.",taskNameLabel:"Task name",taskTypeLabel:"Task category",reminderDateLabel:"Reminder date",
  relatedCropLabel:"Related crop (optional)",noSpecificCrop:"No specific crop",notesLabel:"Notes (optional)",saveReminder:"Save reminder",yourSchedule:"YOUR SCHEDULE",allReminders:"All reminders",
  allTasks:"All tasks",pendingTasks:"Pending",completedTasks:"Completed",footerText:"A student project to support informed farm planning.",
  enterTown:"Enter a town or village name.",townNotFound:"We couldn't find that place. Try adding the district or state.",weatherError:"Weather service could not be reached. Check your internet and try again.",
  loading:"Loading weather…",weatherUnavailable:"Weather data is temporarily unavailable.",cropRequired:"Please enter a crop name.",dateRequired:"Please choose a planting date.",futurePlant:"Planting date cannot be in the future.",
  cropSaved:"Crop saved.",cropDeleted:"Crop deleted.",taskRequired:"Please enter a task name.",taskDateRequired:"Please choose a reminder date.",taskSaved:"Reminder saved.",
  taskDeleted:"Reminder deleted.",taskDone:"Task marked complete.",taskPending:"Task marked pending.",confirmDelete:"Delete this item?",today:"Today",tomorrow:"Tomorrow",overdue:"Overdue",due:"Due",
  noVariety:"Variety not specified",noArea:"Area not specified",planted:"Planted",task:"Task",crop:"Crop",notes:"Notes",delete:"Delete",markDone:"Mark done",markPending:"Undo",
  watering:"Watering",fertilizer:"Fertilizer",pest:"Pest / disease check",weeding:"Weeding",harvest:"Harvest",other:"Other",
  clearMessage:"",weatherClear:"Clear sky",weatherMainlyClear:"Mainly clear",weatherPartlyCloudy:"Partly cloudy",weatherOvercast:"Overcast",weatherFog:"Fog",weatherDrizzle:"Drizzle",
  weatherRain:"Rain",weatherSnow:"Snow",weatherShowers:"Rain showers",weatherThunder:"Thunderstorm",weatherUnknown:"Weather conditions",
  noTasksFilter:"No tasks in this view.",apiAttribution:"Weather data: Open-Meteo · Location data: GeoNames",
  dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
 },
 ta: {
  tagline:"உங்கள் விவசாயத் துணை",workspace:"பணித்தளம்",navDashboard:"கண்ணோட்டம்",navWeather:"வானிலை",navCrops:"எனது பயிர்கள்",navReminders:"நினைவூட்டல்கள்",
  smallSteps:"சிறிய முயற்சி, சிறந்த அறுவடை.",helpText:"வானிலை மற்றும் விவசாயப் பணிகளைக் கவனியுங்கள்.",prototype:"மாணவர் சிறு திட்டம்",
  farmerWorkspace:"விவசாயி பணித்தளம்",welcome:"வணக்கம்! சிறப்பாக பயிரிடுவோம். 🌱",welcomeSub:"உள்ளூர் வானிலை, பயிர்கள் மற்றும் முக்கிய விவசாயப் பணிகள் — ஒரே இடத்தில்.",
  totalCrops:"நீங்கள் கண்காணிக்கும் பயிர்கள்",cropMetricHint:"இந்த உலாவியில் சேமிக்கப்பட்டது",openTasks:"வரவிருக்கும் பணிகள்",taskMetricHint:"முடிந்ததாகக் குறிக்கப்படாதவை",localWeather:"உள்ளூர் வானிலை",weatherNotLoaded:"உங்கள் ஊரைத் தேடுங்கள்",
  atAGlance:"ஒரு பார்வையில்",weatherSnapshot:"வானிலை நிலவரம்",viewWeather:"வானிலையைப் பார்க்க ↗",noWeather:"வானிலை இன்னும் பெறப்படவில்லை",searchWeatherHint:"வானிலை பகுதியில் உங்கள் ஊரைத் தேடுங்கள்.",
  humidity:"ஈரப்பதம்",rainChance:"மழை (இன்று)",wind:"காற்று",stayOnTrack:"திட்டமிட்டுச் செயல்படுங்கள்",nextTasks:"அடுத்த விவசாயப் பணிகள்",seeAll:"அனைத்தையும் பார்க்க ↗",noTasks:"நினைவூட்டல்கள் இல்லை. முதல் பணியைச் சேர்க்கவும்.",
  yourFarm:"உங்கள் வயல்",cropOverview:"பயிர்களின் கண்ணோட்டம்",addCrop:"பயிர் சேர்க்க",noCrops:"பயிர்கள் இன்னும் சேர்க்கப்படவில்லை.",localStorageNote:"உங்கள் பயிர் மற்றும் நினைவூட்டல் விவரங்கள் இந்தச் சாதனத்தின் உலாவியில் சேமிக்கப்படும்.",
  weatherCentre:"வானிலை மையம்",weatherTitle:"உங்கள் பகுதியின் வானிலை",weatherIntro:"தற்போதைய நிலை மற்றும் 7 நாள் முன்னறிவிப்பைப் பார்க்க ஊரைத் தேடுங்கள்.",townLabel:"ஊர் அல்லது கிராமம்",search:"வானிலையைத் தேடு",
  weatherSourceHint:"Open-Meteo மூலம் வானிலை வழங்கப்படுகிறது. இணைய இணைப்பு தேவை.",currentConditions:"தற்போதைய நிலை",planAhead:"முன்கூட்டித் திட்டமிடுங்கள்",sevenDay:"7 நாள் முன்னறிவிப்பு",daily:"தினசரி",
  precipitation:"மழைப்பொழிவு",uvIndex:"புற ஊதாக் குறியீடு",weatherDisclaimer:"வானிலைத் தகவல் பொதுவான வழிகாட்டுதல் மட்டுமே. பாசனம் அல்லது பூச்சிக்கொல்லி முடிவுகளுக்கு முன் உள்ளூர் நிலையைச் சரிபார்க்கவும்.",
  farmRecords:"விவசாயப் பதிவுகள்",cropsTitle:"எனது பயிர்கள்",cropsIntro:"நீங்கள் பயிரிடுவதை எளிய முறையில் பதிவு செய்யுங்கள்.",addCropTitle:"பயிர் சேர்க்க",cropFormHint:"பயிரின் பெயர் மற்றும் நடவு செய்த தேதியை உள்ளிடுங்கள்.",
  cropNameLabel:"பயிரின் பெயர்",varietyLabel:"வகை (விருப்பம்)",plantDateLabel:"நடவு செய்த தேதி",areaLabel:"பரப்பளவு (விருப்பம்)",saveCrop:"பயிரைச் சேமி",clear:"அழி",
  savedRecords:"சேமிக்கப்பட்ட பதிவுகள்",yourCrops:"உங்கள் பயிர்கள்",farmCalendar:"விவசாய நாட்காட்டி",remindersTitle:"விவசாய நினைவூட்டல்கள்",remindersIntro:"நீர்ப்பாசனம், உரமிடுதல், வயல் ஆய்வு மற்றும் அறுவடைப் பணிகளைத் திட்டமிடுங்கள்.",
  createReminder:"நினைவூட்டலை உருவாக்கு",reminderHint:"பணியையும் நினைவூட்ட வேண்டிய தேதியையும் தேர்வு செய்யுங்கள்.",taskNameLabel:"பணியின் பெயர்",taskTypeLabel:"பணி வகை",reminderDateLabel:"நினைவூட்டல் தேதி",
  relatedCropLabel:"தொடர்புடைய பயிர் (விருப்பம்)",noSpecificCrop:"குறிப்பிட்ட பயிர் இல்லை",notesLabel:"குறிப்புகள் (விருப்பம்)",saveReminder:"நினைவூட்டலைச் சேமி",yourSchedule:"உங்கள் அட்டவணை",allReminders:"அனைத்து நினைவூட்டல்கள்",
  allTasks:"அனைத்துப் பணிகள்",pendingTasks:"நிலுவையில்",completedTasks:"முடிந்தவை",footerText:"சிறந்த விவசாயத் திட்டமிடலுக்கான மாணவர் திட்டம்.",
  enterTown:"ஊர் அல்லது கிராமத்தின் பெயரை உள்ளிடுங்கள்.",townNotFound:"அந்த இடத்தைக் கண்டறிய முடியவில்லை. மாவட்டம் அல்லது மாநிலத்தையும் சேர்த்துப் பாருங்கள்.",weatherError:"வானிலை சேவையை அணுக முடியவில்லை. இணையத்தைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
  loading:"வானிலை பெறப்படுகிறது…",weatherUnavailable:"வானிலைத் தகவல் தற்காலிகமாகக் கிடைக்கவில்லை.",cropRequired:"பயிரின் பெயரை உள்ளிடுங்கள்.",dateRequired:"நடவு தேதியைத் தேர்வு செய்யுங்கள்.",futurePlant:"நடவு தேதி எதிர்காலத்தில் இருக்க முடியாது.",
  cropSaved:"பயிர் சேமிக்கப்பட்டது.",cropDeleted:"பயிர் நீக்கப்பட்டது.",taskRequired:"பணியின் பெயரை உள்ளிடுங்கள்.",taskDateRequired:"நினைவூட்டல் தேதியைத் தேர்வு செய்யுங்கள்.",taskSaved:"நினைவூட்டல் சேமிக்கப்பட்டது.",
  taskDeleted:"நினைவூட்டல் நீக்கப்பட்டது.",taskDone:"பணி முடிந்ததாகக் குறிக்கப்பட்டது.",taskPending:"பணி மீண்டும் நிலுவையில் உள்ளது.",confirmDelete:"இந்தப் பதிவை நீக்கவா?",today:"இன்று",tomorrow:"நாளை",overdue:"காலம் கடந்தது",due:"தேதி",
  noVariety:"வகை குறிப்பிடப்படவில்லை",noArea:"பரப்பளவு குறிப்பிடப்படவில்லை",planted:"நடவு",task:"பணி",crop:"பயிர்",notes:"குறிப்புகள்",delete:"நீக்கு",markDone:"முடிந்தது",markPending:"மீட்டமை",
  watering:"நீர்ப்பாசனம்",fertilizer:"உரமிடுதல்",pest:"பூச்சி / நோய் ஆய்வு",weeding:"களையெடுத்தல்",harvest:"அறுவடை",other:"மற்றவை",
  clearMessage:"",weatherClear:"வானம் தெளிவு",weatherMainlyClear:"பெரும்பாலும் தெளிவு",weatherPartlyCloudy:"ஓரளவு மேகமூட்டம்",weatherOvercast:"மேகமூட்டம்",weatherFog:"மூடுபனி",weatherDrizzle:"தூறல்",
  weatherRain:"மழை",weatherSnow:"பனிப்பொழிவு",weatherShowers:"சாரல் மழை",weatherThunder:"இடியுடன் மழை",weatherUnknown:"வானிலை நிலை",
  noTasksFilter:"இந்தப் பட்டியலில் பணிகள் இல்லை.",apiAttribution:"வானிலை: Open-Meteo · இடத் தகவல்: GeoNames",
  dayNames:["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"]
 }
};

let language = localStorage.getItem(STORAGE_KEYS.language) || "en";
if (!I18N[language]) language = "en";
let crops = readStore(STORAGE_KEYS.crops, []);
let reminders = readStore(STORAGE_KEYS.reminders, []);
let lastWeather = readStore(STORAGE_KEYS.weather, null);
let toastTimer;

function readStore(key, fallback) {
 try { const parsed = JSON.parse(localStorage.getItem(key)); return parsed ?? fallback; }
 catch { return fallback; }
}
function saveStore() {
 try {
  localStorage.setItem(STORAGE_KEYS.crops, JSON.stringify(crops));
  localStorage.setItem(STORAGE_KEYS.reminders, JSON.stringify(reminders));
 } catch (error) { showToast("Storage is full or unavailable. Export your data before clearing browser storage."); }
}
function t(key) { return I18N[language][key] ?? I18N.en[key] ?? key; }
function escapeHTML(value) {
 return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function localISODate(date = new Date()) {
 const y = date.getFullYear(), m = String(date.getMonth()+1).padStart(2,"0"), d = String(date.getDate()).padStart(2,"0");
 return `${y}-${m}-${d}`;
}
function formatDate(value, options = {}) {
 if (!value) return "—";
 const date = new Date(`${value}T00:00:00`);
 return new Intl.DateTimeFormat(language === "ta" ? "ta-IN" : "en-IN", {day:"numeric",month:"short",year:"numeric",...options}).format(date);
}
function showToast(message) {
 const toast = document.getElementById("toast");
 toast.textContent = message;
 toast.classList.add("show");
 clearTimeout(toastTimer);
 toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}
function setMessage(id, message, success = false) {
 const node = document.getElementById(id);
 node.textContent = message;
 node.classList.toggle("success", success);
}
function setPage(page) {
 document.querySelectorAll(".page").forEach(el => el.classList.toggle("active", el.id === `page-${page}`));
 document.querySelectorAll(".nav-link").forEach(el => el.classList.toggle("active", el.dataset.page === page));
 const active = document.querySelector(`.nav-link[data-page="${page}"]`);
 document.getElementById("currentPageName").textContent = active ? active.innerText.trim() : "Overview";
 document.getElementById("sidebar").classList.remove("open");
 window.scrollTo({top:0,behavior:"smooth"});
}
function applyLanguage() {
 document.documentElement.lang = language;
 document.body.classList.toggle("tamil", language === "ta");
 document.getElementById("languageSelect").value = language;
 document.querySelectorAll("[data-i18n]").forEach(el => {
  const key = el.dataset.i18n;
  if (I18N[language][key] !== undefined) el.textContent = I18N[language][key];
 });
 document.getElementById("currentPageName").textContent = document.querySelector(".nav-link.active")?.innerText.trim() || t("navDashboard");
 document.getElementById("taskType").querySelectorAll("option").forEach(option => option.textContent = t(option.value));
 document.getElementById("reminderFilter").querySelectorAll("option").forEach(option => option.textContent = t(option.value === "all" ? "allTasks" : option.value === "pending" ? "pendingTasks" : "completedTasks"));
 renderAll();
 if (lastWeather) renderWeather(lastWeather);
}
function updateDateLabel() {
 document.getElementById("todayLabel").textContent = new Intl.DateTimeFormat(language === "ta" ? "ta-IN" : "en-IN", {weekday:"short",day:"numeric",month:"short"}).format(new Date());
}
function renderAll() {
 updateDateLabel(); renderDashboard(); renderCrops(); renderReminderCropOptions(); renderReminders();
}
function renderDashboard() {
 document.getElementById("metricCrops").textContent = crops.length;
 const pending = reminders.filter(r => !r.completed).length;
 document.getElementById("metricTasks").textContent = pending;
 document.getElementById("navReminderCount").textContent = pending;
 const upcoming = reminders.filter(r => !r.completed).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,4);
 const taskBox = document.getElementById("dashboardTasks");
 taskBox.innerHTML = upcoming.length ? upcoming.map(r => `<div class="compact-task"><span class="task-dot"></span><div><b>${escapeHTML(r.name)}</b><small>${escapeHTML(t(r.type))} · ${escapeHTML(formatDate(r.date))}</small></div></div>`).join("") : `<div class="empty-state">${escapeHTML(t("noTasks"))}</div>`;
 const cropBox = document.getElementById("dashboardCrops");
 cropBox.innerHTML = crops.length ? crops.slice(0,6).map(c => `<div class="crop-chip"><span class="crop-emoji">🌱</span><b>${escapeHTML(c.name)}</b><small>${escapeHTML(formatDate(c.plantDate))}</small></div>`).join("") : `<div class="empty-state">${escapeHTML(t("noCrops"))}</div>`;
 if (lastWeather?.current) {
  document.getElementById("metricTemp").textContent = `${Math.round(lastWeather.current.temperature_2m)}°`;
  document.getElementById("metricPlace").textContent = lastWeather.placeLabel;
  document.getElementById("dashWeatherTemp").textContent = `${Math.round(lastWeather.current.temperature_2m)}°`;
  document.getElementById("dashWeatherText").textContent = weatherDescription(lastWeather.current.weather_code).label;
  document.getElementById("dashWeatherPlace").textContent = lastWeather.placeLabel;
  document.getElementById("dashHumidity").textContent = `${lastWeather.current.relative_humidity_2m}%`;
  document.getElementById("dashRain").textContent = `${lastWeather.current.precipitation ?? 0} mm`;
  document.getElementById("dashWind").textContent = `${lastWeather.current.wind_speed_10m} km/h`;
 } else {
  document.getElementById("metricTemp").textContent = "--°";
  document.getElementById("metricPlace").textContent = t("weatherNotLoaded");
 }
}
function renderCrops() {
 const list = document.getElementById("cropList");
 document.getElementById("cropCount").textContent = crops.length;
 if (!crops.length) { list.innerHTML = `<article class="surface empty-state">${escapeHTML(t("noCrops"))}</article>`; return; }
 list.innerHTML = crops.slice().sort((a,b)=>b.createdAt-a.createdAt).map(c => `
 <article class="record-card"><div class="record-card-top"><span class="record-emoji">🌱</span><button class="delete-button" data-delete-crop="${escapeHTML(c.id)}">${escapeHTML(t("delete"))} ×</button></div>
 <h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.variety || t("noVariety"))}</p><p>📅 ${escapeHTML(t("planted"))}: ${escapeHTML(formatDate(c.plantDate))}</p><p>▧ ${escapeHTML(c.area || t("noArea"))}</p></article>`).join("");
}
function renderReminderCropOptions() {
 const select = document.getElementById("reminderCrop"), selected = select.value;
 select.innerHTML = `<option value="">${escapeHTML(t("noSpecificCrop"))}</option>` + crops.map(c=>`<option value="${escapeHTML(c.id)}">${escapeHTML(c.name)}</option>`).join("");
 if (crops.some(c=>c.id===selected)) select.value = selected;
}
function dateStatus(date) {
 const today = localISODate(), tomorrow = localISODate(new Date(Date.now()+86400000));
 if (date < today) return t("overdue");
 if (date === today) return t("today");
 if (date === tomorrow) return t("tomorrow");
 return `${t("due")}: ${formatDate(date)}`;
}
function renderReminders() {
 const list = document.getElementById("reminderList");
 const filter = document.getElementById("reminderFilter").value;
 const filtered = reminders.filter(r => filter === "all" || (filter === "completed" ? r.completed : !r.completed)).sort((a,b)=>a.date.localeCompare(b.date));
 document.getElementById("reminderCount").textContent = reminders.length;
 if (!filtered.length) { list.innerHTML = `<article class="surface empty-state">${escapeHTML(t("noTasksFilter"))}</article>`; return; }
 const icons = {watering:"💧",fertilizer:"🌿",pest:"🐛",weeding:"🌱",harvest:"🌾",other:"📌"};
 list.innerHTML = filtered.map(r => {
  const crop = crops.find(c=>c.id===r.cropId);
  return `<article class="reminder-card"><span class="reminder-symbol">${icons[r.type] || "📌"}</span><div class="reminder-info"><h3>${escapeHTML(r.name)}</h3><p>${escapeHTML(t(r.type))} · ${escapeHTML(formatDate(r.date))}${crop ? ` · ${escapeHTML(crop.name)}` : ""}</p>${r.notes ? `<p>${escapeHTML(t("notes"))}: ${escapeHTML(r.notes)}</p>` : ""}<div class="reminder-meta"><span class="status-pill ${r.completed?"done":""}">${escapeHTML(r.completed?t("completedTasks"):dateStatus(r.date))}</span></div></div><div class="reminder-actions"><button class="complete-button" data-toggle-reminder="${escapeHTML(r.id)}">${escapeHTML(r.completed?t("markPending"):t("markDone"))}</button><button class="delete-button" data-delete-reminder="${escapeHTML(r.id)}">${escapeHTML(t("delete"))}</button></div></article>`;
 }).join("");
}
function addCrop(event) {
 event.preventDefault();
 const name = document.getElementById("cropName").value.trim();
 const plantDate = document.getElementById("plantDate").value;
 if (!name) return setMessage("cropMessage",t("cropRequired"));
 if (!plantDate) return setMessage("cropMessage",t("dateRequired"));
 if (plantDate > localISODate()) return setMessage("cropMessage",t("futurePlant"));
 crops.push({id:crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),name,plantDate,variety:document.getElementById("cropVariety").value.trim(),area:document.getElementById("cropArea").value.trim(),createdAt:Date.now()});
 saveStore(); document.getElementById("cropForm").reset(); setMessage("cropMessage",t("cropSaved"),true); renderAll(); showToast(t("cropSaved"));
}
function addReminder(event) {
 event.preventDefault();
 const name = document.getElementById("taskName").value.trim(), date = document.getElementById("reminderDate").value;
 if (!name) return setMessage("reminderMessage",t("taskRequired"));
 if (!date) return setMessage("reminderMessage",t("taskDateRequired"));
 reminders.push({id:crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),name,date,type:document.getElementById("taskType").value,cropId:document.getElementById("reminderCrop").value,notes:document.getElementById("taskNotes").value.trim(),completed:false,createdAt:Date.now()});
 saveStore(); document.getElementById("reminderForm").reset(); setMessage("reminderMessage",t("taskSaved"),true); renderAll(); showToast(t("taskSaved"));
}
function deleteCrop(id) {
 if (!confirm(t("confirmDelete"))) return;
 crops = crops.filter(c=>c.id!==id); reminders = reminders.map(r=>r.cropId===id?{...r,cropId:""}:r);
 saveStore(); renderAll(); showToast(t("cropDeleted"));
}
function deleteReminder(id) {
 if (!confirm(t("confirmDelete"))) return;
 reminders = reminders.filter(r=>r.id!==id); saveStore(); renderAll(); showToast(t("taskDeleted"));
}
function toggleReminder(id) {
 reminders = reminders.map(r=>r.id===id?{...r,completed:!r.completed}:r);
 saveStore(); renderAll(); showToast(t(reminders.find(r=>r.id===id).completed?"taskDone":"taskPending"));
}
function weatherDescription(code) {
 const groups = [
  {codes:[0],key:"weatherClear",icon:"☀️"},{codes:[1],key:"weatherMainlyClear",icon:"🌤️"},{codes:[2],key:"weatherPartlyCloudy",icon:"⛅"},{codes:[3],key:"weatherOvercast",icon:"☁️"},
  {codes:[45,48],key:"weatherFog",icon:"🌫️"},{codes:[51,53,55,56,57],key:"weatherDrizzle",icon:"🌦️"},{codes:[61,63,65,66,67],key:"weatherRain",icon:"🌧️"},
  {codes:[71,73,75,77],key:"weatherSnow",icon:"❄️"},{codes:[80,81,82],key:"weatherShowers",icon:"🌦️"},{codes:[95,96,99],key:"weatherThunder",icon:"⛈️"}
 ];
 const found = groups.find(g=>g.codes.includes(code));
 return found ? {label:t(found.key),icon:found.icon} : {label:t("weatherUnknown"),icon:"🌤️"};
}
async function fetchJSON(url) {
 const response = await fetch(url,{headers:{Accept:"application/json"}});
 if (!response.ok) throw new Error(`HTTP ${response.status}`);
 return response.json();
}
async function searchWeather() {
 const input = document.getElementById("cityInput"), query = input.value.trim(), button = document.getElementById("weatherSearch");
 if (!query) { setMessage("weatherMessage",t("enterTown")); input.focus(); return; }
 button.disabled = true; button.innerHTML = `<span>${escapeHTML(t("loading"))}</span>`; setMessage("weatherMessage",t("loading"));
 try {
  const geoURL = new URL("https://geocoding-api.open-meteo.com/v1/search");
  geoURL.search = new URLSearchParams({name:query,count:"5",language:language,format:"json",countryCode:"IN"}).toString();
  const geo = await fetchJSON(geoURL);
  if (!geo.results?.length) throw new Error("NOT_FOUND");
  const place = geo.results.find(p=>p.country_code==="IN") || geo.results[0];
  const params = new URLSearchParams({
   latitude:String(place.latitude),longitude:String(place.longitude),
   current:"temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
   daily:"weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,uv_index_max",
   forecast_days:"7",timezone:"auto"
  });
  const data = await fetchJSON(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!data.current || !data.daily) throw new Error("INVALID_DATA");
  const state = {placeLabel:[place.name,place.admin1,place.country].filter(Boolean).join(", "),place,current:data.current,daily:data.daily,fetchedAt:new Date().toISOString()};
  lastWeather = state;
  try { localStorage.setItem(STORAGE_KEYS.weather,JSON.stringify(state)); } catch {}
  renderWeather(state); renderDashboard(); setMessage("weatherMessage","",true);
 } catch(error) {
  console.error("Weather lookup failed:",error);
  setMessage("weatherMessage",error.message==="NOT_FOUND"?t("townNotFound"):t("weatherError"));
 } finally {
  button.disabled = false; button.innerHTML = `<span>⌕</span><span>${escapeHTML(t("search"))}</span>`;
 }
}
function renderWeather(state) {
 if (!state?.current || !state?.daily) return;
 document.getElementById("weatherResults").classList.remove("hidden");
 const c = state.current, d = state.daily, desc = weatherDescription(c.weather_code);
 document.getElementById("weatherPlace").textContent = state.placeLabel;
 document.getElementById("weatherUpdated").textContent = `${t("currentConditions")} · ${new Intl.DateTimeFormat(language==="ta"?"ta-IN":"en-IN",{hour:"numeric",minute:"2-digit"}).format(new Date(state.fetchedAt))}`;
 document.getElementById("conditionIcon").textContent = desc.icon;
 document.getElementById("currentTemp").textContent = `${Math.round(c.temperature_2m)}°`;
 document.getElementById("conditionText").textContent = desc.label;
 document.getElementById("feelsLike").textContent = `${language==="ta"?"உணரப்படும் வெப்பநிலை":"Feels like"} ${Math.round(c.apparent_temperature)}°C`;
 document.getElementById("currentHumidity").textContent = `${c.relative_humidity_2m}%`;
 document.getElementById("currentRain").textContent = `${c.precipitation} mm`;
 document.getElementById("currentWind").textContent = `${c.wind_speed_10m} km/h`;
 document.getElementById("currentUV").textContent = Number.isFinite(c.uv_index)?c.uv_index:"—";
 const forecast = document.getElementById("forecastList");
 forecast.innerHTML = d.time.map((day,i)=>{
  const dayDate = new Date(`${day}T00:00:00`), dayName = i===0?t("today"):t("dayNames")[dayDate.getDay()], w=weatherDescription(d.weather_code[i]);
  return `<div class="forecast-day"><b>${escapeHTML(dayName)}</b><div class="forecast-icon">${w.icon}</div><strong>${Math.round(d.temperature_2m_max[i])}° / ${Math.round(d.temperature_2m_min[i])}°</strong><small>🌧 ${d.precipitation_probability_max?.[i] ?? "—"}%</small><small>${Number(d.precipitation_sum[i]).toFixed(1)} mm</small></div>`;
 }).join("");
 document.getElementById("metricTemp").textContent = `${Math.round(c.temperature_2m)}°`;
 document.getElementById("metricPlace").textContent = state.placeLabel;
 document.getElementById("dashWeatherTemp").textContent = `${Math.round(c.temperature_2m)}°`;
 document.getElementById("dashWeatherText").textContent = desc.label;
 document.getElementById("dashWeatherPlace").textContent = state.placeLabel;
 document.getElementById("dashHumidity").textContent = `${c.relative_humidity_2m}%`;
 document.getElementById("dashRain").textContent = `${c.precipitation} mm`;
 document.getElementById("dashWind").textContent = `${c.wind_speed_10m} km/h`;
}
function bindEvents() {
 document.querySelectorAll(".nav-link").forEach(btn=>btn.addEventListener("click",()=>setPage(btn.dataset.page)));
 document.querySelectorAll("[data-go]").forEach(btn=>btn.addEventListener("click",()=>setPage(btn.dataset.go)));
 document.getElementById("languageSelect").addEventListener("change",e=>{language=e.target.value;localStorage.setItem(STORAGE_KEYS.language,language);applyLanguage();});
 document.getElementById("weatherSearch").addEventListener("click",searchWeather);
 document.getElementById("cityInput").addEventListener("keydown",e=>{if(e.key==="Enter")searchWeather();});
 document.getElementById("cropForm").addEventListener("submit",addCrop);
 document.getElementById("reminderForm").addEventListener("submit",addReminder);
 document.getElementById("reminderFilter").addEventListener("change",renderReminders);
 document.getElementById("cropList").addEventListener("click",e=>{const b=e.target.closest("[data-delete-crop]");if(b)deleteCrop(b.dataset.deleteCrop);});
 document.getElementById("reminderList").addEventListener("click",e=>{const d=e.target.closest("[data-delete-reminder]"),c=e.target.closest("[data-toggle-reminder]");if(d)deleteReminder(d.dataset.deleteReminder);if(c)toggleReminder(c.dataset.toggleReminder);});
 document.getElementById("mobileMenu").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
 document.addEventListener("click",e=>{const side=document.getElementById("sidebar");if(window.innerWidth<=700&&side.classList.contains("open")&&!side.contains(e.target)&&!e.target.closest("#mobileMenu"))side.classList.remove("open");});
}
function init() {
 const today=localISODate();
 document.getElementById("plantDate").max=today;
 document.getElementById("reminderDate").min=today;
 document.getElementById("plantDate").value=today;
 document.getElementById("reminderDate").value=today;
 bindEvents(); applyLanguage();
 if(lastWeather) renderWeather(lastWeather);
}
document.addEventListener("DOMContentLoaded",init);
