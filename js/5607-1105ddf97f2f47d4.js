"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5607],{55607:function(a,b,c){c.d(b,{wk:function(){return bq},JJ:function(){return br},E_:function(){return bt},jS:function(){return bu},It:function(){return bv},Yd:function(){return ai},Bj:function(){return bw},By:function(){return bx},X7:function(){return by},eG:function(){return cp},ac:function(){return d},o2:function(){return g},P2:function(){return bT},ey:function(){return p},kC:function(){return r},"_V":function(){return t},H6:function(){return v},ZF:function(){return x},"h$":function(){return z},VD:function(){return a5},wz:function(){return bl},Ir:function(){return bm},nS:function(){return b8},U8:function(){return b7},w6:function(){return G},Q8:function(){return I},j1:function(){return M},ej:function(){return a7},Jz:function(){return S},xT:function(){return aZ},l:function(){return ci},HV:function(){return cd},b7:function(){return cf},V9:function(){return $},dD:function(){return aa},uR:function(){return ac},Ol:function(){return bi},mZ:function(){return ae},p5:function(){return aS},yC:function(){return ak},Fv:function(){return am},I8:function(){return C},UX:function(){return E},pb:function(){return cb},"$f":function(){return ao},wG:function(){return as},zA:function(){return bn},Z8:function(){return cg},vu:function(){return bj},iz:function(){return bo},cP:function(){return j},il:function(){return bp},ds:function(){return Y},LZ:function(){return aR},aH:function(){return av},"$4":function(){return cc},ER:function(){return aA},nJ:function(){return ba},oP:function(){return aC},dY:function(){return aK},Z6:function(){return a4},BC:function(){return aM},d8:function(){return a8},Qf:function(){return bk},RY:function(){return ch},oF:function(){return m},EB:function(){return aN},vS:function(){return aP},Zq:function(){return bX},Ld:function(){return bZ},tI:function(){return cw},fP:function(){return cu},Gz:function(){return cz},uY:function(){return cx},Pc:function(){return cy},er:function(){return Q}});var d=function(a){var b=a.topTermsLabel,c=a.topTermsList,d=a.showTopTerms;return{topTermsData:{label:b,list:c.map(function(a,b){return{index:b,term:a}}),shouldDisplay:d}}},e=c(85942),f=c(76854),g=function(a,b){if(!b)return a;var c=a.split("?"),d=(0,f.Z)(c,2),g=d[0],h=d[1],i=void 0===h?"":h,j=[].concat((0,e.Z)(i.split("&")),["seller_id=".concat(b)]).filter(Boolean).join("&");return"".concat(g,"?").concat(j)},h=c(7896),i=c(59740),j=function(a){if(a)return/^(http|https|\/)/.test(a)?a:"/".concat(a)},k=c(77309),l=c.n(k);l().extend({".":"-"}),l().extend({"/":"-"}),l().extend({"\\":"-"}),l().extend({"%":""}),l().extend({"&":"-"});var m=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"",b=!(arguments.length>1)|| void 0===arguments[1]||arguments[1];return l()(a,{lower:b,remove:/[^A-Za-z0-9_\-\s]/g,replacement:"-"}).replace(/-+/g,"-")},n=["description","id","label","meta","subcategories"],o=function a(b,c){if(!b)return{};if(!c)return b;var d,e=b.description,f=b.id,g=b.label,k=b.meta,l=b.subcategories,o=(0,i.Z)(b,n),p=(null==k?void 0:k.canonical)||"/".concat(m(e||g),"/").concat(m((null==c?void 0:c.description)||(null==c?void 0:c.label)),"/s/").concat(null==c?void 0:null==(d=c.id)?void 0:d.toLowerCase(),"/").concat(null==f?void 0:f.toLowerCase(),"/");return(0,h.Z)({},o,{description:e,id:f,label:g,meta:k,path:j(p),subcategories:null==l?void 0:l.map(function(b){return a(b,c)})})},p=o,q=function(a){return"string"!=typeof a?"":a.toLowerCase().charAt(0).toUpperCase()+a.slice(1)},r=q,s=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.type,c=void 0===b?"default":b,d=a.cartUrl,e=a.next,f=d[c]||d.default,g=e?"/?next=".concat(e,"&origin=magazineluiza"):"";window.location.replace("".concat(f).concat(g))},t=s,u=function(a,b){if(a&&b)return"".concat(a,"/").concat(b)},v=u,w=function(a){return"string"==typeof a?a.replace(/<br\s?\/?>/gi," ").replace(/(<.*?>|\s(?=\s))/g,"").trim():a},x=w,y=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return function(a){var c=a.data,d=a.source;return b.reduce(function(a,b){if(Array.isArray(b)){var c=(0,f.Z)(b,2),e=c[0],g=c[1];return e((0,h.Z)({data:a,source:d},g))}return b({data:a,source:d})},c)}},z=y,A=c(56666),B=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{};return Object.entries(a).reduce(function(a,c){var d=(0,f.Z)(c,2),e=d[0],g=d[1];return(0,h.Z)({},a,(0,A.Z)({},b[e]||e,g))},{})},C=B,D=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{};return Object.entries(a).reduce(function(a,c){var d=(0,f.Z)(c,2),e=d[0],g=d[1];return b[e]?a:(0,h.Z)({},a,(0,A.Z)({},e,g))},{})},E=D,F=function(a){if(void 0!==a)return a&&(!Array.isArray(a)||a.length)?"verdadeiro":"falso"},G=F,H=function(a){return a&&Array.isArray(a)&&a.length&&a.map(function(a){return a.value}).filter(Boolean).join("|")||void 0},I=H,J=["label","type","orientation"],K=[{label:"Relev\xe2ncia",orientation:"desc",type:"score"},{label:"Mais Vendidos",orientation:"desc",type:"soldQuantity"},{label:"Mais Bem Avaliados",orientation:"desc",type:"review"},{label:"Lan\xe7amento",orientation:"desc",type:"releaseDate"},{label:"Menor Pre\xe7o",orientation:"asc",type:"price"},{label:"Maior Pre\xe7o",orientation:"desc",type:"price"}],L=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.label,c=a.type,d=void 0===c?"score":c,e=a.orientation,f=void 0===e?"desc":e,g=(0,i.Z)(a,J);return b?(0,h.Z)({label:b,orientation:f,type:d},g):K.find(function(a){return a.type===d&&a.orientation===f})||{}},M=L,N=c(86522),O=("undefined"==typeof window?"undefined":(0,N.Z)(window))==="object",P=!O,Q={onClient:O,onServer:P},R=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};if(!Q.onServer){var b=window.location.pathname,c=window.location.search.slice(1),d=new URLSearchParams(c);Object.entries(a).forEach(function(a){d.set.apply(d,(0,e.Z)(a))});var f=d.toString();return"".concat(b).concat(f?"?".concat(f):"")}},S=R,T=function(a){if(!a)return null;var b=a;return a.endsWith("/")||(b="".concat(b,"/")),a.startsWith("/")||(b="/".concat(b)),b},U=T,V=["deeplink"],W=function(a){var b,c=null==a?void 0:null==(b=a.split("/q/a/"))?void 0:b[1];return c?c.replace("/",""):null},X=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.deeplink,c=(0,i.Z)(a,V),d=null;if(b&&(d=W(U(b))),Object.keys(c).length>0){var e=U(Object.keys(c)[0]);d=W(e)}return d?(0,h.Z)({},c,{questionVariationId:d}):(0,h.Z)({},c,{deeplink:b})},Y=X,Z=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return a.find(function(a){return["store_pickup","pickup_point"].includes(a.type)})},$=Z,_=function(a,b){var c,d;return(null==(c=Object.keys(a))?void 0:c.length)&&(null==(d=Object.keys(b))?void 0:d.length)?Object.entries(b).some(function(b){var c=(0,f.Z)(b,2),d=c[0],e=c[1];return a[d]===e}):a===b},aa=_,ab=function(a){return!!(null==a?void 0:a.length)&&a.find(function(a){return!a.selected})},ac=ab,ad=function(a){if(a&&(null==a||!a.locationError)&&(null==a?void 0:a.zipCodeCity)&&(null==a?void 0:a.zipCodeState))return"".concat(m(a.zipCodeCity),":").concat(a.zipCodeState.toUpperCase())},ae=ad,af=c(69413),ag=c.n(af),ah=function(a){var b=a.publicRuntimeConfig,c=a.serverRuntimeConfig,d=(null==b?void 0:b.logLevel)||(null==c?void 0:c.logLevel)||"info";return ag()({browser:{asObject:!1},level:d,name:"mixer"})},ai=ah,aj=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[],b=arguments.length>1?arguments[1]:void 0;return a.reduce(function(a,b){return a.concat(b)},[]).map(function(a){return null==a?void 0:a[b]})},ak=aj,al=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"",b=a;if("string"!=typeof b)return null;var c={A:/[\xC0-\xC6]/g,a:/[\xE0-\xE6]/g,C:/\xC7/g,c:/\xE7/g,E:/[\xC8-\xCB]/g,e:/[\xE8-\xEB]/g,I:/[\xCC-\xCF]/g,i:/[\xEC-\xEF]/g,N:/\xD1/g,n:/\xF1/g,O:/[\xD2-\xD6]/g,o:/[\xF2-\xF6]/g,U:/[\xD9-\xDC]/g,u:/[\xF9-\xFC]/g};return Object.keys(c).forEach(function(a){var d=c[a];b=b.replace(d,a).toLowerCase()}),b},am=al,an=function(a){if(a)try{if(/^(http|https)/.test(a))return new URL(a).pathname;return a.startsWith("/")?a:"/".concat(a)}catch(b){return a}},ao=an,ap=["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],aq=function(a){return"Invalid Date"!==new Date(a).toString()&&!Number.isNaN(Number(new Date(a)))},ar=function(a){if(a&&aq(a)){var b=new Date(a),c=ap[b.getMonth()],d=c.slice(0,3),e=b.getFullYear(),f=Number(e.toString().slice(-2)),g=b.getUTCDate();return{day:g,getFullDate:"".concat(g," de ").concat(c," de ").concat(e),getMonthYear:"".concat(c," ").concat(e),getShortDate:"".concat(g," ").concat(d," ").concat(f),getShortMonthYear:"".concat(d," ").concat(f),month:c,year:e}}return console.error("\n    The provided value does not match with a valid date time\n    please make sure you have the correct value.\n\n    How to use:\n    - parseDateTime('2022-10-24T13:52:47.000Z')\n  "),{}},as=ar,at=c(2784),au=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"highlight",c=a.trim(),d=c.startsWith('"');return c.split('"').filter(Boolean).map(function(a,c){return!(c%2)===d?at.createElement("span",{key:a,"data-testid":b},a):a})},av=au,aw=275,ax=function(a){return a?a.trim().split(/\s+/).length:0},ay=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=b.wpm,d=void 0===c?aw:c;return{minutes:Math.ceil(parseFloat((a/d).toFixed(2))),wpm:d}},az=function(a){var b=ax(a);return(0,h.Z)({count:b},ay(b))},aA=az,aB=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.imgHeight,c=a.src,d=a.imgWidth;if(c)return c.replace("{w}",d).replace("{h}",b)},aC=aB,aD=c(45455),aE=c.n(aD),aF=c(5632),aG=c.n(aF),aH=function(a){window.location.href=a.startsWith("/")||a.startsWith("http")?a:"/".concat(a)},aI=function(a,b){return aE()(b)?!aE()(a)&&aE()(b)?[a]:[]:[a,b]},aJ=function(a){var b=a.path,c=a.spa,d=a.refresh,f=a.as,g=void 0===f?void 0:f,h=a.options,i=void 0===h?{}:h,j=b||"".concat(window.location.pathname).concat(window.location.search);if(c||d)try{aG().push.apply(aG(),[j].concat((0,e.Z)(aI(g,i))))}catch(k){aH(j)}else aH(j)},aK=aJ,aL=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:0;setTimeout(function(){var c,d=null==a?void 0:a.current,e=(null==d?void 0:null==(c=d.getBoundingClientRect())?void 0:c.top)+window.pageYOffset+b;window.scrollTo({behavior:"smooth",top:e})},100)},aM=aL;l().extend({".":"+"}),l().extend({"/":"+"}),l().extend({"\\":"+"}),l().extend({"%":""});var aN=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"",b=!(arguments.length>1)|| void 0===arguments[1]||arguments[1];return l()(a,{lower:b,replacement:"+",strict:!0})},aO=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"",b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:0;return 3===b?"".concat(a.substr(0,b),"..."):a&&a.length>=b?"".concat(a.substr(0,b-3),"..."):a},aP=aO,aQ=function(a){var b=a.records,c=a.label,d=a.limit,e=a.maxedLabel,f=null==b?void 0:b.toLocaleString("pt-BR"),g=b===(void 0===d?1e4:d)&&(void 0===e?"+ de ":e).concat(f);return"".concat(g||f," ").concat(c)},aR=aQ,aS={consorcioluiza:{icon:"https://wx.mlcdn.com.br/site/shared/sellers/logo-consorcio-magalu-vertical-laranja.png"},"epocacosmeticos-integra":{icon:"https://wx.mlcdn.com.br/site/shared/sellers/epoca.png"},kabum:{icon:"https://wx.mlcdn.com.br/site/shared/sellers/kabum.png"},netshoes:{icon:"https://wx.mlcdn.com.br/site/shared/sellers/netshoes.png"},zattini:{icon:"https://wx.mlcdn.com.br/site/shared/sellers/zattini.png"}},aT=864e5,aU=new Intl.RelativeTimeFormat("pt-BR",{numeric:"always"}),aV=new Intl.RelativeTimeFormat("pt-BR",{numeric:"auto"}),aW=new Intl.DateTimeFormat("pt-BR",{timeStyle:"short"}),aX=new Intl.DateTimeFormat("pt-BR",{dateStyle:"short"}),aY=function(a){var b=new Date,c=new Date(a),d=new Date(b.getFullYear(),b.getMonth(),b.getDate()),e=new Date(c.getFullYear(),c.getMonth(),c.getDate()),f=e.getTime()-d.getTime();return Math.round(f/aT)},aZ=function(a){var b=aY(a);if(-1===b){var c=aV.format(b,"day");return c.charAt(0).toUpperCase()+c.slice(1)}if(b> -7&&b< -1)return aU.format(b,"day");var d=new Date(a);return 0===b?aW.format(d):aX.format(d)},a$=c(20042),a_=c.n(a$),a0=["h1","h2","h3","h4","h5","h6","p","br","hr","acronym","abbr","address","b","bdi","bdo","big","blockquote","center","cite","code","del","dfn","em","font","i","ins","kbd","mark","meter","pre","progress","q","rp","rt","ruby","s","samp","small","strike","strong","sub","sup","template","time","tt","u","var","wbr","a","div","span"],a1=["frame","frameset","noframes","iframe","img","map","area","canvas","figcaption","figure","picture","svg","path","audio","source","track","video","head","meta","base","basefont","style","script","noscript","applet","embed","object","param","link","table","caption","th","tr","td","thead","tbody","tfoot","col","colgroup","ul","ol","li","dir","dl","dt","dd","header","footer","main","section","article","aside","details","dialog","summary","data","form","input","textarea","button","select","optgroup","option","label","fieldset","legend","datalist","output"];function a2(a,b){return a.filter(function(a){return b.includes(a)})}var a3=function a(b,c){var d=(0,h.Z)({},a.settings,c);d.rawText?d.deniedTags=[].concat((0,e.Z)(a0),(0,e.Z)(a1)):d.deniedTags=(0,e.Z)(new Set([].concat((0,e.Z)(a.settings.deniedTags),(0,e.Z)(d.deniedTags))));var f=function(){try{return a_().parse(b)}catch(a){return console.error("\n        An error ocurred while sanitizing an html, please make\n        sure you provide a valid html string.\n\n        How to use:\n        - sanitizeHtml(htmlString, { ...options })\n\n        Error message:\n        - ".concat(a,"\n      ")),null}}();return f?(!function(a){a.querySelectorAll(a2(d.deniedTags,a0).join(", ")).forEach(function(a){d.preserveContent?a.replaceWith(a.textContent.concat(" ")):a.remove()})}(f),!function(a){a.querySelectorAll(a2(d.deniedTags,a1).join(", ")).forEach(function(a){a.remove()})}(f),f.innerHTML.trim()):f};a3.settings={allowedTags:[],deniedTags:["meta","link","script","style"],preserveContent:!0,rawText:!1};var a4=a3,a5={ACCEPT_POLICY:"cookie_accept_policy",GA_ADD_TO_CART:"ga_cookie_add",GATEKEEPER_EXHIBITION:"gatekeeper_exhibition",ML2_SID:"ml2_sid",ML2_SID_C:"ml2_sid_c",PMD_SHAREDBAG:"pmd_sharedbag",REJECT_ZIPCODE_POPUP:"cookie_reject_zipcode_popup",ZIPCODE:"zipcode",ZIPCODE_CITY:"zipcode_city",ZIPCODE_LATITUDE:"zipcode_latitude",ZIPCODE_LONGITUDE:"zipcode_longitude",ZIPCODE_STATE:"zipcode_state"},a6=c(75969),a7=function(a){return new a6.Z().get(a)},a8=function(a){var b=a.domain,c=a.encode,d=a.expires,e=a.name,f=a.path,g=void 0===f?"/":f,h=a.value,i=new a6.Z,j=new Date,k=b||window.location.host;j.setFullYear(j.getFullYear()+1);var l=d||j;i.set(e,h,{domain:k,encode:c,expires:l,path:g})},a9=function(a){var b=a.cookie,c=a.index,d=a.value,e=b;return e[c]=d,e},ba=function(a,b,c){var d=new a6.Z,e={};return b&&(e.domain=b),c&&(e.path=c),d.remove(a,e)},bb=a5.ML2_SID_C,bc=a5.ZIPCODE,bd=a5.ZIPCODE_CITY,be=a5.ZIPCODE_STATE,bf=a5.ZIPCODE_LATITUDE,bg=a5.ZIPCODE_LONGITUDE,bh={networkError:"Problemas ao tentar conectar! Verifique seu acesso a internet e tente novamente.",zipCodeNotFound:"CEP n\xe3o encontrado"},bi=function(a){return{errorText:a||"",hasError:Boolean(a),labelText:"CEP",placeholder:"Digite seu cep"}},bj=function(a,b){return a&&null!==b?{error:bh.networkError,type:"integracao-api"}:null===b?{error:bh.zipCodeNotFound,type:"cep-invalido"}:{error:!1}},bk=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1?arguments[1]:void 0,c=arguments.length>2?arguments[2]:void 0,d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:{},e=d.publicRuntimeConfig,f=a7(bb),g=a.city,h=a.state,i=a.latitude,j=a.longitude,k=null==e?void 0:e.cookieDomain,l=k?k[null==c?void 0:c.site]||(null==k?void 0:k.default):null;if(f){var m=a9({cookie:f,index:"zip_code",value:b});a8({domain:l,name:bb,value:m})}b&&g&&h&&i&&j&&[{name:bc,value:b},{name:bd,value:encodeURIComponent(g)},{name:be,value:h},{name:bf,value:i},{name:bg,value:j}].forEach(function(a){var b=a.name,c=a.value;a8({domain:l,name:b,value:c})})},bl=function(a){return"slug"in a&&"delivery_magalu"===a.slug},bm=function(a){return"slug"in a&&"promotion"===a.slug},bn=function(a,b){if(!a||!Array.isArray(a)||0===a.length||!b)return" ";var c,d,e=(null==a?void 0:null==(c=a.find(function(a){return a.slug===b}))?void 0:null==(d=c.values)?void 0:d.filter(function(a){return a.selected}))||[],g=(0,f.Z)(e,2),h=g[0];return!g[1]&&h?" ".concat(h.label," "):" "},bo=function(a){var b=Number(a);return Number.isNaN(b)?1:Math.max(b,1)},bp=function(a){return Number(a)/100},bq="category",br="+",bs="filters",bt=":",bu="--",bv="---",bw="price",bx="review",by=5,bz="subcategory",bA=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:null,b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:null;return a&&b?Array.from({length:b-a+1},function(b,c){return c+a}):[]},bB=c(70314),bC=c(92070),bD=c.n(bC),bE=c(17620),bF=c.n(bE),bG=function(a){var b=a.max,c=a.min,d=a.type,e=a.value;switch(d){case bx:return c||e;case bw:return"".concat(c,":").concat(b);default:return e}},bH=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=b.max,d=b.min,f=b.type,g=b.value;return f&&(a[f]=[].concat((0,e.Z)(a[f]||[]),[bG({max:c,min:d,type:f,value:g})])),a},bI=bH,bJ=function(a){var b=(0,f.Z)(a,2),c=b[0],d=b[1];return{type:c,values:d}},bK=function(a){return Array.isArray(a)&&a.length?Object.entries(a.reduce(bI,{})).map(bJ).reduce(function(a,b){var c=b.type,d=b.values.join(bu);return c&&d?[].concat((0,e.Z)(a),["".concat(c).concat(bv).concat(d)]):a},[]).join(br):"string"==typeof a||"number"==typeof a?a:""},bL=bK,bM=["page","filters"],bN=(0,bB.default)()||{},bO=bN.publicRuntimeConfig;bO=void 0===bO?{}:bO;var bP=bO.SEO,bQ=function(a){var b=bP.noIndexQuery.split("="),c=(0,f.Z)(b,1)[0];return bF()(a,c)},bR=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[],b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:bP;if(!Array.isArray(a))return{};var c=b.maxFilterTypes,d=b.maxFilterValues,e=b.noIndexQuery,g=e.split("="),h=(0,f.Z)(g,2),i=h[0],j=h[1],k=(0,A.Z)({},i,j);return a.length>Number(c)?k:Object.values(a.reduce(bI,{})).find(function(a){return a.length>d})?k:{}},bS=function(a,b,c,d){c.page,c.filters;var e=(0,i.Z)(c,bM);if(b.includes(bs)){var f=b.split("/").findIndex(function(a){return a===":".concat(bs)||a===":?".concat(bs)}),g=a.split("/");g[f]=d;var j=new URLSearchParams((0,h.Z)({},e)).toString(),k=g.join("/").replace("//","/");return"".concat(k).concat(k.endsWith("/")?"":"/").concat(j?"?".concat(j):"")}d&&(e.filters=d);var l=new URLSearchParams((0,h.Z)({},e)).toString();return"".concat(a).concat(l?"?".concat(l):"")},bT=function(a){var b,c,d=a.max,f=a.min,g=a.query,i=a.selected,j=a.structure,k=a.type,l=a.unique,m=void 0!==l&&l,n=a.value,o=a.removeSelected,p=void 0===o||o,q=(null==j?void 0:null==(b=j.route)?void 0:null==(c=b.filters)?void 0:c.filter(function(a){return!(a.origin&&"url"===a.origin)&&!(m&&a.type===k)}))||[],r=k===bw?bD()(q,{max:d,min:f,type:k}):bD()(q,{type:k,value:n}),s=p?[].concat((0,e.Z)(q),[{max:d,min:f,type:k,value:n}]):[].concat((0,e.Z)(r),[{max:d,min:f,type:k,value:n}]),t=i&&p?r:s,u=bR(t),v=bL(t),w=j.asPath,x=j.rawPath;return bS(w,x,(0,h.Z)({},bQ(g),u),v)},bU=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[bw,bx,bq];return function(b){return!!(null==b?void 0:b.type)&&!a.includes(b.type)}},bV=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return a.filter(function(a){return null==a?void 0:a.selected}).map(function(a){return null==a?void 0:a.label}).join(", ")},bW=function(a){var b=(null==a?void 0:a.find(function(a){return a.type===bx}))||{};return Number(null==b?void 0:b.min)||0},bX=function(a,b,c){var d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:bP,e=d.noIndexQuery,g=(0,h.Z)({},c),i=e.split("=");return delete g[(0,f.Z)(i,1)[0]],bS(a,b,g)},bY=function(a){var b,c,d=a.query,e=a.structure,f=a.types,g=(null==e?void 0:null==(b=e.route)?void 0:null==(c=b.filters)?void 0:c.filter(function(a){return!(a.origin&&"url"===a.origin)&&!f.includes(a.type)}))||[],i=bL(g),j=e.asPath,k=e.rawPath;return bS(j,k,(0,h.Z)({},d),i)},bZ=function(a,b,c){var d=c.asPath,e=c.rawPath,f=c.route,g=((null==f?void 0:f.filters)||[]).filter(function(a){return"url"!==a.origin}),i=a.reduce(function(a,b){var c=b.type;return bD()(a,{type:c})},g),j=bR(i),k=bL(i);return bS(d,e,(0,h.Z)({},bQ(b),j),k)},b$=function(a){var b,c=a.filters,d=a.structure,e=a.query,f=c.find(function(a){return(null==a?void 0:a.type)===bx});if(!f)return null;var g=bW(null==d?void 0:null==(b=d.route)?void 0:b.filters),i=bA((null==f?void 0:f.min)||1,null==f?void 0:f.max).map(function(a,b){return{filterLabel:null==f?void 0:f.label,filterSlug:null==f?void 0:f.slug,hint:a!==(null==f?void 0:f.max)?"e acima":void 0,href:bT({query:e,selected:g===a,structure:d,type:null==f?void 0:f.slug,unique:!0,value:a}),label:"".concat(a),max:null==f?void 0:f.max,position:b+1,selected:g===a,slug:a,value:a}}).reverse();return(0,h.Z)({},f,{filterSelected:(null==i?void 0:i.find(function(a){return null==a?void 0:a.selected}))||{},values:i})},b_=function(a){var b=a.filters,c=a.query,d=a.removeFilters,e=a.structure,f=a.unique,g=void 0!==f&&f,i=b.filter(bU(d));return i.length>0?i.map(function(a){var b;return(0,h.Z)({},a,{filterSelected:bV(null==a?void 0:a.values),showFilterInput:(null==a?void 0:null==(b=a.values)?void 0:b.length)>15,values:null==a?void 0:a.values.map(function(b,d){return(0,h.Z)({},b,{filterLabel:null==a?void 0:a.label,filterSlug:null==a?void 0:a.slug,href:bT({query:c,selected:!!(null==b?void 0:b.selected),structure:e,type:null==a?void 0:a.slug,unique:g||(null==a?void 0:a.type)==="attribute",value:(null==b?void 0:b.id)||(null==b?void 0:b.slug)}),position:d+1})})})}):[]},b0=["values"],b1=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.allCategoriesLabel,c=void 0===b?"Todos os departamentos":b,d=a.filters,e=a.query,f=void 0===e?{}:e,g=a.structure,j=(void 0===d?[]:d).find(function(a){return(null==a?void 0:a.type)===bq});if(!j)return null;var k=j.values,l=(0,i.Z)(j,b0),m=(0,h.Z)({},l,{componentType:"hierarchical",values:[]}),n=function(a){return(0,h.Z)({},a,{values:a.values.map(function(a,b){return(0,h.Z)({},a,{position:b+1})})})};return function a(b){var d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&& void 0!==arguments[2]?arguments[2]:0;if(!d.length||(null==b?void 0:null==(p=b[0])?void 0:p.selected)||m.values.push((0,h.Z)({},d[0],{inset:1})),!(null==b?void 0:b.length))return n(m);if(!(null==b?void 0:null==(q=b[0])?void 0:q.selected)){var i,j,k=b_({filters:[(0,h.Z)({},l,{slug:(i=e)?bz:bq,values:b})],query:f,removeFilters:[],structure:g,unique:!0})[0];return m.values=m.values.concat(k.values.map((j=e,function(a){return(0,h.Z)({},a,{inset:j?2:0})}))),n(m)}if(m.values.push((0,h.Z)({},(null==d?void 0:d[0])||{label:c},{count:null,href:bY({query:(0,h.Z)({},f,{page:1}),structure:g,types:(o=e)?[bz]:[bq,bz]}),icon:"ArrowBack",inset:0})),(null==b?void 0:null==(r=b[0])?void 0:r.parent)&&d[0].id!==(null==b?void 0:null==(s=b[0])?void 0:s.parent.id)){var o,p,q,r,s,t,u=b_({filters:[(0,h.Z)({},l,{slug:bz,values:[null==b?void 0:null==(t=b[0])?void 0:t.parent]})],query:f,removeFilters:[],structure:g,unique:!0})[0];m.values=m.values.concat([(0,h.Z)({},u.values[0],{count:null,icon:"ArrowBack",inset:0})])}return a(b[0].values,b,e+1)}(k)},b2=function(a){var b,c,d,e,g,h,i,j,k=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},l="category",m="Categoria",n=(null==a?void 0:a.category)||(null==a?void 0:null==(b=a.seo)?void 0:b.category)||[],o=(0,f.Z)(n,1)[0],q=void 0===o?{}:o,r=((null==k?void 0:k.route)||{}).subCategoryId?null==a?void 0:null==(c=a.seo)?void 0:null==(d=c.category)?void 0:null==(e=d[0])?void 0:null==(g=e.subcategories)?void 0:null==(h=g[0])?void 0:h.subcategories:null==a?void 0:null==(i=a.category)?void 0:null==(j=i[0])?void 0:j.subcategories,s=r?r.map(function(a,b){var c=p(a,q);return c.href="".concat((null==k?void 0:k.basePath)||"").concat(c.path),c.position=b+1,c.filterLabel=m,c.filterSlug=l,c}):[];return{label:m,slug:l,type:l,values:s}},b3=function(a){return 100*Number(a)},b4=function(a){var b,c=a.filters,d=a.structure,e=a.query,f=c.find(function(a){return(null==a?void 0:a.type)===bw});if(!f)return null;var g,i=!!(g=null==d?void 0:null==(b=d.route)?void 0:b.filters)&& -1!==g.findIndex(function(a){return a.type===bw}),j=f.max,k=f.min,l=f.selectedMax,m=f.selectedMin,n=f.slug;return(0,h.Z)({},f,{buildHref:function(a,b){return bT({max:b3(a),min:b3(b),query:e,removeSelected:!1,selected:i,structure:d,type:n,unique:!0})},max:bp(j),min:bp(k),selected:i,selectedMax:l?bp(l):bp(j),selectedMin:m?bp(m):bp(k)})},b5=function(){var a,b,c,d,e,f=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},g=Boolean(null==f?void 0:null==(a=f.categoryFilters)?void 0:null==(b=a.values)?void 0:b.length);g&&(f.categoryFilters.position=1,f.categoryFilters.values.forEach(function(a){a.filterPosition=1}));var h=Boolean(null==f?void 0:null==(c=f.reviewFilters)?void 0:null==(d=c.values)?void 0:d.length);if(h){var i=g?2:1;f.reviewFilters.position=i,f.reviewFilters.values.forEach(function(a){a.filterPosition=i})}var j=1+Number(g)+Number(h);return(null==f?void 0:null==(e=f.attributeFilters)?void 0:e.length)&&f.attributeFilters.forEach(function(a,b){var c=b+j;a.position=c,a.values.forEach(function(a){a.filterPosition=c})}),f},b6=[bw,bx,bq],b7=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.data,c=a.filters,d=void 0===c?[]:c,f=a.customCategoryFilter,g=void 0!==f&&f,h=a.removeFilters,i=a.structure,j=void 0===i?{}:i,k=a.query,l=void 0===k?{}:k,m=a.allCategoriesLabel;return b5({attributeFilters:b_({customCategoryFilter:g,filters:d,query:l,removeFilters:[].concat(b6,(0,e.Z)(void 0===h?[]:h)),structure:j}),categoryFilters:g?b2(void 0===b?{}:b,j):b1({allCategoriesLabel:m,filters:d,query:l,structure:j}),priceFilters:b4({filters:d,query:l,structure:j}),reviewFilters:b$({customCategoryFilter:g,filters:d,query:l,structure:j})})},b8=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return a.filter(function(a,b,c){return c.findIndex(function(b){return(null==b?void 0:b.type)===a.type})===b}).length},b9={carousel:"350x300",horizontal:"229x225","horizontal-highlight":"430x300",thumbnail:"77x77"},ca=["horizontal-highlight","carousel"],cb=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[],b=arguments.length>1?arguments[1]:void 0,c=(0,bB.default)().publicRuntimeConfig;return a.map(function(a){var d=a.posts;return(void 0===d?[]:d).map(function(a,d){var e,f,g=a.id,h=a.title,i=a.subtitle,j=a.image,k=a.content,l=a.slug,m=ca.includes(b)&&d?b9.thumbnail:b9[b]||b9.thumbnail,n="".concat(null==j?void 0:null==(e=j.urls)?void 0:e.default,"?ims=").concat(m);return{html:void 0===k?"":k,id:g,image:n,subtitle:i,title:void 0===h?"":h,type:"article",url:"".concat(null==c?void 0:null==(f=c.blog)?void 0:f.domain,"/blog-da-lu/c/").concat(l,"/").concat(g,"/")}})})},cc=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"";if(""===a)return a;var b=a.match(/v\/([a-zA-Z0-9_-]+)&?/),c=(null==b?void 0:b.length)?b[1]:null;return c?"https://www.youtube.com/embed/".concat(c):""},cd=function(a){var b=(null==a?void 0:a.reference)?" - ".concat(null==a?void 0:a.reference):"";return"".concat(null==a?void 0:a.title).concat(b).replace(/\s\s+/g," ").trim()},ce=function(a,b){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:0;return a.map(function(a,d){return{id:d+c,link:a,type:b}})},cf=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[],b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:[],c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:[],d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:5;if(0===a.length&&0===b.length&&0===c.length)return[];var f=[].concat((0,e.Z)(ce(a,"video")),(0,e.Z)(ce(b,"podcast",a.length)),(0,e.Z)(ce(c,"image",a.length+b.length))),g=0;return f.reduce(function(a,b,c){var f=a,h=a[g];return c/d===g+1&&0!==c?(g+=1,[].concat((0,e.Z)(f),[[b]])):(h.push(b),f[g]=h,f)},[[]])},cg=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];if(Array.isArray(a)&&!a.length)return[];var b,c,d=(0,f.Z)(a,1)[0],e=null==(b=null==d?void 0:d.modalities)?void 0:b.map(function(a){var b=a.cost.customer,c=a.id,d=a.shippingTime,e=d.description,f=d.disclaimers,g=d.value,h=a.type;return{complement:f[0].message,description:e,id:c,price:null==b?void 0:b.toString(),time:null==g?void 0:g.max,type:h}}),g=null==(c=e)?void 0:c.find(function(a){return"conventional"===a.type});return[{packages:[(0,h.Z)({},g,{deliveryTypes:e})]}]},ch={INSUFFICIENT_STOCK:"Estoque indispon\xedvel.",SOMETHING_WRONG:"N\xe3o foi poss\xedvel calcular o frete. Tente novamente."},ci=function(a,b){return function a(b){return b?"string"==typeof b?b:Array.isArray(b)?a(b[0]):a((null==b?void 0:b.elements)||(null==b?void 0:b.value)):null}(null==a?void 0:a.find(function(a){return a.slug===b}))},cj=c(87371),ck=c(9249),cl=c(80753),cm=c(45754),cn=c(11987),co=c(95058),cp=function(a){var b;return(b=function(b){(0,cm.Z)(f,b);var c,d,e=(c=f,d=function a(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(b){return!1}}(),function(){var a,b=(0,co.Z)(c);if(d){var e=(0,co.Z)(this).constructor;a=Reflect.construct(b,arguments,e)}else a=b.apply(this,arguments);return(0,cn.Z)(this,a)});function f(){var b;if((0,ck.Z)(this,f),a.instance)return(0,cn.Z)(b,a.instance);for(var c=arguments.length,d=Array(c),g=0;g<c;g++)d[g]=arguments[g];return b=e.call.apply(e,[this].concat(d)),Object.assign(a,{instance:(0,cl.Z)(b)}),b}return(0,cj.Z)(f)}(a)).instance=null,b},cq=function(a){var b=arguments.length>1&& void 0!==arguments[1]&&arguments[1];if("boolean"==typeof a)return a;if(!a||"string"!=typeof a)return b;try{var c=JSON.parse(a);if("number"==typeof c)return Boolean(c);return"boolean"==typeof c?c:b}catch(d){return b}},cr=function(a,b){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:Q.onClient;if(c)try{if("object"===(0,N.Z)(a))return a;return a?JSON.parse(decodeURIComponent(a)):void 0}catch(d){b.error("Invalid cookie ml2_sid_c = ".concat(a))}},cs=function(a,b){var c,d,e,g=(null==a?void 0:a.split("|"))||[],h=(0,f.Z)(g,2),i=h[0],j=h[1];if(i&&j){var k=(null==b?void 0:null==(c=b.req)?void 0:c.url)||(null==(d=window)?void 0:null==(e=d.location)?void 0:e.href);if(k&&k.includes(i))return j}},ct=function(a){var b=(null==a?void 0:a.split("|"))||[],c=(0,f.Z)(b,3),d=c[0],e=c[1],g=c[2];if(d&&e)return{loyalty:e,name:g,store:d}},cu=function(){var a,b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},e=d.logger||ai((null==d?void 0:d.config)||{}),f=(Q.onClient?new a6.Z:new a6.Z(null==c?void 0:null==(a=c.req)?void 0:null==(b=a.headers)?void 0:b.cookie)).getAll(),g=f.cookie_accept_policy,i=f.zipcode,j=f.zipcode_city,k=f.zipcode_state,l=f.zipcode_latitude,m=f.zipcode_longitude,n=f.MLPARCEIRO,o=f.stwu,p=f.gatekeeper_exhibition,q=f.ml2_sid_c,r=f.ml2_sid,s=f._ga,t=f.pmd_promoter,u=f.toggle_pdp_seller_score,v=f.toggle_sharedbag,w=f.toggle_shorten_widget,x=f.mixer_shipping,y=f.toggle_wishlist,z=f.search_experiment,B=f.cookie_reject_zipcode_popup,C=f.toggle_agatha,D=f.toggle_ads,E=f.toggle_search_ads,F={zipCode:i,zipCodeCity:j&&decodeURIComponent(j),zipCodeLatitude:l,zipCodeLongitude:m,zipCodeState:k};return function a(b){return Array.isArray(b)?b.length?b:{}:b&&"object"===(0,N.Z)(b)?Object.keys(b).reduce(function(c,d){return void 0===b[d]?c:"object"===(0,N.Z)(b[d])?(0,h.Z)({},c,(0,A.Z)({},d,a(b[d]))):(0,h.Z)({},c,(0,A.Z)({},d,b[d]))},{}):{}}({acceptPolicy:g,accountData:cr(q,e),cartId:r,clientId:s,customerId:o,gatekeeperExhibitionRule:p,location:F,partnerId:n,pmdPromoter:cs(t,c),promoterData:ct(t),rejectZipcodePopup:B,searchExperiment:z,toggleAds:cq(D,!1),toggleAgatha:cq(C,!1),togglePdpSellerScore:cq(u,!0),toggleSearchAds:cq(E,!1),toggleSectionSharedBag:v,toggleShipping:x,toggleShortenWidget:w,toggleWishlist:cq(y,!0)})},cv=c(43543),cw=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:console;return new Promise(function(b,c){try{cv.ZP.request({callback:function(c){if((0,cv.d6)(c)){var d;a.info("[useCheckUserCredentials] - success",c),b(null==c?void 0:null==(d=c.body)?void 0:d.is_logged)}else a.error("[useCheckUserCredentials] - error",c),b(!1)},callbackId:"checkLogin",serviceArgs:{authId:""},serviceName:"customer.checkCredentials"})}catch(d){a.error("[useCheckUserCredentials] - error - catch",d),c(d)}})},cx=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:console;return new Promise(function(b,c){try{cv.ZP.request({callback:function(d){if((0,cv.d6)(d)){var e;a.info("[useRequestUserCredential] - success",d),b(null==d?void 0:null==(e=d.body)?void 0:e.jwt)}else a.error("[useRequestUserCredential] - error",d),c(d)},callbackId:"login",serviceArgs:{authId:""},serviceName:"customer.requestCredentials"})}catch(d){a.error("[useRequestUserCredential] - error - catch",d),c(d)}})},cy=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:console;return new Promise(function(c,d){try{cv.ZP.request({callback:function(a){(0,cv.d6)(a)?(b.info("[useUserInfo] - success",a),c(null==a?void 0:a.body)):(b.error("[useUserInfo] - error",a),d(a))},callbackId:"userInfo",serviceArgs:{authId:a},serviceName:"customer.getCustomerInfo"})}catch(e){b.error("[useUserInfo] - error - catch",e),d(e)}})},cz=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:console,c=(a||{}).event;c&&cv.ZP.request({callback:function(d){b.debug("MagaluService Callback",d),b.debug("payload",{event:c,params:a})},callbackId:"Firebase - Event: ".concat(c," - ").concat(new Date().getTime()),serviceArgs:{eventName:c,eventParams:a},serviceName:"analytics.trackEvent"})}}}])
//# sourceMappingURL=5607-1105ddf97f2f47d4.js.map