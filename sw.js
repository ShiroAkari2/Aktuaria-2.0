/* Service worker: membuat halaman bisa dibuka tanpa internet.
   - File milik sendiri: ambil dari internet dulu (supaya update langsung terlihat); kalau offline, pakai simpanan.
   - File dari luar (MathJax, font): pakai simpanan dulu, ambil dari internet kalau belum ada.
   Menambah bab/matkul/istilah TIDAK perlu mengubah file ini. Naikkan angka VER hanya kalau ingin mengosongkan simpanan lama. */
const VER = 'aktuaria-v13';
const CORE = ['./','index.html','css/style.css','js/app.js','data/glosarium.js','data/tsb.js','data/matkeu.js','data/matematika.js','data/aljabarlinear.js','data/teoripeluang.js','data/statmat.js','data/pma.js','data/metstat.js','data/makro.js','data/latihan.js','data/struktur.js','data/jadwal.js','manifest.json','icons/icon-192.png','icons/icon-512.png'];
const CDN = [
  'https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js',
  'https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Inter:wght@400;600&display=swap'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VER).then(async c => {
    await c.addAll(CORE);
    await Promise.all(CDN.map(u => fetch(u, {mode:'no-cors'}).then(r => c.put(u, r)).catch(() => {})));
  }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const same = new URL(r.url).origin === location.origin;
  if (same) {
    e.respondWith(fetch(r, {cache:'no-cache'}).then(res => {
      const cp = res.clone(); caches.open(VER).then(c => c.put(r, cp)); return res;
    }).catch(() => caches.match(r).then(m => m || caches.match('index.html'))));
  } else {
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => {
      const cp = res.clone(); caches.open(VER).then(c => c.put(r, cp)); return res;
    })));
  }
});
