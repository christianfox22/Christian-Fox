(function () {
  const CITIES = [
    { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041, stay: 140, food: 55, play: 35 },
    { name: "Athens", country: "Greece", lat: 37.9838, lng: 23.7275, stay: 95, food: 40, play: 30 },
    { name: "Barcelona", country: "Spain", lat: 41.3874, lng: 2.1686, stay: 130, food: 50, play: 40 },
    { name: "Belgrade", country: "Serbia", lat: 44.7866, lng: 20.4489, stay: 60, food: 30, play: 20 },
    { name: "Berlin", country: "Germany", lat: 52.52, lng: 13.405, stay: 110, food: 45, play: 35 },
    { name: "Bordeaux", country: "France", lat: 44.8378, lng: -0.5792, stay: 115, food: 50, play: 30 },
    { name: "Bruges", country: "Belgium", lat: 51.2093, lng: 3.2247, stay: 120, food: 50, play: 25 },
    { name: "Brussels", country: "Belgium", lat: 50.8503, lng: 4.3517, stay: 125, food: 50, play: 30 },
    { name: "Budapest", country: "Hungary", lat: 47.4979, lng: 19.0402, stay: 80, food: 35, play: 25 },
    { name: "Copenhagen", country: "Denmark", lat: 55.6761, lng: 12.5683, stay: 160, food: 65, play: 40 },
    { name: "Dubrovnik", country: "Croatia", lat: 42.6507, lng: 18.0944, stay: 140, food: 50, play: 35 },
    { name: "Dublin", country: "Ireland", lat: 53.3498, lng: -6.2603, stay: 145, food: 55, play: 35 },
    { name: "Edinburgh", country: "United Kingdom", lat: 55.9533, lng: -3.1883, stay: 140, food: 50, play: 35 },
    { name: "Florence", country: "Italy", lat: 43.7696, lng: 11.2558, stay: 140, food: 50, play: 40 },
    { name: "Geneva", country: "Switzerland", lat: 46.2044, lng: 6.1432, stay: 190, food: 75, play: 40 },
    { name: "Helsinki", country: "Finland", lat: 60.1699, lng: 24.9384, stay: 140, food: 55, play: 30 },
    { name: "Istanbul", country: "Türkiye", lat: 41.0082, lng: 28.9784, stay: 90, food: 35, play: 30 },
    { name: "Kraków", country: "Poland", lat: 50.0647, lng: 19.945, stay: 75, food: 30, play: 25 },
    { name: "Lisbon", country: "Portugal", lat: 38.7223, lng: -9.1393, stay: 110, food: 40, play: 30 },
    { name: "Ljubljana", country: "Slovenia", lat: 46.0569, lng: 14.5058, stay: 95, food: 40, play: 25 },
    { name: "London", country: "United Kingdom", lat: 51.5074, lng: -0.1278, stay: 180, food: 60, play: 45 },
    { name: "Lyon", country: "France", lat: 45.764, lng: 4.8357, stay: 120, food: 50, play: 30 },
    { name: "Madrid", country: "Spain", lat: 40.4168, lng: -3.7038, stay: 120, food: 45, play: 35 },
    { name: "Milan", country: "Italy", lat: 45.4642, lng: 9.19, stay: 150, food: 55, play: 40 },
    { name: "Munich", country: "Germany", lat: 48.1351, lng: 11.582, stay: 140, food: 50, play: 35 },
    { name: "Naples", country: "Italy", lat: 40.8518, lng: 14.2681, stay: 110, food: 40, play: 30 },
    { name: "Nice", country: "France", lat: 43.7102, lng: 7.262, stay: 145, food: 55, play: 35 },
    { name: "Oslo", country: "Norway", lat: 59.9139, lng: 10.7522, stay: 175, food: 70, play: 40 },
    { name: "Palermo", country: "Italy", lat: 38.1157, lng: 13.3615, stay: 95, food: 40, play: 25 },
    { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522, stay: 170, food: 60, play: 45 },
    { name: "Porto", country: "Portugal", lat: 41.1579, lng: -8.6291, stay: 100, food: 40, play: 25 },
    { name: "Prague", country: "Czechia", lat: 50.0755, lng: 14.4378, stay: 100, food: 35, play: 30 },
    { name: "Reykjavík", country: "Iceland", lat: 64.1466, lng: -21.9426, stay: 180, food: 70, play: 50 },
    { name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964, stay: 145, food: 50, play: 40 },
    { name: "Salzburg", country: "Austria", lat: 47.8095, lng: 13.055, stay: 130, food: 50, play: 30 },
    { name: "Santorini", country: "Greece", lat: 36.3932, lng: 25.4615, stay: 170, food: 55, play: 40 },
    { name: "Seville", country: "Spain", lat: 37.3891, lng: -5.9845, stay: 105, food: 40, play: 30 },
    { name: "Split", country: "Croatia", lat: 43.5081, lng: 16.4402, stay: 110, food: 45, play: 30 },
    { name: "Stockholm", country: "Sweden", lat: 59.3293, lng: 18.0686, stay: 160, food: 65, play: 40 },
    { name: "Tallinn", country: "Estonia", lat: 59.437, lng: 24.7536, stay: 90, food: 40, play: 25 },
    { name: "Valletta", country: "Malta", lat: 35.8989, lng: 14.5146, stay: 120, food: 45, play: 30 },
    { name: "Venice", country: "Italy", lat: 45.4408, lng: 12.3155, stay: 175, food: 55, play: 40 },
    { name: "Vienna", country: "Austria", lat: 48.2082, lng: 16.3738, stay: 130, food: 50, play: 35 },
    { name: "Warsaw", country: "Poland", lat: 52.2297, lng: 21.0122, stay: 85, food: 35, play: 25 },
    { name: "Zurich", country: "Switzerland", lat: 47.3769, lng: 8.5417, stay: 200, food: 80, play: 40 },
  ];

  const MODES = ["train", "plane", "bus", "car", "ferry"];
  const MODE_COLOR = {
    train: "#2d6a4f",
    plane: "#e85d04",
    bus: "#9c6644",
    car: "#1a1a16",
    ferry: "#1d4e89",
  };
  const LAND_MODES = ["train", "bus", "car"];
  // Places you can't reach overland from the mainland (UK counts as mainland via the tunnel).
  const ISLAND_COUNTRIES = { Iceland: "iceland", Ireland: "ireland", Malta: "malta", Cyprus: "cyprus" };
  const ISLAND_CITIES = { Santorini: "santorini" };

  // Rough daily cost guesses (EUR) for countries with no city in the built-in list.
  const EXTRA_COUNTRY_COST = {
    Albania: [50, 25, 15], "Bosnia and Herzegovina": [55, 25, 15], Bulgaria: [55, 25, 15],
    Cyprus: [110, 45, 30], Latvia: [80, 35, 25], Lithuania: [75, 35, 25],
    Luxembourg: [160, 65, 35], Monaco: [280, 90, 60], Montenegro: [75, 35, 20],
    "North Macedonia": [50, 25, 15], Romania: [65, 30, 20], Slovakia: [75, 35, 20],
    Moldova: [45, 20, 15], Ukraine: [55, 25, 15], Liechtenstein: [180, 70, 35],
    "San Marino": [110, 45, 25], Andorra: [110, 45, 30], Kosovo: [45, 20, 15],
  };
  const FALLBACK_COST = [100, 40, 25];
  const DEFAULT_DEPART = "09:00";
  const STORAGE = "europe-trip-v1";

  const state = loadShared() || load() || {
    startDate: defaultStart(),
    stops: [],
    legs: [],
  };
  persist();

  const map = L.map("map", {
    minZoom: 3,
    maxZoom: 12,
    worldCopyJump: false,
  }).setView([50.1, 10.2], 4);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const cityLayer = L.layerGroup().addTo(map);
  const tripLayer = L.layerGroup().addTo(map);

  CITIES.forEach((city) => {
    const marker = L.circleMarker([city.lat, city.lng], {
      radius: 5,
      color: "#1b4332",
      weight: 1,
      fillColor: "#fffaf2",
      fillOpacity: 0.9,
    }).addTo(cityLayer);
    marker.bindTooltip(city.name);
    marker.on("click", () => addCity(city));
  });

  const els = {
    start: document.getElementById("start-date"),
    stats: document.getElementById("stats"),
    search: document.getElementById("city-search"),
    suggestions: document.getElementById("suggestions"),
    itinerary: document.getElementById("itinerary"),
    reset: document.getElementById("reset-trip"),
    share: document.getElementById("share-trip"),
    print: document.getElementById("print-trip"),
  };

  els.share.addEventListener("click", shareTrip);
  els.print.addEventListener("click", () => window.print());

  els.start.value = state.startDate;
  els.start.addEventListener("change", () => {
    state.startDate = els.start.value || defaultStart();
    els.start.value = state.startDate;
    persist();
    render();
  });
  els.reset.addEventListener("click", () => {
    if (!state.stops.length) return;
    if (!window.confirm("Clear every stop from this trip?")) return;
    state.stops = [];
    state.legs = [];
    persist();
    render();
  });
  els.search.addEventListener("input", showSuggestions);
  let activeSuggestion = -1;
  els.search.addEventListener("keydown", (event) => {
    const buttons = [...els.suggestions.querySelectorAll("button")];
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      if (!buttons.length) return;
      event.preventDefault();
      els.suggestions.hidden = false;
      const step = event.key === "ArrowDown" ? 1 : -1;
      activeSuggestion = (activeSuggestion + step + buttons.length) % buttons.length;
      buttons.forEach((b, i) => b.classList.toggle("active", i === activeSuggestion));
      buttons[activeSuggestion].scrollIntoView({ block: "nearest" });
    } else if (event.key === "Enter") {
      event.preventDefault();
      const picked = buttons[activeSuggestion]
        ? currentMatches[Number(buttons[activeSuggestion].dataset.index)]
        : currentMatches[0] || matchCities(els.search.value)[0];
      if (picked) addCity(picked);
    } else if (event.key === "Escape") {
      els.suggestions.hidden = true;
      activeSuggestion = -1;
    }
  });
  document.addEventListener("click", (event) => {
    if (!els.suggestions.contains(event.target) && event.target !== els.search) {
      els.suggestions.hidden = true;
    }
  });

  function defaultStart() {
    const d = new Date();
    d.setDate(d.getDate() + 21);
    return iso(d);
  }

  function iso(date) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[ch]);
  }

  function parseDate(value) {
    const [y, m, d] = value.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function addDays(value, days) {
    const date = parseDate(value);
    date.setDate(date.getDate() + days);
    return date;
  }

  function formatDate(date) {
    return date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  }

  function uid() {
    return Math.random().toString(36).slice(2, 9);
  }

  function haversine(a, b) {
    const toRad = (n) => (n * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const s =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(s));
  }

  function estimate(mode, km) {
    const table = {
      plane: { speed: 740, buffer: 2.2, perKm: 0.11, base: 55 },
      train: { speed: 95, buffer: 0.5, perKm: 0.16, base: 18 },
      bus: { speed: 68, buffer: 0.4, perKm: 0.07, base: 10 },
      car: { speed: 85, buffer: 0.3, perKm: 0.2, base: 12 },
      ferry: { speed: 38, buffer: 1, perKm: 0.14, base: 28 },
    };
    const t = table[mode];
    const hours = t.buffer + km / t.speed;
    const cost = t.base + km * t.perKm;
    return {
      hours: Math.round(hours * 10) / 10,
      cost: Math.round(cost),
      km: Math.round(km),
    };
  }

  function validTime(value) {
    return /^([01]\d|2[0-3]):[0-5]\d$/.test(value || "") ? value : null;
  }

  function clock(minutes) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;
  }

  function bookingLinks(leg) {
    const from = leg.from;
    const to = leg.to;
    const fromFull = `${leg.fromStop.name}, ${leg.fromStop.country}`;
    const toFull = `${leg.toStop.name}, ${leg.toStop.country}`;
    const day = formatDate(parseDate(leg.date));
    const g = (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;
    const slug = (n) => encodeURIComponent(n.replace(/\s+/g, "-"));
    const primary = {
      plane: ["Flights", `https://www.google.com/travel/flights?q=${encodeURIComponent(`Flights from ${from} to ${to} on ${leg.date} one way`)}`],
      train: ["Train times", g(`train ${fromFull} to ${toFull} ${day}`)],
      bus: ["Bus times", g(`bus ${fromFull} to ${toFull} ${day}`)],
      car: ["Driving route", `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(fromFull)}&destination=${encodeURIComponent(toFull)}&travelmode=driving`],
      ferry: ["Ferry times", g(`ferry ${fromFull} to ${toFull} ${day}`)],
    }[leg.mode];
    return [primary, ["All options", `https://www.rome2rio.com/map/${slug(from)}/${slug(to)}`]];
  }

  function addCity(city) {
    if (!city || state.stops.some((s) => sameCity(s, city))) return;
    const cost = city.stay != null ? city : costFor(city.country);
    state.stops.push({
      id: uid(),
      name: city.name,
      country: city.country,
      lat: city.lat,
      lng: city.lng,
      nights: 3,
      stay: cost.stay,
      food: cost.food,
      play: cost.play,
      notes: "",
    });
    if (state.stops.length > 1) {
      state.legs.push({ mode: suggestMode(state.stops.at(-2), city), depart: DEFAULT_DEPART });
    }
    clearTimeout(searchTimer);
    searchSeq += 1; // drop any search still in flight so it can't reopen the list
    els.search.value = "";
    els.suggestions.hidden = true;
    persist();
    render();
  }

  function landmass(place) {
    return ISLAND_CITIES[place.name] || ISLAND_COUNTRIES[place.country] || "mainland";
  }

  function needsCrossing(from, to) {
    return landmass(from) !== landmass(to);
  }

  // Average the built-in cities for a country; otherwise use a rough guess.
  function costFor(country) {
    const same = CITIES.filter((c) => c.country === country);
    if (same.length) {
      const avg = (k) => Math.round(same.reduce((t, c) => t + c[k], 0) / same.length / 5) * 5;
      return { stay: avg("stay"), food: avg("food"), play: avg("play") };
    }
    const [stay, food, play] = EXTRA_COUNTRY_COST[country] || FALLBACK_COST;
    return { stay, food, play };
  }

  function sameCity(a, b) {
    return a.name === b.name && a.country === b.country;
  }

  function suggestMode(from, to) {
    const km = haversine(from, to);
    if (needsCrossing(from, to)) return km < 400 ? "ferry" : "plane";
    if (km > 1200) return "plane";
    if (km < 80) return "bus";
    return "train";
  }

  function removeStop(id) {
    const index = state.stops.findIndex((s) => s.id === id);
    if (index < 0) return;
    const before = state.stops.slice();
    state.stops.splice(index, 1);
    rebuildLegs(before);
    persist();
    render();
  }

  function moveStop(id, dir) {
    const index = state.stops.findIndex((s) => s.id === id);
    const next = index + dir;
    if (next < 0 || next >= state.stops.length) return;
    const before = state.stops.slice();
    const [stop] = state.stops.splice(index, 1);
    state.stops.splice(next, 0, stop);
    rebuildLegs(before);
    persist();
    render();
  }

  // Keep the chosen mode for any from→to pair that survives a reorder; suggest one for new pairs.
  function rebuildLegs(before) {
    const known = new Map();
    before.forEach((s, i) => {
      if (before[i + 1] && state.legs[i]) known.set(`${s.id}>${before[i + 1].id}`, state.legs[i]);
    });
    const next = [];
    for (let i = 0; i < state.stops.length - 1; i += 1) {
      const a = state.stops[i];
      const b = state.stops[i + 1];
      next.push(known.get(`${a.id}>${b.id}`) || { mode: suggestMode(a, b), depart: DEFAULT_DEPART });
    }
    state.legs = next;
  }

  function matchCities(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return CITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q)
    ).slice(0, 8);
  }

  let currentMatches = [];
  let searchTimer = 0;
  let searchSeq = 0;
  const remoteCache = new Map();

  function showSuggestions() {
    const query = els.search.value.trim();
    const local = matchCities(query);
    drawSuggestions(local, query.length >= 2 ? "Searching all of Europe…" : "");
    clearTimeout(searchTimer);
    if (query.length < 2) return;
    const seq = ++searchSeq;
    searchTimer = setTimeout(async () => {
      const remote = await searchPlaces(query);
      if (seq !== searchSeq) return;
      const merged = [...local];
      remote.forEach((r) => {
        const dupe = merged.some((m) => sameCity(m, r) || (m.name === r.name && haversine(m, r) < 15));
        if (!dupe) merged.push(r);
      });
      drawSuggestions(
        merged.slice(0, 10),
        remote === null ? "Couldn't reach the city search — showing built-in cities only." : ""
      );
    }, 250);
  }

  async function searchPlaces(query) {
    const key = query.toLowerCase();
    if (remoteCache.has(key)) return remoteCache.get(key);
    const params = new URLSearchParams({ q: query, limit: "10", lang: "en", bbox: "-25,34,45,72" });
    ["place:city", "place:town", "place:village"].forEach((t) => params.append("osm_tag", t));
    try {
      const res = await fetch(`https://photon.komoot.io/api/?${params}`);
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      const places = (data.features || [])
        .filter((f) => f.properties?.name && f.properties?.country)
        .map((f) => ({
          name: f.properties.name,
          country: f.properties.country,
          region: f.properties.state || f.properties.county || "",
          lat: f.geometry.coordinates[1],
          lng: f.geometry.coordinates[0],
        }));
      remoteCache.set(key, places);
      return places;
    } catch {
      return null;
    }
  }

  function drawSuggestions(matches, status) {
    activeSuggestion = -1;
    currentMatches = matches;
    if (!matches.length && !status) {
      els.suggestions.hidden = true;
      els.suggestions.innerHTML = "";
      return;
    }
    els.suggestions.hidden = false;
    els.suggestions.innerHTML =
      matches
        .map((c, i) => {
          const inTrip = state.stops.some((s) => sameCity(s, c));
          const where = [c.region, c.country].filter(Boolean).join(", ");
          return `<li><button type="button" data-index="${i}"><strong>${escapeHtml(c.name)}</strong> <small>${escapeHtml(where)}${
            inTrip ? " · already in trip" : ""
          }</small></button></li>`;
        })
        .join("") + (status ? `<li class="search-status">${escapeHtml(status)}</li>` : "");
    els.suggestions.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => addCity(currentMatches[Number(btn.dataset.index)]));
    });
  }

  function plan() {
    let cursor = state.startDate;
    const stops = [];
    const legs = [];
    let stayDays = 0;
    let transitDays = 0;
    let stayCost = 0;
    let transitCost = 0;
    let transitHours = 0;
    let rushed = 0;

    state.stops.forEach((stop, i) => {
      const arrive = parseDate(cursor);
      const nights = Number(stop.nights) || 0;
      const daily = Number(stop.stay) + Number(stop.food) + Number(stop.play);
      const cost = daily * nights;
      const leave = addDays(cursor, nights);
      stayDays += nights;
      stayCost += cost;
      if (nights < 2) rushed += 1;
      stops.push({
        ...stop,
        arrive,
        leave,
        daily,
        cost,
        thin: nights < 2,
      });
      cursor = iso(leave);

      if (i < state.stops.length - 1) {
        const next = state.stops[i + 1];
        const mode = state.legs[i]?.mode || "train";
        const depart = validTime(state.legs[i]?.depart) || DEFAULT_DEPART;
        const est = estimate(mode, haversine(stop, next));
        const [dh, dm] = depart.split(":").map(Number);
        const arriveMin = dh * 60 + dm + Math.round(est.hours * 60);
        const days = Math.floor(arriveMin / 1440);
        const arriveTime = clock(arriveMin % 1440);
        transitDays += days;
        transitCost += est.cost;
        transitHours += est.hours;
        const blocked = LAND_MODES.includes(mode) && needsCrossing(stop, next);
        legs.push({
          ...est, mode, days, blocked, depart, arriveTime,
          date: iso(leave), fromStop: stop, toStop: next, from: stop.name, to: next.name,
        });
        cursor = iso(addDays(cursor, days));
      }
    });

    const totalDays = stayDays + transitDays;
    const end = stops.length ? stops[stops.length - 1].leave : parseDate(state.startDate);
    return {
      stops,
      legs,
      stayDays,
      transitDays,
      totalDays,
      stayCost,
      transitCost,
      totalCost: stayCost + transitCost,
      transitHours,
      rushed,
      end,
    };
  }

  function euro(n) {
    return `€${Math.round(n).toLocaleString("en-GB")}`;
  }

  function hoursLabel(h) {
    const total = Math.round(h * 60);
    const hours = Math.floor(total / 60);
    const mins = total % 60;
    if (hours < 1) return `${mins}m`;
    if (!mins) return `${hours}h`;
    return `${hours}h ${mins}m`;
  }

  function render() {
    const focused = document.activeElement;
    let keepFocus = null;
    if (focused && els.itinerary.contains(focused)) {
      if (focused.dataset.field) {
        keepFocus = `.stop[data-id="${focused.closest(".stop")?.dataset.id}"] [data-field="${focused.dataset.field}"]`;
      } else if (focused.dataset.legField) {
        keepFocus = `.leg[data-leg="${focused.closest(".leg")?.dataset.leg}"] [data-leg-field="${focused.dataset.legField}"]`;
      }
    }
    const p = plan();
    const avg = p.totalDays ? p.totalCost / p.totalDays : 0;
    const paceWarn = p.rushed > 0 || (p.stops.length > 0 && p.stayDays / p.stops.length < 2.5);

    els.stats.innerHTML = `
      <div class="stat"><b>${p.stops.length}</b><span>cities</span></div>
      <div class="stat ${paceWarn ? "warn" : ""}"><b>${p.totalDays || 0}</b><span>${
        p.stops.length
          ? `days · ${formatDate(parseDate(state.startDate))} → ${formatDate(p.end)}`
          : "days on the road"
      }</span></div>
      <div class="stat"><b>${euro(p.totalCost)}</b><span>trip total</span></div>
      <div class="stat"><b>${euro(avg)}</b><span>per day</span></div>
      <div class="stat"><b>${hoursLabel(p.transitHours)}</b><span>in transit · ${euro(p.transitCost)}</span></div>
    `;

    if (!p.stops.length) {
      els.itinerary.innerHTML = `<li class="empty">Start with a city — Lisbon to the Balkans, or a tight loop around Italy. Click the map or search above.</li>`;
    } else {
      els.itinerary.innerHTML = p.stops
        .map((stop, i) => {
          const leg = p.legs[i];
          return `
            <li>
              <article class="stop" data-id="${stop.id}">
                <div class="stop-head">
                  <span class="badge">${i + 1}</span>
                  <h2>${escapeHtml(stop.name)}<small>${escapeHtml(stop.country)}</small></h2>
                  <button class="icon-btn" data-act="up" title="Move earlier">↑</button>
                  <button class="icon-btn" data-act="down" title="Move later">↓</button>
                  <button class="icon-btn" data-act="remove" title="Remove">✕</button>
                </div>
                <p class="dates">${formatDate(stop.arrive)} → ${formatDate(stop.leave)} · ${euro(stop.cost)} stay</p>
                <div class="row">
                  <label class="nights">Nights
                    <input type="number" min="1" max="30" data-field="nights" value="${stop.nights}">
                  </label>
                  <label class="money">Stay / night
                    <input type="number" min="0" step="5" data-field="stay" value="${stop.stay}">
                  </label>
                  <label class="money">Food / day
                    <input type="number" min="0" step="5" data-field="food" value="${stop.food}">
                  </label>
                  <label class="money">Play / day
                    <input type="number" min="0" step="5" data-field="play" value="${stop.play}">
                  </label>
                </div>
                <label class="notes">Notes
                  <textarea rows="2" data-field="notes" placeholder="Hostel booked? Must-see? Friend to meet?">${escapeHtml(stop.notes)}</textarea>
                </label>
                ${stop.thin ? `<p class="pace">One night is a blur — two or three lets a city land.</p>` : ""}
              </article>
              ${
                leg
                  ? `<div class="leg" data-leg="${i}">
                      <p>${escapeHtml(leg.from)} → ${escapeHtml(leg.to)} · ${leg.km} km</p>
                      <div class="modes">
                        ${MODES.map(
                          (m) =>
                            `<button type="button" data-mode="${m}" class="${leg.mode === m ? "on" : ""}">${m}</button>`
                        ).join("")}
                      </div>
                      ${
                        leg.blocked
                          ? `<p class="leg-warn">No overland route to ${escapeHtml(leg.to)} — pick ferry or plane.</p>`
                          : ""
                      }
                      <div class="leg-time">
                        <label>Leave ${formatDate(parseDate(leg.date))}
                          <input type="time" data-leg-field="depart" value="${leg.depart}">
                        </label>
                        <p>Arrive <b>${leg.arriveTime}</b>${leg.days ? ` <span class="plus-day">+${leg.days} day${leg.days > 1 ? "s" : ""}</span>` : ""}</p>
                      </div>
                      <div class="leg-meta">
                        <span>${hoursLabel(leg.hours)} door to door</span>
                        <span>~${euro(leg.cost)} fare</span>
                      </div>
                      <div class="leg-links">
                        ${bookingLinks(leg)
                          .map(([label, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${label} ↗</a>`)
                          .join("")}
                      </div>
                    </div>`
                  : ""
              }
            </li>`;
        })
        .join("");
    }

    els.itinerary.querySelectorAll(".stop").forEach((card) => {
      const id = card.dataset.id;
      card.querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", () => {
          const stop = state.stops.find((s) => s.id === id);
          if (!stop) return;
          const field = input.dataset.field;
          let value = Number(input.value);
          if (!Number.isFinite(value) || value < 0) value = 0;
          if (field === "nights") value = Math.min(30, Math.max(1, Math.round(value) || 1));
          stop[field] = value;
          persist();
          // Defer so focus has moved (e.g. on Tab) before we re-render and restore it.
          setTimeout(render, 0);
        });
      });
      card.querySelectorAll("textarea").forEach((area) => {
        area.addEventListener("input", () => {
          const stop = state.stops.find((s) => s.id === id);
          if (!stop) return;
          stop.notes = area.value;
          persist();
        });
      });
      card.querySelectorAll("button[data-act]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const act = btn.dataset.act;
          if (act === "remove") removeStop(id);
          if (act === "up") moveStop(id, -1);
          if (act === "down") moveStop(id, 1);
        });
      });
    });

    els.itinerary.querySelectorAll(".leg").forEach((legEl) => {
      const index = Number(legEl.dataset.leg);
      const departInput = legEl.querySelector('[data-leg-field="depart"]');
      departInput.addEventListener("change", () => {
        const value = validTime(departInput.value);
        if (!value) return;
        state.legs[index].depart = value;
        persist();
        setTimeout(render, 0);
      });
      legEl.querySelectorAll("[data-mode]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.legs[index].mode = btn.dataset.mode;
          persist();
          render();
        });
      });
    });

    if (document.activeElement !== els.search) {
      els.suggestions.hidden = true;
    }

    if (keepFocus) {
      const target = els.itinerary.querySelector(keepFocus);
      if (target) target.focus();
    }

    drawTrip(p);
  }

  let lastFitKey = "";

  function drawTrip(p) {
    tripLayer.clearLayers();
    p.stops.forEach((stop, i) => {
      const icon = L.divIcon({
        className: "",
        html: `<div class="pin">${i + 1}</div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
      });
      L.marker([stop.lat, stop.lng], { icon, zIndexOffset: 400 })
        .bindPopup(
          `<strong>${escapeHtml(stop.name)}</strong> <small>${escapeHtml(stop.country)}</small><br>${formatDate(stop.arrive)} → ${formatDate(stop.leave)}<br>${stop.nights} nights · ${euro(stop.cost)}${
            stop.notes ? `<br><em>${escapeHtml(stop.notes)}</em>` : ""
          }`
        )
        .addTo(tripLayer);
    });
    p.legs.forEach((leg, i) => {
      const from = p.stops[i];
      const to = p.stops[i + 1];
      const curve = bentLine(from, to, i);
      L.polyline(curve, {
        color: MODE_COLOR[leg.mode],
        weight: 3.5,
        opacity: 0.9,
        dashArray: leg.mode === "plane" ? "8 8" : null,
      })
        .bindTooltip(`${leg.mode} · ${hoursLabel(leg.hours)} · ${euro(leg.cost)}`)
        .addTo(tripLayer);
    });
    const fitKey = p.stops.map((s) => s.id).join("-");
    if (fitKey !== lastFitKey) {
      lastFitKey = fitKey;
      if (p.stops.length > 1) {
        map.fitBounds(
          p.stops.map((s) => [s.lat, s.lng]),
          { padding: [40, 40], maxZoom: 6 }
        );
      } else if (p.stops.length === 1) {
        map.setView([p.stops[0].lat, p.stops[0].lng], 6);
      } else {
        map.setView([50.1, 10.2], 4);
      }
    }
  }

  function bentLine(a, b, i) {
    const dx = b.lng - a.lng;
    const dy = b.lat - a.lat;
    const bend = i % 2 === 0 ? 0.15 : -0.15;
    const ctrl = [(a.lat + b.lat) / 2 + dx * bend, (a.lng + b.lng) / 2 - dy * bend];
    const points = [];
    for (let t = 0; t <= 1.0001; t += 0.05) {
      const u = 1 - t;
      points.push([
        u * u * a.lat + 2 * u * t * ctrl[0] + t * t * b.lat,
        u * u * a.lng + 2 * u * t * ctrl[1] + t * t * b.lng,
      ]);
    }
    return points;
  }

  function persist() {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(state));
    } catch {
      /* storage unavailable (private mode) — trip just won't persist */
    }
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!Array.isArray(data.stops)) return null;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(data.startDate || "")) data.startDate = defaultStart();
      if (!Array.isArray(data.legs)) data.legs = [];
      return data;
    } catch {
      return null;
    }
  }

  function toBase64Url(text) {
    const bytes = new TextEncoder().encode(text);
    let bin = "";
    bytes.forEach((b) => (bin += String.fromCharCode(b)));
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  function fromBase64Url(text) {
    const b64 = text.replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(b64 + "===".slice((b64.length + 3) % 4));
    return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
  }

  function shareUrl() {
    const compact = {
      d: state.startDate,
      s: state.stops.map((s) => [
        s.name, s.nights, s.stay, s.food, s.play, s.notes || "",
        s.country, +s.lat.toFixed(4), +s.lng.toFixed(4),
      ]),
      m: state.legs.map((l) => l.mode),
      t: state.legs.map((l) => l.depart || DEFAULT_DEPART),
    };
    return `${location.href.split("#")[0]}#trip=${toBase64Url(JSON.stringify(compact))}`;
  }

  async function shareTrip() {
    if (!state.stops.length) {
      flash(els.share, "Add a city first");
      return;
    }
    const url = shareUrl();
    try {
      await navigator.clipboard.writeText(url);
      flash(els.share, "Link copied");
    } catch {
      window.prompt("Copy this link to share your trip:", url);
    }
  }

  function flash(button, text) {
    const original = button.dataset.label || button.textContent;
    button.dataset.label = original;
    button.textContent = text;
    clearTimeout(button._flash);
    button._flash = setTimeout(() => (button.textContent = original), 1800);
  }

  function loadShared() {
    const match = location.hash.match(/^#trip=([\w-]+)$/);
    if (!match) return null;
    history.replaceState(null, "", location.pathname + location.search);
    try {
      const data = JSON.parse(fromBase64Url(match[1]));
      const stops = (Array.isArray(data.s) ? data.s : [])
        .map(([name, nights, stay, food, play, notes, country, lat, lng]) => {
          const known = CITIES.find((c) => c.name === name && (!country || c.country === country));
          const valid =
            typeof name === "string" && name && typeof country === "string" &&
            Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180;
          const city = known || (valid ? { name: name.slice(0, 80), country: country.slice(0, 80), lat, lng, ...costFor(country) } : null);
          if (!city) return null;
          const num = (v, fallback) => (Number.isFinite(Number(v)) && Number(v) >= 0 ? Number(v) : fallback);
          return {
            id: uid(),
            name: city.name,
            country: city.country,
            lat: city.lat,
            lng: city.lng,
            nights: Math.min(30, Math.max(1, Math.round(num(nights, 3)) || 1)),
            stay: num(stay, city.stay),
            food: num(food, city.food),
            play: num(play, city.play),
            notes: String(notes || "").slice(0, 2000),
          };
        })
        .filter(Boolean)
        .filter((s, i, all) => all.findIndex((o) => sameCity(o, s)) === i);
      if (!stops.length) return null;
      const saved = load();
      if (saved?.stops?.length && !window.confirm("Replace your saved trip with the shared one?")) {
        return null;
      }
      const modes = Array.isArray(data.m) ? data.m : [];
      const times = Array.isArray(data.t) ? data.t : [];
      const legs = stops.slice(0, -1).map((s, i) => ({
        mode: MODES.includes(modes[i]) ? modes[i] : suggestMode(s, stops[i + 1]),
        depart: validTime(times[i]) || DEFAULT_DEPART,
      }));
      const startDate = /^\d{4}-\d{2}-\d{2}$/.test(data.d || "") ? data.d : defaultStart();
      return { startDate, stops, legs };
    } catch {
      return null;
    }
  }

  render();
  setTimeout(() => map.invalidateSize(), 200);
})();
