"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[4983],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9585:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Schedule page"},c=void 0,l={unversionedId:"instructors/schedule-page",id:"instructors/schedule-page",isDocsHomePage:!1,title:"Schedule page",description:"The Module, Reading, and Experience entity types support the moreastartdate and moreaenddate parameters in their Front Matter.   This information is read when the files are processed, and used to generate a page containing a calendar that displays these dates and durations.  For example:",source:"@site/docs/instructors/schedule-page.md",sourceDirName:"instructors",slug:"/instructors/schedule-page",permalink:"/docs/instructors/schedule-page",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1627836639,formattedLastUpdatedAt:"8/1/2021",frontMatter:{title:"Schedule page"},sidebar:"tutorialSidebar",previous:{title:"Formatting code",permalink:"/docs/instructors/formatting-code"},next:{title:"Include files",permalink:"/docs/instructors/include-files"}},u=[],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Module, Reading, and Experience entity types support the ",(0,o.kt)("inlineCode",{parentName:"p"},"morea_start_date")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"morea_end_date")," parameters in their Front Matter.   This information is read when the files are processed, and used to generate a page containing a calendar that displays these dates and durations.  For example:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5562).Z})),(0,o.kt)("p",null,"Clicking on one of these events in a live calendar will take you to the corresponding Module, Reading, or Experience definition page."),(0,o.kt)("p",null,"In order to display a link to this Schedule page in the NavBar, you must edit your ",(0,o.kt)("inlineCode",{parentName:"p"},"_config.yml")," file and uncomment the Schedule entry in the ",(0,o.kt)("inlineCode",{parentName:"p"},"morea_navbar_items")," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"morea_navbar_items:\n  #- Prerequisites\n  - Modules\n  - Outcomes\n  - Readings\n  - Experiences\n  #- Assessments\n  - Schedule\n")),(0,o.kt)("p",null,"Note that whenever you modify ",(0,o.kt)("inlineCode",{parentName:"p"},"_config.yml"),", you must restart Jekyll to see your changes."))}d.isMDXComponent=!0},5562:function(e,t,n){t.Z=n.p+"assets/images/schedule-357da14db091ee40b5aa3f5e41edac1c.png"}}]);