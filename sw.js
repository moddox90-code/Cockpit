// Minimaler Service Worker: nötig, damit Android/Silk das Wandpanel als App im Vollbild installiert.
// Er speichert nichts zwischen – Homey-Daten kommen immer frisch.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
