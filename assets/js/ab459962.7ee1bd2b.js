"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[352],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1423:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={title:"Embed video",hide_table_of_contents:!0},c=void 0,s={unversionedId:"instructors/embed-video",id:"instructors/embed-video",isDocsHomePage:!1,title:"Embed video",description:"YouTube videos are easy to embed into Readings or other Morea pages.",source:"@site/docs/instructors/embed-video.md",sourceDirName:"instructors",slug:"/instructors/embed-video",permalink:"/docs/instructors/embed-video",tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1662311140,formattedLastUpdatedAt:"9/4/2022",frontMatter:{title:"Embed video",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Include files",permalink:"/docs/instructors/include-files"},next:{title:"Icons",permalink:"/docs/instructors/icons"}},l=[],d={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"YouTube videos are easy to embed into Readings or other Morea pages. "),(0,i.kt)("p",null,"The includes directory provides a file called youtube.html that provides the boilerplate code for embedding a youtube video.  You can use it to embed a YouTube video like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{% include youtube.html id="WEpHzPPCKJE" %}\n')),(0,i.kt)("p",null,"If you need to include videos from other sources (such as Vimeo), you can write your own custom include file, using youtube.html as a basis."))}p.isMDXComponent=!0}}]);