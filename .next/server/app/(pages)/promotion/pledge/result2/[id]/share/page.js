(()=>{var e={};e.id=795,e.ids=[795],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3724:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var s=r(482),a=r(9108),o=r(2563),l=r.n(o),i=r(8300),n={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);r.d(t,n);let d=["",{children:["(pages)",{children:["promotion",{children:["pledge",{children:["result2",{children:["[id]",{children:["share",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4106)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/result2/[id]/share/page.tsx"]}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,6722)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3992)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/result2/[id]/share/page.tsx"],p="/(pages)/promotion/pledge/result2/[id]/share/page",m={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/promotion/pledge/result2/[id]/share/page",pathname:"/promotion/pledge/result2/[id]/share",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9287:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},9129:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2704,23)),Promise.resolve().then(r.bind(r,4766)),Promise.resolve().then(r.bind(r,3784))},9514:(e,t,r)=>{Promise.resolve().then(r.bind(r,3395))},5303:()=>{},3395:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(2295),a=r(8020),o=r(6258),l=r(2601),i=r(9023),n=r(3418),d=r(9704),c=r(1223),p=r.n(c),m=r(2254),u=r(3729),h=r(6561);function x(){(0,m.useRouter)();let e=(0,m.useParams)();(0,m.usePathname)();let[t,r]=(0,h.FV)(n.$R),[c,x]=(0,u.useState)(""),[g,f]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{e.id&&x("http://localhost:3000/promotion/pledge/result2/"+e.id)},[e]),(0,s.jsxs)("div",{children:[s.jsx("div",{className:"w-full h-[100dvh] max-h-calcResultPage flex flex-col justify-center",children:(0,s.jsxs)("div",{children:[s.jsx("div",{className:"py-[1rem]",children:s.jsx(p(),{className:"mx-auto w-[12rem] ",src:"/logo.webp",alt:"육아응원",width:162,height:81})}),(0,s.jsxs)("div",{className:"font-bold text-center text-[2.4rem] mt-[4.6rem] mb-[5rem] leading-[4rem]",children:["배우자에게 공유하고",s.jsx("br",{}),"완성된 서약서를 확인해보세요!"]}),s.jsx(p(),{className:"mx-auto w-[36rem]",src:"/share.webp",alt:"공유해보세요",width:366,height:366}),s.jsx("div",{className:"text-[2.1rem] text-center mt-[3rem] font-bold leading-[4rem]",children:"어떤 서약서가 기다리고 있을까요?"})]})}),s.jsx(o.Z,{toggle:g,handleToggle:()=>f(!g),children:(0,s.jsxs)("div",{className:"px-[3.4rem] py-[4rem]",children:[s.jsx("div",{className:"text-[2.8rem] font-bold mb-[5rem]",children:"공유하실 방법을 선택해주세요."}),(0,s.jsxs)("div",{className:"flex justify-evenly text-[1.6rem] cursor-pointer",children:[s.jsx(l.Z,{title:"우리 가족 서약서: 아이의 목소리를 담은 유쾌한 약속",description:"우리 가족 서약서가 도착했어요!!",btnName:"서약서 읽어보기",image:"https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/kakao_share_user_2_v2.png",url:`${c}`}),t&&s.jsx(i.Z,{text:"클립보드에 저장되었습니다."}),(0,s.jsxs)("div",{className:"text-center",onClick:()=>{(0,d.H)(`${c}`),r(!0)},children:[s.jsx("div",{className:"w-[6rem] h-[6rem] flex justify-center items-center",children:s.jsx(p(),{src:"/link.webp",alt:"URL 복사",width:60,height:60})}),(0,s.jsxs)("span",{className:"block mt-[0.8rem] text-[1.6rem]",children:["URL",s.jsx("br",{}),"복사"]})]})]})]})}),s.jsx(a.default,{label:"배우자에게 공유하기",status:!0,onClick:()=>f(!g)})]})}},8020:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(2295),a=r(2254);function o({onClick:e,url:t="",label:r,status:o=!1}){let l=(0,a.useRouter)();return s.jsx("button",{className:`w-[100vw] max-w-[518px] h-[8rem] text-[2.4rem] fixed bottom-0 ${o?"bg-[#F9E9B3]":"bg-[#cccccc] text-white"}`,onClick:e||(()=>l.push(t)),disabled:!o,children:r})}},6258:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(2295),a=r(3729);r(1202);var o=r(2254);let l=({toggle:e,handleToggle:t,children:r})=>{let l=(0,o.useRouter)(),i=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{i.current=!1,e&&(document.getElementById("main")?.classList.add("scroll_lock"),window.onpopstate=()=>(i.current=!0,t(),()=>{document.getElementById("main")?.classList.remove("scroll_lock"),l.back()}))},[e]),s.jsx(s.Fragment,{children:e&&(0,s.jsxs)("div",{className:"fixed z-50 top-0 left-0 w-full h-[100dvh]",children:[s.jsx("div",{className:"w-full h-[100dvh] bg-black opacity-70 transition-all animate-[fadeIn_0.2s_ease-in-out]",onClick:()=>t()}),s.jsx("div",{className:"w-[100vw] max-w-[52rem] bg-white absolute bottom-0 left-[50%] translate-x-[-50%] rounded-t-[3rem] animate-[moveTop_0.3s_ease-in]",children:r})]})})}},2601:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(2295),a=r(3729);let o=({url:e,image:t,title:r,description:o,btnName:l})=>((0,a.useEffect)(()=>{},[]),(0,s.jsxs)("div",{className:"text-center",onClick:()=>{let{Kakao:s}=window;s.Share.sendDefault({objectType:"feed",content:{title:r,description:o,imageUrl:t,link:{mobileWebUrl:e,webUrl:e}},buttons:[{title:l,link:{mobileWebUrl:e,webUrl:e}}]})},children:[s.jsx("img",{className:"w-[6rem] h-[6rem]",src:"https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png",alt:"카카오톡 공유 보내기 버튼"}),(0,s.jsxs)("span",{className:"block mt-[0.8rem] text-[1.6rem]",children:["카카오톡",s.jsx("br",{}),"공유하기"]})]}))},9023:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(2295),a=r(3418),o=r(3729),l=r(6561);function i({text:e=""}){let[t,r]=(0,l.FV)(a.$R);return(0,o.useEffect)(()=>{let e=setInterval(()=>{r(!1)},2e3);return()=>clearInterval(e)},[e]),s.jsx("div",{className:"fixed left-[50%] z-50 translate-x-[-50%] bottom-[3rem] px-[1rem] py-[0.4rem] border rounded-[0.4rem] text-[1.4rem] leading-[2rem] text-white bg-[#222] animate-[fadeInOut_2s_ease-in-out]",children:e})}},4766:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(2295),a=r(6561);function o({children:e}){return s.jsx(a.Wh,{children:e})}r(3729)},3784:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(2295),a=r(4066);function o({children:e}){return s.jsx(a.J$,{value:{fetcher:e=>fetch(e).then(e=>e.json())},children:e})}},3418:(e,t,r)=>{"use strict";r.d(t,{$0:()=>a,$R:()=>n,D1:()=>l,EE:()=>d,H1:()=>m,J3:()=>x,M7:()=>f,MU:()=>p,W4:()=>c,Zk:()=>i,gy:()=>h,nQ:()=>u,tu:()=>o,uC:()=>g});var s=r(6561);let a=(0,s.cn)({key:"infoStepState",default:0}),o=(0,s.cn)({key:"formStepState",default:0}),l=(0,s.cn)({key:"AnswerUser1State",default:[]}),i=(0,s.cn)({key:"AnswerUser2State",default:[]});(0,s.cn)({key:"OpenModalState",default:!1});let n=(0,s.cn)({key:"OpenToastState",default:!1}),d=(0,s.cn)({key:"CapturedCardState",default:""}),c=(0,s.cn)({key:"CapturedDocumentState",default:""}),p=(0,s.cn)({key:"AnswerMood1State",default:""}),m=(0,s.cn)({key:"AnswerMood2State",default:""}),u=(0,s.cn)({key:"AnswerUser1MoodState",default:""}),h=(0,s.cn)({key:"AnswerUser2MoodState",default:""}),x=(0,s.cn)({key:"AnswerUser1NameState",default:{gender:"",name:""}}),g=(0,s.cn)({key:"AnswerUser2NameState",default:{gender:"",name:""}}),f=(0,s.cn)({key:"AnswerBabyNameState",default:{gender:"",name:""}})},9704:(e,t,r)=>{"use strict";r.d(t,{H:()=>s});let s=e=>{let t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)}},3992:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k,metadata:()=>w});var s=r(5036),a=r(9808),o=r.n(a);r(9064);var l=r(6843);let i=(0,l.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/SWRConfigContext.tsx`),{__esModule:n,$$typeof:d}=i,c=i.default,p=(0,l.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/RecoilContext.tsx`),{__esModule:m,$$typeof:u}=p,h=p.default;var x=r(4825),g=r.n(x),f=r(342),b=r.n(f);let w={title:"우리 가족 서약서(공동 육아 서약서):: 아이의 목소리로 쓰여진 가족의 약속",description:"아이의 목소리로 변환된 따뜻한 '공동육아 서약서'를 만들어보세요. 간단한 키워드만으로 아이의 입장에서 쓰여진 유쾌하고 따뜻한 서약서가 완성됩니다.",openGraph:{title:"우리 가족 서약서 : 키워드 입력만으로 소중한 서약서 만들기️❤️",description:"아이의 목소리를 담은 유쾌한 약속",url:"http://localhost:3000",images:["https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_main.png"],type:"website",siteName:"육아응원 | 우리 가족 서약서",locale:"ko_KR"},applicationName:"육아응원 | 우리 가족 서약서",keywords:["공동육아","서약서","가족","아이의 목소리","따뜻한 메시지","가족의 약속","유아","가족 선물","육아응원"]};function k({children:e}){return(0,s.jsxs)("html",{lang:"ko-KR",className:o().className,children:[(0,s.jsxs)(b(),{children:[s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),s.jsx("link",{rel:"preload",href:"/logo_white.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo3.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo3_1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo4.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/text_heart.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/bg_blur1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/bg_blur2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card_main_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card_main_bg2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/check_off.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/check_on.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_3.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_4.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/hand.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info3.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info4.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/letter_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/paper_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/paper.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/profile_guid.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/receiver_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/result_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/share.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/star.webp",as:"image"})]}),(0,s.jsxs)("body",{suppressHydrationWarning:!0,children:[s.jsx(g(),{src:"https://developers.kakao.com/sdk/js/kakao.js",strategy:"afterInteractive"}),(0,s.jsxs)(h,{children:[s.jsx(c,{children:(0,s.jsxs)("div",{className:"responsive_layout",children:[s.jsx("main",{className:"overflow-hidden w-full h-[100dvh]",children:e}),s.jsx("div",{id:"bottom_por tal"})]})}),s.jsx("div",{id:"portal"})]})]})]})}},6722:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>a});var s=r(5036);let a={};function o({children:e}){return s.jsx("div",{className:"relative",children:e})}},4106:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>l});let s=(0,r(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/result2/[id]/share/page.tsx`),{__esModule:a,$$typeof:o}=s,l=s.default},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(337);let a=e=>[{type:"image/x-icon",sizes:"100x100",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},9064:()=>{}};var t=require("../../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,356,748,604],()=>r(3724));module.exports=s})();