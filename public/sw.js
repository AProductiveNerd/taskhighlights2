if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return i[s]||(e=new Promise((async e=>{if("document"in self){const i=document.createElement("script");i.src=s,document.head.appendChild(i),i.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!i[s])throw new Error(`Module ${s} didn’t register its module`);return i[s]}))},e=(e,i)=>{Promise.all(e.map(s)).then((s=>i(1===s.length?s[0]:s)))},i={require:Promise.resolve(e)};self.define=(e,c,n)=>{i[e]||(i[e]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+e.slice(1)};return Promise.all(c.map((e=>{switch(e){case"exports":return i;case"module":return t;default:return s(e)}}))).then((s=>{const e=n(...s);return i.default||(i.default=e),i}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/SLsQZ_gbscP-8RiZzutFW/_buildManifest.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/SLsQZ_gbscP-8RiZzutFW/_ssgManifest.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/181.e8a45c26b20908999ab7.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/218.d2b5f1e153cdf861e16d.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/226.d58d1c6fb8609988c274.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/24-4801fb15c4ed96101609.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/314-89a56ef51c171fde95cc.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/44.2fb2ce381759641d830c.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/444.3dbb64bbf1552f0922d2.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/457-60ba125ab02be5448d55.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/49-94f0e517f6465963fea2.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/49e4cfa8-a334c89bc8f70ee14a6e.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/509.68ce7a7d2c87b82c7676.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/61-6e2d1835810334eddc55.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/62.a8062e96a444c238891b.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/695.df60b30cfcde1d2c9de9.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/705-ad3c728e29843feca6a0.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/73.de5a23629909cba43890.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/734-5130587b4b4cf2acd706.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/781.0605a7efe0281a2fe442.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/832.e56c8816837d563e155d.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/882-0ebf96a06711f76dac1e.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/973-9f645efdc72220a095e1.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/990-11f0d8978b2679941a01.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/9b9493a3-a6b9ab25fc9ddd7f146a.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/framework-54a34080d01b84667903.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/main-c997a785adc6b00b6289.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/%5Busername%5D/%5Bpublic_id%5D-a9bfc8ed3dc7180d8812.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/_app-33b350d69147546ec995.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/app-28147e73b9d8a79eaa88.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/archived-8a56caba5d7b1b06d249.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/habits-feb491fcec760708a2d9.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/incomplete-1bf5f9b7c6db5e27ec35.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/index-03c86c7960faeb459369.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/log-in-bdc894db6bd09eb9fd13.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/p/%5Btitle%5D-5a6570a2d69698b30f59.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/sign-up-448a67638f1fba1e9ca5.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/templates-d1a9d1e2147dfde13c73.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/pages/u/%5Buser_username%5D-62e18a0ab65bfcd95fe7.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/chunks/webpack-85abc9e61e714e4804ca.js",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/_next/static/css/262e54adbe96cc313566.css",revision:"SLsQZ_gbscP-8RiZzutFW"},{url:"/favicon.ico",revision:"9dfc35ba2130726fa3e1e48dd97fe9f0"},{url:"/icon.png",revision:"495fc3a7f4a0df35c4497f9111f8ecf1"},{url:"/icons/icon-128x128.png",revision:"bb0ca1944aab5cd553017fe246a43f5d"},{url:"/icons/icon-144x144.png",revision:"b08004c71f7068e18cc12a23b302f47a"},{url:"/icons/icon-152x152.png",revision:"b04141bedcaa0db400be4ce237248a65"},{url:"/icons/icon-192x192.png",revision:"f9667a96b46c3a4f2847c1a8641848ac"},{url:"/icons/icon-384x384.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-512x512.png",revision:"7252a12809f8e9db181b58bade14576d"},{url:"/icons/icon-72x72.png",revision:"f0067a9a1d02f8b9702d2ecad45455e1"},{url:"/icons/icon-96x96.png",revision:"33cf274546b756fdfc6c40f28edfc264"},{url:"/images/desktop_app-page.png",revision:"f5959fe81d6c03c380148ec7d2730a42"},{url:"/images/icon.jpg",revision:"fbe902a436f9eb03fe35f261c7d997dc"},{url:"/images/tasks-card_app-page.png",revision:"217152c1db4f037de909c618349554b9"},{url:"/manifest.json",revision:"94f9506862b9985cefff87803b34a561"},{url:"/robots.txt",revision:"ac721ddcaee8cb61a8a9942da0e868d6"},{url:"/sitemap.xml",revision:"d0cce7c968874f63e611ef5b0fb6fb20"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:i,state:c})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
