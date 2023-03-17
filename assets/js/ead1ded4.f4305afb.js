"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7323],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),y=o,v=c["".concat(u,".").concat(y)]||c[y]||p[y]||a;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(4250),o=(r(9496),r(9613));const a={sidebar_position:1},i="Common Issues",s={unversionedId:"ox_inventory/Getting Started/issues",id:"ox_inventory/Getting Started/issues",title:"Common Issues",description:"UI has not been built",source:"@site/docs/ox_inventory/Getting Started/issues.md",sourceDirName:"ox_inventory/Getting Started",slug:"/ox_inventory/Getting Started/issues",permalink:"/docs/ox_inventory/Getting Started/issues",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Getting Started/issues.md",tags:[],version:"current",lastUpdatedAt:1679090062,formattedLastUpdatedAt:"Mar 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"ox_inventory",previous:{title:"Getting Started",permalink:"/docs/ox_inventory/"},next:{title:"Configuration",permalink:"/docs/ox_inventory/Getting Started/config"}},u={},l=[{value:"UI has not been built",id:"ui-has-not-been-built",level:2},{value:"Stashes / trunks are not saved at server restart",id:"stashes--trunks-are-not-saved-at-server-restart",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-issues"},"Common Issues"),(0,o.kt)("h2",{id:"ui-has-not-been-built"},"UI has not been built"),(0,o.kt)("p",null,"Because the UI for inventory is written in React it can't run natively under FiveM so it must first be bundled into html/css/js."),(0,o.kt)("p",null,"We provide an easy way for you to do this by downloading a pre-bundled release, which you can get from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/releases/latest"},"here"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Make sure you download the ",(0,o.kt)("inlineCode",{parentName:"p"},"ox_inventory.zip")," file as that one contains the bundled files and others are raw source code."),(0,o.kt)("p",null,"If in case you wanted to edit the inventory UI you would have to build these files yourself.",(0,o.kt)("br",{parentName:"p"}),"\n","To do so please read our ",(0,o.kt)("a",{parentName:"p",href:"/docs/ox_inventory/Guides/inventory_ui"},(0,o.kt)("em",{parentName:"a"},"Building inventory UI"))," guide."),(0,o.kt)("h2",{id:"stashes--trunks-are-not-saved-at-server-restart"},"Stashes / trunks are not saved at server restart"),(0,o.kt)("p",null,"The only supported way of doing a restart is ",(0,o.kt)("strong",{parentName:"p"},"txAdmin scheduled restart"),".",(0,o.kt)("br",{parentName:"p"}),"\n","txAdmin scheduled restart should be your only way of restarting a server in production."),(0,o.kt)("p",null,"If you need to do a manual restart, you must use ",(0,o.kt)("inlineCode",{parentName:"p"},"/saveinv")," before restarting the server.",(0,o.kt)("br",{parentName:"p"}),"\n","If you don't do this, all inventory except players inventory will not be saved."))}p.isMDXComponent=!0}}]);