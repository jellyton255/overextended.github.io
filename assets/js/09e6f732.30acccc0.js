"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4428],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?i.createElement(f,r(r({ref:t},s),{},{components:n})):i.createElement(f,r({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(9496),a=n(5924);const l="tabItem_De_A";function r(e){let{children:t,hidden:n,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,r),hidden:n},t)}},3408:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(4250),a=n(9496),l=n(5924),r=n(6704),o=n(8876),p=n(4138),u=n(2509);const s="tabList_V3hT",c="tabItem_B35_";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:d,groupId:f,className:k}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??b.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),y=(0,o.l)(N,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:C}=(0,p.U)(),[h,x]=(0,a.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==h&&N.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),i=N[n].value;i!==h&&(w(t),x(i),null!=f&&C(f,String(i)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},k)},N.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>T.push(e),onKeyDown:I,onClick:E},r,{className:(0,l.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":h===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function d(e){const t=(0,r.Z)();return a.createElement(m,(0,i.Z)({key:String(t)},e))}},2778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var i=n(4250),a=(n(9496),n(9613)),l=n(3408),r=n(6489);const o={title:"Notifications"},p=void 0,u={unversionedId:"ox_lib/Interface/Client/notify",id:"ox_lib/Interface/Client/notify",title:"Notifications",description:"lib.notify",source:"@site/docs/ox_lib/Interface/Client/notify.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/notify",permalink:"/docs/ox_lib/Interface/Client/notify",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/notify.md",tags:[],version:"current",lastUpdatedAt:1672979340,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{title:"Notifications"},sidebar:"ox_lib",previous:{title:"Menu",permalink:"/docs/ox_lib/Interface/Client/menu"},next:{title:"Progress",permalink:"/docs/ox_lib/Interface/Client/progress"}},s={},c=[{value:"lib.notify",id:"libnotify",level:2},{value:"Usage Example",id:"usage-example",level:3},{value:"Standard",id:"standard",level:4},{value:"Custom",id:"custom",level:4},{value:"lib.defaultNotify",id:"libdefaultnotify",level:2},{value:"Usage Example",id:"usage-example-1",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"libnotify"},"lib.notify"),(0,a.kt)("p",null,"Custom notifications with a lot of styling options."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.notify(data)\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.notify(data)\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When set the current notification will be unique and only shown once on screen when spammed."))),(0,a.kt)("li",{parentName:"ul"},"title?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Must provide if there is no description"))),(0,a.kt)("li",{parentName:"ul"},"description?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Must provide if there is no title; has markdown support."))),(0,a.kt)("li",{parentName:"ul"},"duration?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"position?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-right'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-left'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom-right'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom-left'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-right'")))),(0,a.kt)("li",{parentName:"ul"},"type?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'inform'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'error'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'success'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'inform'")))),(0,a.kt)("li",{parentName:"ul"},"style?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," (",(0,a.kt)("inlineCode",{parentName:"li"},"object"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"React CSS styling format"))),(0,a.kt)("li",{parentName:"ul"},"icon?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Font Awesome 6 icon name"))),(0,a.kt)("li",{parentName:"ul"},"iconColor: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("h3",{id:"usage-example"},"Usage Example"),(0,a.kt)("h4",{id:"standard"},"Standard"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.notify({\n    title = 'Notification title',\n    description = 'Notification description',\n    type = 'success'\n})\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.notify({\n  title: 'Notification title',\n  description: 'Notification description',\n  type: 'success'\n})\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/cRxJICO.png",alt:"notification"})),(0,a.kt)("h4",{id:"custom"},"Custom"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.notify({\n    id = 'some_identifier',\n    title = 'Notification title',\n    description = 'Notification description',\n    position = 'top',\n    style = {\n        backgroundColor = '#141517',\n        color = '#909296'\n    },\n    icon = 'ban',\n    iconColor = '#C53030'\n})\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.notify({\n  id: 'some_identifier',\n  title: 'Notification title',\n  description: 'Notification description',\n  position: 'top',\n  style: {\n    backgroundColor: '#141517',\n    color: '#909296'\n  },\n  icon: 'ban',\n  iconColor: '#C53030'\n})\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/0EK5APp.png",alt:"custom_notification"})),(0,a.kt)("h2",{id:"libdefaultnotify"},"lib.defaultNotify"),(0,a.kt)("p",null,"Default notifications provided by Chakra UI."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.defaultNotify(data)\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.defaultNotify(data)\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Same as id in ",(0,a.kt)("inlineCode",{parentName:"li"},"lib.notify")))),(0,a.kt)("li",{parentName:"ul"},"title?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"description?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"duration?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"position?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-right'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-left'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom-right'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom-left'")),(0,a.kt)("li",{parentName:"ul"},"variant?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'solid'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'subtle'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'left-accent'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-accent'")),(0,a.kt)("li",{parentName:"ul"},"status?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'info'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'warning'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'success'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'error'"))),(0,a.kt)("h3",{id:"usage-example-1"},"Usage Example"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.defaultNotify({\n    title = 'Notification title',\n    description = 'Notification description',\n    variant = 'left-accent',\n    status = 'success'\n})\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.defaultNotify({\n  title: 'Notification title',\n  description: 'Notification description',\n  status: 'success'\n})\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/EIibuY9.png",alt:"default_notification"})))}d.isMDXComponent=!0}}]);