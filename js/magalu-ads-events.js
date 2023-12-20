!function(){"use strict";var t,e,n,r,s,o,a,i;!function(t){t.SDK="magalu.ads.ready",t.SDK_COLLECTOR="magalu.ads.collector.ready",t.SDK_EVENTS="magalu.ads.events.ready"}(t||(t={})),function(t){t.SPONSORED_PRODUCT="SPONSORED_PRODUCT",t.SPONSORED_BANNER="SPONSORED_BANNER"}(e||(e={})),function(t){t.VIEW="VIEW",t.IMPRESSION="IMPRESSION",t.CLICK="CLICK"}(n||(n={})),function(t){t.VIEW="ads-view-event",t.CLICK="ads-click-event",t.IMPRESSION="ads-impression-event",t.DISABLE_EVENT="ads-disable-event",t.DISABLE_PREVENT="ads-disable-prevent"}(r||(r={})),function(t){t.MUSTACHE="mustache",t.HANDLEBARS="handlebars"}(s||(s={})),function(t){t.BEFORE_BEGIN="beforebegin",t.AFTER_BEGIN="afterbegin",t.BEFORE_END="beforeend",t.AFTER_END="afterend"}(o||(o={})),function(t){t.MSITE="MSITE",t.WEB="WEB"}(a||(a={})),function(t){t[t.NOT_FOUND=404]="NOT_FOUND",t[t.OK=200]="OK"}(i||(i={}));var c=new class{observe(t,e){t.addEventListener("mousedown",e)}observeClick(t,e){t.addEventListener("click",e)}getTargets(t){return t.hasAttribute(r.CLICK)?[t]:Array.from(t.querySelectorAll(`[${r.CLICK}]`)||[])}};class u{constructor(){this.timeout=1e3}start(t){this.timerId=setTimeout((()=>{t(),this.timerId=null}),this.timeout)}stop(){clearTimeout(this.timerId),this.timerId=null}}class d{constructor(){this.timer=new u,this.ADS_VIEW_PERCENT=.5}observe(t,e){const n=new IntersectionObserver((t=>{t.forEach((t=>{return n=this,r=void 0,o=function*(){t.isIntersecting?this.timer.start((()=>e(t))):this.timer.stop()},new((s=void 0)||(s=Promise))((function(t,e){function a(t){try{c(o.next(t))}catch(t){e(t)}}function i(t){try{c(o.throw(t))}catch(t){e(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof s?n:new s((function(t){t(n)}))).then(a,i)}c((o=o.apply(n,r||[])).next())}));var n,r,s,o}))}),{root:null,threshold:this.ADS_VIEW_PERCENT});return n.observe(t),n}getTargets(t){return t.hasAttribute(r.VIEW)?[t]:Array.from(t.querySelectorAll(`[${r.VIEW}]`)||[])}}var l=new d,h=new class{constructor(){this.observers=[]}notify(t){this.observers.forEach((e=>e(t)))}subscribe(t){this.observers.push(t)}};const v=(t,e=!0)=>{try{const n=null==t?void 0:t.match(/(\d{5})-?(\d{3})/i);return n&&n.length>2?e?`${n[1]}-${n[2]}`:`${n[1]}${n[2]}`:""}catch(t){return""}};var I;!function(t){t.CLICK="/api/v1/metric/click",t.IMPRESSION="/api/v1/metric/impression",t.VIEW="/api/v1/metric/view"}(I||(I={}));const f=(t,e,r,s)=>{return o=void 0,a=void 0,c=function*(){try{if(e){const o=(t=>{switch(t){case n.CLICK:return I.CLICK;case n.IMPRESSION:return I.IMPRESSION;case n.VIEW:return I.VIEW;default:return"/"}})(r),a=`https://ads-collector.luizalabs.com${o}`,i=((t,e,r,s)=>{const o={adId:r.adId,campaignId:r.campaignId,sku:r.sku,sellerId:r.sellerId,category:r.category,subCategory:r.subCategory,brand:r.brand,gender:r.gender||""};let a={adRequestId:r.adRequestId,adResponseId:r.adResponseId,adType:null==r?void 0:r.type,publisherId:null==r?void 0:r.publisherId,channel:e.channel,page:e.page,placement:e.placement||s.name,user:{id:e.userId,navigationId:e.navigationId||e.userTrackId||e.userId,zipcode:v(e.zipcode)}};return t===n.CLICK?a=Object.assign(Object.assign({},a),o):a.ads=[o],a})(r,t,e,s);yield fetch(a,{method:"POST",body:JSON.stringify(i),headers:{"Content-type":"application/json"}})}}catch(t){console.error("magaluAds:sendEvent",t)}},new((i=void 0)||(i=Promise))((function(t,e){function n(t){try{s(c.next(t))}catch(t){e(t)}}function r(t){try{s(c.throw(t))}catch(t){e(t)}}function s(e){var s;e.done?t(e.value):(s=e.value,s instanceof i?s:new i((function(t){t(s)}))).then(n,r)}s((c=c.apply(o,a||[])).next())}));var o,a,i,c};var g=new class{execute(t,e,r,s){return o=this,a=void 0,c=function*(){h.notify({ad:r,target:e}),f(t,r,n.IMPRESSION,s)},new((i=void 0)||(i=Promise))((function(t,e){function n(t){try{s(c.next(t))}catch(t){e(t)}}function r(t){try{s(c.throw(t))}catch(t){e(t)}}function s(e){var s;e.done?t(e.value):(s=e.value,s instanceof i?s:new i((function(t){t(s)}))).then(n,r)}s((c=c.apply(o,a||[])).next())}));var o,a,i,c}getTargets(t){return t.getAttribute(r.IMPRESSION)?[t]:Array.from(t.querySelectorAll(`[${r.IMPRESSION}]`))}getAdFromAttributeId(t,e){const n=t.getAttribute(r.IMPRESSION);return e.find((t=>{var e;return(null===(e=t.adId)||void 0===e?void 0:e.toString())==n}))}getAdFromDataAttribute(t){const e=t.getAttribute(r.IMPRESSION);return JSON.parse(e||"")}},b=new class{constructor(){this.observers=[]}notify(t){this.observers.forEach((e=>e(t)))}subscribe(t){this.observers.push(t)}},E=new class{execute(t,e,r,s){return o=this,a=void 0,c=function*(){b.notify({ad:r,placement:s,target:e.currentTarget,clickElementTarget:e.target,event:e}),f(t,r,n.CLICK,s)},new((i=void 0)||(i=Promise))((function(t,e){function n(t){try{s(c.next(t))}catch(t){e(t)}}function r(t){try{s(c.throw(t))}catch(t){e(t)}}function s(e){var s;e.done?t(e.value):(s=e.value,s instanceof i?s:new i((function(t){t(s)}))).then(n,r)}s((c=c.apply(o,a||[])).next())}));var o,a,i,c}getAdFromAttributeId(t,e){const n=t.getAttribute(r.CLICK);return e.find((t=>{var e;return(null===(e=t.adId)||void 0===e?void 0:e.toString())==n}))}getAdFromDataAttribute(t){const e=t.getAttribute(r.CLICK);return JSON.parse(e||"")}},p=new class{constructor(){this.observers=[]}notify(t){this.observers.forEach((e=>e(t)))}subscribe(t){this.observers.push(t)}},m=new class{execute(t,e,r,s){return o=this,a=void 0,c=function*(){p.notify({ad:r,placement:s,target:e}),f(t,r,n.VIEW,s)},new((i=void 0)||(i=Promise))((function(t,e){function n(t){try{s(c.next(t))}catch(t){e(t)}}function r(t){try{s(c.throw(t))}catch(t){e(t)}}function s(e){var s;e.done?t(e.value):(s=e.value,s instanceof i?s:new i((function(t){t(s)}))).then(n,r)}s((c=c.apply(o,a||[])).next())}));var o,a,i,c}getAdFromAttributeId(t,e){const n=t.getAttribute(r.VIEW);return e.find((t=>{var e;return(null===(e=t.adId)||void 0===e?void 0:e.toString())==n}))}getAdFromDataAttribute(t){const e=t.getAttribute(r.VIEW);return JSON.parse(e||"")}},y=new class{constructor(){this.observers=[]}notify(t){this.observers.forEach((e=>e(t)))}subscribe(t){this.observers.push(t)}};const A=t=>t.map((t=>({category:t.category,subCategory:t.subCategory,brand:t.brand,gender:t.gender,adId:t.adId,campaignId:t.campaignId,sku:t.sku,sellerId:t.sellerId,productName:t.name})));const S=new class{execute(t,e,n){return r=this,s=void 0,a=function*(){this.sendImpressionEvents(t,e,n),this.initViewObservers(t,e,n),this.initClickObservers(t,e,n)},new((o=void 0)||(o=Promise))((function(t,e){function n(t){try{c(a.next(t))}catch(t){e(t)}}function i(t){try{c(a.throw(t))}catch(t){e(t)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof o?r:new o((function(t){t(r)}))).then(n,i)}c((a=a.apply(r,s||[])).next())}));var r,s,o,a}sendImpressionEvents(t,e,n){const r=g.getTargets(e),s=t.matchReason||"",o=t.adsRequestedCount||0,a=t.adsReturnedCount||0,i=[];let c,u,d;r.length>0&&r.forEach(((e,r)=>{let s;s=n.length>0?g.getAdFromAttributeId(e,n):g.getAdFromDataAttribute(e),0===r&&(c=s.adRequestId,u=s.adResponseId,d=s.type),i.push(s),g.execute(t,e,s,{})}));const l=this.buildMetricProps(c,u,d,s,o,a);((t,e,n)=>{var r,s,o,a;r=void 0,s=void 0,a=function*(){try{const r={adRequestId:n.adRequestId,adResponseId:n.adResponseId,adType:n.adType,adsRequestedCount:n.adsRequestedCount,adsReturnedCount:n.adsReturnedCount,publisherId:t.publisherId,channel:t.channel,page:t.page,ads:A(e),zipCode:v(t.zipcode,!1),adsMatchReason:n.matchReason};((t,e)=>{switch(e.page){case"SHOWCASE":t.referenceProduct={sku:e.sku,name:e.name,sellerId:e.seller,category:e.category,subCategory:e.subCategory,brand:e.brand,gender:e.genders[0]||""};break;case"SEARCH":e.searchTerm?t.searchTerm=e.searchTerm:e.pageUri&&(t.pageUri=e.pageUri)}})(r,t);const s="https://ads-collector.luizalabs.com/api/v1/fillrate";yield fetch(s,{method:"POST",body:JSON.stringify(r),headers:{"Content-type":"application/json"}})}catch(t){y.notify({error:t})}},new((o=void 0)||(o=Promise))((function(t,e){function n(t){try{c(a.next(t))}catch(t){e(t)}}function i(t){try{c(a.throw(t))}catch(t){e(t)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof o?r:new o((function(t){t(r)}))).then(n,i)}c((a=a.apply(r,s||[])).next())}))})(t,i,l)}buildMetricProps(t,e,n,r,s,o){return{adRequestId:t,adResponseId:e,adType:n,matchReason:r,adsRequestedCount:s,adsReturnedCount:o}}initViewObservers(t,e,n){l.getTargets(e).forEach((e=>{const r=(new d).observe(e,(e=>{let s;s=n.length>0?m.getAdFromAttributeId(e.target,n):m.getAdFromDataAttribute(e.target),m.execute(t,e.target,s,{}),r.unobserve(e.target)}))}))}initClickObservers(t,e,n){const s=c.getTargets(e),o=e=>{const s=void 0!==e.buttons&&e.buttons<2;if(!e.target.hasAttribute(r.DISABLE_EVENT)){const o=e.currentTarget.hasAttribute(r.DISABLE_PREVENT);let a;if(a=n.length>0?E.getAdFromAttributeId(e.currentTarget,n):E.getAdFromDataAttribute(e.currentTarget),E.execute(t,e,a,{}),!o&&s){const t=e.currentTarget.getAttribute("redirect");t&&setTimeout((()=>{window.location.href=t}),800)}}},a=t=>{const e=t.target.hasAttribute(r.DISABLE_PREVENT),n=t.target.hasAttribute(r.DISABLE_EVENT);e||n||t.preventDefault()};s.forEach((t=>{c.observeClick(t,a),c.observe(t,o)}))}};window.magaluAdsEvents=new class{init(t,e){return n=this,r=void 0,o=function*(){try{const n=t.target||window.document.body;S.execute(t,n,e||[])}catch(t){y.notify({error:t})}},new((s=void 0)||(s=Promise))((function(t,e){function a(t){try{c(o.next(t))}catch(t){e(t)}}function i(t){try{c(o.throw(t))}catch(t){e(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof s?n:new s((function(t){t(n)}))).then(a,i)}c((o=o.apply(n,r||[])).next())}));var n,r,s,o}onError(t){y.subscribe(t)}onAdView(t){p.subscribe(t)}onAdClick(t){b.subscribe(t)}},window.document.dispatchEvent(new CustomEvent(t.SDK_EVENTS))}();