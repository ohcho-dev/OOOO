exports.id=89,exports.ids=[89],exports.modules={9287:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,6840,23)),Promise.resolve().then(a.t.bind(a,8771,23)),Promise.resolve().then(a.t.bind(a,3225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,3982,23))},3749:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,2704,23)),Promise.resolve().then(a.bind(a,4766)),Promise.resolve().then(a.bind(a,3784))},5303:()=>{},1869:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>p});var s=a(2295),t=a(3418),l=a(1223),i=a.n(l),o=a(2254),n=a(3729),d=a(6561);function p({title:e}){let r=(0,o.useRouter)(),a=(0,o.usePathname)(),[l,p]=(0,d.FV)(t.$0),[c,f]=(0,d.FV)(t.tu);(0,d.Zl)(t.D1),(0,d.Zl)(t.Zk);let[m,h]=(0,n.useState)("");return(0,n.useEffect)(()=>{h(window.location.search.substring(1))},[]),(0,s.jsxs)("header",{className:"w-full flex justify-between p-4 absolute top-0 left-0 z-50 bg-white",children:[s.jsx("div",{onClick:()=>{if(-1!==a.indexOf("/agree"))return p(2),r.back();if(m&&-1!==a.indexOf("check")){if(!window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"))return;r.push(`/promotion/pledge/form2/first?${m}`)}else if(!m&&-1!==a.indexOf("check")){if(!window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"))return;r.push("/promotion/pledge/form/first")}l>0?p(l-1):(f(0),r.back())},className:"px-[1.8rem] py-[1.6rem]",children:s.jsx(i(),{src:"/back.webp",alt:"뒤로가기",width:27,height:15,className:"w-[2.7rem] h-[1.5rem]"})}),s.jsx("h1",{className:"text-[2.1rem] flex items-center font-bold",children:e}),s.jsx("div",{className:"w-[6.3rem]"})]})}},4766:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>l});var s=a(2295),t=a(6561);function l({children:e}){return s.jsx(t.Wh,{children:e})}a(3729)},3784:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>l});var s=a(2295),t=a(4066);function l({children:e}){return s.jsx(t.J$,{value:{fetcher:e=>fetch(e).then(e=>e.json())},children:e})}},3418:(e,r,a)=>{"use strict";a.d(r,{$0:()=>t,$R:()=>n,D1:()=>i,EE:()=>d,H1:()=>f,J3:()=>g,M7:()=>x,MU:()=>c,W4:()=>p,Zk:()=>o,gy:()=>h,nQ:()=>m,tu:()=>l,uC:()=>u});var s=a(6561);let t=(0,s.cn)({key:"infoStepState",default:0}),l=(0,s.cn)({key:"formStepState",default:0}),i=(0,s.cn)({key:"AnswerUser1State",default:[]}),o=(0,s.cn)({key:"AnswerUser2State",default:[]});(0,s.cn)({key:"OpenModalState",default:!1});let n=(0,s.cn)({key:"OpenToastState",default:!1}),d=(0,s.cn)({key:"CapturedCardState",default:""}),p=(0,s.cn)({key:"CapturedDocumentState",default:""}),c=(0,s.cn)({key:"AnswerMood1State",default:""}),f=(0,s.cn)({key:"AnswerMood2State",default:""}),m=(0,s.cn)({key:"AnswerUser1MoodState",default:""}),h=(0,s.cn)({key:"AnswerUser2MoodState",default:""}),g=(0,s.cn)({key:"AnswerUser1NameState",default:{gender:"",name:""}}),u=(0,s.cn)({key:"AnswerUser2NameState",default:{gender:"",name:""}}),x=(0,s.cn)({key:"AnswerBabyNameState",default:{gender:"",name:""}})},7089:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>j,metadata:()=>k});var s=a(5036),t=a(9808),l=a.n(t);a(9064);var i=a(6843);let o=(0,i.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/SWRConfigContext.tsx`),{__esModule:n,$$typeof:d}=o,p=o.default,c=(0,i.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/RecoilContext.tsx`),{__esModule:f,$$typeof:m}=c,h=c.default;var g=a(4825),u=a.n(g),x=a(342),w=a.n(x);let b=({ga_id:e})=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(u(),{async:!0,src:`https://www.googletagmanager.com/gtag/js? 
      id=${e}`}),s.jsx(u(),{id:"google-analytics",dangerouslySetInnerHTML:{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${e}');
        `}})]}),k={title:"우리 가족 서약서(공동 육아 서약서):: 아이의 목소리로 쓰여진 가족의 약속",description:"아이의 목소리로 변환된 따뜻한 '공동육아 서약서'를 만들어보세요. 간단한 키워드만으로 아이의 입장에서 쓰여진 유쾌하고 따뜻한 서약서가 완성됩니다.",openGraph:{title:"우리 가족 서약서 : 키워드 입력만으로 소중한 서약서 만들기️❤️",description:"아이의 목소리를 담은 따뜻한 약속",url:"https://withmamapapa.net",images:["https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_main_v2.png"],type:"website",siteName:"육아응원 | 우리 가족 서약서",locale:"ko_KR"},applicationName:"육아응원 | 우리 가족 서약서",keywords:["공동육아","서약서","가족","아이의 목소리","따뜻한 메시지","가족의 약속","유아","가족 선물","육아응원"],verification:{google:"3dR9GjCoXOG9jeYBGrIFOvKtOPPJr0_WGlpyxFB7EvE",other:{"naver-site-verification":"7b8d6a069b66378c1e6c95c04dfc95a647ff458b"}},robots:{index:!0,follow:!0}};function j({children:e}){return(0,s.jsxs)("html",{lang:"ko-KR",className:l().className,children:[(0,s.jsxs)(w(),{children:[s.jsx("link",{rel:"preload",href:"/logo_white.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo3.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo3_1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/logo4.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/text_heart.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/bg_blur1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/bg_blur2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card_main_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card_main_bg2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/card2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/check_off.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/check_on.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_3.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/guide_4.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/hand.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info1.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info2.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info3.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/info4.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/letter_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/paper_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/paper.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/profile_guid.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/receiver_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/result_bg.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/share.webp",as:"image"}),s.jsx("link",{rel:"preload",href:"/star.webp",as:"image"})]}),(0,s.jsxs)("body",{suppressHydrationWarning:!0,children:[s.jsx(b,{ga_id:"G-1J55DTRV3R"}),s.jsx(u(),{src:"https://developers.kakao.com/sdk/js/kakao.js",strategy:"afterInteractive"}),(0,s.jsxs)(h,{children:[s.jsx(p,{children:(0,s.jsxs)("div",{className:"responsive_layout",children:[s.jsx("main",{className:"overflow-hidden w-full h-[100dvh]",children:e}),s.jsx("div",{id:"bottom_por tal"})]})}),s.jsx("div",{id:"portal"})]})]})]})}},6722:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>l,metadata:()=>t});var s=a(5036);let t={};function l({children:e}){return s.jsx("div",{className:"relative",children:e})}},9216:(e,r,a)=>{"use strict";a.d(r,{ZP:()=>i});let s=(0,a(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/InfoToolbar/index.tsx`),{__esModule:t,$$typeof:l}=s,i=s.default},3881:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>t});var s=a(337);let t=e=>[{type:"image/x-icon",sizes:"100x100",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},9064:()=>{}};