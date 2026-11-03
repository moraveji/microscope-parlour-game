'use strict';
const CACHE='microscopic-madness-v8';
const FILES=['./','./index.html','./config.js','./style.css','./legacy-missions.js','./missions.js','./app.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('microscopic-madness-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===self.location.origin)e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
self.addEventListener('message',e=>{if(e.data==='cache-status')e.waitUntil(caches.open(CACHE).then(async c=>{const ready=(await Promise.all(FILES.map(f=>c.match(f)))).every(Boolean);e.ports[0]?.postMessage(ready?'cached':'missing');}));});
