"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(b,o(o({ref:t},u),{},{components:r})):a.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_label:"Airtable"},o="Airtable API wiki",l={unversionedId:"providers/airtable",id:"providers/airtable",title:"Airtable API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/airtable.md",sourceDirName:"providers",slug:"/providers/airtable",permalink:"/providers/airtable",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/airtable.md",tags:[],version:"current",frontMatter:{sidebar_label:"Airtable"},sidebar:"nango",previous:{title:"Adobe",permalink:"/providers/adobe"},next:{title:"Amazon",permalink:"/providers/amazon"}},p={},s=[{value:"Using Airtable with Nango",id:"using-airtable-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"airtable-api-wiki"},"Airtable API wiki"),(0,n.kt)("admonition",{title:"Working with the Airtable API?",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/airtable.md"},"editing this page"),".")),(0,n.kt)("h2",{id:"using-airtable-with-nango"},"Using Airtable with Nango"),(0,n.kt)("p",null,"API template name in Nango: ",(0,n.kt)("inlineCode",{parentName:"p"},"airtable"),(0,n.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,n.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Airtable in 5 minutes."),(0,n.kt)("p",null,"Supported features in Nango:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/nango-auth/core-concepts"},"Auth")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/nango-unified-apis/proxy"},"Proxy")),(0,n.kt)("td",{parentName:"tr",align:null},"\u274e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Unified APIs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"Not included in any yet"))))),(0,n.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rating: ",(0,n.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),(0,n.kt)("br",{parentName:"p"}),"\n","Registering an app takes only a few minutes and you can start building immediately: ",(0,n.kt)("a",{parentName:"p",href:"https://airtable.com/developers/web/guides/oauth-integrations"},"App registration docs"),"\nTo publish it (so any airtable user can install it) a few more details are needed (support email, terms) but no manual review: ",(0,n.kt)("a",{parentName:"p",href:"https://airtable.com/developers/web/guides/oauth-integrations#distributing-your-integration"},"Publishing docs")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airtable.com/developers/web/api/introduction"},"Web API docs (their REST API)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airtable.com/developers/web/api/scopes"},"List of OAuth scopes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airtable.com/developers/web/api/rate-limits"},"Information on rate limits"))),(0,n.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"During the OAuth flow the user can decide to which resources (Bases) the app should have access to. ",(0,n.kt)("a",{parentName:"li",href:"https://airtable.com/developers/web/api/oauth-reference#resources"},"Read more here")),(0,n.kt)("li",{parentName:"ul"},"Refresh tokens also expire after 60 days of non use. Make sure you call ",(0,n.kt)("inlineCode",{parentName:"li"},"nango.getToken()")," at least every 60 days to trigger a refresh.")))}c.isMDXComponent=!0}}]);