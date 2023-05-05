"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"Stripe"},o="Stripe API wiki",p={unversionedId:"providers/stripe",id:"providers/stripe",title:"Stripe API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/stripe.md",sourceDirName:"providers",slug:"/providers/stripe",permalink:"/providers/stripe",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/stripe.md",tags:[],version:"current",frontMatter:{sidebar_label:"Stripe"},sidebar:"nango",previous:{title:"Strava",permalink:"/providers/strava"},next:{title:"Teamwork",permalink:"/providers/teamwork"}},l={},s=[{value:"Using Stripe with Nango",id:"using-stripe-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stripe-api-wiki"},"Stripe API wiki"),(0,a.kt)("admonition",{title:"Working with the Stripe API?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/stripe.md"},"editing this page"),".")),(0,a.kt)("h2",{id:"using-stripe-with-nango"},"Using Stripe with Nango"),(0,a.kt)("p",null,"API template name in Nango: ",(0,a.kt)("inlineCode",{parentName:"p"},"stripe"),(0,a.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,a.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Stripe in 5 minutes."),(0,a.kt)("p",null,"Supported features in Nango:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/nango-auth/core-concepts"},"Auth")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/nango-unified-apis/proxy"},"Proxy")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unified APIs"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Not included in any yet"))))),(0,a.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"No information yet, feel free to contribute it (or check out ",(0,a.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"No links yet, feel free to contribute it (or check out ",(0,a.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")),(0,a.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"No gotchas yet, feel free to contribute it (or check out ",(0,a.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")))}u.isMDXComponent=!0}}]);