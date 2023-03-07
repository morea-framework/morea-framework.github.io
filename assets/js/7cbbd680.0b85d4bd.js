"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[5646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Tables",hide_table_of_contents:!0},s=void 0,i={unversionedId:"instructors/tables",id:"instructors/tables",title:"Tables",description:"In Morea, you can create tables using standard markdown. For example:",source:"@site/docs/instructors/tables.md",sourceDirName:"instructors",slug:"/instructors/tables",permalink:"/docs/instructors/tables",draft:!1,tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1676916609,formattedLastUpdatedAt:"Feb 20, 2023",frontMatter:{title:"Tables",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Icons",permalink:"/docs/instructors/icons"},next:{title:"Admonitions (Call outs)",permalink:"/docs/instructors/admonitions"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Morea, you can create tables using standard markdown. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"| Attribute | Description|\n|:----------|------------|\n| shape     | Returns a tuple representing the dimensionality of the DataFrame. |\n| size      | Returns an int representing the number of elements in this object. |\n| dtypes    | Returns the data types in the DataFrame. |\n| columns   | Returns a Series of the header names from the DataFrame|\n")),(0,a.kt)("p",null,"This produces a table, but not one that is particularly nicely formatted:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1856).Z,width:"1486",height:"438"})),(0,a.kt)("p",null,"You can make the table look much nicer by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},".table")," class to the HTML. This is how you do it in markdown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"| Attribute | Description|\n|:----------|------------|\n| shape     | Returns a tuple representing the dimensionality of the DataFrame. |\n| size      | Returns an int representing the number of elements in this object. |\n| dtypes    | Returns the data types in the DataFrame. |\n| columns   | Returns a Series of the header names from the DataFrame|\n{: .table}\n")),(0,a.kt)("p",null,"Now that table looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3854).Z,width:"1540",height:"514"})),(0,a.kt)("p",null,"The underlying CSS framework for Morea, Bootstrap, provides some other table formatting. You can learn about other options by reading the ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.1/content/tables/"},"Bootstrap Table Documentation"),". "),(0,a.kt)("p",null,"For example, here is how you could produce a striped table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"| Attribute | Description|\n|:----------|------------|\n| shape     | Returns a tuple representing the dimensionality of the DataFrame. |\n| size      | Returns an int representing the number of elements in this object. |\n| dtypes    | Returns the data types in the DataFrame. |\n| columns   | Returns a Series of the header names from the DataFrame|\n{: .table .table-striped}\n")),(0,a.kt)("p",null,"Which looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9304).Z,width:"1952",height:"566"})))}m.isMDXComponent=!0},1856:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tables-1-c797cc6b23ed9e112fc7ebbe9479686d.png"},3854:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tables-2-07d6f811cbd4eb5683445c70378df22b.png"},9304:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tables-3-cbbe971c273fba3e63b056bebb9824a6.png"}}]);