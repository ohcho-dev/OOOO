exports.id=21,exports.ids=[21],exports.modules={9287:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},3749:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,2704,23)),Promise.resolve().then(t.bind(t,4766)),Promise.resolve().then(t.bind(t,3784))},5303:()=>{},1275:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>n});var r=t(2295),s=t(1223),l=t.n(s),i=t(2254),o=t(3729);function n({link:e,time:a=2600}){let t=(0,i.useRouter)();return(0,o.useEffect)(()=>{if(e){let r=setTimeout(()=>{t.push(e)},a);return()=>clearTimeout(r)}},[e]),(0,r.jsxs)("section",{children:[r.jsx("div",{className:"animate-[logo1_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-220%] text-[#F9E9B3]",children:r.jsx(l(),{src:"/logo1.webp",alt:"육",width:30,height:30})}),r.jsx("div",{className:"animate-[logo2_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-110%] text-[#F9E9B3]",children:r.jsx(l(),{src:"/logo1.webp",alt:"아",width:30,height:30})}),r.jsx("div",{className:"animate-[logo3_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-0%] text-[#FFD3D0]",children:r.jsx(l(),{src:"/logo3.webp",alt:"응",width:30,height:30})}),r.jsx("div",{className:"animate-[logo4_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[110%] text-[#F25D24]",children:r.jsx(l(),{src:"/logo4.webp",alt:"원",width:30,height:30})}),r.jsx("div",{className:"animate-[logo5_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-10%] translate-y-[-100%] ",children:r.jsx(l(),{src:"/logo3_1.webp",alt:"|||",width:38,height:17.5})})]})}},6258:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var r=t(2295),s=t(3729);t(1202);var l=t(2254);let i=({toggle:e,handleToggle:a,children:t})=>{let i=(0,l.useRouter)(),o=(0,s.useRef)(!1);return(0,s.useEffect)(()=>{o.current=!1,e&&(document.getElementById("main")?.classList.add("scroll_lock"),window.onpopstate=()=>(o.current=!0,a(),()=>{document.getElementById("main")?.classList.remove("scroll_lock"),i.back()}))},[e]),r.jsx(r.Fragment,{children:e&&(0,r.jsxs)("div",{className:"fixed z-50 top-0 left-0 w-full h-[100dvh]",children:[r.jsx("div",{className:"w-full h-[100dvh] bg-black opacity-70 transition-all animate-[fadeIn_0.2s_ease-in-out]",onClick:()=>a()}),r.jsx("div",{className:"w-[100vw] max-w-[52rem] bg-white absolute bottom-0 left-[50%] translate-x-[-50%] rounded-t-[3rem] animate-[moveTop_0.3s_ease-in]",children:t})]})})}},1869:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var r=t(2295),s=t(3418),l=t(1223),i=t.n(l),o=t(2254),n=t(3729),d=t(6561);function c({title:e}){let a=(0,o.useRouter)(),t=(0,o.usePathname)(),[l,c]=(0,d.FV)(s.$0),[p,m]=(0,d.FV)(s.tu);(0,d.Zl)(s.D1),(0,d.Zl)(s.Zk);let[h,f]=(0,n.useState)("");return(0,n.useEffect)(()=>{f(window.location.search.substring(1))},[]),(0,r.jsxs)("header",{className:"w-full flex justify-between p-4 absolute top-0 left-0 z-50 bg-white",children:[r.jsx("div",{onClick:()=>{if(-1!==t.indexOf("/agree"))return c(2),a.back();if(h&&-1!==t.indexOf("check")){if(!window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"))return;a.push(`/promotion/pledge/form2/first?${h}`)}else if(!h&&-1!==t.indexOf("check")){if(!window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"))return;a.push("/promotion/pledge/form/first")}l>0?c(l-1):(m(0),a.back())},className:"px-[1.8rem] py-[1.6rem]",children:r.jsx(i(),{src:"/back.webp",alt:"뒤로가기",width:27,height:15,className:"w-[2.7rem] h-[1.5rem]"})}),r.jsx("h1",{className:"text-[2.1rem] flex items-center font-bold",children:e}),r.jsx("div",{className:"w-[6.3rem]"})]})}},7067:(e,a,t)=>{"use strict";t.d(a,{Z:()=>l});var r=t(2295),s=t(1275);function l({url:e=""}){return r.jsx("div",{className:"fixed z-[100] top-[-100dvh] left-[50%] translate-x-[-50%] w-full max-w-[52rem] h-[100dvh]",children:(0,r.jsxs)("div",{className:"fixed top-0 left-[50%] translate-x-[-50%] w-full max-w-[52rem] h-[100dvh] flex flex-col items-center justify-center",children:[r.jsx("div",{className:"mb-[20rem] text-[2rem] text-white",children:"서약서 생성중..."}),r.jsx(s.default,{link:e,time:1600})]})})}},4766:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l});var r=t(2295),s=t(6561);function l({children:e}){return r.jsx(s.Wh,{children:e})}t(3729)},3784:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l});var r=t(2295),s=t(4066);function l({children:e}){return r.jsx(s.J$,{value:{fetcher:e=>fetch(e).then(e=>e.json())},children:e})}},3418:(e,a,t)=>{"use strict";t.d(a,{$0:()=>s,$R:()=>n,D1:()=>i,EE:()=>d,H1:()=>m,J3:()=>u,M7:()=>g,MU:()=>p,W4:()=>c,Zk:()=>o,gy:()=>f,nQ:()=>h,tu:()=>l,uC:()=>x});var r=t(6561);let s=(0,r.cn)({key:"infoStepState",default:0}),l=(0,r.cn)({key:"formStepState",default:0}),i=(0,r.cn)({key:"AnswerUser1State",default:[]}),o=(0,r.cn)({key:"AnswerUser2State",default:[]});(0,r.cn)({key:"OpenModalState",default:!1});let n=(0,r.cn)({key:"OpenToastState",default:!1}),d=(0,r.cn)({key:"CapturedCardState",default:""}),c=(0,r.cn)({key:"CapturedDocumentState",default:""}),p=(0,r.cn)({key:"AnswerMood1State",default:""}),m=(0,r.cn)({key:"AnswerMood2State",default:""}),h=(0,r.cn)({key:"AnswerUser1MoodState",default:""}),f=(0,r.cn)({key:"AnswerUser2MoodState",default:""}),u=(0,r.cn)({key:"AnswerUser1NameState",default:{gender:"",name:""}}),x=(0,r.cn)({key:"AnswerUser2NameState",default:{gender:"",name:""}}),g=(0,r.cn)({key:"AnswerBabyNameState",default:{gender:"",name:""}})},3992:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>j,metadata:()=>b});var r=t(5036),s=t(9808),l=t.n(s);t(9064);var i=t(6843);let o=(0,i.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/SWRConfigContext.tsx`),{__esModule:n,$$typeof:d}=o,c=o.default,p=(0,i.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/RecoilContext.tsx`),{__esModule:m,$$typeof:h}=p,f=p.default;var u=t(4825),x=t.n(u),g=t(342),w=t.n(g);let b={title:"우리 가족 서약서(공동 육아 서약서):: 아이의 목소리로 쓰여진 가족의 약속",description:"아이의 목소리로 변환된 따뜻한 '공동육아 서약서'를 만들어보세요. 간단한 키워드만으로 아이의 입장에서 쓰여진 유쾌하고 따뜻한 서약서가 완성됩니다.",openGraph:{title:"우리 가족 서약서 : 키워드 입력만으로 소중한 서약서 만들기️❤️",description:"아이의 목소리를 담은 따뜻한 약속",url:"https://withmamapapa.net",images:["https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_main_v2.png"],type:"website",siteName:"육아응원 | 우리 가족 서약서",locale:"ko_KR"},applicationName:"육아응원 | 우리 가족 서약서",keywords:["공동육아","서약서","가족","아이의 목소리","따뜻한 메시지","가족의 약속","유아","가족 선물","육아응원"]};function j({children:e}){return(0,r.jsxs)("html",{lang:"ko-KR",className:l().className,children:[(0,r.jsxs)(w(),{children:[r.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.jsx("link",{rel:"preload",href:"/logo_white.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/logo.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/logo1.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/logo3.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/logo3_1.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/logo4.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/text_heart.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/bg_blur1.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/bg_blur2.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/bg.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/card_main_bg.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/card_main_bg2.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/card1.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/card2.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/check_off.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/check_on.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/guide_1.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/guide_2.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/guide_3.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/guide_4.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/hand.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/info1.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/info2.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/info3.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/info4.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/letter_bg.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/paper_bg.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/paper.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/profile_guid.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/receiver_bg.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/result_bg.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/share.webp",as:"image"}),r.jsx("link",{rel:"preload",href:"/star.webp",as:"image"})]}),(0,r.jsxs)("body",{suppressHydrationWarning:!0,children:[r.jsx(x(),{src:"https://developers.kakao.com/sdk/js/kakao.js",strategy:"afterInteractive"}),(0,r.jsxs)(f,{children:[r.jsx(c,{children:(0,r.jsxs)("div",{className:"responsive_layout",children:[r.jsx("main",{className:"overflow-hidden w-full h-[100dvh]",children:e}),r.jsx("div",{id:"bottom_por tal"})]})}),r.jsx("div",{id:"portal"})]})]})]})}},6722:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l,metadata:()=>s});var r=t(5036);let s={};function l({children:e}){return r.jsx("div",{className:"relative",children:e})}},9216:(e,a,t)=>{"use strict";t.d(a,{ZP:()=>i});let r=(0,t(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/InfoToolbar/index.tsx`),{__esModule:s,$$typeof:l}=r,i=r.default},3190:(e,a,t)=>{"use strict";t.d(a,{r:()=>i});var r=t(3292),s=t(1017),l=t.n(s);let i=(0,t(2).cache)(async e=>{let a=l().join(process.cwd(),"/src/data/",`data${e}.json`);return(0,r.readFile)(a,"utf8").then(e=>JSON.parse(e))})},3881:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});var r=t(337);let s=e=>[{type:"image/x-icon",sizes:"100x100",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},9064:()=>{}};