"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[4374],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),h=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=h(i),u=a,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return i?n.createElement(g,r(r({ref:t},c),{},{components:i})):n.createElement(g,r({ref:t},c))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var h=2;h<o;h++)r[h]=i[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8300:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=i(7462),a=(i(7294),i(3905));const o={title:"Admin Editing"},r=void 0,l={unversionedId:"change-hi/admin-editing",id:"change-hi/admin-editing",title:"Admin Editing",description:"This page provides guidance to Change-HI administrators on how to help maintain the Change-HI/EDU site.",source:"@site/docs/change-hi/admin-editing.md",sourceDirName:"change-hi",slug:"/change-hi/admin-editing",permalink:"/docs/change-hi/admin-editing",draft:!1,tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1668101548,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{title:"Admin Editing"},sidebar:"tutorialSidebar",previous:{title:"Misc Tips",permalink:"/docs/change-hi/tips"},next:{title:"Overview",permalink:"/docs/developers/overview"}},s={},h=[{value:"Motivation",id:"motivation",level:2},{value:"Edit a document",id:"edit-a-document",level:2},{value:"Login to GitHub",id:"login-to-github",level:3},{value:"Find the file of interest",id:"find-the-file-of-interest",level:3},{value:"Edit the file",id:"edit-the-file",level:3},{value:"What if things go horribly, horribly wrong?",id:"what-if-things-go-horribly-horribly-wrong",level:2}],c={toc:h},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page provides guidance to Change-HI administrators on how to help maintain the Change-HI/EDU site."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The Change-HI project maintains several public-facing sites: the ",(0,a.kt)("a",{parentName:"p",href:"https://datascience.hawaii.edu/"},"Hawaii Data Science Institute")," site, the ",(0,a.kt)("a",{parentName:"p",href:"https://hawaii.edu/epscor/change-hi/"},"Change-HI EPSCoR")," site, and the ",(0,a.kt)("a",{parentName:"p",href:"https://change-hi.github.io/"},"Change-HI/EDU")," site. The first two sites are implemented using WordPress, but Change-HI/EDU is implemented using Morea, and so the process for maintaining the site is quite different. "),(0,a.kt)("p",null,"To make changes to a WordPress site, an administrator can:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into the WordPress admin panel associated with the site,"),(0,a.kt)("li",{parentName:"ol"},"Make changes to pages (or creates new pages) using a WYSIWYG editor,"),(0,a.kt)("li",{parentName:"ol"},'Press a "Preview" button to review the changes, and finally '),(0,a.kt)("li",{parentName:"ol"},'Press a "Publish" button to make the changes "live" on the public site.')),(0,a.kt)("p",null,"To make changes to the Change-HI/EDU site, an administrator can:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into GitHub, and traverse to the Change-HI/EDU github repository."),(0,a.kt)("li",{parentName:"ol"},"Edit one or more Markdown files using a browser-based editor."),(0,a.kt)("li",{parentName:"ol"},"Commit those files after making changes to save them to the repository. "),(0,a.kt)("li",{parentName:"ol"},"Step (3) automatically kicks off a build of the site. If no mistakes were made during editing, then the changes will be live on the public site within a couple of minutes. If not, then the site stays the way it was before.")),(0,a.kt)("p",null,'At first glance, changing the Change-HI/EDU site seems much more humbug. First, the files are in a weird format called "Markdown". Second, it seems like you can\'t "preview" your work before publishing it. Third, what happens if there are mistakes? How do you even know?'),(0,a.kt)("p",null,"All of these problems can be addressed, but requires a certain amount of tool installation and training (which the Data Fellows are receiving as part of their workshop development)."),(0,a.kt)("p",null,"To simplify things for Change-HI administrators, let's try the following process to start:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Drafts of documents to be posted on the Change-HI/EDU site are developed initially as Google Docs and circulated for review. "),(0,a.kt)("li",{parentName:"ol"},"When ready for publication, Philip will create a new page in the Change-HI/EDU site that contains the document, translated into Markdown format."),(0,a.kt)("li",{parentName:"ol"},"If minor changes need to be made, then a Change-HI administrator can use the following process to make the edits. ")),(0,a.kt)("h2",{id:"edit-a-document"},"Edit a document"),(0,a.kt)("p",null,"Later, you will learn how to create and add new documents. For now, let's just learn how to make changes to an existing document, which is thankfully pretty easy."),(0,a.kt)("h3",{id:"login-to-github"},"Login to GitHub"),(0,a.kt)("p",null,"Sign up for an account on GitHub here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/join"},"https://github.com/join")),(0,a.kt)("p",null,'Once you have signed up, email Philip with your GitHub username so he can give you privileges to edit the Change-HI/EDU files.  GitHub will email you an "invitation" to join the Change-HI GitHub organization which you will need to accept. '),(0,a.kt)("h3",{id:"find-the-file-of-interest"},"Find the file of interest"),(0,a.kt)("p",null,"The Change-HI source files are at: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/change-hi/change-hi.github.io"},"https://github.com/change-hi/change-hi.github.io"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(7930).Z,width:"1200",height:"1013"})),(0,a.kt)("p",null,'This is a public repo, so anyone can see it, but only GitHub users who have "write" access can actually make changes. '),(0,a.kt)("p",null,'Make sure you are logged in to GitHub (check the upper right corner) and that Philip has given you "write" permission before proceeding.'),(0,a.kt)("p",null,"The Change-HI source files are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"morea/"),' directory. Click on the "morea" link at the top level to navigate into that directory:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6728).Z,width:"1200",height:"1195"})),(0,a.kt)("p",null,"You can see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"morea/")," directory itself contains of a bunch of directories. Each of these directories contains files that implement a single module in the published site. "),(0,a.kt)("p",null,"Let's say we want to edit the page regarding Data Fellows expectations. That's in the Introduction module, so click on the \"intro\" link to see all of the files in that directory:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(2778).Z,width:"1200",height:"1119"})),(0,a.kt)("p",null,'Finally, click on the "reading-data-fellows-expectations.md" link to see the source for the file:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6128).Z,width:"1200",height:"1276"})),(0,a.kt)("p",null,"This might look a bit strange, but don't worry."),(0,a.kt)("h3",{id:"edit-the-file"},"Edit the file"),(0,a.kt)("p",null,'GitHub allows you to edit any page using your browser. To access the browser editor, locate the pencil icon (right hand side, about a third of the way down the page), click the down arrow, and select "Edit this file". Or, just type "E". Either way, you will get the following screen:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(2915).Z,width:"1200",height:"1276"})),(0,a.kt)("p",null,'Notice that the text in this file is written using a format called "Markdown". If you want, you can stop now and read this ',(0,a.kt)("a",{parentName:"p",href:"https://www.markdowntutorial.com/"},"simple tutorial on Markdown"),"."),(0,a.kt)("p",null,"Let's say you just want to change the date listed in the Onboarding section of this page from Friday, September 23 to the following Friday, September 30. "),(0,a.kt)("p",null,"Just edit that text like you would any document:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(5051).Z,width:"1200",height:"1276"})),(0,a.kt)("p",null,'Now scroll to the bottom of the page.  Type in a short comment describing the change (in my case, I wrote "Changed due date for onboarding"):'),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(7643).Z,width:"1200",height:"1276"})),(0,a.kt)("p",null,'Finally, click the green "Commit changes" button. That will save your changes at the site, and take you back to the display of the page. Notice that this change is now visible:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(7242).Z,width:"1200",height:"1276"})),(0,a.kt)("p",null,'At this point, GitHub will start rebuilding the site. If you want, you can click on the "Actions" tab to monitor the progress.  There are two actions that must run to publish the site: "Jekyll deploy" followed by "Pages build and deployment". Here\'s an example screenshot after the Jekyll deploy action has completed, but the Pages Build and Deploy action is still in progress:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(3850).Z,width:"1200",height:"744"})),(0,a.kt)("p",null,"Once both of them are complete, you should be able to see your changes live at the site:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(2851).Z,width:"1200",height:"782"})),(0,a.kt)("h2",{id:"what-if-things-go-horribly-horribly-wrong"},"What if things go horribly, horribly wrong?"),(0,a.kt)("p",null,"Fortunately, they can't. There are only two ways things can go wrong, neither of which is horrible:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You commit a change that breaks the build. In this case, if you go to the Actions page, GitHub will indicate that one of the actions did not complete successfully.  If that happens, just contact Philip and he will fix it. Until it's fixed, the site will remain up, but in its previous state."),(0,a.kt)("li",{parentName:"ol"},"You commit a change that doesn't break the build, but when you look at the published page, it's not right. If that happens, just contact Philip and he will fix it.  The page will be published in an incorrect way until Philip fixes it, but that will only be for a few minutes or hours.")))}p.isMDXComponent=!0},5051:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change-hi-github-repo-edit-2-cd5a45d5fed241820bde1571da8eac56.png"},7643:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change-hi-github-repo-edit-3-d51ee5f5b4de3f2924f9e969792a12a6.png"},7242:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change-hi-github-repo-edit-4-32a0797c0bfa2457205fd7b5f0984355.png"},3850:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change-hi-github-repo-edit-5-c2def2cc61e1f835c8eb74b027d2b463.png"},2851:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change-hi-github-repo-edit-6-494b16d0e45a6cc09982fdcde715bfc6.png"},2915:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change-hi-github-repo-edit-d1e6878550f651b21d443ccf548af5a2.png"},6128:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change-hi-github-repo-expectations-b93bcd09c8e4e05063eede4da2f23dec.png"},2778:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change-hi-github-repo-intro-e93a76c2ab5632ad7421ac57f19f15d9.png"},6728:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change-hi-github-repo-morea-0a4e60c7624b76f139a1dd39035b6ca2.png"},7930:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/change-hi-github-repo-53f8d67ceffe446fd2c1286bf999f9ac.png"}}]);