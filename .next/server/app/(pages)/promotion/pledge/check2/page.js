(()=>{var e={};e.id=564,e.ids=[564],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},3292:e=>{"use strict";e.exports=require("fs/promises")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},1017:e=>{"use strict";e.exports=require("path")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},3888:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>l});var s=t(482),i=t(9108),o=t(2563),n=t.n(o),a=t(8300),c={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>a[e]);t.d(r,c);let l=["",{children:["(pages)",{children:["promotion",{children:["pledge",{children:["check2",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1500)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/check2/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,6722)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3992)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/check2/page.tsx"],u="/(pages)/promotion/pledge/check2/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(pages)/promotion/pledge/check2/page",pathname:"/promotion/pledge/check2",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8380:(e,r,t)=>{Promise.resolve().then(t.bind(t,4858)),Promise.resolve().then(t.bind(t,1869))},4858:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var s=t(2295),i=t(3418),o=t(6561),n=t(2254),a=t(3729),c=t(6626),l=t(4138);async function d(e){let{data:r,error:t}=await l.O.from("pages").insert(e).select("id");return t?{data:null,error:t}:r[0].id}var u=t(6258),m=t(7067);function p({survey2:e}){let r=(0,n.useRouter)(),[t,l]=(0,o.FV)(i.D1),p=(0,o.sJ)(i.Zk),[x,h]=(0,a.useState)(""),[g,f]=(0,a.useState)(!1),[v,b]=(0,a.useState)(0);(0,a.useEffect)(()=>{h(window.location.search.substring(1))},[]),(0,a.useEffect)(()=>{x&&l((0,c.Z)(x))},[x]);let w=e=>{let r=p.filter(r=>r.s_id===e.id)[0];if(r)return e.choiceAnswer.filter(e=>e.answer_id===r.c_id)[0].answer_value},y=e=>{let r=p.filter(r=>r.s_id===e)[0];if(r&&r.sv)return r.sv},j=async()=>{if(t[6].sv&&t[7].sv){let e={user1_name:t[6].sv,user1_gender:t[6].c_id,baby_name:t[7].sv,user1_data:JSON.stringify(t),user2_data:JSON.stringify(p)};await d(e).then(e=>{e&&(b(e),f(!0))})}};return(0,s.jsxs)("div",{className:"w-full h-[100dvh]",children:[s.jsx("div",{className:"pt-[8rem]",children:s.jsx("div",{className:"overflow-y-auto max-h-calcResultPage pb-[10rem]",children:e.map(e=>s.jsx("div",{className:"text-[5rem] mx-[3.5rem] mb-[3rem] px-[3rem] py-[2rem] border rounded-2xl",children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-[2.1rem] leading-[2.8rem] font-bold text-center",children:["step ",e.id]}),(0,s.jsxs)("div",{className:"my-[1.8rem]",children:[(0,s.jsxs)("div",{className:"text-[1.8rem] leading-[2.6rem] text-[#999]",children:["Q. ",e.choiceQuestion]}),(0,s.jsxs)("div",{className:"w-full flex text-[2.1rem] leading-[2.8rem] font-bold py-[1.5rem] mt-[1.2rem] rounded-[2rem] bg-white justify-start",children:[s.jsx("span",{className:"w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center bg-[#FFD3D0] text-white",children:"A"}),s.jsx("span",{className:"block ml-[1rem] mt-[0.4rem]",children:w(e)})]})]}),"mix"===e.type&&(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"w-full h-[0.1rem] bg-[#ccc] my-[2rem] "}),(0,s.jsxs)("div",{className:"text-[1.8rem] leading-[2.6rem] text-[#999]",children:["Q. ",e.subjectQuestion]}),(0,s.jsxs)("div",{className:"w-full flex text-[2.1rem] leading-[2.8rem] font-bold py-[1.5rem] mt-[1.2rem] rounded-[2rem] bg-white justify-start",children:[s.jsx("span",{className:"w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center bg-[#FFD3D0] text-white",children:"A"}),s.jsx("span",{className:"block ml-[1rem] mt-[0.4rem]",children:p&&y(e.id)})]})]})]})},e.id+e.choiceQuestion))})}),(0,s.jsxs)("div",{className:"absolute bottom-0 flex",children:[s.jsx("button",{className:"w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#cccccc]",onClick:()=>{window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?")&&r.push(`/promotion/pledge/form2/first?${x}`)},children:"다시 하기"}),s.jsx("button",{className:"w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#F9E9B3]",onClick:j,children:"서약서 생성"})]}),s.jsx(u.Z,{toggle:g,handleToggle:()=>f(e=>!e),children:s.jsx(m.Z,{url:`/promotion/pledge/result2/${v}/share`})})]})}},6626:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var s=t(9722),i=t.n(s);function o(e){return JSON.parse(i().decompressFromEncodedURIComponent(e))}},4138:(e,r,t)=>{"use strict";t.d(r,{O:()=>s});let s=(0,t(8451).eI)("https://uvifmdoqwukwlxuhybjx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2aWZtZG9xd3Vrd2x4dWh5Ymp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2OTI3NjIsImV4cCI6MjAxODI2ODc2Mn0.DZdEQB5uEuriKnIBlQup6JODBOeiiHnP_BENUA7OFO8")},1500:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(5036);let i=(0,t(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/CheckForm2.tsx`),{__esModule:o,$$typeof:n}=i,a=i.default;var c=t(9216),l=t(3190);async function d(){let e=await (0,l.r)(2);return(0,s.jsxs)("div",{children:[s.jsx(c.ZP,{title:"최종 확인"}),s.jsx(a,{survey2:e.survey})]})}}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,356,748,604,722,451,107],()=>t(3888));module.exports=s})();