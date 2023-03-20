"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[486],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>c});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(o),c=r,m=u["".concat(p,".").concat(c)]||u[c]||h[c]||a;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5494:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_label:"Contribute a New Provider"},i="Contribute a New Provider",l={unversionedId:"contribute-api",id:"contribute-api",title:"Contribute a New Provider",description:"Adding support for a new provider to Nango is fast & easy. Please follow the steps below and we will be happy to accept your PR!",source:"@site/docs/contribute-api.md",sourceDirName:".",slug:"/contribute-api",permalink:"/contribute-api",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/contribute-api.md",tags:[],version:"current",frontMatter:{sidebar_label:"Contribute a New Provider"},sidebar:"nango",previous:{title:"Deploy Nango to Heroku",permalink:"/nango-deploy/heroku"}},p={},s=[{value:"Step 0: A quick overview of how provider templates work in Nango",id:"step-0-a-quick-overview-of-how-provider-templates-work-in-nango",level:2},{value:"Step 1: Add your new provider to <code>providers.yaml</code>",id:"step-1-add-your-new-provider-to-providersyaml",level:2},{value:"Step 2: Test your new provider",id:"step-2-test-your-new-provider",level:2},{value:"1. Add your client credentials to the local Nango Server",id:"1-add-your-client-credentials-to-the-local-nango-server",level:3},{value:"2. Navigate to the Test Website and Trigger the OAuth Flow",id:"2-navigate-to-the-test-website-and-trigger-the-oauth-flow",level:3},{value:"3. Check the access token in the dashboard",id:"3-check-the-access-token-in-the-dashboard",level:3},{value:"Step 3: Add your integration to the Documentation",id:"step-3-add-your-integration-to-the-documentation",level:2},{value:"Step 4: Add the integration logo (optional)",id:"step-4-add-the-integration-logo-optional",level:2},{value:"Step 5: Submit your PR",id:"step-5-submit-your-pr",level:2},{value:"Where to get help",id:"where-to-get-help",level:2}],d={toc:s};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contribute-a-new-provider"},"Contribute a New Provider"),(0,r.kt)("p",null,"Adding support for a new provider to Nango is fast & easy. Please follow the steps below and we will be happy to accept your PR!"),(0,r.kt)("p",null,"If you find a bug with one of the existing providers feel free to use these steps to submit a PR with a fix. Thank you!"),(0,r.kt)("h2",{id:"step-0-a-quick-overview-of-how-provider-templates-work-in-nango"},"Step 0: A quick overview of how provider templates work in Nango"),(0,r.kt)("p",null,"Support for the OAuth flow of different providers in Nango is implemented with templates: A small config that tells Nango how to perform the OAuth flow for the specific provider."),(0,r.kt)("p",null,"All templates of Nango live in a single file called ",(0,r.kt)("a",{parentName:"p",href:"https://nango.dev/oauth-providers"},"providers.yaml")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," package. ",(0,r.kt)("a",{parentName:"p",href:"https://yaml.org/"},"More about YAML here"),"."),(0,r.kt)("p",null,"Most templates only need to make use of 2-3 configuration keys, but in some cases you might need more.\nFor a full list of configuration options please check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/Nango/blob/master/packages/auth/lib/models.ts"},"type definitions here"),"."),(0,r.kt)("p",null,"The most commonly used configuration options are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"provider-slug: # Shorthand for the provider, ideally the provider's name. Must be unique. Kebab case.\n    ##########\n    # Mandatory fields\n    ##########\n    auth_mode: OAUTH2 # Either OAUTH1 (for OAuth 1.0a) or OAUTH2\n    authorization_url: https://${connectionConfig.params.subdomain}.gitlab.com/oauth/authorize # The URL of the authorization page for the OAuth service (supports string interpolation)\n    token_url: https://${connectionConfig.params.subdomain}.gitlab.com/oauth/token # The URL for the token request (supports string interpolation)\n\n    ##########\n    # Optional fields\n    ##########\n    authorization_params: # Additional parameters to pass along in the authorization step\n        response_type: code\n    token_params: # Additional parameters to pass along in the token request\n        mycoolparam: value\n    refresh_url: https://api.example.com/oauth/refresh # The URL to use for refreshing the access token (only if different from token_url)\n    scope_separator: ',' # String to use to separate scopes. Defaults to ' ' (1 space) if not provided\n\n    # Metadata capture\n    redirect_uri_metadata:\n        - subdomain # Save the 'subdomain' query parameter value returned in the Redirect URI (Connection Metadata)\n    token_response_metadata:\n        - scopes # Save the 'scopes' query parameter value returned in the token response (Connection Metadata)\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Templates support parameters using string interpolation (cf. ",(0,r.kt)("a",{parentName:"p",href:"/reference/frontend-sdk#connection-config"},"flow Configuration"),") for dynamic URLs, etc.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can configure some ",(0,r.kt)("a",{parentName:"p",href:"/reference/core-concepts#metadata"},"Connection Metadata"),", which is additional metadata that you want to capture during the OAuth flow and store in the Connection.")),(0,r.kt)("h2",{id:"step-1-add-your-new-provider-to-providersyaml"},"Step 1: Add your new provider to ",(0,r.kt)("inlineCode",{parentName:"h2"},"providers.yaml")),(0,r.kt)("p",null,"Fork the repo and edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/server/providers.yaml")," file as explained above to add support for the new provider. The API documentation should contain all the details you need on the OAuth flow to complete this step."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"We are here")," if you need help with this."),(0,r.kt)("h2",{id:"step-2-test-your-new-provider"},"Step 2: Test your new provider"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some OAuth providers are very restrictive with callback URIs and require https or don't allow ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," as a domain/URL. This can make it very hard to test things locally."),(0,r.kt)("p",{parentName:"admonition"},"The easiest workaround we found is to use this simple service: ",(0,r.kt)("a",{parentName:"p",href:"https://redirectmeto.com/"},"https://redirectmeto.com"),"."),(0,r.kt)("p",{parentName:"admonition"},"With this the Nango localhost callback URL becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"https://redirectmeto.com/http://localhost:3003/oauth/callback")," and you will need to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"NANGO_CALLBACK_URL")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NANGO_CALLBACK_URL=https://redirectmeto.com/http://localhost:3003/oauth/callback\n"))),(0,r.kt)("p",null,"To test your new provider:"),(0,r.kt)("p",null,"The docker compose configuration in the root of the repo ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," will run 3 containers."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Postgres DB"),(0,r.kt)("li",{parentName:"ol"},"Nango Server"),(0,r.kt)("li",{parentName:"ol"},"Test Website to Trigger the OAuth Flow")),(0,r.kt)("p",null,"To propagate your changes after editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"providers.yaml")," file, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose restart nango-server # Force a restart, which will load in the yaml again\ndocker compose run nango-server cat packages/server/providers.yaml # print the contents of the providers file from inside the container\n")),(0,r.kt)("p",null,"When you are ready to test your new provider template:"),(0,r.kt)("h3",{id:"1-add-your-client-credentials-to-the-local-nango-server"},"1. Add your client credentials to the local Nango Server"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3003"},"local dashboard")," in your browser and add a new Integration with your freshly added provider (it should show up in the provider dropdown)."),(0,r.kt)("h3",{id:"2-navigate-to-the-test-website-and-trigger-the-oauth-flow"},"2. Navigate to the Test Website and Trigger the OAuth Flow"),(0,r.kt)("p",null,"The test site should be running at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8001/bin/quickstart.html"},"http://localhost:8001/bin/quickstart.html")),(0,r.kt)("p",null,"You can modify the ports in the docker compose if there are any conflicts with other local services on your host machine."),(0,r.kt)("h3",{id:"3-check-the-access-token-in-the-dashboard"},"3. Check the access token in the dashboard"),(0,r.kt)("p",null,"If all goes well you should see your new Connection in the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3003/connections"},"Connections list")," in the dashboard."),(0,r.kt)("p",null,"Check the Connection details and make sure all looks as expected (access token, refresh token, metadata)."),(0,r.kt)("h2",{id:"step-3-add-your-integration-to-the-documentation"},"Step 3: Add your integration to the Documentation"),(0,r.kt)("p",null,"Add a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"<provider_slug>.md")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"github.md"),") corresponding to your new integration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/docs/providers")," folder. You can check out check out ",(0,r.kt)("a",{parentName:"p",href:"/providers/airtable"},"airtable")," for an example."),(0,r.kt)("p",null,"Also, add your new documentation page to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/blob/master/docs/sidebars.js"},(0,r.kt)("inlineCode",{parentName:"a"},"docs/sidebar.js"))," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," array (in alphabetical order):"),(0,r.kt)("p",null,"[",(0,r.kt)("img",{alt:"Provider Sidebar List",src:o(7043).Z,width:"587",height:"525"}),"]"),(0,r.kt)("h2",{id:"step-4-add-the-integration-logo-optional"},"Step 4: Add the integration logo (optional)"),(0,r.kt)("p",null,"To be displayed in the app and docs, optionally add the provider logo in SVG to ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/webapp/public/images/template-logos/"),". The name of the file should be ",(0,r.kt)("inlineCode",{parentName:"p"},"<provider_slug>.svg"),". Ideally, the logo should be 44px on its longest side (width or height), inside a 62x62px transparent box."),(0,r.kt)("h2",{id:"step-5-submit-your-pr"},"Step 5: Submit your PR"),(0,r.kt)("p",null,'Submit your PR with the new provider to the Nango repo. Please thoroughly test the integration and include the following mention in your PR: "I successfully tested the provider config creation, OAuth flow & valid token."'),(0,r.kt)("p",null,"We will review your PR asap and merge it into the main Nango repo for inclusion with the next release."),(0,r.kt)("p",null,"Thanks a lot for your contribution!! \u2764\ufe0f"),(0,r.kt)("h2",{id:"where-to-get-help"},"Where to get help"),(0,r.kt)("p",null,"If you get stuck or need help please join our ",(0,r.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"Slack community")," where the Nango contributors hang out. We will do our best to help you and get Nango to work with the OAuth flow of your provider."))}h.isMDXComponent=!0},7043:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/provider-sidebar-aee01a07f1d29f64c6ee2aa9cad69c53.png"}}]);