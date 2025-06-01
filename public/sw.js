self.addEventListener('install', () => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('Service Worker activado');
});

self.addEventListener('fetch', () => {
  // Puedes implementar cacheo aquí si quieres
});
