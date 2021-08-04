"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[3003],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2930:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={title:"Include files"},c=void 0,s={unversionedId:"instructors/include-files",id:"instructors/include-files",isDocsHomePage:!1,title:"Include files",description:"Jekyll allows you to create small page fragments that you can include in multiple places on your site using the include file syntax. Include files can be passed parameters, which enables a simple kind of macro language that you can use to simplify your Morea content.",source:"@site/docs/instructors/include-files.md",sourceDirName:"instructors",slug:"/instructors/include-files",permalink:"/docs/instructors/include-files",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1627836639,formattedLastUpdatedAt:"8/1/2021",frontMatter:{title:"Include files"},sidebar:"tutorialSidebar",previous:{title:"Schedule page",permalink:"/docs/instructors/schedule-page"},next:{title:"Google Analytics",permalink:"/docs/instructors/google-analytics"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Jekyll allows you to create small page fragments that you can include in multiple places on your site using the ",(0,i.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/includes/"},"include file syntax"),". Include files can be passed parameters, which enables a simple kind of macro language that you can use to simplify your Morea content."),(0,i.kt)("p",null,"The only tricky thing to note about include files is that they are stored outside the ",(0,i.kt)("inlineCode",{parentName:"p"},"morea")," directory in a top-level directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"_includes"),". This means that if you create your own include files, you'll need to remember to migrate those files as well as those in the morea directory when you provide content to another Morea repository."))}f.isMDXComponent=!0}}]);