"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[9991],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4118:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={title:"Ignore directories"},s=void 0,l={permalink:"/blog/2014/06/21/ignore-directories",source:"@site/blog/2014-06-21-ignore-directories.md",title:"Ignore directories",description:"The latest version of basic-template contains an update to the MoreaGenerator.rb file which now ignores any directories inside the morea/ directory named _ignore.  This allows you to store private data inside the morea/ directory if you (for example) which to associate tests or other files with the module.",date:"2014-06-21T00:00:00.000Z",formattedDate:"June 21, 2014",tags:[],readingTime:.34,truncated:!1,authors:[],prevItem:{title:"Non-Morea markdown files",permalink:"/blog/2014/06/25/nonmorea-markdown"},nextItem:{title:"QuickStart process redesigned",permalink:"/blog/2014/06/17/quickstart-redesign"}},u={authorsImageUrls:[]},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The latest version of basic-template contains an update to the MoreaGenerator.rb file which now ignores any directories inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"morea/")," directory named ",(0,i.kt)("inlineCode",{parentName:"p"},"_ignore"),".  This allows you to store private data inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"morea/")," directory if you (for example) which to associate tests or other files with the module."),(0,i.kt)("p",null,"For more details, see the private data section of the user guide."),(0,i.kt)("p",null,"To obtain this update, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"morea-merge-upstream.sh")," script."))}m.isMDXComponent=!0}}]);