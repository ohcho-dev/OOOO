(()=>{var e={};e.id=725,e.ids=[725],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},267:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d});var i=r(482),o=r(9108),s=r(2563),a=r.n(s),n=r(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["(pages)",{children:["promotion",{children:["pledge",{children:["form",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8761)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/form/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,694)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/form/layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,6722)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3992)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/form/page.tsx"],p="/(pages)/promotion/pledge/form/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(pages)/promotion/pledge/form/page",pathname:"/promotion/pledge/form",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9287:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},6707:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.bind(r,8020))},3749:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2704,23)),Promise.resolve().then(r.bind(r,4766)),Promise.resolve().then(r.bind(r,3784))},2830:(e,t,r)=>{Promise.resolve().then(r.bind(r,4180))},5303:()=>{},8020:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var i=r(2295),o=r(2254);function s({onClick:e,url:t="",label:r,status:s=!1}){let a=(0,o.useRouter)();return i.jsx("button",{className:`w-[100vw] max-w-[518px] h-[8rem] text-[2.4rem] fixed bottom-0 ${s?"bg-[#F9E9B3]":"bg-[#cccccc] text-white"}`,onClick:e||(()=>a.push(t)),disabled:!s,children:r})}},4180:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var i=r(2295),o=r(3418),s=r(1223),a=r.n(s),n=r(2254),l=r(6561);function d({title:e}){let t=(0,n.useRouter)(),r=(0,n.usePathname)(),[s,d]=(0,l.FV)(o.tu),c=(0,l.Zl)(o.D1);return(0,i.jsxs)("header",{className:`w-full flex justify-between p-4 absolute top-0 left-0 z-50 ${-1===r.indexOf("first")?"bg-white":""}`,children:[i.jsx("div",{onClick:()=>{if(s>0&&-1!==r.indexOf("first"))d(s-1);else if(-1===r.indexOf("first"))history.back();else{if(!window.confirm("선택한 정보가 모두 지워집니다.\n 뒤로가시겠습니까?"))return;d(0),c([]),t.back()}},className:"px-[1.8rem] py-[1.6rem]",children:i.jsx(a(),{src:"/back.webp",alt:"뒤로가기",width:27,height:15,className:"w-[2.7rem] h-[1.5rem]"})}),i.jsx("h1",{className:"flex items-center text-[2.1rem]",children:e}),i.jsx("div",{className:"w-[6.3rem]"})]})}},4766:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var i=r(2295),o=r(6561);function s({children:e}){return i.jsx(o.Wh,{children:e})}r(3729)},3784:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var i=r(2295),o=r(4066);function s({children:e}){return i.jsx(o.J$,{value:{fetcher:e=>fetch(e).then(e=>e.json())},children:e})}},3418:(e,t,r)=>{"use strict";r.d(t,{$0:()=>o,$R:()=>l,D1:()=>a,EE:()=>d,H1:()=>u,J3:()=>f,M7:()=>x,MU:()=>p,W4:()=>c,Zk:()=>n,gy:()=>h,nQ:()=>m,tu:()=>s,uC:()=>g});var i=r(6561);let o=(0,i.cn)({key:"infoStepState",default:0}),s=(0,i.cn)({key:"formStepState",default:0}),a=(0,i.cn)({key:"AnswerUser1State",default:[]}),n=(0,i.cn)({key:"AnswerUser2State",default:[]});(0,i.cn)({key:"OpenModalState",default:!1});let l=(0,i.cn)({key:"OpenToastState",default:!1}),d=(0,i.cn)({key:"CapturedCardState",default:""}),c=(0,i.cn)({key:"CapturedDocumentState",default:""}),p=(0,i.cn)({key:"AnswerMood1State",default:""}),u=(0,i.cn)({key:"AnswerMood2State",default:""}),m=(0,i.cn)({key:"AnswerUser1MoodState",default:""}),h=(0,i.cn)({key:"AnswerUser2MoodState",default:""}),f=(0,i.cn)({key:"AnswerUser1NameState",default:{gender:"",name:""}}),g=(0,i.cn)({key:"AnswerUser2NameState",default:{gender:"",name:""}}),x=(0,i.cn)({key:"AnswerBabyNameState",default:{gender:"",name:""}})},6987:(e,t,r)=>{let{createProxy:i}=r(6843);e.exports=i("/Users/ochihyo/workspace/oooo-production/node_modules/next/dist/client/image-component.js")},4470:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return n}}),r(6031);let i=r(6184),o=r(2473);function s(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,t){var r;let n,l,d,{src:c,sizes:p,unoptimized:u=!1,priority:m=!1,loading:h,className:f,quality:g,width:x,height:b,fill:w=!1,style:v,onLoad:j,onLoadingComplete:y,placeholder:k="empty",blurDataURL:_,fetchPriority:P,layout:S,objectFit:C,objectPosition:N,lazyBoundary:M,lazyRoot:O,...E}=e,{imgConf:z,showAltText:A,blurComplete:U,defaultLoader:R}=t,I=z||o.imageConfigDefault;if("allSizes"in I)n=I;else{let e=[...I.deviceSizes,...I.imageSizes].sort((e,t)=>e-t),t=I.deviceSizes.sort((e,t)=>e-t);n={...I,allSizes:e,deviceSizes:t}}let q=E.loader||R;delete E.loader,delete E.srcSet;let D="__next_img_default"in q;if(D){if("custom"===n.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=q;q=t=>{let{config:r,...i}=t;return e(i)}}if(S){"fill"===S&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!p&&(p=t)}let G="",B=a(x),F=a(b);if("object"==typeof(r=c)&&(s(r)||void 0!==r.src)){let e=s(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,_=_||e.blurDataURL,G=e.src,!w){if(B||F){if(B&&!F){let t=B/e.width;F=Math.round(e.height*t)}else if(!B&&F){let t=F/e.height;B=Math.round(e.width*t)}}else B=e.width,F=e.height}}let W=!m&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:G)||c.startsWith("data:")||c.startsWith("blob:"))&&(u=!0,W=!1),n.unoptimized&&(u=!0),D&&c.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(u=!0),m&&(P="high");let $=a(g),L=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:N}:{},A?{}:{color:"transparent"},v),T=U||"empty"===k?null:"blur"===k?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:B,heightInt:F,blurWidth:l,blurHeight:d,blurDataURL:_||"",objectFit:L.objectFit})+'")':'url("'+k+'")',V=T?{backgroundSize:L.objectFit||"cover",backgroundPosition:L.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:T}:{},J=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:s,sizes:a,loader:n}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),c=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((e,i)=>n({config:t,src:r,quality:s,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:n({config:t,src:r,quality:s,width:l[c]})}}({config:n,src:c,unoptimized:u,width:B,quality:$,sizes:p,loader:q});return{props:{...E,loading:W?"lazy":h,fetchPriority:P,width:B,height:F,decoding:"async",className:f,style:{...L,...V},sizes:J.sizes,srcSet:J.srcSet,src:J.src},meta:{unoptimized:u,priority:m,placeholder:k,fill:w}}}},6184:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:s,objectFit:a}=e,n=i?40*i:t,l=o?40*o:r,d=n&&l?"viewBox='0 0 "+n+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2473:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7751:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return l},default:function(){return d}});let i=r(6783),o=r(4470),s=r(6031),a=r(6987),n=i._(r(4534)),l=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},d=a.Image},4534:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},6031:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},5904:(e,t,r)=>{e.exports=r(7751)},3992:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v,metadata:()=>w});var i=r(5036),o=r(9808),s=r.n(o);r(9064);var a=r(6843);let n=(0,a.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/SWRConfigContext.tsx`),{__esModule:l,$$typeof:d}=n,c=n.default,p=(0,a.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/RecoilContext.tsx`),{__esModule:u,$$typeof:m}=p,h=p.default;var f=r(4825),g=r.n(f),x=r(342),b=r.n(x);let w={title:"우리 가족 서약서(공동 육아 서약서):: 아이의 목소리로 쓰여진 가족의 약속",description:"아이의 목소리로 변환된 따뜻한 '공동육아 서약서'를 만들어보세요. 간단한 키워드만으로 아이의 입장에서 쓰여진 유쾌하고 따뜻한 서약서가 완성됩니다.",openGraph:{title:"우리 가족 서약서 : 키워드 입력만으로 소중한 서약서 만들기️❤️",description:"아이의 목소리를 담은 따뜻한 약속",url:"https://withmamapapa.net",images:["https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_main_v2.png"],type:"website",siteName:"육아응원 | 우리 가족 서약서",locale:"ko_KR"},applicationName:"육아응원 | 우리 가족 서약서",keywords:["공동육아","서약서","가족","아이의 목소리","따뜻한 메시지","가족의 약속","유아","가족 선물","육아응원"]};function v({children:e}){return(0,i.jsxs)("html",{lang:"ko-KR",className:s().className,children:[(0,i.jsxs)(b(),{children:[i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i.jsx("link",{rel:"preload",href:"/logo_white.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/logo.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/logo1.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/logo3.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/logo3_1.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/logo4.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/text_heart.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/bg_blur1.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/bg_blur2.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/bg.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/card_main_bg.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/card_main_bg2.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/card1.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/card2.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/check_off.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/check_on.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/guide_1.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/guide_2.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/guide_3.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/guide_4.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/hand.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/info1.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/info2.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/info3.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/info4.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/letter_bg.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/paper_bg.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/paper.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/profile_guid.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/receiver_bg.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/result_bg.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/share.webp",as:"image"}),i.jsx("link",{rel:"preload",href:"/star.webp",as:"image"})]}),(0,i.jsxs)("body",{suppressHydrationWarning:!0,children:[i.jsx(g(),{src:"https://developers.kakao.com/sdk/js/kakao.js",strategy:"afterInteractive"}),(0,i.jsxs)(h,{children:[i.jsx(c,{children:(0,i.jsxs)("div",{className:"responsive_layout",children:[i.jsx("main",{className:"overflow-hidden w-full h-[100dvh]",children:e}),i.jsx("div",{id:"bottom_por tal"})]})}),i.jsx("div",{id:"portal"})]})]})]})}},6722:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>o});var i=r(5036);let o={};function s({children:e}){return i.jsx("div",{className:"relative",children:e})}},694:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>s});var i=r(5036),o=r(5995);let s={};function a({children:e}){return i.jsx("div",{className:"relative h-[99dvh]",children:(0,i.jsxs)("div",{children:[i.jsx(o.ZP,{title:""}),e]})})}},8761:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var i=r(5036);let o=(0,r(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/BottomButton.tsx`),{__esModule:s,$$typeof:a}=o,n=o.default;var l=r(5904),d=r.n(l);function c(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{className:"pt-[11.6rem] text-center text-[2.8rem]",children:[(0,i.jsxs)("b",{children:["내가 생각하는 ",i.jsx("span",{className:"text-[#FFD3D0]",children:"배우자의 모습"}),"을"]}),i.jsx("br",{})," 아래 선택지에서 골라주세요."]}),i.jsx(d(),{className:"mx-auto mt-[6.9rem] w-[33.1rem] h-[33.7rem]",src:"/info1.webp",alt:"mock-up",width:331,height:337}),i.jsx("span",{className:"block mt-[7.2rem] text-center text-[2.1rem]",children:"아래 항목중 가장 비슷한 항목을 선택해주세요."}),i.jsx(n,{label:"확인하였습니다",url:"/promotion/pledge/form/first",status:!0})]})}},5995:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>a});let i=(0,r(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/toolbar/index.tsx`),{__esModule:o,$$typeof:s}=i,a=i.default},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var i=r(337);let o=e=>[{type:"image/x-icon",sizes:"100x100",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},9064:()=>{}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[638,356,748,604],()=>r(267));module.exports=i})();