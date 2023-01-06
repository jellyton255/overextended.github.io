"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9491],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,y=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1710:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(4250),a=(t(9496),t(9613));const l={},i="Prepare",s={unversionedId:"oxmysql/Usage/prepare",id:"oxmysql/Usage/prepare",title:"Prepare",description:"The only function that provides true prepared statements, granting native protection and query planning by MySQL.",source:"@site/docs/oxmysql/Usage/prepare.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/prepare",permalink:"/docs/oxmysql/Usage/prepare",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/prepare.md",tags:[],version:"current",lastUpdatedAt:1672979340,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"oxmysql",previous:{title:"Insert",permalink:"/docs/oxmysql/Usage/insert"},next:{title:"Query",permalink:"/docs/oxmysql/Usage/query"}},o={},p=[{value:"Lua",id:"lua",level:2},{value:"Callback",id:"callback",level:3},{value:"Promise",id:"promise",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"Callback",id:"callback-1",level:3},{value:"Promise",id:"promise-1",level:3}],u={toc:p};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prepare"},"Prepare"),(0,a.kt)("p",null,"The only function that provides true ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sidorares/node-mysql2#using-prepared-statements"},"prepared statements"),", granting native protection and query planning by MySQL.",(0,a.kt)("br",{parentName:"p"}),"\n","Prepare can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Date will not return the datestring commonly used in FiveM"),(0,a.kt)("li",{parentName:"ul"},"TINYINT 1 and BIT will not return a boolean"),(0,a.kt)("li",{parentName:"ul"},"You can only use ",(0,a.kt)("inlineCode",{parentName:"li"},"?")," value placeholders, ",(0,a.kt)("inlineCode",{parentName:"li"},"??")," column placeholders and named placeholders will throw an error")),(0,a.kt)("p",null,"When using SELECT, the return value will match ",(0,a.kt)("inlineCode",{parentName:"p"},"query, single, or scalar")," depending on the number of columns and rows selected."),(0,a.kt)("h2",{id:"lua"},"Lua"),(0,a.kt)("h3",{id:"callback"},"Callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:prepare\n-- alias: MySQL.Async.prepare\n\nMySQL.prepare('SELECT * FROM users WHERE identifier = ?', {playerIdentifier}, function(result)\n    if result then\n        print(json.encode(result, {indent=true}))\n    end\nend)\n")),(0,a.kt)("h3",{id:"promise"},"Promise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:prepare_async\n-- alias: MySQL.Sync.prepare\n\nlocal result = MySQL.prepare.await('SELECT * FROM users WHERE identifier = ?', {playerIdentifier})\nif result then\n    print(json.encode(result, {indent=true}))\nend\n")),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("h3",{id:"callback-1"},"Callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.prepare\n\nMySQL.prepare('SELECT * FROM users WHERE identifier = ?', [playerIdentifier], (result) => {\n  if (result) {\n    console.log(result.identifier, result.firstname, result.lastname)\n  }\n})\n")),(0,a.kt)("h3",{id:"promise-1"},"Promise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.prepare_async\n\nconst result = await MySQL.prepare_async('SELECT * FROM users WHERE identifier = ?', [playerIdentifier])\nif (result) {\n  console.log(result.identifier, result.firstname, result.lastname)\n}\n")))}c.isMDXComponent=!0}}]);