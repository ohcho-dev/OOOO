"use strict";(()=>{var e={};e.id=717,e.ids=[717],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3269:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>w,originalPathname:()=>A,patchFetch:()=>b,requestAsyncStorage:()=>h,routeModule:()=>y,serverHooks:()=>g,staticGenerationAsyncStorage:()=>v,staticGenerationBailout:()=>x});var o={};r.r(o),r.d(o,{default:()=>u});var a={};r.r(a),r.d(a,{GET:()=>m});var n=r(5419),i=r(9108),s=r(9678),l=r(9647);async function u(){return[{url:"https://withmamapapa.net"},{url:"https://withmamapapa.net/promotion/pledge"},{url:"https://withmamapapa.net/promotion/pledge/info"}]}var p=r(7252);let f={...o},c=f.default,d=f.generateSitemaps;if("function"!=typeof c)throw Error('Default export is missing in "/Users/ochihyo/workspace/oooo-production/src/app/sitemap.ts"');async function m(e,t){let r;let{__metadata_id__:o=[],...a}=t.params||{},n=o[0],i=d?await d():null;if(i&&null==(r=i.find(e=>e.id.toString()===n)?.id))return new l.NextResponse("Not Found",{status:404});let s=await c({id:r}),u=(0,p.resolveRouteData)(s,"sitemap");return new l.NextResponse(u,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}let y=new n.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&isDynamic=1!/Users/ochihyo/workspace/oooo-production/src/app/sitemap.ts?__next_metadata_route__",nextConfigOutput:"",userland:a}),{requestAsyncStorage:h,staticGenerationAsyncStorage:v,serverHooks:g,headerHooks:w,staticGenerationBailout:x}=y,A="/sitemap.xml/route";function b(){return(0,s.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:v})}},7252:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{resolveRobots:function(){return a},resolveSitemap:function(){return n},resolveManifest:function(){return i},resolveRouteData:function(){return s}});let o=r(9926);function a(e){let t="";for(let r of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,o.resolveArray)(r.userAgent||["*"]))t+=`User-Agent: ${e}
`;if(r.allow)for(let e of(0,o.resolveArray)(r.allow))t+=`Allow: ${e}
`;if(r.disallow)for(let e of(0,o.resolveArray)(r.disallow))t+=`Disallow: ${e}
`;r.crawlDelay&&(t+=`Crawl-delay: ${r.crawlDelay}
`),t+="\n"}return e.host&&(t+=`Host: ${e.host}
`),e.sitemap&&(0,o.resolveArray)(e.sitemap).forEach(e=>{t+=`Sitemap: ${e}
`}),t}function n(e){let t="";for(let r of(t+='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n',e)){if(t+=`<url>
<loc>${r.url}</loc>
`,r.lastModified){let e=r.lastModified instanceof Date?r.lastModified.toISOString():r.lastModified;t+=`<lastmod>${e}</lastmod>
`}r.changeFrequency&&(t+=`<changefreq>${r.changeFrequency}</changefreq>
`),"number"==typeof r.priority&&(t+=`<priority>${r.priority}</priority>
`),t+="</url>\n"}return t+"</urlset>\n"}function i(e){return JSON.stringify(e)}function s(e,t){return"robots"===t?a(e):"sitemap"===t?n(e):"manifest"===t?i(e):""}},9926:(e,t)=>{function r(e){return Array.isArray(e)?e:[e]}function o(e){if(null!=e)return r(e)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{resolveAsArrayOrUndefined:function(){return o},resolveArray:function(){return r}})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638,266],()=>r(3269));module.exports=o})();