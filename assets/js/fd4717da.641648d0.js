"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7008],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,d=p["".concat(l,".").concat(y)]||p[y]||m[y]||o;return t?n.createElement(d,s(s({ref:r},u),{},{components:t})):n.createElement(d,s({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6544:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(6600),a=(t(9496),t(9613));const o={},s="Benchmark",i={unversionedId:"oxmysql/Getting Started/benchmark",id:"oxmysql/Getting Started/benchmark",title:"Benchmark",description:"Internal benchmark",source:"@site/docs/oxmysql/Getting Started/benchmark.md",sourceDirName:"oxmysql/Getting Started",slug:"/oxmysql/Getting Started/benchmark",permalink:"/docs/oxmysql/Getting Started/benchmark",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Getting Started/benchmark.md",tags:[],version:"current",lastUpdatedAt:1665367011,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{},sidebar:"oxmysql",previous:{title:"Getting Started",permalink:"/docs/oxmysql/"},next:{title:"Common Issues",permalink:"/docs/oxmysql/Getting Started/issues"}},l={},c=[{value:"Lua (5.4)",id:"lua-54",level:4},{value:"JavaScript",id:"javascript",level:4}],u={toc:c};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benchmark"},"Benchmark"),(0,a.kt)("p",null,"Internal benchmark"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Low: 0.1222ms | Avg: 0.14188357ms | Total: 1418.8357ms (10000 queries)\n")),(0,a.kt)("p",null,"Round-trip-time for exports"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Low: 0.1997ms | Avg: 0.25898800ms | Total: 2589.8800ms (10000 queries)\n")),(0,a.kt)("h4",{id:"lua-54"},"Lua (5.4)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local val = 10000\nRegisterCommand('luasync', function()\n    local queryTimesLocal = {}\n    local result\n    MySQL.prepare.await('SELECT identifier from users WHERE lastname = ?', {'Linden'})\n\n    for i=1, val do\n        local time = os.nanotime()\n        local r = MySQL.prepare.await('SELECT identifier from users WHERE lastname = ?', {'Linden'})\n        queryTimesLocal[#queryTimesLocal+1] = (os.nanotime() - time) / 1000000\n        if i==1 then result = r end\n    end\n\n    local queryMsLow, queryMsSum = 1000, 0\n\n    for _, v in pairs(queryTimesLocal) do queryMsSum = queryMsSum + v end\n    for _, v in pairs(queryTimesLocal) do\n        if v < queryMsLow then queryMsLow = v end\n    end\n\n    local averageQueryTime = queryMsSum / #queryTimesLocal\n    print(json.encode(result))\n    print('Low: '.. queryMsLow ..'ms | Avg: '..averageQueryTime..'ms | Total: '..queryMsSum..'ms ('..#queryTimesLocal..' queries)')\nend)\n")),(0,a.kt)("h4",{id:"javascript"},"JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const val = 10000\nRegisterCommand('jssync', async() => {\n  const queryTimesLocal = [];\n  let result\n  await exports.oxmysql.prepare_async('SELECT identifier from users WHERE lastname = ?', ['Linden'])\n\n  for(let i=0; i < val; i++) {\n    const startTime = process.hrtime()\n    const r = await exports.oxmysql.prepare_async('SELECT identifier from users WHERE lastname = ?', ['Linden'])\n    queryTimesLocal.push(process.hrtime(startTime)[1] / 1000000)\n    if (i === 0) result = r\n  }\n\n  const queryMsSum = queryTimesLocal.reduce((a, b) => a + b, 0)\n  const queryMsLow = queryTimesLocal.sort((a, b) => a - b)[0]\n  const averageQueryTime = queryMsSum / queryTimesLocal.length\n\n  console.log(result)\n  console.log('Low: '+ queryMsLow +'ms | Avg: '+averageQueryTime+'ms | Total: '+queryMsSum+'ms ('+queryTimesLocal.length+' queries)')\n})\n")))}m.isMDXComponent=!0}}]);