"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Intuit"},o="Intuit API wiki",l={unversionedId:"providers/intuit",id:"providers/intuit",title:"Intuit API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/intuit.md",sourceDirName:"providers",slug:"/providers/intuit",permalink:"/providers/intuit",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/intuit.md",tags:[],version:"current",frontMatter:{sidebar_label:"Intuit"},sidebar:"nango",previous:{title:"Intercom",permalink:"/providers/intercom"},next:{title:"Jira",permalink:"/providers/jira"}},p={},u=[{value:"Using Intuit with Nango",id:"using-intuit-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intuit-api-wiki"},"Intuit API wiki"),(0,a.kt)("admonition",{title:"Working with the Intuit API?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/intuit.md"},"editing this page"),".")),(0,a.kt)("h2",{id:"using-intuit-with-nango"},"Using Intuit with Nango"),(0,a.kt)("p",null,"API template name in Nango: ",(0,a.kt)("inlineCode",{parentName:"p"},"intuit"),(0,a.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,a.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Intuit in 5 minutes."),(0,a.kt)("p",null,"Supported features in Nango:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/nango-auth/core-concepts"},"Auth")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/nango-unified-apis/proxy"},"Proxy")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unified APIs"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Not included in any yet"))))),(0,a.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"No information yet, feel free to contribute it (or check out ",(0,a.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"No links yet, feel free to contribute it (or check out ",(0,a.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")),(0,a.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"No gotchas yet, feel free to contribute it (or check out ",(0,a.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")))}c.isMDXComponent=!0}}]);