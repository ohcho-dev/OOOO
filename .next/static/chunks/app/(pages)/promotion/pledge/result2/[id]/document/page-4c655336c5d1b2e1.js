(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[560],{2601:function(e,r,t){"use strict";var s,n;e.exports=(null==(s=t.g.process)?void 0:s.env)&&"object"==typeof(null==(n=t.g.process)?void 0:n.env)?t.g.process:t(8960)},9684:function(e,r,t){Promise.resolve().then(t.bind(t,3945))},7447:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{unstable_getImgProps:function(){return i},default:function(){return d}});let s=t(1024),n=t(8630),c=t(6184),l=t(1749),a=s._(t(536)),i=e=>{(0,c.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:r}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(r))void 0===t&&delete r[e];return{props:r}},d=l.Image},4014:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var s=t(7437),n=t(4033);function c(e){let{onClick:r,url:t="",label:c,status:l=!1}=e,a=(0,n.useRouter)();return(0,s.jsx)("button",{className:"w-[100vw] max-w-[518px] h-[8rem] text-[2.4rem] fixed bottom-0 ".concat(l?"bg-[#F9E9B3]":"bg-[#cccccc] text-white"),onClick:r||(()=>a.push(t)),disabled:!l,children:c})}},3945:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var s=t(7437),n=t(4605),c=t(1653),l=t(2692),a=t.n(l),i=t(2265),d=t(5883);function u(e){var r,t;let{survey1:l,survey2:u}=e,[m,o]=(0,d.FV)(n.D1),[x,v]=(0,d.FV)(n.Zk),[h,f]=(0,i.useState)([]),[j,b]=(0,i.useState)([]),p=(0,i.useRef)(null),_=new Date,g="".concat(_.getFullYear(),"/").concat(_.getMonth()+1,"/").concat(_.getDate()),[N,w]=(0,d.FV)(n.W4);(0,i.useEffect)(()=>{p.current&&h&&j&&y()},[p,h,j]);let y=async()=>{let e=p.current;e&&w((await a()(e)).toDataURL("image/png"))};return((0,i.useEffect)(()=>{if(m){let e=[];m.map(r=>{let t=l.filter(e=>e.id===r.s_id)[0].choiceAnswer.filter(e=>e.answer_id===r.c_id)[0].answer_value,s={...r,c_value:t};return e.push(s)}),f(e)}},[m]),(0,i.useEffect)(()=>{if(x){let e=[];x.map(r=>{let t=u.filter(e=>e.id===r.s_id)[0].choiceAnswer.filter(e=>e.answer_id===r.c_id)[0].answer_value,s={...r,c_value:t};return e.push(s)}),b(e)}},[x]),h.length<7||j.length<6||!h[7].sv)?(0,s.jsx)("div",{children:"Loading..."}):(0,s.jsxs)("div",{className:"relative overflow-y-scroll overflow-x-hidden w-[52rem] h-[100dvh] max-h-calcDocumentPage text-[2rem] leading-[2.8rem]",children:[(0,s.jsxs)("div",{ref:p,className:"absolute top-[0] z-10 bg-[url(/paper_bg.webp)] w-[52rem] h-[190.7rem] bg-cover bg-center p-[3rem] leading-[2.8rem]",children:[(0,s.jsxs)("div",{className:"text-[2rem] font-bold pt-[5.8rem] ml-[6.7rem]",children:[null===(r=h[7])||void 0===r?void 0:r.sv,"네 서약서"]}),(0,s.jsxs)("div",{className:"text-[2.8rem] leading-[4rem] mt-[0.9rem] ml-[6.7rem]",children:["엄마 ♥️ 아빠!",(0,s.jsx)("br",{}),"함께 약속해요!"]}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("div",{className:"mt-[20.4rem] text-[2.2rem] font-bold leading-[3.6rem]",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:[h[0].c_value," "]}),"우리 ",j[6].c_value," ",j[6].sv||""]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:[j[0].c_value," "]}),"우리 ",h[6].c_value," ",h[6].sv||""]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:["세상에 하나뿐인"," "]}),h[7].c_value," ",h[7].sv||""]})]}),(0,s.jsxs)("div",{className:"mt-[3.5rem] text-[2rem]",children:["우리 가족은"," ",(0,s.jsx)("b",{className:"text-[#F65B5B]",children:j[2].c_value!==h[2].c_value?"".concat(j[2].c_value,"과 ").concat(h[2].c_value):"".concat(h[2].c_value)}),"이 넘치는 화목한 가정을",(0,s.jsx)("br",{}),"만들기 위해 아래와 같이 서약합니다."]}),(0,s.jsxs)("div",{className:"mt-[4rem]",children:[(0,s.jsx)("div",{className:"text-[2.2rem]",children:(0,s.jsxs)("b",{children:[(0,s.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:[h[6].c_value,"!"]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"mt-[2.3rem]",children:[j[6].c_value,"에게 이렇게 약속해줘요!"]})]})}),(0,s.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,s.jsxs)("div",{children:["첫째, ",1===h[6].c_id?"남편이":"아내가"," ",(0,s.jsx)("b",{children:j[3].c_value}),"에면",(0,s.jsx)("br",{}),"늘 곁에서 도우며 함께 하겠습니다."]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:["둘째, ",(0,s.jsx)("b",{children:j[4].c_value}),"으로 고민하는",(0,s.jsx)("br",{}),1===h[6].c_id?"남편":"아내"," 마음을 이해하고 함께 풀어가겠습니다."]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:["셋째, 언제나 아이에게 ",(0,s.jsx)("b",{children:j[5].c_value}),(0,s.jsx)("br",{}),1===h[6].c_id?"엄마":"아빠","가 되겠습니다."]})]})]}),(0,s.jsxs)("div",{className:"mt-[5.3rem]",children:[(0,s.jsx)("div",{className:"text-[2.2rem]",children:(0,s.jsxs)("b",{children:[(0,s.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:[j[6].c_value,"!"]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"mt-[2.5rem]",children:[h[6].c_value,"에게 이렇게 약속해줘요!"]})]})}),(0,s.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,s.jsxs)("div",{children:["첫째, ",1===j[6].c_id?"남편이":"아내가"," ",(0,s.jsx)("b",{children:h[3].c_value}),"에면",(0,s.jsx)("br",{}),"늘 곁에서 도우며 함께 하겠습니다."]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:["둘째, ",(0,s.jsx)("b",{children:h[4].c_value}),"으로 고민하는",(0,s.jsx)("br",{}),1===j[6].c_id?"남편":"아내"," 마음을 이해하고 함께 풀어가겠습니다."]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:["셋째, 언제나 아이에게 ",(0,s.jsx)("b",{children:h[5].c_value}),(0,s.jsx)("br",{}),1===j[6].c_id?"엄마":"아빠","가 되겠습니다."]})]})]}),(0,s.jsxs)("div",{className:"mt-[3.9rem]",children:[(0,s.jsx)("div",{className:"text-[2.2rem]",children:(0,s.jsxs)("b",{children:[(0,s.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:["나 ",h[7].sv||"","!"]}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"mt-[2.5rem]",children:"엄마♥️아빠랑 이렇게 약속할게요!"})]})}),(0,s.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,s.jsxs)("div",{children:["하나, ",j[6].c_value,"의"," ",(0,s.jsx)("b",{children:h[1].c_value}),"과 ",h[6].c_value,"의 ",(0,s.jsx)("b",{children:j[1].c_value}),"을",(0,s.jsx)("br",{}),"배우고 닮아갈게요!"]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:["둘,"," ",(0,s.jsx)("b",{children:h[2].c_value!==j[2].c_value?"".concat(j[2].c_value,"과 ").concat(h[2].c_value):j[2].c_value})," ","안에서 행복한 아이로 자랄게요!"]})]})]}),(0,s.jsx)("div",{className:"text-center mt-[8rem] text-[2rem]",children:(0,c._)(g)})]})]}),(0,s.jsxs)("div",{className:"absolute top-[0] z-20 bg-[url(/paper_bg.webp)] w-[52rem] h-[190.7rem] bg-cover bg-center p-[3rem] leading-[2.8rem]",children:[(0,s.jsxs)("div",{className:"text-[2rem] font-bold pt-[5.8rem] ml-[6.7rem]",children:[null===(t=h[7])||void 0===t?void 0:t.sv,"네 서약서"]}),(0,s.jsxs)("div",{className:"text-[2.8rem] leading-[4rem] mt-[0.9rem] ml-[6.7rem]",children:["엄마 ♥️ 아빠!",(0,s.jsx)("br",{}),"함께 약속해요!"]}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("div",{className:"mt-[20.4rem] text-[2.2rem] font-bold leading-[3.6rem]",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:[h[0].c_value," "]}),"우리 ",j[6].c_value," ",j[6].sv||""]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:[j[0].c_value," "]}),"우리 ",h[6].c_value," ",h[6].sv||""]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{className:"bg-[url(/bg_blur2.webp)] bg-repeat pl-[1rem] ml-[-1rem]",children:["세상에 하나뿐인"," "]}),h[7].c_value," ",h[7].sv||""]})]}),(0,s.jsxs)("div",{className:"mt-[3.5rem] text-[2rem]",children:["우리 가족은"," ",(0,s.jsx)("b",{className:"text-[#F65B5B]",children:j[2].c_value!==h[2].c_value?"".concat(j[2].c_value,"과 ").concat(h[2].c_value):"".concat(h[2].c_value)}),"이 넘치는 화목한 가정을",(0,s.jsx)("br",{}),"만들기 위해 아래와 같이 서약합니다."]}),(0,s.jsxs)("div",{className:"mt-[5.1rem]",children:[(0,s.jsx)("div",{className:"text-[2.2rem]",children:(0,s.jsxs)("b",{children:[(0,s.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:[h[6].c_value,"!"]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"mt-[2.3rem]",children:[j[6].c_value,"에게 이렇게 약속해줘요!"]})]})}),(0,s.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,s.jsxs)("div",{children:["첫째, ",1===h[6].c_id?"남편이":"아내가"," ",(0,s.jsx)("b",{children:j[3].c_value}),"에면",(0,s.jsx)("br",{}),"늘 곁에서 도우며 함께 하겠습니다."]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:["둘째, ",(0,s.jsx)("b",{children:j[4].c_value}),"으로 고민하는",(0,s.jsx)("br",{}),1===h[6].c_id?"남편":"아내"," 마음을 이해하고 함께 풀어가겠습니다."]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:["셋째, 언제나 아이에게 ",(0,s.jsx)("b",{children:j[5].c_value}),(0,s.jsx)("br",{}),1===h[6].c_id?"엄마":"아빠","가 되겠습니다."]})]})]}),(0,s.jsxs)("div",{className:"mt-[5.3rem]",children:[(0,s.jsx)("div",{className:"text-[2.2rem]",children:(0,s.jsxs)("b",{children:[(0,s.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:[j[6].c_value,"!"]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"mt-[2.5rem]",children:[h[6].c_value,"에게 이렇게 약속해줘요!"]})]})}),(0,s.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,s.jsxs)("div",{children:["첫째, ",1===j[6].c_id?"남편이":"아내가"," ",(0,s.jsx)("b",{children:h[3].c_value}),"에면",(0,s.jsx)("br",{}),"늘 곁에서 도우며 함께 하겠습니다."]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:["둘째, ",(0,s.jsx)("b",{children:h[4].c_value}),"으로 고민하는",(0,s.jsx)("br",{}),1===j[6].c_id?"남편":"아내"," 마음을 이해하고 함께 풀어가겠습니다."]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:["셋째, 언제나 아이에게 ",(0,s.jsx)("b",{children:h[5].c_value}),(0,s.jsx)("br",{}),1===j[6].c_id?"엄마":"아빠","가 되겠습니다."]})]})]}),(0,s.jsxs)("div",{className:"mt-[3.9rem]",children:[(0,s.jsx)("div",{className:"text-[2.2rem]",children:(0,s.jsxs)("b",{children:[(0,s.jsxs)("span",{className:"text-[#F25D24] text-[3rem]",children:["나 ",h[7].sv||"","!"]}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"mt-[2.5rem]",children:"엄마♥️아빠랑 이렇게 약속할게요!"})]})}),(0,s.jsxs)("div",{className:"leading-[3rem] text-[2rem] mt-[4.3rem]",children:[(0,s.jsxs)("div",{children:["하나, ",j[6].c_value,"의"," ",(0,s.jsx)("b",{children:h[1].c_value}),"과 ",h[6].c_value,"의 ",(0,s.jsx)("b",{children:j[1].c_value}),"을",(0,s.jsx)("br",{}),"배우고 닮아갈게요!"]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:["둘,"," ",(0,s.jsx)("b",{children:h[2].c_value!==j[2].c_value?"".concat(j[2].c_value,"과 ").concat(h[2].c_value):j[2].c_value})," ","안에서 행복한 아이로 자랄게요!"]})]})]}),(0,s.jsx)("div",{className:"text-center mt-[8rem] text-[2rem]",children:(0,c._)(g)})]})]})]})}var m=t(4014),o=t(4033),x=t(3578);function v(e){let{id:r,survey1:t,survey2:n}=e,c=(0,o.useRouter)();return(0,s.jsxs)("div",{children:[(0,s.jsx)(x.default,{title:"서약서"}),(0,s.jsx)("div",{className:"w-full h-[6.7rem] "}),(0,s.jsx)(u,{survey1:t,survey2:n}),(0,s.jsx)(m.default,{label:"서약서를 간직하고 싶다면?",status:!0,onClick:()=>c.push("/promotion/pledge/result2/".concat(r,"/guide"))})]})}},3578:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var s=t(7437),n=t(4605),c=t(6691),l=t.n(c),a=t(4033),i=t(2265),d=t(5883);function u(e){let{title:r}=e,t=(0,a.useRouter)(),c=(0,a.usePathname)(),[u,m]=(0,d.FV)(n.$0),[o,x]=(0,d.FV)(n.tu);(0,d.Zl)(n.D1),(0,d.Zl)(n.Zk);let[v,h]=(0,i.useState)("");return(0,i.useEffect)(()=>{h(window.location.search.substring(1))},[]),(0,s.jsxs)("header",{className:"w-full flex justify-between p-4 absolute top-0 left-0 z-50 bg-white",children:[(0,s.jsx)("div",{onClick:()=>{if(-1!==c.indexOf("/agree"))return m(2),t.back();if(v&&-1!==c.indexOf("check")){if(!window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"))return;t.push("/promotion/pledge/form2/first?".concat(v))}else if(!v&&-1!==c.indexOf("check")){if(!window.confirm("확인을 누를 경우 처음부터 다시 진행해야 합니다.\n처음으로 돌아가시겠습니까?"))return;t.push("/promotion/pledge/form/first")}u>0?m(u-1):(x(0),t.back())},className:"px-[1.8rem] py-[1.6rem]",children:(0,s.jsx)(l(),{src:"/back.webp",alt:"뒤로가기",width:27,height:15,className:"w-[2.7rem] h-[1.5rem]"})}),(0,s.jsx)("h1",{className:"text-[2.1rem] flex items-center font-bold",children:r}),(0,s.jsx)("div",{className:"w-[6.3rem]"})]})}},4605:function(e,r,t){"use strict";t.d(r,{$0:function(){return n},$R:function(){return i},D1:function(){return l},EE:function(){return d},H1:function(){return o},J3:function(){return h},M7:function(){return j},MU:function(){return m},W4:function(){return u},Zk:function(){return a},gy:function(){return v},nQ:function(){return x},tu:function(){return c},uC:function(){return f}});var s=t(5883);let n=(0,s.cn)({key:"infoStepState",default:0}),c=(0,s.cn)({key:"formStepState",default:0}),l=(0,s.cn)({key:"AnswerUser1State",default:[]}),a=(0,s.cn)({key:"AnswerUser2State",default:[]});(0,s.cn)({key:"OpenModalState",default:!1});let i=(0,s.cn)({key:"OpenToastState",default:!1}),d=(0,s.cn)({key:"CapturedCardState",default:""}),u=(0,s.cn)({key:"CapturedDocumentState",default:""}),m=(0,s.cn)({key:"AnswerMood1State",default:""}),o=(0,s.cn)({key:"AnswerMood2State",default:""}),x=(0,s.cn)({key:"AnswerUser1MoodState",default:""}),v=(0,s.cn)({key:"AnswerUser2MoodState",default:""}),h=(0,s.cn)({key:"AnswerUser1NameState",default:{gender:"",name:""}}),f=(0,s.cn)({key:"AnswerUser2NameState",default:{gender:"",name:""}}),j=(0,s.cn)({key:"AnswerBabyNameState",default:{gender:"",name:""}})},1653:function(e,r,t){"use strict";function s(e){return e<10?"0"+e:e}t.d(r,{_:function(){return n}});let n=e=>{let r=new Date(e.replace(/-/g,"/"));return"".concat(r.getFullYear(),"년 ").concat(s(r.getMonth()+1),"월 ").concat(s(r.getDate()),"일")}},8960:function(e){!function(){var r={229:function(e){var r,t,s,n=e.exports={};function c(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===c||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:c}catch(e){r=c}try{t="function"==typeof clearTimeout?clearTimeout:l}catch(e){t=l}}();var i=[],d=!1,u=-1;function m(){d&&s&&(d=!1,s.length?i=s.concat(i):u=-1,i.length&&o())}function o(){if(!d){var e=a(m);d=!0;for(var r=i.length;r;){for(s=i,i=[];++u<r;)s&&s[u].run();u=-1,r=i.length}s=null,d=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===l||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function x(e,r){this.fun=e,this.array=r}function v(){}n.nextTick=function(e){var r=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];i.push(new x(e,r)),1!==i.length||d||a(o)},x.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},t={};function s(e){var n=t[e];if(void 0!==n)return n.exports;var c=t[e]={exports:{}},l=!0;try{r[e](c,c.exports,s),l=!1}finally{l&&delete t[e]}return c.exports}s.ab="//";var n=s(229);e.exports=n}()},6691:function(e,r,t){e.exports=t(7447)}},function(e){e.O(0,[691,337,176,971,938,744],function(){return e(e.s=9684)}),_N_E=e.O()}]);