(()=>{var e={};e.id=92,e.ids=[92],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},1017:e=>{"use strict";e.exports=require("path")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},2489:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>p,routeModule:()=>u,tree:()=>l});var s=r(482),o=r(9108),i=r(2563),a=r.n(i),n=r(8300),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);r.d(t,c);let l=["",{children:["(pages)",{children:["promotion",{children:["pledge",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8708)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,6722)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3992)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/page.tsx"],d="/(pages)/promotion/pledge/page",m={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(pages)/promotion/pledge/page",pathname:"/promotion/pledge",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},610:(e,t,r)=>{Promise.resolve().then(r.bind(r,914))},914:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(2295),o=r(1050),i=r(1223),a=r.n(i),n=r(3729),c=r(1383);function l(){let[e,t]=(0,n.useState)(!1),r=new Date,i=`${r.getFullYear()}. ${r.getMonth()+1}. ${r.getDate()}`;return(0,n.useEffect)(()=>{t(!0);let e=setInterval(()=>{t(e=>!e)},5e3);return()=>clearInterval(e)},[]),s.jsx("div",{className:"card-wrap-main w-[12rem] h-[25.2rem]  mt-[2rem]",children:(0,s.jsxs)("div",{className:`card ${e?"rotate":""}`,children:[s.jsx("div",{className:"card-front w-[12rem] h-[19.2rem]",children:(0,s.jsxs)("div",{className:"relative w-[12rem] h-[19.2rem] rounded-[1.4rem] overflow-hidden shadow-md",children:[s.jsx(a(),{className:"h-[19.2rem]",src:"/card_main_bg.webp",alt:"서약서 카드",width:"120",height:"192"}),s.jsx(c.Z,{style:{position:"absolute",top:"0.6rem",left:"50%",transform:"translateX(-50%)",width:"7rem"}}),s.jsx("div",{className:"relative mt-[-1.8rem] text-center text-[0.5rem]",children:(0,o._)(i)})]})}),s.jsx("div",{className:"card-back w-[12rem] h-[19.2rem]",children:s.jsx("div",{className:"relative w-[12rem] h-[19.2rem] rounded-[1.4rem] overflow-hidden shadow-md",children:s.jsx(a(),{className:"h-[19.2rem]",src:"/card_main_bg_2.webp",alt:"서약서 카드",width:"120",height:"192"})})})]})})}var p=r(3418),d=r(6626),m=r(2254),u=r(6561);function h({count:e=0}){let t=(0,m.useRouter)(),r=(0,u.Zl)(p.D1),[o,i]=(0,n.useState)(""),c=new Date;return c.getFullYear(),c.getMonth(),c.getDate(),(0,n.useEffect)(()=>{i(window.location.search.substring(1))},[]),(0,n.useEffect)(()=>{o&&r((0,d.Z)(o))},[o]),(0,s.jsxs)("section",{className:"w-full max-w-[52rem] h-[100dvh] flex justify-between flex-col",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[s.jsx(a(),{className:"w-[16.2rem] h-[5.6rem]",src:"/logo.webp",alt:"육아응원",width:162,height:56}),s.jsx(a(),{className:"w-[4.3rem] h-[4.3rem] mt-[1.7rem]",src:"/icon_x.webp",alt:"colaboration",width:43,height:43}),(0,s.jsxs)("h4",{className:"text-[2.2rem] mt-[0.8rem] leading-[2.8rem]",children:[s.jsx("b",{children:"아이의 목소리"}),"를 담은 우리 ",s.jsx("b",{children:"가족 서약서"})]}),s.jsx(a(),{className:"w-[29.8rem] h-[26.7rem] mt-[2rem]",src:"/text_heart.webp",alt:"엄마 아빠 마음을 알려줘",width:298,height:267}),o&&(0,s.jsxs)("h2",{className:"text-[2.4rem] mt-[8rem] text-center",children:[s.jsx("b",{children:"배우자와 함께 가족 서약서"}),"를 만들어보세요!",s.jsx("br",{}),"먼저 참여한 배우자가 ",s.jsx("b",{children:"당신을 기다리고 있어요!"})]}),!o&&s.jsx(l,{}),(0,s.jsxs)("div",{className:"text-[1.6rem] mt-[4rem]",children:["지금까지 ",(0,s.jsxs)("b",{children:[e,"개"]}),"의 가족 서약서가 생성됐어요!"]})]}),s.jsx("button",{onClick:()=>t.push(o?`/promotion/pledge/info?${o}`:"/promotion/pledge/info"),className:"w-full min-h-[8rem] bg-[#F9E9B3] text-[2.1rem]",children:"참여하기"})]})}},6626:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(9722),o=r.n(s);function i(e){return JSON.parse(o().decompressFromEncodedURIComponent(e))}},8708:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p,generateMetadata:()=>d});var s=r(5036),o=r(274);let i=(0,r(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/PledgeMainPage.tsx`),{__esModule:a,$$typeof:n}=i,c=i.default,l=(0,r(2).cache)(async()=>(0,o.ty)());async function p(){let e=await l();return s.jsx(c,{count:e.count})}async function d({params:{id:e}}){return await l(),{openGraph:{title:"우리 가족 서약서 : 키워드 입력만으로 소중한 서약서 만들기️❤️",description:"아이의 목소리를 담은 유쾌한 약속",images:["https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_user_1.png"],url:"https://oooo-pi.vercel.app/promotion/pledge"}}}},274:(e,t,r)=>{"use strict";r.d(t,{ty:()=>o,Sq:()=>i});let s=(0,r(4186).eI)("https://uvifmdoqwukwlxuhybjx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2aWZtZG9xd3Vrd2x4dWh5Ymp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2OTI3NjIsImV4cCI6MjAxODI2ODc2Mn0.DZdEQB5uEuriKnIBlQup6JODBOeiiHnP_BENUA7OFO8");async function o(){let{data:e,error:t}=await s.from("pages").select("*");if(t)return{data:null,error:t};let r=e.length;return{data:e,count:r,error:t}}async function i(e){let{data:t,error:r}=await s.from("pages").select("*").eq("id",e).single();return{data:t,error:r}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,356,748,604,928,186,722,934],()=>r(2489));module.exports=s})();