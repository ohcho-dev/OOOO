(()=>{var e={};e.id=644,e.ids=[644],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3868:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>p,routeModule:()=>u,tree:()=>d});var s=t(482),a=t(9108),o=t(2563),i=t.n(o),n=t(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let d=["",{children:["(pages)",{children:["promotion",{children:["pledge",{children:["form2",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1166)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/form2/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,9667)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/form2/layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,6722)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3992)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/form2/page.tsx"],c="/(pages)/promotion/pledge/form2/page",m={require:t,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/promotion/pledge/form2/page",pathname:"/promotion/pledge/form2",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9287:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},3749:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2704,23)),Promise.resolve().then(t.bind(t,4766)),Promise.resolve().then(t.bind(t,3784))},6837:(e,r,t)=>{Promise.resolve().then(t.bind(t,524))},2830:(e,r,t)=>{Promise.resolve().then(t.bind(t,4180))},5303:()=>{},524:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var s=t(2295),a=t(8020),o=t(1223),i=t.n(o),n=t(3729);function l(){let[e,r]=(0,n.useState)("");return(0,n.useEffect)(()=>{r(window.location.search.substring(1))},[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{className:"pt-[11.6rem] text-center text-[2.8rem]",children:[(0,s.jsxs)("b",{children:["내가 생각하는 ",s.jsx("span",{className:"text-[#FFD3D0]",children:"배우자의 모습"}),"을"]}),s.jsx("br",{})," 아래 선택지에서 골라주세요."]}),s.jsx(i(),{className:"mx-auto mt-[6.9rem] w-[33.1rem] h-[33.7rem]",src:"/info1.webp",alt:"mock-up",width:331,height:337}),s.jsx("span",{className:"block mt-[7.2rem] text-center text-[2.1rem]",children:"아래 항목중 가장 비슷한 항목을 선택해주세요."}),s.jsx(a.default,{label:"확인하였습니다",url:`/promotion/pledge/form2/first?${e}`,status:!0})]})}},8020:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(2295),a=t(2254);function o({onClick:e,url:r="",label:t,status:o=!1}){let i=(0,a.useRouter)();return s.jsx("button",{className:`w-[100vw] max-w-[518px] h-[8rem] text-[2.4rem] fixed bottom-0 ${o?"bg-[#F9E9B3]":"bg-[#cccccc] text-white"}`,onClick:e||(()=>i.push(r)),disabled:!o,children:t})}},4180:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(2295),a=t(3418),o=t(1223),i=t.n(o),n=t(2254),l=t(6561);function d({title:e}){let r=(0,n.useRouter)(),t=(0,n.usePathname)(),[o,d]=(0,l.FV)(a.tu),p=(0,l.Zl)(a.D1);return(0,s.jsxs)("header",{className:`w-full flex justify-between p-4 absolute top-0 left-0 z-50 ${-1===t.indexOf("first")?"bg-white":""}`,children:[s.jsx("div",{onClick:()=>{if(o>0&&-1!==t.indexOf("first"))d(o-1);else if(-1===t.indexOf("first"))history.back();else{if(!window.confirm("선택한 정보가 모두 지워집니다.\n 뒤로가시겠습니까?"))return;d(0),p([]),r.back()}},className:"px-[1.8rem] py-[1.6rem]",children:s.jsx(i(),{src:"/back.webp",alt:"뒤로가기",width:27,height:15,className:"w-[2.7rem] h-[1.5rem]"})}),s.jsx("h1",{className:"flex items-center text-[2.1rem]",children:e}),s.jsx("div",{className:"w-[6.3rem]"})]})}},4766:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(2295),a=t(6561);function o({children:e}){return s.jsx(a.Wh,{children:e})}t(3729)},3784:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(2295),a=t(4066);function o({children:e}){return s.jsx(a.J$,{value:{fetcher:e=>fetch(e).then(e=>e.json())},children:e})}},3418:(e,r,t)=>{"use strict";t.d(r,{$0:()=>a,$R:()=>l,D1:()=>i,EE:()=>d,H1:()=>m,J3:()=>x,M7:()=>g,MU:()=>c,W4:()=>p,Zk:()=>n,gy:()=>h,nQ:()=>u,tu:()=>o,uC:()=>f});var s=t(6561);let a=(0,s.cn)({key:"infoStepState",default:0}),o=(0,s.cn)({key:"formStepState",default:0}),i=(0,s.cn)({key:"AnswerUser1State",default:[]}),n=(0,s.cn)({key:"AnswerUser2State",default:[]});(0,s.cn)({key:"OpenModalState",default:!1});let l=(0,s.cn)({key:"OpenToastState",default:!1}),d=(0,s.cn)({key:"CapturedCardState",default:""}),p=(0,s.cn)({key:"CapturedDocumentState",default:""}),c=(0,s.cn)({key:"AnswerMood1State",default:""}),m=(0,s.cn)({key:"AnswerMood2State",default:""}),u=(0,s.cn)({key:"AnswerUser1MoodState",default:""}),h=(0,s.cn)({key:"AnswerUser2MoodState",default:""}),x=(0,s.cn)({key:"AnswerUser1NameState",default:{gender:"",name:""}}),f=(0,s.cn)({key:"AnswerUser2NameState",default:{gender:"",name:""}}),g=(0,s.cn)({key:"AnswerBabyNameState",default:{gender:"",name:""}})},3992:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>k,metadata:()=>w});var s=t(5036),a=t(9808),o=t.n(a);t(9064);var i=t(6843);let n=(0,i.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/SWRConfigContext.tsx`),{__esModule:l,$$typeof:d}=n,p=n.default,c=(0,i.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/RecoilContext.tsx`),{__esModule:m,$$typeof:u}=c,h=c.default;var x=t(4825),f=t.n(x),g=t(342),b=t.n(g);let w={title:"우리 가족 서약서(공동 육아 서약서):: 아이의 목소리로 쓰여진 가족의 약속",description:"아이의 목소리로 변환된 따뜻한 '공동육아 서약서'를 만들어보세요. 간단한 키워드만으로 아이의 입장에서 쓰여진 유쾌하고 따뜻한 서약서가 완성됩니다.",openGraph:{title:"우리 가족 서약서 : 키워드 입력만으로 소중한 서약서 만들기️❤️",description:"아이의 목소리를 담은 유쾌한 약속",url:"https://withmamapapa.net",images:["https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_main.png"],type:"website",siteName:"육아응원 | 우리 가족 서약서",locale:"ko_KR"},applicationName:"육아응원 | 우리 가족 서약서",keywords:["공동육아","서약서","가족","아이의 목소리","따뜻한 메시지","가족의 약속","유아","가족 선물","육아응원"]};function k({children:e}){return(0,s.jsxs)("html",{lang:"ko-KR",className:o().className,children:[(0,s.jsxs)(b(),{children:[s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),s.jsx("link",{rel:"preload",href:"/logo_white.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo3.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo3_1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo4.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/text_heart.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/bg_blur1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/bg_blur2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card_main_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card_main_bg2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/check_off.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/check_on.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_3.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_4.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/hand.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info3.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info4.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/letter_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/paper_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/paper.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/profile_guid.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/receiver_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/result_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/share.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/star.webp",as:"image"})]}),(0,s.jsxs)("body",{suppressHydrationWarning:!0,children:[s.jsx(f(),{src:"https://developers.kakao.com/sdk/js/kakao.js",strategy:"afterInteractive"}),(0,s.jsxs)(h,{children:[s.jsx(p,{children:(0,s.jsxs)("div",{className:"responsive_layout",children:[s.jsx("main",{className:"overflow-hidden w-full h-[100dvh]",children:e}),s.jsx("div",{id:"bottom_por tal"})]})}),s.jsx("div",{id:"portal"})]})]})]})}},6722:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o,metadata:()=>a});var s=t(5036);let a={};function o({children:e}){return s.jsx("div",{className:"relative",children:e})}},9667:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,metadata:()=>o});var s=t(5036),a=t(5995);let o={};function i({children:e}){return s.jsx("div",{className:"relative h-[99dvh]",children:(0,s.jsxs)("div",{children:[s.jsx(a.ZP,{title:""}),e]})})}},1166:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>o,__esModule:()=>a,default:()=>i});let s=(0,t(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/form2/page.tsx`),{__esModule:a,$$typeof:o}=s,i=s.default},5995:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>i});let s=(0,t(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/toolbar/index.tsx`),{__esModule:a,$$typeof:o}=s,i=s.default},3881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(337);let a=e=>[{type:"image/x-icon",sizes:"100x100",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},9064:()=>{}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,356,748,604],()=>t(3868));module.exports=s})();