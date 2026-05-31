// ════════════════════════════════════════════════════════════════
//  ESQUILO FINANÇAS — Service Worker
//  Estratégia: Cache First para assets, Network First para dados
// ════════════════════════════════════════════════════════════════

const CACHE_NAME    = 'esquilo-financas-v1';
const CACHE_OFFLINE = 'esquilo-offline-v1';

// Assets que serão cacheados no install
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './icons/apple-touch-icon.png',
  // CDNs externas (serão cacheadas na primeira visita)
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap'
];

// ─── INSTALL: cacheia o shell do app ─────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cacheando assets do app...');
        // Cacheia itens locais com certeza; CDNs podem falhar em ambientes restritos
        const localAssets = ['./', './index.html', './manifest.json'];
        return cache.addAll(localAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// ─── ACTIVATE: limpa caches antigos ──────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME && k !== CACHE_OFFLINE)
          .map(k => {
            console.log('[SW] Removendo cache antigo:', k);
            return caches.delete(k);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ─── FETCH: Cache First com fallback para rede ────────────────
self.addEventListener('fetch', event => {
  // Ignora requisições não-GET
  if (event.request.method !== 'GET') return;

  // Para fontes e CDNs: tenta cache, depois rede
  if (event.request.url.includes('fonts.') ||
      event.request.url.includes('cdn.') ||
      event.request.url.includes('jsdelivr.')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return response;
        }).catch(() => new Response('', { status: 503 }));
      })
    );
    return;
  }

  // Para arquivos do app: Cache First
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Fallback offline: retorna o index.html
        return caches.match('./index.html');
      });
    })
  );
});
