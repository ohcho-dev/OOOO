(()=>{var e={};e.id=303,e.ids=[303],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3292:e=>{"use strict";e.exports=require("fs/promises")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1494:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>l});var s=t(482),o=t(9108),i=t(2563),n=t.n(i),a=t(8300),c={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>a[e]);t.d(r,c);let l=["",{children:["(pages)",{children:["promotion",{children:["pledge",{children:["check",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2363)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/check/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,6722)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3992)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/check/page.tsx"],m="/(pages)/promotion/pledge/check/page",p={require:t,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(pages)/promotion/pledge/check/page",pathname:"/promotion/pledge/check",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6628:(e,r,t)=>{Promise.resolve().then(t.bind(t,7002)),Promise.resolve().then(t.bind(t,1869))},7002:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(2295),o=t(3418),i=t(6561),n=t(2254),a=t(3729),c=t(7067),l=t(6258);function d({survey1:e}){let r=(0,n.useRouter)(),[t,d]=(0,a.useState)(!1),m=(0,i.sJ)(o.D1),p=e=>{let r=m.filter(r=>r.s_id===e.id)[0];if(r)return e.choiceAnswer.filter(e=>e.answer_id===r.c_id)[0].answer_value},u=e=>{let r=m.filter(r=>r.s_id===e)[0];if(r&&r.sv)return r.sv};return(0,s.jsxs)("div",{className:"w-full h-[100dvh]",children:[s.jsx("div",{className:"pt-[8rem]",children:s.jsx("div",{className:"overflow-y-auto max-h-calcResultPage pb-[10rem]",children:e.map(e=>s.jsx("div",{className:"text-[5rem] mx-[3.5rem] mb-[3rem] px-[3rem] py-[2rem] border rounded-2xl",children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-[2.1rem] leading-[2.8rem] font-bold text-center",children:["step ",e.id]}),(0,s.jsxs)("div",{className:"my-[1.8rem]",children:[(0,s.jsxs)("div",{className:"text-[1.8rem] leading-[2.6rem] text-[#999]",children:["Q. ",e.choiceQuestion]}),(0,s.jsxs)("div",{className:"w-full flex text-[2.1rem] leading-[2.8rem] font-bold py-[1.5rem] mt-[1.2rem] rounded-[2rem] bg-white justify-start",children:[s.jsx("span",{className:"w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center bg-[#FFD3D0] text-white",children:"A"}),s.jsx("span",{className:"block ml-[1rem] mt-[0.4rem]",children:p(e)})]})]}),"mix"===e.type&&(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"w-full h-[0.1rem] bg-[#ccc] my-[2rem] "}),(0,s.jsxs)("div",{className:"text-[1.8rem] leading-[2.6rem] text-[#999]",children:["Q. ",e.subjectQuestion]}),(0,s.jsxs)("div",{className:"w-full flex text-[2.1rem] leading-[2.8rem] font-bold py-[1.5rem] mt-[1.2rem] rounded-[2rem] bg-white justify-start",children:[s.jsx("span",{className:"w-[4rem] min-w-[4rem] h-[4rem] rounded-[2rem] flex justify-center items-center bg-[#FFD3D0] text-white",children:"A"}),s.jsx("span",{className:"block ml-[1rem] mt-[0.4rem]",children:m&&u(e.id)})]})]})]})},e.id+e.choiceQuestion))})}),(0,s.jsxs)("div",{className:"absolute bottom-0 flex",children:[s.jsx("button",{className:"w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#cccccc]",onClick:()=>{window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?")&&r.push("/promotion/pledge/form/first")},children:"다시 하기"}),s.jsx("button",{className:"w-[26rem] max-w-[518px] h-[8rem] text-[2.4rem] bg-[#F9E9B3]",onClick:()=>d(!0),children:"서약서 생성"})]}),s.jsx(l.Z,{toggle:t,handleToggle:()=>d(e=>!e),children:s.jsx(c.Z,{url:"/promotion/pledge/result"})})]})}},2363:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(5036);let o=(0,t(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/CheckForm.tsx`),{__esModule:i,$$typeof:n}=o,a=o.default;var c=t(9216),l=t(3190);async function d(){let e=await (0,l.r)(1);return(0,s.jsxs)("div",{children:[s.jsx(c.ZP,{title:"최종 확인"}),s.jsx(a,{survey1:e.survey})]})}}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,356,748,604,107],()=>t(1494));module.exports=s})();