"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[7724],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,d=p["".concat(s,".").concat(h)]||p[h]||f[h]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Fix font loading over https"},l=void 0,i={permalink:"/blog/2016/08/09/font-fix",source:"@site/blog/2016-08-09-font-fix.md",title:"Fix font loading over https",description:'Unfortunately, several of the Morea "cerulean" style themes (i.e. cerulean\\green, cerulean\\red, etc.) were loading the Open Sans font using the http by default, sites built using those themes were not displaying the Open Sans font correctly when retrieved from a github.io domain.  (Instead, the Open Sans font fails to load and the site falls back to the use of the  Times Roman font.)',date:"2016-08-09T00:00:00.000Z",formattedDate:"August 9, 2016",tags:[],readingTime:.81,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Fix font loading over https"},prevItem:{title:"Morea Version 3.0 release",permalink:"/blog/2021/08/01/morea-version-3"},nextItem:{title:"Gallery refresh",permalink:"/blog/2016/03/04/gallery-refresh"}},s={authorsImageUrls:[]},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Unfortunately, several of the Morea "cerulean" style themes (i.e. cerulean',"_","green, cerulean","_","red, etc.) were loading the Open Sans font using the http: protocol. Now that GitHub uses https: by default, sites built using those themes were not displaying the Open Sans font correctly when retrieved from a github.io domain.  (Instead, the Open Sans font fails to load and the site falls back to the use of the  Times Roman font.)"),(0,o.kt)("p",null,"We just published a fix to these themes in the core repo so that Open Sans will be loaded correctly regardless of the protocol (http: or https:) used."),(0,o.kt)("p",null,"To get the fix, cd into your Morea top-level directory, then invoke the morea-merge-upstream.sh script to incorporate the corrected code into your local copy of these themes."),(0,o.kt)("p",null,"Then republish your site and all should be well."),(0,o.kt)("p",null,"Other themes (SuperHero, SpaceLab, etc.) did not have this bug and so you should not have noticed this problem if you were using them."),(0,o.kt)("p",null,"Our apologies for the inconvenience!"))}f.isMDXComponent=!0}}]);