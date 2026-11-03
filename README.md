# Europe Trip Planner

Plan a multi-week route across Europe: nights per city, daily spend, and how you travel between stops.

Live at https://christianfox22.github.io/Christian-Fox/

Files: `index.html`, `planner.css`, `planner.js`.

## Features

- Search any city, town or village in Europe (via the free [Photon](https://photon.komoot.io) OpenStreetMap search), or click one of the 45 built-in cities on the map.
- Set nights, stay/food/play budget per city, and notes.
- Pick train, plane, bus, car, or ferry for each leg and set a departure time; travel time, arrival, and fare are estimated from distance.
- Each leg links out to real schedules and prices: Google Flights, Google train/bus/ferry results, Google Maps driving, and Rome2Rio.
- Warns about one-night stops and land modes to islands (Iceland, Ireland, Malta, Santorini).
- Live weather for each stop from [Open-Meteo](https://open-meteo.com): the forecast if you're travelling within ~2 weeks, otherwise what the same dates were like last year.
- Travelers (rooms shared by two; food, activities and fares per person), a budget target, and 12 currencies at live rates from [Frankfurter](https://frankfurter.dev).
- **Shortest route** reorders stops to cut travel distance (your first stop stays put).
- **Add to calendar** downloads an `.ics` file with every stay and journey.
- **Undo** (button or ⌘Z / Ctrl+Z) and one-click sample trips.
- **Misc costs** box for one-off extras (insurance, eSIM, rail pass…) that count toward the total and budget.
- **Dashboard** tab with KPIs (total vs budget, per person, per day, trip length, cities, distance, time in transit, CO₂ estimate) and charts: where the money goes, distance by transport, running spend vs budget, a trip timeline, spend by city, and a city-by-city table.
- Trips save in the browser automatically. **Share link** copies a URL containing the whole trip; **Print** gives a clean itinerary.

Costs are rough estimates, not live prices: per-city nightly stay/food/activity numbers are hand-set guesses (other cities use their country's average or a regional guess), and fares are a base price plus a per-km rate for each mode. Every number can be edited.

## Running

No build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Map tiles come from OpenStreetMap; Leaflet and fonts load from CDNs, so an internet connection is needed.
