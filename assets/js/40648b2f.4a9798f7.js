"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[9991],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2480:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],c={title:"Ignore directories"},l=void 0,s={permalink:"/blog/2014/06/21/ignore-directories",source:"@site/blog/2014-06-21-ignore-directories.md",title:"Ignore directories",description:"The latest version of basic-template contains an update to the MoreaGenerator.rb file which now ignores any directories inside the morea/ directory named _ignore.  This allows you to store private data inside the morea/ directory if you (for example) which to associate tests or other files with the module.",date:"2014-06-21T00:00:00.000Z",formattedDate:"June 21, 2014",tags:[],readingTime:.34,truncated:!1,prevItem:{title:"Non-Morea markdown files",permalink:"/blog/2014/06/25/nonmorea-markdown"},nextItem:{title:"QuickStart process redesigned",permalink:"/blog/2014/06/17/quickstart-redesign"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The latest version of basic-template contains an update to the MoreaGenerator.rb file which now ignores any directories inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"morea/")," directory named ",(0,i.kt)("inlineCode",{parentName:"p"},"_ignore"),".  This allows you to store private data inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"morea/")," directory if you (for example) which to associate tests or other files with the module."),(0,i.kt)("p",null,"For more details, see the private data section of the user guide."),(0,i.kt)("p",null,"To obtain this update, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"morea-merge-upstream.sh")," script."))}f.isMDXComponent=!0}}]);