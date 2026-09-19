'use client';

import { useEffect, useRef, useState } from 'react';
import { NODES, PROJECT_CENTER, PROJECT_NAME } from '../data';

const categories = {
  nearbyAreas: ['Nearby areas', '#2563eb'],
  businessParks: ['Business parks', '#43297c'],
  healthcare: ['Healthcare', '#dc2626'],
  hospitality: ['Hospitality', '#ea580c'],
  entertainment: ['Entertainment', '#db2777'],
  existingConnectivity: ['Connectivity', '#0891b2'],
  upcomingInfrastructure: ['Upcoming infrastructure', '#16a34a'],
} as const;
type Category = keyof typeof categories;

function curveTo(lat: number, lng: number, index: number): [number, number][] {
  const start = PROJECT_CENTER;
  const dx = lng - start.lng;
  const dy = lat - start.lat;
  const bend = (index % 2 ? 1 : -1) * 0.18;
  const control = { lat: start.lat + dy / 2 + dx * bend, lng: start.lng + dx / 2 - dy * bend };
  return Array.from({ length: 25 }, (_, step) => {
    const t = step / 24;
    const oneMinusT = 1 - t;
    return [
      oneMinusT ** 2 * start.lat + 2 * oneMinusT * t * control.lat + t ** 2 * lat,
      oneMinusT ** 2 * start.lng + 2 * oneMinusT * t * control.lng + t ** 2 * lng,
    ];
  });
}

if (process.env.NODE_ENV === 'development') {
  const check = curveTo(19.2, 73, 0);
  console.assert(check.length === 25 && check[0][0] === PROJECT_CENTER.lat && check[24][1] === 73);
}

export default function LocalityMap() {
  const element = useRef<HTMLDivElement>(null);
  const map = useRef<import('leaflet').Map | null>(null);
  const markers = useRef<import('leaflet').LayerGroup | null>(null);
  const [active, setActive] = useState<Category | 'all'>('all');
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }

  useEffect(() => {
    let cancelled = false;
    import('leaflet').then((L) => {
      if (cancelled || !element.current) return;
      map.current = L.map(element.current, { zoomControl: false }).setView([PROJECT_CENTER.lat, PROJECT_CENTER.lng], 12);
      L.control.zoom({ position: 'bottomright' }).addTo(map.current);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map.current);
      markers.current = L.layerGroup().addTo(map.current);
      setReady(true);
    });
    return () => { cancelled = true; map.current?.remove(); map.current = null; };
  }, []);

  useEffect(() => {
    if (!ready || !markers.current) return;
    import('leaflet').then((L) => {
      if (!markers.current) return;
      markers.current.clearLayers();
      const projectIcon = L.divIcon({ className: 'map-marker-shell', html: '<span class=project-marker><i>S</i></span>', iconSize: [42, 42], iconAnchor: [21, 21] });
      L.marker([PROJECT_CENTER.lat, PROJECT_CENTER.lng], { icon: projectIcon })
        .bindTooltip(`<strong>${PROJECT_NAME}</strong>`, { permanent: true, direction: 'top', offset: [0, -22], className: 'location-label project-label' })
        .bindPopup(`<strong>${PROJECT_NAME}</strong><br>Vikhroli East`)
        .addTo(markers.current);
      const visible = NODES.filter((node) => active === 'all' || node.category === active);
      visible.forEach((node, index) => {
        const category = categories[node.category as Category];
        if (!category) return;
        const curve = curveTo(node.lat, node.lng, index);
        L.polyline(curve, { className: 'connection-base', color: category[1], interactive: false, opacity: 0.2, weight: 1.2 }).addTo(markers.current!);
        const light = L.polyline(curve, { className: 'connection-light', color: category[1], interactive: false, opacity: 0.9, weight: 2, dashArray: '2 12', lineCap: 'round' }).addTo(markers.current!);
        const path = light.getElement();
        if (path instanceof SVGElement) path.style.setProperty('--flow-delay', `${-index * 0.12}s`);
        const icon = L.divIcon({ className: 'map-marker-shell', html: `<span class=place-marker style=--marker:${category[1]}></span>`, iconSize: [20, 20], iconAnchor: [10, 10] });
        L.marker([node.lat, node.lng], { icon })
          .bindTooltip(`<span>${node.name}</span><small>${node.meta}</small>`, { permanent: true, direction: 'top', offset: [0, -10], className: 'location-label' })
          .bindPopup(`<strong>${node.name}</strong><br>${category[0]} · ${node.meta}`)
          .addTo(markers.current!);
      });
      map.current?.fitBounds(
        [[PROJECT_CENTER.lat, PROJECT_CENTER.lng], ...visible.map((node) => [node.lat, node.lng] as [number, number])],
        { padding: [36, 36], maxZoom: 14 },
      );
    });
  }, [active, ready]);

  return <main className='map-app'>
    <aside className='map-panel'>
      <div className='panel-heading'>
        <div><p className='eyebrow'>Explore the neighbourhood</p><h1>{PROJECT_NAME}</h1></div>
        <button className='theme-toggle' onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          <span aria-hidden='true'>{theme === 'dark' ? '☀' : '☾'}</span>
        </button>
      </div>
      <nav aria-label='Map categories' className='category-list'>
        <button aria-pressed={active === 'all'} className={active === 'all' ? 'active' : ''} onClick={() => setActive('all')}>
          <span className='category-dot all' />All places <small>{NODES.length}</small>
        </button>
        {Object.entries(categories).map(([key, value]) =>
          <button aria-pressed={active === key} key={key} className={active === key ? 'active' : ''} onClick={() => setActive(key as Category)}>
            <span className='category-dot' style={{ background: value[1] }} />{value[0]}
            <small>{NODES.filter((node) => node.category === key).length}</small>
          </button>
        )}
      </nav>
      <p className='panel-note'>Select a marker for details.</p>
    </aside>
    <section className='map-stage'><div ref={element} className='leaflet-map' /></section>
  </main>;
}
