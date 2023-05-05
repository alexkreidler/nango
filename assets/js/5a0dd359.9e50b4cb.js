"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(r),d=o,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Google"},i="Google API wiki",l={unversionedId:"providers/google",id:"providers/google",title:"Google API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/google.md",sourceDirName:"providers",slug:"/providers/google",permalink:"/providers/google",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/google.md",tags:[],version:"current",frontMatter:{sidebar_label:"Google"},sidebar:"nango",previous:{title:"Gitlab",permalink:"/providers/gitlab"},next:{title:"Google Calendar",permalink:"/providers/google-calendar"}},p={},s=[{value:"Using Google with Nango",id:"using-google-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-api-wiki"},"Google API wiki"),(0,o.kt)("admonition",{title:"Working with the Google API?",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/google-mail.md"},"editing this page"),".")),(0,o.kt)("h2",{id:"using-google-with-nango"},"Using Google with Nango"),(0,o.kt)("p",null,"API template name in Nango: ",(0,o.kt)("inlineCode",{parentName:"p"},"google"),(0,o.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,o.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Google in 5 minutes."),(0,o.kt)("p",null,"Supported features in Nango:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/nango-auth/core-concepts"},"Auth")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/nango-unified-apis/proxy"},"Proxy")),(0,o.kt)("td",{parentName:"tr",align:null},"\u274e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Unified APIs"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"Not included in any yet"))))),(0,o.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"No information yet, feel free to contribute it (or check out ",(0,o.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")),(0,o.kt)("h2",{id:"useful-links"},"Useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/reference/sts/rest/v1/TopLevel/token#response-body"},"Google access token specs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/oauth2/scopes"},"Google scopes"))),(0,o.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google has a unified OAuth system for their various APIs. This provider should work for most of them (e.g. GSheet, Gmail, Google Calendar, etc.)"),(0,o.kt)("li",{parentName:"ul"},"You need to enable individual Google API on the ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/dashboard"},"Google API Console")," before using them"),(0,o.kt)("li",{parentName:"ul"},"While setting up the OAuth credentials, the ",(0,o.kt)("em",{parentName:"li"},"Authorized JavaScript origins")," should be your site URL (",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3003")," if you're doing the ",(0,o.kt)("a",{parentName:"li",href:"/quickstart"},"Quickstart")," locally)")))}c.isMDXComponent=!0}}]);