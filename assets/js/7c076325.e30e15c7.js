"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"WaveAccounting"},o="WaveAccounting API wiki",p={unversionedId:"providers/wave_accounting",id:"providers/wave_accounting",title:"WaveAccounting API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/wave_accounting.md",sourceDirName:"providers",slug:"/providers/wave_accounting",permalink:"/providers/wave_accounting",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/wave_accounting.md",tags:[],version:"current",frontMatter:{sidebar_label:"WaveAccounting"},sidebar:"nango",previous:{title:"WakaTime",permalink:"/providers/wakatime"},next:{title:"Xero",permalink:"/providers/xero"}},l={},c=[{value:"Using WaveAccounting with Nango",id:"using-waveaccounting-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"waveaccounting-api-wiki"},"WaveAccounting API wiki"),(0,r.kt)("admonition",{title:"Working with the WaveAccounting API?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/wave_accounting.md"},"editing this page"),".")),(0,r.kt)("h2",{id:"using-waveaccounting-with-nango"},"Using WaveAccounting with Nango"),(0,r.kt)("p",null,"API template name in Nango: ",(0,r.kt)("inlineCode",{parentName:"p"},"wave-accounting"),(0,r.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,r.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Wave in 5 minutes."),(0,r.kt)("p",null,"Supported features in Nango:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/nango-auth/core-concepts"},"Auth")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/nango-unified-apis/proxy"},"Proxy")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unified APIs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Not included in any yet"))))),(0,r.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rating: ",(0,r.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),"\nRegistering an app takes only a few minutes, and you can start building immediately: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.waveapps.com/hc/en-us/articles/360020948171-Create-a-Wave-Account-and-Test-Businesses"},"App registration docs")),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.waveapps.com/hc/en-us/articles/360020948171-Create-a-Wave-Account-and-Test-Businesses"},"How to register an Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.waveapps.com/hc/en-us/articles/360019493652-OAuth-Guide"},"OAuth-related docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.waveapps.com/hc/en-us/articles/360032818132"},"List of OAuth scopes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.waveapps.com/hc/en-us/articles/360018937431-API-Playground"},"API"))),(0,r.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"))}u.isMDXComponent=!0}}]);