"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[5851],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),h=o,d=f["".concat(u,".").concat(h)]||f[h]||p[h]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8604:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={title:"Fix font loading over https"},u=void 0,c={permalink:"/blog/2016/08/09/font-fix",source:"@site/blog/2016-08-09-font-fix.md",title:"Fix font loading over https",description:'Unfortunately, several of the Morea "cerulean" style themes (i.e. cerulean\\green, cerulean\\red, etc.) were loading the Open Sans font using the http by default, sites built using those themes were not displaying the Open Sans font correctly when retrieved from a github.io domain.  (Instead, the Open Sans font fails to load and the site falls back to the use of the  Times Roman font.)',date:"2016-08-09T00:00:00.000Z",formattedDate:"August 9, 2016",tags:[],readingTime:.81,truncated:!1,prevItem:{title:"Morea Version 3.0 release",permalink:"/blog/2021/08/01/morea-version-3"},nextItem:{title:"Gallery refresh",permalink:"/blog/2016/03/04/gallery-refresh"}},s=[],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Unfortunately, several of the Morea "cerulean" style themes (i.e. cerulean',"_","green, cerulean","_","red, etc.) were loading the Open Sans font using the http: protocol. Now that GitHub uses https: by default, sites built using those themes were not displaying the Open Sans font correctly when retrieved from a github.io domain.  (Instead, the Open Sans font fails to load and the site falls back to the use of the  Times Roman font.)"),(0,a.kt)("p",null,"We just published a fix to these themes in the core repo so that Open Sans will be loaded correctly regardless of the protocol (http: or https:) used."),(0,a.kt)("p",null,"To get the fix, cd into your Morea top-level directory, then invoke the morea-merge-upstream.sh script to incorporate the corrected code into your local copy of these themes."),(0,a.kt)("p",null,"Then republish your site and all should be well."),(0,a.kt)("p",null,"Other themes (SuperHero, SpaceLab, etc.) did not have this bug and so you should not have noticed this problem if you were using them."),(0,a.kt)("p",null,"Our apologies for the inconvenience!"))}f.isMDXComponent=!0}}]);