(()=>{var e={};e.id=793,e.ids=[793],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5632:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>f,tree:()=>u});var o=r(482),n=r(9108),i=r(2563),a=r.n(i),s=r(8300),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let u=["",{children:["(pages)",{children:["promotion",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6489)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,6722)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3992)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/page.tsx"],c="/(pages)/promotion/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new o.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(pages)/promotion/page",pathname:"/promotion",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},1792:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1643,23)),Promise.resolve().then(r.t.bind(r,9110,23)),Promise.resolve().then(r.t.bind(r,2704,23)),Promise.resolve().then(r.bind(r,4766)),Promise.resolve().then(r.bind(r,3784))},9287:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},5303:()=>{},4766:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var o=r(2295),n=r(6561);function i({children:e}){return o.jsx(n.Wh,{children:e})}r(3729)},3784:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var o=r(2295),n=r(4066);function i({children:e}){return o.jsx(n.J$,{value:{fetcher:e=>fetch(e).then(e=>e.json())},children:e})}},4778:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"bailoutToClientRendering",{enumerable:!0,get:function(){return i}});let o=r(4910),n=r(5869);function i(){let e=n.staticGenerationAsyncStorage.getStore();(null==e||!e.forceStatic)&&(null==e?void 0:e.isStaticGeneration)&&(0,o.throwWithNoSSR)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4552:(e,t,r)=>{"use strict";function o(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return o}}),r(6783),r(2),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9738:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return f},useSearchParams:function(){return m},usePathname:function(){return h},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return l.useServerInsertedHTML},useRouter:function(){return g},useParams:function(){return b},useSelectedLayoutSegments:function(){return x},useSelectedLayoutSegment:function(){return v},redirect:function(){return u.redirect},permanentRedirect:function(){return u.permanentRedirect},RedirectType:function(){return u.RedirectType},notFound:function(){return d.notFound}});let o=r(2),n=r(8726),i=r(7210),a=r(4552),s=r(3092),l=r(545),u=r(8010),d=r(2100),c=Symbol("internal for urlsearchparams readonly");function p(){return Error("ReadonlyURLSearchParams cannot be modified")}class f{[Symbol.iterator](){return this[c][Symbol.iterator]()}append(){throw p()}delete(){throw p()}set(){throw p()}sort(){throw p()}constructor(e){this[c]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function m(){(0,a.clientHookInServerComponentError)("useSearchParams");let e=(0,o.useContext)(i.SearchParamsContext),t=(0,o.useMemo)(()=>e?new f(e):null,[e]);{let{bailoutToClientRendering:e}=r(4778);e()}return t}function h(){return(0,a.clientHookInServerComponentError)("usePathname"),(0,o.useContext)(i.PathnameContext)}function g(){(0,a.clientHookInServerComponentError)("useRouter");let e=(0,o.useContext)(n.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function b(){(0,a.clientHookInServerComponentError)("useParams");let e=(0,o.useContext)(n.GlobalLayoutRouterContext),t=(0,o.useContext)(i.PathParamsContext);return(0,o.useMemo)(()=>(null==e?void 0:e.tree)?function e(t,r){for(let o of(void 0===r&&(r={}),Object.values(t[1]))){let t=o[0],n=Array.isArray(t),i=n?t[1]:t;!i||i.startsWith("__PAGE__")||(n&&("c"===t[2]||"oc"===t[2])?r[t[0]]=t[1].split("/"):n&&(r[t[0]]=t[1]),r=e(o,r))}return r}(e.tree):t,[null==e?void 0:e.tree,t])}function x(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,o.useContext)(n.LayoutRouterContext);return function e(t,r,o,n){let i;if(void 0===o&&(o=!0),void 0===n&&(n=[]),o)i=t[1][r];else{var a;let e=t[1];i=null!=(a=e.children)?a:Object.values(e)[0]}if(!i)return n;let l=i[0],u=(0,s.getSegmentValue)(l);return!u||u.startsWith("__PAGE__")?n:(n.push(u),e(i,r,!1,n))}(t,e)}function v(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=x(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2100:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return o},isNotFoundError:function(){return n}});let r="NEXT_NOT_FOUND";function o(){let e=Error(r);throw e.digest=r,e}function n(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5858:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8010:(e,t,r)=>{"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return o},getRedirectError:function(){return l},redirect:function(){return u},permanentRedirect:function(){return d},isRedirectError:function(){return c},getURLFromRedirectError:function(){return p},getRedirectTypeFromError:function(){return f},getRedirectStatusCodeFromError:function(){return m}});let n=r(4580),i=r(2934),a=r(5858),s="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let o=Error(s);o.digest=s+";"+t+";"+e+";"+r+";";let i=n.requestAsyncStorage.getStore();return i&&(o.mutableCookies=i.mutableCookies),o}function u(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function c(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,o,n]=e.digest.split(";",4),i=Number(n);return t===s&&("replace"===r||"push"===r)&&"string"==typeof o&&!isNaN(i)&&i in a.RedirectStatusCode}function p(e){return c(e)?e.digest.split(";",3)[2]:null}function f(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!c(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(o||(o={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3092:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8726:(e,t,r)=>{"use strict";e.exports=r(482).vendored.contexts.AppRouterContext},7210:(e,t,r)=>{"use strict";e.exports=r(482).vendored.contexts.HooksClientContext},545:(e,t,r)=>{"use strict";e.exports=r(482).vendored.contexts.ServerInsertedHtml},4910:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{NEXT_DYNAMIC_NO_SSR_CODE:function(){return r},throwWithNoSSR:function(){return o}});let r="NEXT_DYNAMIC_NO_SSR_CODE";function o(){let e=Error(r);throw e.digest=r,e}},4551:(e,t,r)=>{e.exports=r(9738)},3992:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y,metadata:()=>_});var o=r(5036),n=r(9808),i=r.n(n);r(9064);var a=r(6843);let s=(0,a.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/SWRConfigContext.tsx`),{__esModule:l,$$typeof:u}=s,d=s.default,c=(0,a.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/RecoilContext.tsx`),{__esModule:p,$$typeof:f}=c,m=c.default;var h=r(4825),g=r.n(h),b=r(342),x=r.n(b),v=r(4332);let _={title:"우리 가족 서약서(공동 육아 서약서):: 아이의 목소리로 쓰여진 가족의 약속",description:"아이의 목소리로 변환된 따뜻한 '공동육아 서약서'를 만들어보세요. 간단한 키워드만으로 아이의 입장에서 쓰여진 유쾌하고 따뜻한 서약서가 완성됩니다.",openGraph:{title:"우리 가족 서약서 : 키워드 입력만으로 소중한 서약서 만들기️❤️",description:"아이의 목소리를 담은 따뜻한 약속",url:"https://withmamapapa.net",images:["https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_main_v2.png"],type:"website",siteName:"육아응원 | 우리 가족 서약서",locale:"ko_KR"},applicationName:"육아응원 | 우리 가족 서약서",keywords:["공동육아","서약서","가족","아이의 목소리","따뜻한 메시지","가족의 약속","유아","가족 선물","육아응원"],verification:{google:"3dR9GjCoXOG9jeYBGrIFOvKtOPPJr0_WGlpyxFB7EvE",other:{"naver-site-verification":"7b8d6a069b66378c1e6c95c04dfc95a647ff458b"}},robots:{index:!0,follow:!0}};function y({children:e}){return(0,o.jsxs)("html",{lang:"ko-KR",className:i().className,children:[(0,o.jsxs)(x(),{children:[o.jsx("link",{rel:"preload",href:"/logo_white.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/logo.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/logo1.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/logo3.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/logo3_1.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/logo4.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/text_heart.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/bg_blur1.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/bg_blur2.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/bg.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/card_main_bg.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/card_main_bg2.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/card1.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/card2.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/check_off.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/check_on.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/guide_1.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/guide_2.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/guide_3.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/guide_4.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/hand.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/info1.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/info2.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/info3.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/info4.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/letter_bg.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/paper_bg.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/paper.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/profile_guid.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/receiver_bg.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/result_bg.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/share.webp",as:"image"}),o.jsx("link",{rel:"preload",href:"/star.webp",as:"image"})]}),(0,o.jsxs)("body",{suppressHydrationWarning:!0,children:[o.jsx(v.GoogleTagManager,{gtmId:"GTM-NNZQ39LR"}),o.jsx(g(),{src:"https://developers.kakao.com/sdk/js/kakao.js",strategy:"afterInteractive"}),(0,o.jsxs)(m,{children:[o.jsx(d,{children:(0,o.jsxs)("div",{className:"responsive_layout",children:[o.jsx("main",{className:"overflow-hidden w-full h-[100dvh]",children:e}),o.jsx("div",{id:"bottom_por tal"})]})}),o.jsx("div",{id:"portal"})]})]})]})}},6722:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>n});var o=r(5036);let n={};function i({children:e}){return o.jsx("div",{className:"relative",children:e})}},6489:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var o=r(5036),n=r(4551);async function i(){return(0,n.redirect)("/promotion/pledge"),o.jsx("section",{children:o.jsx("div",{children:"리스트 페이지"})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var o=r(337);let n=e=>[{type:"image/x-icon",sizes:"100x100",url:(0,o.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},9064:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638,356,803],()=>r(5632));module.exports=o})();