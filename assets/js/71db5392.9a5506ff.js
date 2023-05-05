"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Timely"},l="Timely API wiki",o={unversionedId:"providers/timely",id:"providers/timely",title:"Timely API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/timely.md",sourceDirName:"providers",slug:"/providers/timely",permalink:"/providers/timely",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/timely.md",tags:[],version:"current",frontMatter:{sidebar_label:"Timely"},sidebar:"nango",previous:{title:"Todoist",permalink:"/providers/todoist"},next:{title:"Trello",permalink:"/providers/trello"}},p={},s=[{value:"Using Timely with Nango",id:"using-timely-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"timely-api-wiki"},"Timely API wiki"),(0,a.kt)("admonition",{title:"Working with the Timely API?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/timely.md"},"editing this page"),".")),(0,a.kt)("h2",{id:"using-timely-with-nango"},"Using Timely with Nango"),(0,a.kt)("p",null,"API template name in Nango: ",(0,a.kt)("inlineCode",{parentName:"p"},"timely"),"\nFollow our ",(0,a.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Timely in 5 minutes."),(0,a.kt)("p",null,"Supported features in Nango:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/nango-auth/core-concepts"},"Auth")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/nango-unified-apis/proxy"},"Proxy")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unified APIs"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Not included in any yet"))))),(0,a.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rating: ",(0,a.kt)("inlineCode",{parentName:"strong"},"Easy & fast"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to be the administrator of a ",(0,a.kt)("a",{parentName:"li",href:"https://app.timelyapp.com"},"Timely account")," to register an app (under Settings -> Devs)."),(0,a.kt)("li",{parentName:"ul"},"Registering an app takes only a few minutes and you can start building immediately."),(0,a.kt)("li",{parentName:"ul"},"You can use the free trial account to register an app. oAuth apps work even after trial expires.")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.timelyapp.com/en/articles/5169847-getting-started-with-timely-s-api"},"Getting started with the Timely API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.timelyapp.com"},"Web API docs (their REST API)"))),(0,a.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Redirect URI on localhost has some issues on non-standard ports. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"https://redirectmeto.com/http://localhost:3003/oauth/callback")," as the redirect URL to get around this."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scope")," is not supported. Set ",(0,a.kt)("inlineCode",{parentName:"li"},"scopes")," to whitespace (",(0,a.kt)("inlineCode",{parentName:"li"}," "),") when configuring provider in Nango's UI.")))}c.isMDXComponent=!0}}]);