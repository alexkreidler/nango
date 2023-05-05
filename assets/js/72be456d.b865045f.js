"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3587],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),f=n,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_label:"Payfit"},o="Payfit API wiki",p={unversionedId:"providers/payfit",id:"providers/payfit",title:"Payfit API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/payfit.md",sourceDirName:"providers",slug:"/providers/payfit",permalink:"/providers/payfit",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/payfit.md",tags:[],version:"current",frontMatter:{sidebar_label:"Payfit"},sidebar:"nango",previous:{title:"Pandadoc",permalink:"/providers/pandadoc"},next:{title:"Pipedrive",permalink:"/providers/pipedrive"}},l={},s=[{value:"Using Payfit with Nango",id:"using-payfit-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"payfit-api-wiki"},"Payfit API wiki"),(0,n.kt)("admonition",{title:"Working with the Payfit API?",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/payfit.md"},"editing this page"),".")),(0,n.kt)("h2",{id:"using-payfit-with-nango"},"Using Payfit with Nango"),(0,n.kt)("p",null,"API template name in Nango: ",(0,n.kt)("inlineCode",{parentName:"p"},"payfit"),(0,n.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,n.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Payfit in 5 minutes."),(0,n.kt)("p",null,"Supported features in Nango:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/nango-auth/core-concepts"},"Auth")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/nango-unified-apis/proxy"},"Proxy")),(0,n.kt)("td",{parentName:"tr",align:null},"\u274e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Unified APIs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"Not included in any yet"))))),(0,n.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rating: ",(0,n.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),"\nRegistering an app takes only a few minutes, and you can start building immediately: ",(0,n.kt)("a",{parentName:"p",href:"https://developers.payfit.io/docs/quickstart-guide#2%EF%B8%8F%E2%83%A3-become-a-payfit-partner"},"App registration docs")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.payfit.io/docs/quickstart-guide#2%EF%B8%8F%E2%83%A3-become-a-payfit-partner"},"How to register an Application")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.payfit.io/docs/implementing-the-oauth2-flow"},"OAuth-related docs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.payfit.io/docs/scopes-2"},"List of OAuth scopes"))),(0,n.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Payfit does not return a refresh token, you will have to reauthorize the user again.")))}d.isMDXComponent=!0}}]);