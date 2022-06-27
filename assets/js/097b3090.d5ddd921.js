"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[4983],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Schedule page",hide_table_of_contents:!0},c=void 0,s={unversionedId:"instructors/schedule-page",id:"instructors/schedule-page",isDocsHomePage:!1,title:"Schedule page",description:"Overview",source:"@site/docs/instructors/schedule-page.md",sourceDirName:"instructors",slug:"/instructors/schedule-page",permalink:"/docs/instructors/schedule-page",tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1628641252,formattedLastUpdatedAt:"8/10/2021",frontMatter:{title:"Schedule page",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Formatting code",permalink:"/docs/instructors/formatting-code"},next:{title:"Include files",permalink:"/docs/instructors/include-files"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"Show the Schedule page in the navbar",id:"show-the-schedule-page-in-the-navbar",children:[],level:3},{value:"Configure the schedule/index.html file",id:"configure-the-scheduleindexhtml-file",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Module, Reading, and Experience entity types support the ",(0,i.kt)("inlineCode",{parentName:"p"},"morea_start_date")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"morea_end_date")," parameters in their Front Matter.   This information is read when the files are processed, and used to generate a page containing a calendar that displays these dates and durations.  For example:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5562).Z})),(0,i.kt)("p",null,"Clicking on one of these events in a live calendar will take you to the corresponding Module, Reading, or Experience definition page."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h3",{id:"show-the-schedule-page-in-the-navbar"},"Show the Schedule page in the navbar"),(0,i.kt)("p",null,"In order to display a link to this Schedule page in the NavBar, you must edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"_config.yml")," file and uncomment the Schedule entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"morea_navbar_items")," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"morea_navbar_items:\n  #- Prerequisites\n  - Modules\n  - Outcomes\n  - Readings\n  - Experiences\n  #- Assessments\n  - Schedule\n")),(0,i.kt)("h3",{id:"configure-the-scheduleindexhtml-file"},"Configure the schedule/index.html file"),(0,i.kt)("p",null,"The schedule/index.html file contains embedded scripts that must be slightly modified. Here is what the file contents look like to start:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'---\nlayout: default\ntitle: Schedule\n---\n{% include breadcrumb-2.html %}\n\n\x3c!--\n  Load FullCalendar for schedule page.\n  Documentation available at: http://fullcalendar.io/\n\n  Things to do to configure your Schedule page:\n  (1) Edit the holidayData variable to include holidays appropriate for this semester.\n  (2) Delete the initialDate field in the FullCalendar constructor so that the calendar automatically\n      displays the current month.\n--\x3e\n\n<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/fullcalendar@5.8.0/main.min.css">\n<script src="//cdn.jsdelivr.net/npm/fullcalendar@5.8.0/main.min.js"><\/script>\n\n\x3c!-- This script defines the moreaEventData variable containing an array of events from Morea pages. --\x3e\n<script src="schedule-info.js"><\/script>\n\n<script>\n  var holidayData = {color: \'green\',\n    events: [\n      {title: "Classes start", start: "2021-07-06"},\n      {title: "Holiday: Independence Day (Observed)", start: "2021-07-05"},\n      {title: "Classes end", start: "2021-07-30"},\n    ]};\n<\/script>\n\n<div style="margin-bottom: 10px" class="container">\n  <h1>Schedule</h1>\n  <div id=\'calendar\'></div>\n</div>\n\n<script>\n  document.addEventListener(\'DOMContentLoaded\', function() {\n    var calendarEl = document.getElementById(\'calendar\');\n    var calendar = new FullCalendar.Calendar(calendarEl, {\n      initialView: \'dayGridMonth\',\n      eventColor: \'#446e9b\',\n      initialDate: \'2021-07-01\',\n      eventSources: [{events: moreaEventData}, holidayData]\n    });\n    calendar.render();\n  });\n<\/script>\n')),(0,i.kt)("p",null,"As noted in the embedded comment, there are two things you must do to configure your schedule:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Edit the holidayData variable with the dates of holidays during your semester."),(0,i.kt)("li",{parentName:"ol"},'Remove the "initialDate" field in the bottom script. That enables the Schedule page to automatically display the current month when it is retrieved.')))}p.isMDXComponent=!0},5562:function(e,t,n){t.Z=n.p+"assets/images/schedule-357da14db091ee40b5aa3f5e41edac1c.png"}}]);