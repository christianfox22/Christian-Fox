# Christian Fox

Personal site for Christian Fox — LinkedIn Larper — plus a Europe trip planner.

## Pages

- `index.html` / `style.css` — the homepage: about, projects, contact.
- `planner.html` / `planner.css` / `planner.js` — Europe trip planner.

## Trip planner

- Search any city, town or village in Europe (via the free [Photon](https://photon.komoot.io) OpenStreetMap search), or click one of the 45 built-in cities on the map.
- Set nights, stay/food/play budget per city, and notes.
- Pick train, plane, bus, car, or ferry for each leg and set a departure time; travel time, arrival, and fare are estimated from distance.
- Each leg links out to real schedules and prices: Google Flights, Google train/bus/ferry results, Google Maps driving, and Rome2Rio.
- Warns about one-night stops and land modes to islands (Iceland, Ireland, Malta, Santorini).
- Trips save in the browser automatically. **Share link** copies a URL containing the whole trip; **Print** gives a clean itinerary.

Costs are rough estimates, not live prices: per-city nightly stay/food/activity numbers are hand-set guesses (other cities use their country's average or a regional guess), and fares are a base price plus a per-km rate for each mode. Every number can be edited.

## Running

No build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Map tiles come from OpenStreetMap; Leaflet and fonts load from CDNs, so an internet connection is needed.
