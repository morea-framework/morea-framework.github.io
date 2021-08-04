"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[6068],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],s={title:"Embedding slideshows"},l=void 0,c={unversionedId:"instructors/slides",id:"instructors/slides",isDocsHomePage:!1,title:"Embedding slideshows",description:"Rather than include a link to a .ppt or .pdf file, you might find it more user-friendly to embed your slides in a page. The easiest way to do this is by using a cloud-based presentation hosting service, such as SlideShare. In the following example, we will use a similar service, Speaker Deck, which provides a responsive HTML5 embedded player. If you prefer SlideShare, the same general procedure will work.",source:"@site/docs/instructors/slides.md",sourceDirName:"instructors",slug:"/instructors/slides",permalink:"/docs/instructors/slides",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1627836639,formattedLastUpdatedAt:"8/1/2021",frontMatter:{title:"Embedding slideshows"}},p=[],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rather than include a link to a .ppt or .pdf file, you might find it more user-friendly to embed your slides in a page. The easiest way to do this is by using a cloud-based presentation hosting service, such as ",(0,i.kt)("a",{parentName:"p",href:"http://www.slideshare.net/"},"SlideShare"),". In the following example, we will use a similar service, ",(0,i.kt)("a",{parentName:"p",href:"https://speakerdeck.com/"},"Speaker Deck"),", which provides a responsive HTML5 embedded player. If you prefer SlideShare, the same general procedure will work."),(0,i.kt)("p",null,'After creating your slideshow, find the "Embed" button.  Clicking this button will pop up a dialog box with the HTML ',(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," element you must place in your Morea page to embed this  presentation.  For example, here is what a readings page might look like with the ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'---\ntitle: "Lecture Notes: Sequential Warmup"\npublished: true\nmorea_id: sequentiallecturenotesreadings\nmorea_summary: "Parallelism, sequential performance, sequential code optimization, the memory wall, compiler optimization, not really sequential, conclusion"\nmorea_type: reading\nmorea_sort_order: 1\n---\n\n## Lecture Notes: Sequential Warmup\n\n<script async class="speakerdeck-embed" data-id="ef27d6f0f33001316dfc66ebab3e7b80" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"><\/script>\n\n``\n')))}d.isMDXComponent=!0}}]);