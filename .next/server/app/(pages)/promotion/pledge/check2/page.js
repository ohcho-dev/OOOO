(()=>{var e={};e.id=564,e.ids=[564],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},3292:e=>{"use strict";e.exports=require("fs/promises")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},1017:e=>{"use strict";e.exports=require("path")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},3888:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=s(482),i=s(9108),a=s(2563),n=s.n(a),o=s(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["(pages)",{children:["promotion",{children:["pledge",{children:["check2",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1500)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/check2/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,6722)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,3992)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/check2/page.tsx"],u="/(pages)/promotion/pledge/check2/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(pages)/promotion/pledge/check2/page",pathname:"/promotion/pledge/check2",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8380:(e,t,s)=>{Promise.resolve().then(s.bind(s,4858)),Promise.resolve().then(s.bind(s,1869))},1275:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(2295),i=s(1223),a=s.n(i),n=s(2254),o=s(3729);function l({link:e,time:t=2600}){let s=(0,n.useRouter)();return(0,o.useEffect)(()=>{if(e){let r=setTimeout(()=>{s.push(e)},t);return()=>clearTimeout(r)}},[e]),(0,r.jsxs)("section",{children:[r.jsx("div",{className:"animate-[logo1_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-220%] text-[#F9E9B3]",children:r.jsx(a(),{src:"/logo1.webp",alt:"육",width:30,height:30})}),r.jsx("div",{className:"animate-[logo2_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-110%] text-[#F9E9B3]",children:r.jsx(a(),{src:"/logo1.webp",alt:"아",width:30,height:30})}),r.jsx("div",{className:"animate-[logo3_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-0%] text-[#FFD3D0]",children:r.jsx(a(),{src:"/logo3.webp",alt:"응",width:30,height:30})}),r.jsx("div",{className:"animate-[logo4_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[110%] text-[#F25D24]",children:r.jsx(a(),{src:"/logo4.webp",alt:"원",width:30,height:30})}),r.jsx("div",{className:"animate-[logo5_4s_ease-in-out] absolute left-[50%] top-[50%] translate-x-[-10%] translate-y-[-100%] ",children:r.jsx(a(),{src:"/logo3_1.webp",alt:"|||",width:38,height:17.5})})]})}},4858:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var r=s(2295),i=s(3418),a=s(6561),n=s(2254),o=s(3729),l=s(6626),c=s(4138);async function d(e){let{data:t,error:s}=await c.O.from("pages").insert(e).select("id");return s?{data:null,error:s}:t[0].id}var u=s(6258),m=s(7067),p=s(5195),x=s.n(p);function h({survey2:e}){let t=(0,n.useRouter)(),[s,c]=(0,a.FV)(i.D1),p=(0,a.sJ)(i.Zk),[h,f]=(0,o.useState)(""),[g,v]=(0,o.useState)(!1),[w,j]=(0,o.useState)(0);(0,o.useEffect)(()=>{f(window.location.search.substring(1))},[]),(0,o.useEffect)(()=>{h&&c((0,l.Z)(h))},[h]);let b=e=>{let t=p.filter(t=>t.s_id===e.id)[0];if(t)return e.choiceAnswer.filter(e=>e.answer_id===t.c_id)[0].answer_value},y=e=>{let t=p.filter(t=>t.s_id===e)[0];if(t&&t.sv)return t.sv},_=async()=>{if(s[6].sv&&s[7].sv){let e={user1_name:s[6].sv,user1_gender:s[6].c_id,baby_name:s[7].sv,user1_data:JSON.stringify(s),user2_data:JSON.stringify(p)};await d(e).then(e=>{e&&(j(e),v(!0))})}};return(0,r.jsxs)("div",{className:"w-full h-[100dvh]",children:[(0,r.jsxs)("div",{className:"pt-[8rem]",children:[(0,r.jsxs)("div",{className:"mb-[2rem] w-full",children:[r.jsx("ins",{className:"kakao_ad_area",style:{display:"none"},"data-ad-unit":"DAN-Gcetgi93xV2G0D9x","data-ad-width":"320","data-ad-height":"50"}),r.jsx(x(),{type:"text/javascript",src:"//t1.daumcdn.net/kas/static/ba.min.js",async:!0})]}),r.jsx("div",{className:"overflow-y-auto max-h-calcResultPage pb-[20rem]",children:e.map(e=>r.jsx("div",{className:"text-[5rem] mx-[3.5rem] mb-[3rem] px-[3rem] py-[2rem] border rounded-2xl",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"text-[2.1rem] leading-[2.8rem] font-bold text-center",children:["step ",e.id]}),(0,r.jsxs)("div",{className:"my-[1.8rem]",children:[(0,r.jsxs)("div",{className:"text-[1.8rem] leading-[2.6rem] text-[#999]",children:["Q. ",e.choiceQuestion]}),(0,r.jsxs)("div",{className:"w-full flex text-[2.1rem] leading-[2.8rem] font-bold py-[1.5rem] mt-[1.2rem] rounded-[2rem] bg-white justify-start",children:[r.jsx("span",{className:"w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center bg-[#FFD3D0] text-white",children:"A"}),r.jsx("span",{className:"block ml-[1rem] mt-[0.4rem]",children:b(e)})]})]}),"mix"===e.type&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"w-full h-[0.1rem] bg-[#ccc] my-[2rem] "}),(0,r.jsxs)("div",{className:"text-[1.8rem] leading-[2.6rem] text-[#999]",children:["Q. ",e.subjectQuestion]}),(0,r.jsxs)("div",{className:"w-full flex text-[2.1rem] leading-[2.8rem] font-bold py-[1.5rem] mt-[1.2rem] rounded-[2rem] bg-white justify-start",children:[r.jsx("span",{className:"w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center bg-[#FFD3D0] text-white",children:"A"}),r.jsx("span",{className:"block ml-[1rem] mt-[0.4rem]",children:p&&y(e.id)})]})]})]})},e.id+e.choiceQuestion))})]}),(0,r.jsxs)("div",{className:"absolute bottom-0 flex",children:[r.jsx("button",{className:"w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#cccccc]",onClick:()=>{window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?")&&t.push(`/promotion/pledge/form2/first?${h}`)},children:"다시 하기"}),r.jsx("button",{className:"w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#F9E9B3]",onClick:_,children:"서약서 생성"})]}),r.jsx(u.Z,{toggle:g,handleToggle:()=>v(e=>!e),children:r.jsx(m.Z,{url:`/promotion/pledge/result2/${w}/share`})})]})}},6258:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(2295),i=s(3729);s(1202);var a=s(2254);let n=({toggle:e,handleToggle:t,children:s})=>{let n=(0,a.useRouter)(),o=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{o.current=!1,e&&(document.getElementById("main")?.classList.add("scroll_lock"),window.onpopstate=()=>(o.current=!0,t(),()=>{document.getElementById("main")?.classList.remove("scroll_lock"),n.back()}))},[e]),r.jsx(r.Fragment,{children:e&&(0,r.jsxs)("div",{className:"fixed z-50 top-0 left-0 w-full h-[100dvh]",children:[r.jsx("div",{className:"w-full h-[100dvh] bg-black opacity-70 transition-all animate-[fadeIn_0.2s_ease-in-out]",onClick:()=>t()}),r.jsx("div",{className:"w-[100vw] max-w-[52rem] bg-white absolute bottom-0 left-[50%] translate-x-[-50%] rounded-t-[3rem] animate-[moveTop_0.3s_ease-in]",children:s})]})})}},7067:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(2295),i=s(1275);function a({url:e=""}){return r.jsx("div",{className:"fixed z-[100] top-[-100dvh] left-[50%] translate-x-[-50%] w-full max-w-[52rem] h-[100dvh]",children:(0,r.jsxs)("div",{className:"fixed top-0 left-[50%] translate-x-[-50%] w-full max-w-[52rem] h-[100dvh] flex flex-col items-center justify-center",children:[r.jsx("div",{className:"mb-[20rem] text-[2rem] text-white",children:"서약서 생성중..."}),r.jsx(i.default,{link:e,time:1600})]})})}},6626:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(9722),i=s.n(r);function a(e){return JSON.parse(i().decompressFromEncodedURIComponent(e))}},4138:(e,t,s)=>{"use strict";s.d(t,{O:()=>r});let r=(0,s(8451).eI)("https://uvifmdoqwukwlxuhybjx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2aWZtZG9xd3Vrd2x4dWh5Ymp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2OTI3NjIsImV4cCI6MjAxODI2ODc2Mn0.DZdEQB5uEuriKnIBlQup6JODBOeiiHnP_BENUA7OFO8")},1500:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(5036);let i=(0,s(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/CheckForm2.tsx`),{__esModule:a,$$typeof:n}=i,o=i.default;var l=s(9216),c=s(3190);async function d(){let e=await (0,c.r)(2);return(0,r.jsxs)("div",{children:[r.jsx(l.ZP,{title:"최종 확인"}),r.jsx(o,{survey2:e.survey})]})}},3190:(e,t,s)=>{"use strict";s.d(t,{r:()=>n});var r=s(3292),i=s(1017),a=s.n(i);let n=(0,s(2).cache)(async e=>{let t=a().join(process.cwd(),"/src/data/",`data${e}.json`);return(0,r.readFile)(t,"utf8").then(e=>JSON.parse(e))})}};var t=require("../../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,356,803,604,722,451,743],()=>s(3888));module.exports=r})();