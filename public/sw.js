if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const r=e=>n(e,t),o={module:{uri:t},exports:a,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-82773b5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/7yIHIPOBM0ve-C3pYql0k/_buildManifest.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/7yIHIPOBM0ve-C3pYql0k/_middlewareManifest.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/7yIHIPOBM0ve-C3pYql0k/_ssgManifest.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/128.6a30a279781008ce.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/153-fd036d89af2afd07.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/184-d91a1252588f7c33.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/220.1c785b95b47f4b06.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/244.ec40fb8f32c93398.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/316-470db32ddca44331.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/477.2af5b5e56c03fa51.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/49e4cfa8-08b8971597433ca9.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/553-8f0e9853a4acce04.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/608-1110224d47ac8898.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/61-8a418f01854181c3.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/614.f5e30152c49daf51.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/757.68548af3d39f151b.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/892.5b1f91863e64ec74.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/903-ef204912fde24d49.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/9b9493a3-6cdc3c98568f3d01.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/framework-da92e90c26c4c2e3.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/main-5fa7b6102a444f16.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/%5Busername%5D/%5Bpublic_id%5D-f2f787c5ed36e904.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/_app-8b36113c1b7fc787.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/app-5114b762d68dac4f.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/archived-ea5cd342b78ecfd6.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/incomplete-9ac58ec333a6cceb.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/index-e5baff34b0e897cc.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/log-in-4143c1e79b90f8b3.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/p/%5Btitle%5D-90f06dd8a151a702.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/sign-up-541709baca19309e.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/pages/u/%5Buser_username%5D-8814193dcd8a9549.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/chunks/webpack-d8a02c30c311cadb.js",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/_next/static/css/18404ec8d346fed9.css",revision:"7yIHIPOBM0ve-C3pYql0k"},{url:"/favicon.ico",revision:"9dfc35ba2130726fa3e1e48dd97fe9f0"},{url:"/icon.png",revision:"495fc3a7f4a0df35c4497f9111f8ecf1"},{url:"/icons/icon-128x128.png",revision:"bb0ca1944aab5cd553017fe246a43f5d"},{url:"/icons/icon-144x144.png",revision:"b08004c71f7068e18cc12a23b302f47a"},{url:"/icons/icon-152x152.png",revision:"b04141bedcaa0db400be4ce237248a65"},{url:"/icons/icon-192x192.png",revision:"f9667a96b46c3a4f2847c1a8641848ac"},{url:"/icons/icon-384x384.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-512x512.png",revision:"7252a12809f8e9db181b58bade14576d"},{url:"/icons/icon-72x72.png",revision:"f0067a9a1d02f8b9702d2ecad45455e1"},{url:"/icons/icon-96x96.png",revision:"33cf274546b756fdfc6c40f28edfc264"},{url:"/images/desktop_app-page.png",revision:"f5959fe81d6c03c380148ec7d2730a42"},{url:"/images/icon.jpg",revision:"fbe902a436f9eb03fe35f261c7d997dc"},{url:"/images/tasks-card_app-page.png",revision:"217152c1db4f037de909c618349554b9"},{url:"/manifest.json",revision:"94f9506862b9985cefff87803b34a561"},{url:"/robots.txt",revision:"e23f14837e70b3b55235bb9c1ef9a4df"},{url:"/sitemap-0.xml",revision:"ec923e8e3ec43c27365e44d29ae47b3c"},{url:"/sitemap.xml",revision:"8495c97d0c4443ec280cb216ba52882c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
