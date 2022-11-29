"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3412],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(4250),o=(n(9496),n(9613));const a={},i=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/AddItem",id:"ox_inventory/Functions/Server/Inventory/AddItem",title:"AddItem",description:"Adds an item into the specified inventory.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/AddItem.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/AddItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/AddItem",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/AddItem.md",tags:[],version:"current",lastUpdatedAt:1669702190,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"Hooks",permalink:"/docs/ox_inventory/Functions/Server/Hooks"},next:{title:"CanCarryAmount",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CanCarryAmount"}},s={},u=[],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adds an item into the specified inventory."),(0,o.kt)("p",null,"Should be used alongside ",(0,o.kt)("a",{parentName:"p",href:"/docs/ox_inventory/Functions/Server/Inventory/CanCarryItem"},"CanCarryItem")," otherwise, the maximum weight may be exceeded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:AddItem(inv, item, count, metadata, slot, cb)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inv: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The inventory's unique id, or a table with the id and owner.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"playerId: ",(0,o.kt)("inlineCode",{parentName:"li"},"1")),(0,o.kt)("li",{parentName:"ul"},"inventoryId: ",(0,o.kt)("inlineCode",{parentName:"li"},"gloveVGH283")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{ id = 'personallocker', owner = 'license:xxxxxx'}")))))),(0,o.kt)("li",{parentName:"ul"},"item: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The name of the item to add to the target."))),(0,o.kt)("li",{parentName:"ul"},"count: ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The number of items to add."))),(0,o.kt)("li",{parentName:"ul"},"metadata?: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'A table of unique data to attach to the item object. A string will create a table with the "type" field.'))),(0,o.kt)("li",{parentName:"ul"},"slot?: ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A specific slot to add the item to. If the slot is invalid, the first available slot will be used instead."))),(0,o.kt)("li",{parentName:"ul"},"cb?: function(success: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),", response?: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),")")),(0,o.kt)("p",null,"If used for glovebox, trunk or stash you must first check the inventory is loaded with ",(0,o.kt)("a",{parentName:"p",href:"/docs/ox_inventory/Functions/Server/Inventory/GetInventory"},"GetInventory")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"success, response")," if cb is undefined, otherwise they are used in the callback only."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local success, response = exports.ox_inventory:AddItem(\'gloveVGH283\', \'bread\', 4)\n\nif not success then\n    -- if no slots are available, the value will be "inventory_full"\n    return print(response)\nend\n\nprint(json.encode(response, {indent=true}))\n--[[\n    {\n        "metadata": [],\n        "label": "Bread",\n        "slot": 1,\n        "stack": true,\n        "close": true,\n        "name": "bread",\n        "count": 1,\n        "weight": 150\n    }\n]]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Possible value of the "response" argument, on failure:')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"invalid_item": the item doesn\'t exist'),(0,o.kt)("li",{parentName:"ul"},'"invalid_inventory": the inventory doesn\'t exist'),(0,o.kt)("li",{parentName:"ul"},'"inventory_full": no free slots')))}d.isMDXComponent=!0}}]);