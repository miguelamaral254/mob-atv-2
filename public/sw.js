// eslint-disable-next-line no-unused-vars
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
  });
  
  // eslint-disable-next-line no-unused-vars
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
  });
  