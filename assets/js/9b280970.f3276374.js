"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_label:"Notion"},o="Notion API wiki",l={unversionedId:"providers/notion",id:"providers/notion",title:"Notion API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/notion.md",sourceDirName:"providers",slug:"/providers/notion",permalink:"/providers/notion",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/notion.md",tags:[],version:"current",frontMatter:{sidebar_label:"Notion"},sidebar:"nango",previous:{title:"Mural",permalink:"/providers/mural"},next:{title:"OneDrive",permalink:"/providers/one-drive"}},p={},s=[{value:"Using Notion with Nango",id:"using-notion-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notion-api-wiki"},"Notion API wiki"),(0,i.kt)("admonition",{title:"Working with the Notion API?",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/notion.md"},"editing this page"),".")),(0,i.kt)("h2",{id:"using-notion-with-nango"},"Using Notion with Nango"),(0,i.kt)("p",null,"API template name in Nango: ",(0,i.kt)("inlineCode",{parentName:"p"},"notion"),(0,i.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,i.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Notion in 5 minutes."),(0,i.kt)("p",null,"Supported features in Nango:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:null},"Supported"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/nango-auth/core-concepts"},"Auth")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/nango-unified-apis/proxy"},"Proxy")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Unified APIs"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Not included in any yet"))))),(0,i.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,i.kt)("p",null,"Register your app ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.com/my-integrations"},"here"),(0,i.kt)("br",{parentName:"p"}),"\n","By default your app is internal only, once you created it you will be able to make it public. There is no review process, unless you want to get listed in the Notion App Gallery."),(0,i.kt)("h2",{id:"useful-links"},"Useful links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.notion.com/docs/getting-started"},"Notion API docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.notion.com/reference/capabilities"},"List of available Notion API OAuth scopes"),' (Notion calls these "capabilities")')),(0,i.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Notion does not let you pass OAuth scopes (called "capabilities" in the Notion API) with the authorization. Instead you set them when you register your OAuth app (called "integrations" in Notion). When you add a Notion config in Nango, just pass a single whitespace as scopes: ',(0,i.kt)("inlineCode",{parentName:"li"},'" "'))))}c.isMDXComponent=!0}}]);