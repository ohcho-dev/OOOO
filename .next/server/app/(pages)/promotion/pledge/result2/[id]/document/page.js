(()=>{var e={};e.id=560,e.ids=[560],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},1017:e=>{"use strict";e.exports=require("path")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},9382:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>o,routeModule:()=>x,tree:()=>d});var t=s(482),a=s(9108),l=s(2563),i=s.n(l),n=s(8300),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);s.d(r,c);let d=["",{children:["(pages)",{children:["promotion",{children:["pledge",{children:["result2",{children:["[id]",{children:["document",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2063)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/result2/[id]/document/page.tsx"]}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,6722)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,7089)),"/Users/ochihyo/workspace/oooo-production/src/app/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["/Users/ochihyo/workspace/oooo-production/src/app/(pages)/promotion/pledge/result2/[id]/document/page.tsx"],m="/(pages)/promotion/pledge/result2/[id]/document/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/promotion/pledge/result2/[id]/document/page",pathname:"/promotion/pledge/result2/[id]/document",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9287:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},3749:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,2704,23)),Promise.resolve().then(s.bind(s,4766)),Promise.resolve().then(s.bind(s,3784))},5263:(e,r,s)=>{Promise.resolve().then(s.bind(s,4418))},5303:()=>{},8020:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>l});var t=s(2295),a=s(2254);function l({onClick:e,url:r="",label:s,status:l=!1}){let i=(0,a.useRouter)();return t.jsx("button",{className:`w-[100vw] max-w-[518px] h-[8rem] text-[2.4rem] fixed bottom-0 ${l?"bg-[#F9E9B3]":"bg-[#cccccc] text-white"}`,onClick:e||(()=>i.push(r)),disabled:!l,children:s})}},4418:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>u});var t=s(2295),a=s(3418),l=s(9282),i=s(3729),n=s(6561);function c({survey1:e,survey2:r}){let[s,c]=(0,n.FV)(a.D1),[d,o]=(0,n.FV)(a.Zk),[m,u]=(0,i.useState)([]),[x,p]=(0,i.useState)([]),h=(0,i.useRef)(null),j=new Date,v=`${j.getFullYear()}. ${j.getMonth()+1}. ${j.getDate()}`,[b,g]=(0,n.FV)(a.W4);(0,i.useEffect)(()=>{h.current&&m&&x&&f()},[h,m,x]);let f=async()=>{let e=h.current;e&&g((await (0,l.Z)(e)).toDataURL("image/png"))};return((0,i.useEffect)(()=>{if(s){let r=[];s.map(s=>{let t=e.filter(e=>e.id===s.s_id)[0].choiceAnswer.filter(e=>e.answer_id===s.c_id)[0].answer_value,a={...s,c_value:t};return r.push(a)}),u(r)}},[s]),(0,i.useEffect)(()=>{if(d){let e=[];d.map(s=>{let t=r.filter(e=>e.id===s.s_id)[0].choiceAnswer.filter(e=>e.answer_id===s.c_id)[0].answer_value,a={...s,c_value:t};return e.push(a)}),p(e)}},[d]),m.length<7||x.length<6||!m[7].sv)?t.jsx("div",{children:"Loading..."}):(0,t.jsxs)("div",{className:"relative overflow-y-scroll overflow-x-hidden w-[52rem] h-[100dvh] max-h-calcDocumentPage text-[2rem] leading-[2.8rem]",children:[(0,t.jsxs)("div",{ref:h,className:"absolute top-[0] z-10 bg-[url(/paper_bg.webp)] w-[52rem] h-[190.7rem] bg-cover bg-center p-[3rem] leading-[2.8rem]",children:[(0,t.jsxs)("div",{className:"text-[2rem] font-bold pt-[5.8rem] ml-[6.7rem]",children:[m[7]?.sv,"네 서약서"]}),(0,t.jsxs)("div",{className:"text-[2.8rem] leading-[4rem] mt-[0.9rem] ml-[6.7rem]",children:["엄마 ♥️ 아빠!",t.jsx("br",{}),"함께 약속해요!"]}),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsxs)("div",{className:"mt-[20.4rem] text-[2.2rem] font-bold leading-[3.6rem]",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:[m[0].c_value," "]}),"우리 ",x[6].c_value," ",x[6].sv||""]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:[x[0].c_value," "]}),"우리 ",m[6].c_value," ",m[6].sv||""]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:["세상에 하나뿐인"," "]}),m[7].c_value," ",m[7].sv||""]})]}),(0,t.jsxs)("div",{className:"mt-[3.5rem] text-[2rem]",children:["우리 가족은"," ",t.jsx("b",{className:"text-[#F65B5B]",children:x[2].c_value!==m[2].c_value?`${x[2].c_value}과 ${m[2].c_value}`:`${m[2].c_value}`}),"이 넘치는 화목한 가정을",t.jsx("br",{}),"만들기 위해 아래와 같이 서약합니다."]}),(0,t.jsxs)("div",{className:"mt-[4rem]",children:[t.jsx("div",{className:"text-[2.2rem]",children:(0,t.jsxs)("b",{children:[(0,t.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:[m[6].c_value,"!"]}),t.jsx("br",{}),(0,t.jsxs)("div",{className:"mt-[2.3rem]",children:[x[6].c_value,"에게 이렇게 약속해줘요!"]})]})}),(0,t.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,t.jsxs)("div",{children:["첫째, ",1===m[6].c_id?"남편이":"아내가"," ",t.jsx("b",{children:x[3].c_value}),"에면",t.jsx("br",{}),"늘 곁에서 도우며 함께 하겠습니다."]}),t.jsx("br",{}),(0,t.jsxs)("div",{children:["둘째, ",t.jsx("b",{children:x[4].c_value}),"으로 고민하는",t.jsx("br",{}),1===m[6].c_id?"남편":"아내"," 마음을 이해하고 함께 풀어가겠습니다."]}),t.jsx("br",{}),(0,t.jsxs)("div",{children:["셋째, 언제나 아이에게 ",t.jsx("b",{children:x[5].c_value}),t.jsx("br",{}),1===m[6].c_id?"엄마":"아빠","가 되겠습니다."]})]})]}),(0,t.jsxs)("div",{className:"mt-[5.3rem]",children:[t.jsx("div",{className:"text-[2.2rem]",children:(0,t.jsxs)("b",{children:[(0,t.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:[x[6].c_value,"!"]}),t.jsx("br",{}),(0,t.jsxs)("div",{className:"mt-[2.5rem]",children:[m[6].c_value,"에게 이렇게 약속해줘요!"]})]})}),(0,t.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,t.jsxs)("div",{children:["첫째, ",1===x[6].c_id?"남편이":"아내가"," ",t.jsx("b",{children:m[3].c_value}),"에면",t.jsx("br",{}),"늘 곁에서 도우며 함께 하겠습니다."]}),t.jsx("br",{}),(0,t.jsxs)("div",{children:["둘째, ",t.jsx("b",{children:m[4].c_value}),"으로 고민하는",t.jsx("br",{}),1===x[6].c_id?"남편":"아내"," 마음을 이해하고 함께 풀어가겠습니다."]}),t.jsx("br",{}),(0,t.jsxs)("div",{children:["셋째, 언제나 아이에게 ",t.jsx("b",{children:m[5].c_value}),t.jsx("br",{}),1===x[6].c_id?"엄마":"아빠","가 되겠습니다."]})]})]}),(0,t.jsxs)("div",{className:"mt-[3.9rem]",children:[t.jsx("div",{className:"text-[2.2rem]",children:(0,t.jsxs)("b",{children:[(0,t.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:["나 ",m[7].sv||"","!"]}),t.jsx("br",{}),t.jsx("div",{className:"mt-[2.5rem]",children:"엄마♥️아빠랑 이렇게 약속할게요!"})]})}),(0,t.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,t.jsxs)("div",{children:["하나, ",m[6].c_value,"의"," ",t.jsx("b",{children:m[1].c_value}),"과 ",x[6].c_value,"의 ",t.jsx("b",{children:x[1].c_value}),"을",t.jsx("br",{}),"배우고 닮아갈게요!"]}),t.jsx("br",{}),(0,t.jsxs)("div",{children:["둘,"," ",t.jsx("b",{children:m[2].c_value!==x[2].c_value?`${x[2].c_value}과 ${m[2].c_value}`:x[2].c_value})," ","안에서 행복한 아이로 자랄게요!"]})]})]}),t.jsx("div",{className:"text-center mt-[8rem] text-[2rem]",children:v})]})]}),(0,t.jsxs)("div",{className:"absolute top-[0] z-20 bg-[url(/paper_bg.webp)] w-[52rem] h-[190.7rem] bg-cover bg-center p-[3rem] leading-[2.8rem]",children:[(0,t.jsxs)("div",{className:"text-[2rem] font-bold pt-[5.8rem] ml-[6.7rem]",children:[m[7]?.sv,"네 서약서"]}),(0,t.jsxs)("div",{className:"text-[2.8rem] leading-[4rem] mt-[0.9rem] ml-[6.7rem]",children:["엄마 ♥️ 아빠!",t.jsx("br",{}),"함께 약속해요!"]}),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsxs)("div",{className:"mt-[20.4rem] text-[2.2rem] font-bold leading-[3.6rem]",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:[m[0].c_value," "]}),"우리 ",x[6].c_value," ",x[6].sv||""]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:[x[0].c_value," "]}),"우리 ",m[6].c_value," ",m[6].sv||""]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:["세상에 하나뿐인"," "]}),m[7].c_value," ",m[7].sv||""]})]}),(0,t.jsxs)("div",{className:"mt-[3.5rem] text-[2rem]",children:["우리 가족은"," ",t.jsx("b",{className:"text-[#F65B5B]",children:x[2].c_value!==m[2].c_value?`${x[2].c_value}과 ${m[2].c_value}`:`${m[2].c_value}`}),"이 넘치는 화목한 가정을",t.jsx("br",{}),"만들기 위해 아래와 같이 서약합니다."]}),(0,t.jsxs)("div",{className:"mt-[5.1rem]",children:[t.jsx("div",{className:"text-[2.2rem]",children:(0,t.jsxs)("b",{children:[(0,t.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:[m[6].c_value,"!"]}),t.jsx("br",{}),(0,t.jsxs)("div",{className:"mt-[2.3rem]",children:[x[6].c_value,"에게 이렇게 약속해줘요!"]})]})}),(0,t.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,t.jsxs)("div",{children:["첫째, ",1===m[6].c_id?"남편이":"아내가"," ",t.jsx("b",{children:x[3].c_value}),"에면",t.jsx("br",{}),"늘 곁에서 도우며 함께 하겠습니다."]}),t.jsx("br",{}),(0,t.jsxs)("div",{children:["둘째, ",t.jsx("b",{children:x[4].c_value}),"으로 고민하는",t.jsx("br",{}),1===m[6].c_id?"남편":"아내"," 마음을 이해하고 함께 풀어가겠습니다."]}),t.jsx("br",{}),(0,t.jsxs)("div",{children:["셋째, 언제나 아이에게 ",t.jsx("b",{children:x[5].c_value}),t.jsx("br",{}),1===m[6].c_id?"엄마":"아빠","가 되겠습니다."]})]})]}),(0,t.jsxs)("div",{className:"mt-[5.3rem]",children:[t.jsx("div",{className:"text-[2.2rem]",children:(0,t.jsxs)("b",{children:[(0,t.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:[x[6].c_value,"!"]}),t.jsx("br",{}),(0,t.jsxs)("div",{className:"mt-[2.5rem]",children:[m[6].c_value,"에게 이렇게 약속해줘요!"]})]})}),(0,t.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,t.jsxs)("div",{children:["첫째, ",1===x[6].c_id?"남편이":"아내가"," ",t.jsx("b",{children:m[3].c_value}),"에면",t.jsx("br",{}),"늘 곁에서 도우며 함께 하겠습니다."]}),t.jsx("br",{}),(0,t.jsxs)("div",{children:["둘째, ",t.jsx("b",{children:m[4].c_value}),"으로 고민하는",t.jsx("br",{}),1===x[6].c_id?"남편":"아내"," 마음을 이해하고 함께 풀어가겠습니다."]}),t.jsx("br",{}),(0,t.jsxs)("div",{children:["셋째, 언제나 아이에게 ",t.jsx("b",{children:m[5].c_value}),t.jsx("br",{}),1===x[6].c_id?"엄마":"아빠","가 되겠습니다."]})]})]}),(0,t.jsxs)("div",{className:"mt-[3.9rem]",children:[t.jsx("div",{className:"text-[2.2rem]",children:(0,t.jsxs)("b",{children:[(0,t.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:["나 ",m[7].sv||"","!"]}),t.jsx("br",{}),t.jsx("div",{className:"mt-[2.5rem]",children:"엄마♥️아빠랑 이렇게 약속할게요!"})]})}),(0,t.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,t.jsxs)("div",{children:["하나, ",m[6].c_value,"의"," ",t.jsx("b",{children:m[1].c_value}),"과 ",x[6].c_value,"의 ",t.jsx("b",{children:x[1].c_value}),"을",t.jsx("br",{}),"배우고 닮아갈게요!"]}),t.jsx("br",{}),(0,t.jsxs)("div",{children:["둘,"," ",t.jsx("b",{children:m[2].c_value!==x[2].c_value?`${x[2].c_value}과 ${m[2].c_value}`:x[2].c_value})," ","안에서 행복한 아이로 자랄게요!"]})]})]}),t.jsx("div",{className:"text-center mt-[8rem] text-[2rem]",children:v})]})]})]})}var d=s(8020),o=s(2254),m=s(1869);function u({id:e,survey1:r,survey2:s}){let a=(0,o.useRouter)();return(0,t.jsxs)("div",{children:[t.jsx(m.default,{title:"서약서"}),t.jsx("div",{className:"w-full h-[6.7rem] "}),t.jsx(c,{survey1:r,survey2:s}),t.jsx(d.default,{label:"서약서를 간직하고 싶다면?",status:!0,onClick:()=>a.push(`/promotion/pledge/result2/${e}/guide`)})]})}},1869:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>o});var t=s(2295),a=s(3418),l=s(1223),i=s.n(l),n=s(2254),c=s(3729),d=s(6561);function o({title:e}){let r=(0,n.useRouter)(),s=(0,n.usePathname)(),[l,o]=(0,d.FV)(a.$0),[m,u]=(0,d.FV)(a.tu);(0,d.Zl)(a.D1),(0,d.Zl)(a.Zk);let[x,p]=(0,c.useState)("");return(0,c.useEffect)(()=>{p(window.location.search.substring(1))},[]),(0,t.jsxs)("header",{className:"w-full flex justify-between p-4 absolute top-0 left-0 z-50 bg-white",children:[t.jsx("div",{onClick:()=>{if(-1!==s.indexOf("/agree"))return o(2),r.back();if(x&&-1!==s.indexOf("check")){if(!window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"))return;r.push(`/promotion/pledge/form2/first?${x}`)}else if(!x&&-1!==s.indexOf("check")){if(!window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"))return;r.push("/promotion/pledge/form/first")}l>0?o(l-1):(u(0),r.back())},className:"px-[1.8rem] py-[1.6rem]",children:t.jsx(i(),{src:"/back.webp",alt:"뒤로가기",width:27,height:15,className:"w-[2.7rem] h-[1.5rem]"})}),t.jsx("h1",{className:"text-[2.1rem] flex items-center font-bold",children:e}),t.jsx("div",{className:"w-[6.3rem]"})]})}},4766:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>l});var t=s(2295),a=s(6561);function l({children:e}){return t.jsx(a.Wh,{children:e})}s(3729)},3784:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>l});var t=s(2295),a=s(4066);function l({children:e}){return t.jsx(a.J$,{value:{fetcher:e=>fetch(e).then(e=>e.json())},children:e})}},3418:(e,r,s)=>{"use strict";s.d(r,{$0:()=>a,$R:()=>c,D1:()=>i,EE:()=>d,H1:()=>u,J3:()=>h,M7:()=>v,MU:()=>m,W4:()=>o,Zk:()=>n,gy:()=>p,nQ:()=>x,tu:()=>l,uC:()=>j});var t=s(6561);let a=(0,t.cn)({key:"infoStepState",default:0}),l=(0,t.cn)({key:"formStepState",default:0}),i=(0,t.cn)({key:"AnswerUser1State",default:[]}),n=(0,t.cn)({key:"AnswerUser2State",default:[]});(0,t.cn)({key:"OpenModalState",default:!1});let c=(0,t.cn)({key:"OpenToastState",default:!1}),d=(0,t.cn)({key:"CapturedCardState",default:""}),o=(0,t.cn)({key:"CapturedDocumentState",default:""}),m=(0,t.cn)({key:"AnswerMood1State",default:""}),u=(0,t.cn)({key:"AnswerMood2State",default:""}),x=(0,t.cn)({key:"AnswerUser1MoodState",default:""}),p=(0,t.cn)({key:"AnswerUser2MoodState",default:""}),h=(0,t.cn)({key:"AnswerUser1NameState",default:{gender:"",name:""}}),j=(0,t.cn)({key:"AnswerUser2NameState",default:{gender:"",name:""}}),v=(0,t.cn)({key:"AnswerBabyNameState",default:{gender:"",name:""}})},7089:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>_,metadata:()=>f});var t=s(5036),a=s(9808),l=s.n(a);s(9064);var i=s(6843);let n=(0,i.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/SWRConfigContext.tsx`),{__esModule:c,$$typeof:d}=n,o=n.default,m=(0,i.createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/context/RecoilContext.tsx`),{__esModule:u,$$typeof:x}=m,p=m.default;var h=s(4825),j=s.n(h),v=s(342),b=s.n(v);let g=({ga_id:e})=>(0,t.jsxs)(t.Fragment,{children:[t.jsx(j(),{async:!0,src:`https://www.googletagmanager.com/gtag/js? 
      id=${e}`}),t.jsx(j(),{id:"google-analytics",dangerouslySetInnerHTML:{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${e}');
        `}})]}),f={title:"우리 가족 서약서(공동 육아 서약서):: 아이의 목소리로 쓰여진 가족의 약속",description:"아이의 목소리로 변환된 따뜻한 '공동육아 서약서'를 만들어보세요. 간단한 키워드만으로 아이의 입장에서 쓰여진 유쾌하고 따뜻한 서약서가 완성됩니다.",openGraph:{title:"우리 가족 서약서 : 키워드 입력만으로 소중한 서약서 만들기️❤️",description:"아이의 목소리를 담은 따뜻한 약속",url:"https://withmamapapa.net",images:["https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_main_v2.png"],type:"website",siteName:"육아응원 | 우리 가족 서약서",locale:"ko_KR"},applicationName:"육아응원 | 우리 가족 서약서",keywords:["공동육아","서약서","가족","아이의 목소리","따뜻한 메시지","가족의 약속","유아","가족 선물","육아응원"],verification:{google:"3dR9GjCoXOG9jeYBGrIFOvKtOPPJr0_WGlpyxFB7EvE",other:{"naver-site-verification":"7b8d6a069b66378c1e6c95c04dfc95a647ff458b"}},robots:{index:!0,follow:!0}};function _({children:e}){return(0,t.jsxs)("html",{lang:"ko-KR",className:l().className,children:[(0,t.jsxs)(b(),{children:[t.jsx("link",{rel:"preload",href:"/logo_white.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/logo.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/logo1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/logo3.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/logo3_1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/logo4.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/text_heart.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/bg_blur1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/bg_blur2.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/card_main_bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/card_main_bg2.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/card1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/card2.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/check_off.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/check_on.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/guide_1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/guide_2.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/guide_3.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/guide_4.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/hand.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/info1.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/info2.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/info3.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/info4.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/letter_bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/paper_bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/paper.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/profile_guid.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/receiver_bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/result_bg.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/share.webp",as:"image"}),t.jsx("link",{rel:"preload",href:"/star.webp",as:"image"})]}),(0,t.jsxs)("body",{suppressHydrationWarning:!0,children:[t.jsx(g,{ga_id:"G-1J55DTRV3R"}),t.jsx(j(),{src:"https://developers.kakao.com/sdk/js/kakao.js",strategy:"afterInteractive"}),(0,t.jsxs)(p,{children:[t.jsx(o,{children:(0,t.jsxs)("div",{className:"responsive_layout",children:[t.jsx("main",{className:"overflow-hidden w-full h-[100dvh]",children:e}),t.jsx("div",{id:"bottom_por tal"})]})}),t.jsx("div",{id:"portal"})]})]})]})}},6722:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>l,metadata:()=>a});var t=s(5036);let a={};function l({children:e}){return t.jsx("div",{className:"relative",children:e})}},2063:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>m,generateMetadata:()=>u});var t=s(5036),a=s(274);let l=(0,s(6843).createProxy)(String.raw`/Users/ochihyo/workspace/oooo-production/src/components/DocumentPage.tsx`),{__esModule:i,$$typeof:n}=l,c=l.default;var d=s(7803);let o=(0,s(2).cache)(async e=>(0,a.Sq)(e));async function m({params:{id:e}}){let r=await (0,d.r)(1),s=await (0,d.r)(2);return t.jsx(c,{id:e,survey1:r.survey,survey2:s.survey})}async function u({params:{id:e}}){return await o(e),{openGraph:{title:"우리 가족 서약서가 도착했어요!!",description:"아이의 목소리를 담은 따뜻한 약속",images:["https://oooo-pledge.s3.ap-northeast-2.amazonaws.com/image/meta_image_user_2_v2.png"],url:"https://withmamapapa.net/promotion/pledge/result2/"+e}}}},274:(e,r,s)=>{"use strict";s.d(r,{ty:()=>a,Sq:()=>l});let t=(0,s(4186).eI)("https://uvifmdoqwukwlxuhybjx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2aWZtZG9xd3Vrd2x4dWh5Ymp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2OTI3NjIsImV4cCI6MjAxODI2ODc2Mn0.DZdEQB5uEuriKnIBlQup6JODBOeiiHnP_BENUA7OFO8");async function a(){let{data:e,error:r}=await t.from("pages").select("*");if(r)return{data:null,error:r};let s=e.length;return{data:e,count:s,error:r}}async function l(e){let{data:r,error:s}=await t.from("pages").select("*").eq("id",e).single();return{data:r,error:s}}},7803:(e,r,s)=>{"use strict";s.d(r,{r:()=>i});let t=require("fs/promises");var a=s(1017),l=s.n(a);let i=(0,s(2).cache)(async e=>{let r=l().join(process.cwd(),"/src/data/",`data${e}.json`);return(0,t.readFile)(r,"utf8").then(e=>JSON.parse(e))})},3881:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>a});var t=s(337);let a=e=>[{type:"image/x-icon",sizes:"100x100",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},9064:()=>{}};var r=require("../../../../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[638,356,748,604,186,282],()=>s(9382));module.exports=t})();