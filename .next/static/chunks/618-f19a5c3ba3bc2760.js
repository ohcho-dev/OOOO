(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{1770:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});let a=o(n(2265));t.default=function({html:e,height:t=null,width:n=null,children:r,dataNtpc:i=""}){return(0,a.useEffect)(()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${i}`}})},[i]),a.default.createElement(a.default.Fragment,null,r,e?a.default.createElement("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=n?`${n}px`:"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:e}}):null)}},6927:function(e,t,n){"use strict";let r;var i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let l=a(n(2265)),s=u(n(8475));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:i,preview:o,dataLayer:a}=e;void 0===r&&(r=n);let u="dataLayer"!==n?`$l=${n}`:"",f=i?`&gtm_auth=${i}`:"",c=o?`&gtm_preview=${o}&gtm_cookies_win=x`:"";return(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),l.default.createElement(l.default.Fragment,null,l.default.createElement(s.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${a?`w[l].push(${JSON.stringify(a)})`:""}
      })(window,'${n}');`}}),l.default.createElement(s.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${u}${f}${c}`}))},t.sendGTMEvent=e=>{if(void 0===r){console.warn("@next/third-parties: GTM has not been initialized");return}window[r]?window[r].push(e):console.warn(`@next/third-parties: GTM dataLayer ${r} does not exist`)}},3064:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_KR_9dff5b', '__Noto_Sans_KR_Fallback_9dff5b'",fontStyle:"normal"},className:"__className_9dff5b"}},622:function(e,t,n){"use strict";var r=n(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,f=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:s,ref:f,props:o,_owner:u.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},7437:function(e,t,n){"use strict";e.exports=n(622)},1853:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,u=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,f=r[1];return u(function(){i.value=n,i.getSnapshot=t,s(i)&&f({inst:i})},[e,n,t]),a(function(){return s(i)&&f({inst:i}),e(function(){s(i)&&f({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},6272:function(e,t,n){"use strict";e.exports=n(1853)},2333:function(e,t,n){"use strict";n.d(t,{J$:function(){return V}});var r=n(2265);n(6272);let i=()=>{},o=i(),a=Object,u=e=>e===o,l=e=>"function"==typeof e,s=(e,t)=>({...e,...t}),f=e=>l(e.then),c=new WeakMap,d=0,_=e=>{let t,n;let r=typeof e,i=e&&e.constructor,o=i==Date;if(a(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=c.get(e))return t;if(t=++d+"~",c.set(e,t),i==Array){for(n=0,t="@";n<e.length;n++)t+=_(e[n])+",";c.set(e,t)}if(i==a){t="#";let r=a.keys(e).sort();for(;!u(n=r.pop());)u(e[n])||(t+=n+":"+_(e[n])+",");c.set(e,t)}}return t},p=new WeakMap,h={},g={},w="undefined",v=typeof window!=w,y=typeof document!=w,m=()=>v&&typeof window.requestAnimationFrame!=w,b=(e,t)=>{let n=p.get(e);return[()=>!u(t)&&e.get(t)||h,r=>{if(!u(t)){let i=e.get(t);t in g||(g[t]=i),n[5](t,s(i,r),i||h)}},n[6],()=>!u(t)&&t in g?g[t]:!u(t)&&e.get(t)||h]},O=!0,[E,S]=v&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],j={initFocus:e=>(y&&document.addEventListener("visibilitychange",e),E("focus",e),()=>{y&&document.removeEventListener("visibilitychange",e),S("focus",e)}),initReconnect:e=>{let t=()=>{O=!0,e()},n=()=>{O=!1};return E("online",t),E("offline",n),()=>{S("online",t),S("offline",n)}}},k=(r.useId,!v||"Deno"in window),M=k?r.useEffect:r.useLayoutEffect,x="undefined"!=typeof navigator&&navigator.connection,T=!k&&x&&(["slow-2g","2g"].includes(x.effectiveType)||x.saveData),$=e=>{if(l(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?_(e):"",t]},R=0,L=()=>++R;async function P(...e){let[t,n,r,i]=e,a=s({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),c=a.populateCache,d=a.rollbackOnError,_=a.optimisticData,h=!1!==a.revalidate,g=e=>"function"==typeof d?d(e):!1!==d,w=a.throwOnError;if(l(n)){let e=[];for(let r of t.keys())!/^\$(inf|sub)\$/.test(r)&&n(t.get(r)._k)&&e.push(r);return Promise.all(e.map(v))}return v(n);async function v(n){let i;let[a]=$(n);if(!a)return;let[s,d]=b(t,a),[v,y,m,O]=p.get(t),E=()=>{let e=v[a];return h&&(delete m[a],delete O[a],e&&e[0])?e[0](2).then(()=>s().data):s().data};if(e.length<3)return E();let S=r,j=L();y[a]=[j,0];let k=!u(_),M=s(),x=M.data,T=M._c,R=u(T)?x:T;if(k&&d({data:_=l(_)?_(R,x):_,_c:R}),l(S))try{S=S(R)}catch(e){i=e}if(S&&f(S)){if(S=await S.catch(e=>{i=e}),j!==y[a][0]){if(i)throw i;return S}i&&k&&g(i)&&(c=!0,d({data:R,_c:o}))}if(c&&!i&&(l(c)?d({data:c(S,R),error:o,_c:o}):d({data:S,error:o,_c:o})),y[a][1]=L(),Promise.resolve(E()).then(()=>{d({_c:o})}),i){if(w)throw i;return}return S}}let D=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},N=(e,t)=>{if(!p.has(e)){let n=s(j,t),r={},a=P.bind(o,e),u=i,l={},f=(e,t)=>{let n=l[e]||[];return l[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},c=(t,n,r)=>{e.set(t,n);let i=l[t];if(i)for(let e of i)e(n,r)},d=()=>{if(!p.has(e)&&(p.set(e,[r,{},{},{},a,c,f]),!k)){let t=n.initFocus(setTimeout.bind(o,D.bind(o,r,0))),i=n.initReconnect(setTimeout.bind(o,D.bind(o,r,1)));u=()=>{t&&t(),i&&i(),p.delete(e)}}};return d(),[e,a,d,u]}return[e,p.get(e)[4]]},[C,I]=N(new Map),F=s({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,n,r,i)=>{let o=n.errorRetryCount,a=i.retryCount,l=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;(u(o)||!(a>o))&&setTimeout(r,l,i)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:T?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:T?5e3:3e3,compare:(e,t)=>_(e)==_(t),isPaused:()=>!1,cache:C,mutate:I,fallback:{}},{isOnline:()=>O,isVisible:()=>{let e=y&&document.visibilityState;return u(e)||"hidden"!==e}}),G=(e,t)=>{let n=s(e,t);if(t){let{use:r,fallback:i}=e,{use:o,fallback:a}=t;r&&o&&(n.use=r.concat(o)),i&&a&&(n.fallback=s(i,a))}return n},W=(0,r.createContext)({}),A=v&&window.__SWR_DEVTOOLS_USE__;(A?window.__SWR_DEVTOOLS_USE__:[]).concat(e=>(t,n,r)=>{let i=n&&((...e)=>{let[r]=$(t),[,,,i]=p.get(C);if(r.startsWith("$inf$"))return n(...e);let o=i[r];return u(o)?n(...e):(delete i[r],o)});return e(t,i,r)}),A&&(window.__SWR_DEVTOOLS_REACT__=r),r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e});let V=a.defineProperty(e=>{let{value:t}=e,n=(0,r.useContext)(W),i=l(t),a=(0,r.useMemo)(()=>i?t(n):t,[i,n,t]),u=(0,r.useMemo)(()=>i?a:G(n,a),[i,n,a]),f=a&&a.provider,c=(0,r.useRef)(o);f&&!c.current&&(c.current=N(f(u.cache||C),a));let d=c.current;return d&&(u.cache=d[0],u.mutate=d[1]),M(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,r.createElement)(W.Provider,s(e,{value:u}))},"defaultValue",{value:F})}}]);