if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let b={};const f=e=>c(e,d),a={module:{uri:d},exports:b,require:f};i[d]=Promise.all(s.map((e=>a[e]||f(e)))).then((e=>(r(...e),b)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/08/12/hello-world/index.html",revision:"4cb20df4f28826d5e98ffe29d2b66018"},{url:"404.html",revision:"82ba8cea922bf8da86cbb1d89f2a3d33"},{url:"archives/2023/08/index.html",revision:"c2d9f47ec99808554f5a05918ebc62f9"},{url:"archives/2023/index.html",revision:"907e9a6b166115bb7fb0c1c7f6182140"},{url:"archives/index.html",revision:"a24f4bb132dd540e01ec90d1f5f54599"},{url:"categories/index.html",revision:"8c4c23b1f4db585809c09b9a7b60444e"},{url:"css/big-counter.css",revision:"51386cceb86c0515790b421686af1ff4"},{url:"css/center-radar.css",revision:"09e202ae276670ba23b0b3807a4f4424"},{url:"css/center-simple.css",revision:"c4197b0b9bd206db672a510a338c8c86"},{url:"css/corner-indicator.css",revision:"ad2694d651443ccc947afbee8b68b331"},{url:"css/fill-left.css",revision:"696df70e481cbbc2f0c32333d26c4151"},{url:"css/index.css",revision:"479034607c64d1532ea46f1adda3fe55"},{url:"css/loading-bar.css",revision:"957e800e23f2414064387606f21c70d2"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/steam.jpg",revision:"b977ae85b188cdc36262672e1912729c"},{url:"img/steamgif.gif",revision:"9153363475cbacb4d22b822955a85f95"},{url:"img/wallpaper1.gif",revision:"05939b9bf52b3e672c89ebd9beac7369"},{url:"img/watchDogs.png",revision:"9be33b6dc1b30811641f23e87f14c536"},{url:"index.html",revision:"907abc27b802223a7becd9e3fab09437"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"cac6509b776a62cab06cf622a86206fe"},{url:"tags/index.html",revision:"8da31c25de80d22f7e83c510a5683c4c"}],{}),e.registerRoute(/^https:\/\/cdn\\arconsole.github\.io\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
