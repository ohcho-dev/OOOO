(()=>{var e={};e.id=37,e.ids=[37],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3039:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d});var t=s(482),a=s(9108),i=s(2563),o=s.n(i),n=s(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(r,l);let d=["",{children:["(pages)",{children:["promotion",{children:["pledge",{children:["agree",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3152)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/agree/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,6722)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,3992)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/agree/page.tsx"],p="/(pages)/promotion/pledge/agree/page",m={require:s,loadChunk:()=>Promise.resolve()},h=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/promotion/pledge/agree/page",pathname:"/promotion/pledge/agree",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9287:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},9129:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,2704,23)),Promise.resolve().then(s.bind(s,4766)),Promise.resolve().then(s.bind(s,3784))},2030:(e,r,s)=>{Promise.resolve().then(s.bind(s,1869))},5303:()=>{},1869:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>c});var t=s(2295),a=s(3418),i=s(1223),o=s.n(i),n=s(2254),l=s(3729),d=s(6561);function c({title:e}){let r=(0,n.useRouter)(),s=(0,n.usePathname)(),[i,c]=(0,d.FV)(a.$0),[p,m]=(0,d.FV)(a.tu);(0,d.Zl)(a.D1),(0,d.Zl)(a.Zk);let[h,u]=(0,l.useState)("");return(0,l.useEffect)(()=>{u(window.location.search.substring(1))},[]),(0,t.jsxs)("header",{className:"w-full flex justify-between p-4 absolute top-0 left-0 z-50 bg-white",children:[t.jsx("div",{onClick:()=>{if(-1!==s.indexOf("/agree"))return c(2),r.back();if(h&&-1!==s.indexOf("check")){if(!window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"))return;r.push(`/promotion/pledge/form2/first?${h}`)}else if(!h&&-1!==s.indexOf("check")){if(!window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"))return;r.push("/promotion/pledge/form/first")}i>0?c(i-1):(m(0),r.back())},className:"px-[1.8rem] py-[1.6rem]",children:t.jsx(o(),{src:"/back.webp",alt:"뒤로가기",width:27,height:15,className:"w-[2.7rem] h-[1.5rem]"})}),t.jsx("h1",{className:"text-[2.1rem] flex items-center font-bold",children:e}),t.jsx("div",{className:"w-[6.3rem]"})]})}},4766:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>i});var t=s(2295),a=s(6561);function i({children:e}){return t.jsx(a.Wh,{children:e})}s(3729)},3784:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>i});var t=s(2295),a=s(4066);function i({children:e}){return t.jsx(a.J$,{value:{fetcher:e=>fetch(e).then(e=>e.json())},children:e})}},3418:(e,r,s)=>{"use strict";s.d(r,{$0:()=>a,$R:()=>l,D1:()=>o,EE:()=>d,H1:()=>m,J3:()=>x,M7:()=>g,MU:()=>p,W4:()=>c,Zk:()=>n,gy:()=>u,nQ:()=>h,tu:()=>i,uC:()=>f});var t=s(6561);let a=(0,t.cn)({key:"infoStepState",default:0}),i=(0,t.cn)({key:"formStepState",default:0}),o=(0,t.cn)({key:"AnswerUser1State",default:[]}),n=(0,t.cn)({key:"AnswerUser2State",default:[]});(0,t.cn)({key:"OpenModalState",default:!1});let l=(0,t.cn)({key:"OpenToastState",default:!1}),d=(0,t.cn)({key:"CapturedCardState",default:""}),c=(0,t.cn)({key:"CapturedDocumentState",default:""}),p=(0,t.cn)({key:"AnswerMood1State",default:""}),m=(0,t.cn)({key:"AnswerMood2State",default:""}),h=(0,t.cn)({key:"AnswerUser1MoodState",default:""}),u=(0,t.cn)({key:"AnswerUser2MoodState",default:""}),x=(0,t.cn)({key:"AnswerUser1NameState",default:{gender:"",name:""}}),f=(0,t.cn)({key:"AnswerUser2NameState",default:{gender:"",name:""}}),g=(0,t.cn)({key:"AnswerBabyNameState",default:{gender:"",name:""}})},3992:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>w,metadata:()=>j});var t=s(5036),a=s(9808),i=s.n(a);s(9064);var o=s(6843);let n=(0,o.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/SWRConfigContext.tsx`),{__esModule:l,$$typeof:d}=n,c=n.default,p=(0,o.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/RecoilContext.tsx`),{__esModule:m,$$typeof:h}=p,u=p.default;var x=s(4825),f=s.n(x),g=s(342),b=s.n(g);let j={title:"우리 가족 서약서(공동 육아 서약서):: 아이의 목소리로 쓰여진 가족의 약속",description:"아이의 목소리로 변환된 따뜻한 '공동육아 서약서'를 만들어보세요. 간단한 키워드만으로 아이의 입장에서 쓰여진 유쾌하고 따뜻한 서약서가 완성됩니다.",openGraph:{title:"우리 가족 서약서 : 키워드 입력만으로 소중한 서약서 만들기️❤️",description:"아이의 목소리를 담은 유쾌한 약속",url:"https://oooo-pi.vercel.app",images:["https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_main.png"],type:"website",siteName:"육아응원 | 우리 가족 서약서",locale:"ko_KR"},applicationName:"육아응원 | 우리 가족 서약서",keywords:["공동육아","서약서","가족","아이의 목소리","따뜻한 메시지","가족의 약속","유아","가족 선물","육아응원"]};function w({children:e}){return(0,t.jsxs)("html",{lang:"ko-KR",className:i().className,children:[(0,t.jsxs)(b(),{children:[t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.jsx("link",{rel:"preload",href:"/logo_white.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/logo.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/logo1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/logo3.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/logo3_1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/logo4.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/text_heart.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/bg_blur1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/bg_blur2.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/card_main_bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/card_main_bg2.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/card1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/card2.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/check_off.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/check_on.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/guide_1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/guide_2.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/guide_3.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/guide_4.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/hand.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/info1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/info2.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/info3.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/info4.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/letter_bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/paper_bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/paper.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/profile_guid.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/receiver_bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/result_bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/share.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/star.webp",as:"image"})]}),(0,t.jsxs)("body",{suppressHydrationWarning:!0,children:[t.jsx(f(),{src:"https://developers.kakao.com/sdk/js/kakao.js",strategy:"afterInteractive"}),(0,t.jsxs)(u,{children:[t.jsx(c,{children:(0,t.jsxs)("div",{className:"responsive_layout",children:[t.jsx("main",{className:"overflow-hidden w-full h-[100dvh]",children:e}),t.jsx("div",{id:"bottom_por tal"})]})}),t.jsx("div",{id:"portal"})]})]})]})}},6722:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>i,metadata:()=>a});var t=s(5036);let a={};function i({children:e}){return t.jsx("div",{className:"relative",children:e})}},3152:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>i});var t=s(5036),a=s(9216);function i(){return(0,t.jsxs)("section",{className:"pt-[10rem] px-[5rem]",children:[t.jsx(a.ZP,{title:"개인정보 수집 및 이용동의"}),t.jsx("div",{className:"text-[2.1rem] font-bold",children:"개인정보 수집 및 이용 동의"}),(0,t.jsxs)("div",{className:"text-[1.5rem] mt-[1.5rem]",children:[(0,t.jsxs)("div",{children:["본 서비스는 고객님의 개인정보를 중요시하며, “정보통신망 이용촉진 및 정보보호 등에 관한 법률”을 준수하고 지키고 있습니다. ",t.jsx("br",{}),t.jsx("br",{}),"본 서비스는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다."]}),t.jsx("div",{className:"font-bold mt-[3.5rem]",children:"1. 개인정보의 수집 및 이용 목적"}),t.jsx("div",{className:"",children:"본 서비스는 수집된 개인 정보를 다음의 목적을 위해 활용합니다."}),(0,t.jsxs)("ul",{children:[t.jsx("li",{className:"list-disc list-inside ml-[1rem]",children:"육아응원 서약서 제작"}),t.jsx("li",{className:"list-disc list-inside ml-[1rem]",children:"응답자 통계 및 결과 분석"})]}),t.jsx("div",{className:"mt-[1.5rem] font-bold",children:"2. 수집하는 개인정보 항목"}),t.jsx("ul",{children:t.jsx("li",{className:"list-disc list-inside ml-[1rem]",children:"필수 항목: 이름, 성별"})}),t.jsx("div",{className:"mt-[1.5rem] font-bold",children:"3. 개인정보의 보유 및 이용기간"}),t.jsx("div",{children:"고객님의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 즉시 파기합니다."}),t.jsx("ul",{children:t.jsx("li",{className:"list-disc list-inside ml-[1rem]",children:"보유 및 이용 기간 : 입력일로부터 6개월까지"})}),(0,t.jsxs)("div",{className:"mt-[2.7rem] font-bold",children:["동의를 거부할 권리가 있으며, 이 경우 서비스 이용에 제한을",t.jsx("br",{})," 받을 수 있습니다."]})]})]})}},9216:(e,r,s)=>{"use strict";s.d(r,{ZP:()=>o});let t=(0,s(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/InfoToolbar/index.tsx`),{__esModule:a,$$typeof:i}=t,o=t.default},3881:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>a});var t=s(337);let a=e=>[{type:"image/x-icon",sizes:"100x100",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},9064:()=>{}};var r=require("../../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[638,356,748,604],()=>s(3039));module.exports=t})();