"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"HubSpot"},i="HubSpot API wiki",p={unversionedId:"providers/hubspot",id:"providers/hubspot",title:"HubSpot API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/hubspot.md",sourceDirName:"providers",slug:"/providers/hubspot",permalink:"/providers/hubspot",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/hubspot.md",tags:[],version:"current",frontMatter:{sidebar_label:"HubSpot"},sidebar:"nango",previous:{title:"Gusto",permalink:"/providers/gusto"},next:{title:"Health Gorilla",permalink:"/providers/healthgorilla"}},l={},s=[{value:"Using HubSpot with Nango",id:"using-hubspot-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hubspot-api-wiki"},"HubSpot API wiki"),(0,a.kt)("admonition",{title:"Working with the HubSpot API?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/hubspot.md"},"editing this page"),".")),(0,a.kt)("h2",{id:"using-hubspot-with-nango"},"Using HubSpot with Nango"),(0,a.kt)("p",null,"API template name in Nango: ",(0,a.kt)("inlineCode",{parentName:"p"},"hubspot"),(0,a.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,a.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with HubSpot in 5 minutes."),(0,a.kt)("p",null,"Supported features in Nango:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/nango-auth/core-concepts"},"Auth")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/nango-unified-apis/proxy"},"Proxy")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unified APIs"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Not included in any yet"))))),(0,a.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"No information yet, feel free to contribute it (or check out ",(0,a.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"No links yet, feel free to contribute it (or check out ",(0,a.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")),(0,a.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"No gotchas yet, feel free to contribute it (or check out ",(0,a.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")))}c.isMDXComponent=!0}}]);