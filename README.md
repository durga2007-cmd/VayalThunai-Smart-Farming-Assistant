# VayalThunai – Smart Farming Assistant

A bilingual (English/Tamil) browser-based mini project that helps farmers check local weather, record crops, and organize farm reminders.

## Features
- Responsive dashboard with crop/task summaries
- English and Tamil interface
- Location search using Open-Meteo Geocoding API
- Current weather and 7-day forecast
- Crop records: crop name, variety, planting date, area
- Farm reminders: watering, fertilizer, pest/disease check, weeding, harvest, other
- Mark reminders complete/pending; filter and delete
- Browser LocalStorage persistence (no account or server required)
- Input escaping and basic date validation

## Run locally
1. Extract the ZIP file.
2. Open the extracted `smart_farming_assistant` folder in VS Code.
3. Open `index.html` with VS Code Live Server, or use any local static web server.
4. Search a town such as `Thanjavur` or `Tiruchirappalli` in the Weather page.
5. Add crops and reminders. Change language from the top-right selector.

The app is static and does not require npm, a database, or an API key. Internet is required for weather lookups and Google Fonts. The app itself runs locally.

## Weather API and attribution
- Location lookup: Open-Meteo Geocoding API (location data based on GeoNames)
- Weather and forecast: Open-Meteo Forecast API
- Open-Meteo documents free access for non-commercial use and CORS support. Weather data is licensed under CC BY 4.0. Keep the attribution in the app if you adapt it.
- API documentation: https://open-meteo.com/en/docs/geocoding-api
- Forecast documentation: https://open-meteo.com/en/docs

## Data and privacy
Crop and reminder records are stored in this browser's LocalStorage on this device. They are not uploaded to a project server. Clearing browser site data may erase them. This prototype does not include cloud sync, authentication, SMS, or push notifications.

## Important limitations
- Forecasts are model-based guidance, not a substitute for local agricultural or meteorological advice.
- Rain shown in the current panel is current precipitation; the daily forecast shows daily precipitation totals and probability.
- Reminders are shown in the app when it is opened. This version does not send background push notifications or SMS.
- Weather data requires internet access and may occasionally be unavailable.

## Suggested demonstration
1. Open Dashboard and show the summary.
2. Go to Weather, search `Thanjavur`, and explain current conditions and 7-day outlook.
3. Go to My Crops, add `Paddy` with a planting date and optional variety.
4. Go to Reminders, add a watering task, select the crop, and save.
5. Mark the task complete and demonstrate the filter.
6. Switch the interface to Tamil.
7. Refresh the page and show that crop/reminder data remains saved.

## Project structure
- `index.html` – page structure
- `style.css` – responsive visual design
- `app.js` – application logic, translation, storage, and API integration
