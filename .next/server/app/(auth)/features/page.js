(()=>{var e={};e.id=963,e.ids=[963],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1223:(e,t,A)=>{"use strict";A.r(t),A.d(t,{GlobalError:()=>n.a,__next_app__:()=>c,originalPathname:()=>u,pages:()=>d,routeModule:()=>g,tree:()=>l});var a=A(482),i=A(9108),r=A(2563),n=A.n(r),s=A(8300),o={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>s[e]);A.d(t,o);let l=["",{children:["(auth)",{children:["features",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(A.bind(A,1132)),"D:\\Web\\satyadhika\\app\\(auth)\\features\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(A.bind(A,9305)),"D:\\Web\\satyadhika\\app\\(auth)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(A.t.bind(A,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(A.bind(A,155)),"D:\\Web\\satyadhika\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(A.t.bind(A,9361,23)),"next/dist/client/components/not-found-error"]}],d=["D:\\Web\\satyadhika\\app\\(auth)\\features\\page.tsx"],u="/(auth)/features/page",c={require:A,loadChunk:()=>Promise.resolve()},g=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(auth)/features/page",pathname:"/features",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4930:(e,t,A)=>{Promise.resolve().then(A.t.bind(A,1900,23)),Promise.resolve().then(A.bind(A,504)),Promise.resolve().then(A.bind(A,7421)),Promise.resolve().then(A.bind(A,6363))},1900:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return h}});let a=A(9694),i=A(7824)._(A(3729)),r=a._(A(1202)),n=a._(A(1758)),s=A(3855),o=A(3053),l=A(4187);A(837);let d=A(6150),u=a._(A(4931)),c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,A,a,i,r){let n=null==e?void 0:e.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==A?void 0:A.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,i=!1;A.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}}))}function f(e){let[t,A]=i.version.split(".",2),a=parseInt(t,10),r=parseInt(A,10);return a>18||18===a&&r>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let p=(0,i.forwardRef)((e,t)=>{let{src:A,srcSet:a,sizes:r,height:n,width:s,decoding:o,className:l,style:d,fetchPriority:u,placeholder:c,loading:p,unoptimized:m,fill:h,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:x,setShowAltText:w,onLoad:E,onError:C,...v}=e;return i.default.createElement("img",{...v,...f(u),loading:p,width:s,height:n,decoding:o,"data-nimg":h?"fill":"1",className:l,style:d,sizes:r,srcSet:a,src:A,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&g(e,c,b,y,x,m))},[A,c,b,y,x,C,m,t]),onLoad:e=>{g(e.currentTarget,c,b,y,x,m)},onError:e=>{w(!0),"empty"!==c&&x(!0),C&&C(e)}})});function m(e){let{isAppRouter:t,imgAttributes:A}=e,a={as:"image",imageSrcSet:A.srcSet,imageSizes:A.sizes,crossOrigin:A.crossOrigin,referrerPolicy:A.referrerPolicy,...f(A.fetchPriority)};return t&&r.default.preload?(r.default.preload(A.src,a),null):i.default.createElement(n.default,null,i.default.createElement("link",{key:"__nimg-"+A.src+A.srcSet+A.sizes,rel:"preload",href:A.srcSet?void 0:A.src,...a}))}let h=(0,i.forwardRef)((e,t)=>{let A=(0,i.useContext)(d.RouterContext),a=(0,i.useContext)(l.ImageConfigContext),r=(0,i.useMemo)(()=>{let e=c||a||o.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),A=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:A}},[a]),{onLoad:n,onLoadingComplete:g}=e,f=(0,i.useRef)(n);(0,i.useEffect)(()=>{f.current=n},[n]);let h=(0,i.useRef)(g);(0,i.useEffect)(()=>{h.current=g},[g]);let[b,y]=(0,i.useState)(!1),[x,w]=(0,i.useState)(!1),{props:E,meta:C}=(0,s.getImgProps)(e,{defaultLoader:u.default,imgConf:r,blurComplete:b,showAltText:x});return i.default.createElement(i.default.Fragment,null,i.default.createElement(p,{...E,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:f,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:w,ref:t}),C.priority?i.default.createElement(m,{isAppRouter:!A,imgAttributes:E}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7637:(e,t,A)=>{"use strict";e.exports=A(6372).vendored.contexts.AmpContext},2158:(e,t,A)=>{"use strict";e.exports=A(6372).vendored.contexts.HeadManagerContext},4187:(e,t,A)=>{"use strict";e.exports=A(6372).vendored.contexts.ImageConfigContext},3126:(e,t)=>{"use strict";function A(e){let{ampFirst:t=!1,hybrid:A=!1,hasQuery:a=!1}=void 0===e?{}:e;return t||A&&a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return A}})},3855:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),A(837);let a=A(6358),i=A(3053);function r(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var A;let s,o,l,{src:d,sizes:u,unoptimized:c=!1,priority:g=!1,loading:f,className:p,quality:m,width:h,height:b,fill:y=!1,style:x,onLoad:w,onLoadingComplete:E,placeholder:C="empty",blurDataURL:v,fetchPriority:P,layout:Q,objectFit:j,objectPosition:I,lazyBoundary:B,lazyRoot:S,...M}=e,{imgConf:D,showAltText:_,blurComplete:k,defaultLoader:z}=t,F=D||i.imageConfigDefault;if("allSizes"in F)s=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);s={...F,allSizes:e,deviceSizes:t}}let O=M.loader||z;delete M.loader,delete M.srcSet;let U="__next_img_default"in O;if(U){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=O;O=t=>{let{config:A,...a}=t;return e(a)}}if(Q){"fill"===Q&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[Q];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[Q];t&&!u&&(u=t)}let R="",G=n(h),N=n(b);if("object"==typeof(A=d)&&(r(A)||void 0!==A.src)){let e=r(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,l=e.blurHeight,v=v||e.blurDataURL,R=e.src,!y){if(G||N){if(G&&!N){let t=G/e.width;N=Math.round(e.height*t)}else if(!G&&N){let t=N/e.height;G=Math.round(e.width*t)}}else G=e.width,N=e.height}}let L=!g&&("lazy"===f||void 0===f);(!(d="string"==typeof d?d:R)||d.startsWith("data:")||d.startsWith("blob:"))&&(c=!0,L=!1),s.unoptimized&&(c=!0),U&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(c=!0),g&&(P="high");let T=n(m),W=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:I}:{},_?{}:{color:"transparent"},x),H=k||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:G,heightInt:N,blurWidth:o,blurHeight:l,blurDataURL:v||"",objectFit:W.objectFit})+'")':'url("'+C+'")',K=H?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},Y=function(e){let{config:t,src:A,unoptimized:a,width:i,quality:r,sizes:n,loader:s}=e;if(a)return{src:A,srcSet:void 0,sizes:void 0};let{widths:o,kind:l}=function(e,t,A){let{deviceSizes:a,allSizes:i}=e;if(A){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(A);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:a,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,n),d=o.length-1;return{sizes:n||"w"!==l?n:"100vw",srcSet:o.map((e,a)=>s({config:t,src:A,quality:r,width:e})+" "+("w"===l?e:a+1)+l).join(", "),src:s({config:t,src:A,quality:r,width:o[d]})}}({config:s,src:d,unoptimized:c,width:G,quality:T,sizes:u,loader:O});return{props:{...M,loading:L?"lazy":f,fetchPriority:P,width:G,height:N,decoding:"async",className:p,style:{...W,...K},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},meta:{unoptimized:c,priority:g,placeholder:C,fill:y}}}},1758:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var A in t)Object.defineProperty(e,A,{enumerable:!0,get:t[A]})}(t,{defaultHead:function(){return l},default:function(){return g}});let a=A(9694),i=A(7824)._(A(3729)),r=a._(A(7984)),n=A(7637),s=A(2158),o=A(3126);function l(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}A(837);let u=["name","httpEquiv","charSet","itemProp"];function c(e,t){let{inAmpMode:A}=t;return e.reduce(d,[]).reverse().concat(l(A).reverse()).filter(function(){let e=new Set,t=new Set,A=new Set,a={};return i=>{let r=!0,n=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){n=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?r=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?r=!1:t.add(i.type);break;case"meta":for(let e=0,t=u.length;e<t;e++){let t=u[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)A.has(t)?r=!1:A.add(t);else{let e=i.props[t],A=a[t]||new Set;("name"!==t||!n)&&A.has(e)?r=!1:(A.add(e),a[t]=A)}}}}return r}}()).reverse().map((e,t)=>{let a=e.key||t;if(!A&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:a})})}let g=function(e){let{children:t}=e,A=(0,i.useContext)(n.AmpStateContext),a=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(r.default,{reduceComponentsToState:c,headManager:a,inAmpMode:(0,o.isInAmpMode)(A)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6358:(e,t)=>{"use strict";function A(e){let{widthInt:t,heightInt:A,blurWidth:a,blurHeight:i,blurDataURL:r,objectFit:n}=e,s=a?40*a:t,o=i?40*i:A,l=s&&o?"viewBox='0 0 "+s+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+r+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return A}})},3053:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var A in t)Object.defineProperty(e,A,{enumerable:!0,get:t[A]})}(t,{VALID_LOADERS:function(){return A},imageConfigDefault:function(){return a}});let A=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},4931:(e,t)=>{"use strict";function A(e){let{config:t,src:A,width:a,quality:i}=e;return t.path+"?url="+encodeURIComponent(A)+"&w="+a+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),A.__next_img_default=!0;let a=A},7984:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let a=A(3729),i=()=>{},r=()=>{};function n(e){var t;let{headManager:A,reduceComponentsToState:n}=e;function s(){if(A&&A.mountedInstances){let t=a.Children.toArray(Array.from(A.mountedInstances).filter(Boolean));A.updateHead(n(t,e))}}return null==A||null==(t=A.mountedInstances)||t.add(e.children),s(),i(()=>{var t;return null==A||null==(t=A.mountedInstances)||t.add(e.children),()=>{var t;null==A||null==(t=A.mountedInstances)||t.delete(e.children)}}),i(()=>(A&&(A._pendingUpdate=s),()=>{A&&(A._pendingUpdate=s)})),r(()=>(A&&A._pendingUpdate&&(A._pendingUpdate(),A._pendingUpdate=null),()=>{A&&A._pendingUpdate&&(A._pendingUpdate(),A._pendingUpdate=null)})),null}},837:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return A}});let A=e=>{}},1132:(e,t,A)=>{"use strict";A.r(t),A.d(t,{default:()=>d,metadata:()=>l});var a=A(5036),i=A(5614),r=A.n(i);let n={src:"/_next/static/media/layanan-1 -cropped.b3f9ab41.jpg",height:3648,width:3616,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAIguf//EAB0QAAICAQUAAAAAAAAAAAAAAAIDAQQTABEiMWH/2gAIAQEAAT8AqAsayUWkrwkrMJKZyN3sx1tr/8QAGREAAwADAAAAAAAAAAAAAAAAAQIDAAQh/9oACAECAQE/ANeMmQsUHTn/xAAZEQADAAMAAAAAAAAAAAAAAAABAgMAEiH/2gAIAQMBAT8AtSgYLueDP//Z",blurWidth:8,blurHeight:8},s={src:"/_next/static/media/layanan-2-cropped.b4679ffb.jpg",height:3980,width:3960,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAgg6f/8QAHxAAAgECBwAAAAAAAAAAAAAAAQIDADEEBRESExVy/9oACAEBAAE/AHyB0wM8nXyAo2vIbFd1gvmv/8QAFhEAAwAAAAAAAAAAAAAAAAAAABFh/9oACAECAQE/AHD/xAAXEQADAQAAAAAAAAAAAAAAAAAAATER/9oACAEDAQE/AJHh/9k=",blurWidth:8,blurHeight:8},o={src:"/_next/static/media/layanan-3-newcrop.2d45828d.jpg",height:1200,width:1190,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAALwr/8QAHxAAAgECBwAAAAAAAAAAAAAAAQMCBBIABhMhMTNS/9oACAEBAAE/AJ1OYalcyvRWAo9W9zfNx4GP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8},l={title:"Features - Satyadhika Bakti Finance",description:"Satyadhika Bakti Finance memiliki beragam layanan pembiayaan yang dapat membantu keuangan anda"};function d(){return a.jsx("section",{children:a.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"py-12 md:py-20",children:[a.jsx("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:a.jsx("h2",{className:"h2 mb-4 mt-4",children:"Laporan Keberlanjutan"})}),(0,a.jsxs)("div",{className:"max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none","data-aos-id-blocks":!0,children:[(0,a.jsxs)("div",{className:"relative flex flex-col items-center","data-aos":"fade-up","data-aos-anchor":"[data-aos-id-blocks]",children:[a.jsx("div",{style:{display:"flex",flexDirection:"column"},className:"mb-6",children:a.jsx(r(),{alt:"Mountains",src:n,sizes:"100vw",style:{width:"100%",height:"auto"}})}),a.jsx("h4",{className:"h4 mb-2",children:"Pembiayaan Investasi"}),a.jsx("p",{className:"text-lg text-gray-400",children:"Pembiayaan untuk pengadaan barang modal dan atau jasa untuk keperluan aktivitas usaha investasi (usaha produktif): Sewa pembiayaan (finance lease), jual dan sewa balik (sale and leaseback), pembelian dengan pembayaran secara angsuran, dan pembiayaan alat kesehatan untuk rumah sakit."})]}),(0,a.jsxs)("div",{className:"relative flex flex-col items-center","data-aos":"fade-up","data-aos-delay":"100","data-aos-anchor":"[data-aos-id-blocks]",children:[a.jsx("div",{style:{display:"flex",flexDirection:"column"},className:"mb-6",children:a.jsx(r(),{alt:"Mountains",src:s,sizes:"100vw",style:{width:"100%",height:"auto"}})}),a.jsx("h4",{className:"h4 mb-2",children:"Pembiayaan Modal"}),a.jsx("p",{className:"text-lg text-gray-400",children:"Pembiayaan untuk memenuhi kebutuhan modal kerja atau pengeluaran yang habis dalam satu siklus usaha (usaha produktif): Jual dan sewa balik (sale and leaseback) serta anjak piutang (factoring with recourse)."})]}),(0,a.jsxs)("div",{className:"relative flex flex-col items-center","data-aos":"fade-up","data-aos-delay":"200","data-aos-anchor":"[data-aos-id-blocks]",children:[a.jsx("div",{style:{display:"flex",flexDirection:"column"},className:"mb-6",children:a.jsx(r(),{alt:"Mountains",src:o,sizes:"100vw",style:{width:"100%",height:"auto"}})}),a.jsx("h4",{className:"h4 mb-2",children:"Pembiayaan Investasi"}),a.jsx("p",{className:"text-lg text-gray-400",children:"Merupakan pembiayaan untuk pengadaan barang dan atau jasa yang bersifat konsumtif dan bukan untuk keperluan usaha (non produktif): Sewa pembiayaan (finance lease) dan pembelian dengan pembayaran secara angsuran."})]})]})]})})})}},6987:(e,t,A)=>{let{createProxy:a}=A(6843);e.exports=a("D:\\Web\\satyadhika\\node_modules\\next\\dist\\client\\image-component.js")},4470:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),A(6031);let a=A(6184),i=A(4180);function r(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var A;let s,o,l,{src:d,sizes:u,unoptimized:c=!1,priority:g=!1,loading:f,className:p,quality:m,width:h,height:b,fill:y=!1,style:x,onLoad:w,onLoadingComplete:E,placeholder:C="empty",blurDataURL:v,fetchPriority:P,layout:Q,objectFit:j,objectPosition:I,lazyBoundary:B,lazyRoot:S,...M}=e,{imgConf:D,showAltText:_,blurComplete:k,defaultLoader:z}=t,F=D||i.imageConfigDefault;if("allSizes"in F)s=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);s={...F,allSizes:e,deviceSizes:t}}let O=M.loader||z;delete M.loader,delete M.srcSet;let U="__next_img_default"in O;if(U){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=O;O=t=>{let{config:A,...a}=t;return e(a)}}if(Q){"fill"===Q&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[Q];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[Q];t&&!u&&(u=t)}let R="",G=n(h),N=n(b);if("object"==typeof(A=d)&&(r(A)||void 0!==A.src)){let e=r(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,l=e.blurHeight,v=v||e.blurDataURL,R=e.src,!y){if(G||N){if(G&&!N){let t=G/e.width;N=Math.round(e.height*t)}else if(!G&&N){let t=N/e.height;G=Math.round(e.width*t)}}else G=e.width,N=e.height}}let L=!g&&("lazy"===f||void 0===f);(!(d="string"==typeof d?d:R)||d.startsWith("data:")||d.startsWith("blob:"))&&(c=!0,L=!1),s.unoptimized&&(c=!0),U&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(c=!0),g&&(P="high");let T=n(m),W=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:I}:{},_?{}:{color:"transparent"},x),H=k||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:G,heightInt:N,blurWidth:o,blurHeight:l,blurDataURL:v||"",objectFit:W.objectFit})+'")':'url("'+C+'")',K=H?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},Y=function(e){let{config:t,src:A,unoptimized:a,width:i,quality:r,sizes:n,loader:s}=e;if(a)return{src:A,srcSet:void 0,sizes:void 0};let{widths:o,kind:l}=function(e,t,A){let{deviceSizes:a,allSizes:i}=e;if(A){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(A);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:a,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,n),d=o.length-1;return{sizes:n||"w"!==l?n:"100vw",srcSet:o.map((e,a)=>s({config:t,src:A,quality:r,width:e})+" "+("w"===l?e:a+1)+l).join(", "),src:s({config:t,src:A,quality:r,width:o[d]})}}({config:s,src:d,unoptimized:c,width:G,quality:T,sizes:u,loader:O});return{props:{...M,loading:L?"lazy":f,fetchPriority:P,width:G,height:N,decoding:"async",className:p,style:{...W,...K},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},meta:{unoptimized:c,priority:g,placeholder:C,fill:y}}}},6184:(e,t)=>{"use strict";function A(e){let{widthInt:t,heightInt:A,blurWidth:a,blurHeight:i,blurDataURL:r,objectFit:n}=e,s=a?40*a:t,o=i?40*i:A,l=s&&o?"viewBox='0 0 "+s+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+r+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return A}})},4180:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var A in t)Object.defineProperty(e,A,{enumerable:!0,get:t[A]})}(t,{VALID_LOADERS:function(){return A},imageConfigDefault:function(){return a}});let A=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7751:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var A in t)Object.defineProperty(e,A,{enumerable:!0,get:t[A]})}(t,{unstable_getImgProps:function(){return o},default:function(){return l}});let a=A(6783),i=A(4470),r=A(6031),n=A(6987),s=a._(A(4534)),o=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,A]of Object.entries(t))void 0===A&&delete t[e];return{props:t}},l=n.Image},4534:(e,t)=>{"use strict";function A(e){let{config:t,src:A,width:a,quality:i}=e;return t.path+"?url="+encodeURIComponent(A)+"&w="+a+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),A.__next_img_default=!0;let a=A},6031:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return A}});let A=e=>{}},5614:(e,t,A)=>{e.exports=A(7751)},504:(e,t,A)=>{"use strict";A.r(t),A.d(t,{default:()=>a});let a={src:"/_next/static/media/layanan-1 -cropped.b3f9ab41.jpg",height:3648,width:3616,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAIguf//EAB0QAAICAQUAAAAAAAAAAAAAAAIDAQQTABEiMWH/2gAIAQEAAT8AqAsayUWkrwkrMJKZyN3sx1tr/8QAGREAAwADAAAAAAAAAAAAAAAAAQIDAAQh/9oACAECAQE/ANeMmQsUHTn/xAAZEQADAAMAAAAAAAAAAAAAAAABAgMAEiH/2gAIAQMBAT8AtSgYLueDP//Z",blurWidth:8,blurHeight:8}},7421:(e,t,A)=>{"use strict";A.r(t),A.d(t,{default:()=>a});let a={src:"/_next/static/media/layanan-2-cropped.b4679ffb.jpg",height:3980,width:3960,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAgg6f/8QAHxAAAgECBwAAAAAAAAAAAAAAAQIDADEEBRESExVy/9oACAEBAAE/AHyB0wM8nXyAo2vIbFd1gvmv/8QAFhEAAwAAAAAAAAAAAAAAAAAAABFh/9oACAECAQE/AHD/xAAXEQADAQAAAAAAAAAAAAAAAAAAATER/9oACAEDAQE/AJHh/9k=",blurWidth:8,blurHeight:8}},6363:(e,t,A)=>{"use strict";A.r(t),A.d(t,{default:()=>a});let a={src:"/_next/static/media/layanan-3-newcrop.2d45828d.jpg",height:1200,width:1190,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAALwr/8QAHxAAAgECBwAAAAAAAAAAAAAAAQMCBBIABhMhMTNS/9oACAEBAAE/AJ1OYalcyvRWAo9W9zfNx4GP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8}}};var t=require("../../../webpack-runtime.js");t.C(e);var A=e=>t(t.s=e),a=t.X(0,[638,401,170,586],()=>A(1223));module.exports=a})();