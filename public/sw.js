self.addEventListener("install", (event)=>{
	console.log("[Service Worker] Installing Service Worker");
});

self.addEventListener("activate", (event)=>{
	console.log("[Service Worker] Activating Service Worker");
});