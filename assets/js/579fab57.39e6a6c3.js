"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[2777],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return d}});var o=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(i),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return i?o.createElement(m,n(n({ref:t},c),{},{components:i})):o.createElement(m,n({ref:t},c))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,n=new Array(r);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var u=2;u<r;u++)n[u]=i[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8472:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var o=i(7462),a=i(3366),r=(i(7294),i(3905)),n=["components"],s={title:"Quick start"},l=void 0,u={unversionedId:"instructors/quick-start",id:"instructors/quick-start",isDocsHomePage:!1,title:"Quick start",description:'This quick start takes you through the steps necessary to set up and publish a new Morea course site with "default" content.',source:"@site/docs/instructors/quick-start.md",sourceDirName:"instructors",slug:"/instructors/quick-start",permalink:"/docs/instructors/quick-start",tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1646080597,formattedLastUpdatedAt:"2/28/2022",frontMatter:{title:"Quick start"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/instructors/overview"},next:{title:"Local installation",permalink:"/docs/instructors/local-installation"}},c=[{value:"Join GitHub",id:"join-github",children:[],level:2},{value:"Create your course repository",id:"create-your-course-repository",children:[],level:2},{value:"Configure the config.yml file",id:"configure-the-configyml-file",children:[],level:2},{value:"Verify that GitHub built the site",id:"verify-that-github-built-the-site",children:[],level:2},{value:"Verify that the site is published",id:"verify-that-the-site-is-published",children:[],level:2},{value:"Display your published course website",id:"display-your-published-course-website",children:[],level:2}],p={toc:c};function h(e){var t=e.components,s=(0,a.Z)(e,n);return(0,r.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'This quick start takes you through the steps necessary to set up and publish a new Morea course site with "default" content.'),(0,r.kt)("h2",{id:"join-github"},"Join GitHub"),(0,r.kt)("p",null,"If you haven't already, ",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/articles/signing-up-for-a-new-github-account"},"sign up for GitHub"),". There are two common types of GitHub accounts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Free Accounts.  You can use a GitHub "Free" account to create Morea sites, but with one important restriction: you cannot make your repository private ',(0,r.kt)("em",{parentName:"p"},"and")," publish the site as a GitHub Page.  If your Morea source code is in a public GitHub repo, then you cannot store private information (such as tests) in your repo.  If you are OK with anyone (including students) seeing every file stored in your Morea repo, then a Free Account is fine. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Education Accounts.  If you are approved for a GitHub "Educator" account, then you can upgrade the organisation containing your Morea site repo to "Team" status for free. Organizations under the "Team" plan can have private GitHub repos that are also published as a GitHub Page. This is quite nice, as it means you can store tests and other confidential information in your repo using Morea\'s ',(0,r.kt)("a",{parentName:"p",href:"/docs/instructors/private-files"},"private files")," mechanism.  If you are associated with an educational institution, you can  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount"},"apply for an educator or researcher discount"),". Once you have been approved for the GitHub Educator Plan, you can go to the ",(0,r.kt)("a",{parentName:"p",href:"https://education.github.com/toolbox/offers/github-org-upgrades"},"Upgrade Organization")," page to upgrade the organization containing your Morea site repo to the Team plan."))),(0,r.kt)("h2",{id:"create-your-course-repository"},"Create your course repository"),(0,r.kt)("p",null,"Login to GitHub and go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/morea-framework/morea"},"https://github.com/morea-framework/morea"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(8403).Z})),(0,r.kt)("p",null,'Next, click "Use this template" and fill out the page:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provide a repository name (typically the course number and semester)."),(0,r.kt)("li",{parentName:"ul"},"Make the repo private."),(0,r.kt)("li",{parentName:"ul"},"Include all branches.")),(0,r.kt)("p",null,"It should look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(520).Z})),(0,r.kt)("p",null,'When you are done, click on "Create repository from template". After the repo is created, you should be at a page in your own GitHub account with a copy of the Morea files:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(2505).Z})),(0,r.kt)("h2",{id:"configure-the-configyml-file"},"Configure the config.yml file"),(0,r.kt)("p",null,'Next, scroll down the list of files until you see "_config.yml", and click it:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(8915).Z})),(0,r.kt)("p",null,"Click on the pencil icon to edit this file within your browser:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(4254).Z})),(0,r.kt)("p",null,"Make the following changes to this file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Edit the "name:" field to specify your course name. (Example: "CS 299 Fall 2021")'),(0,r.kt)("li",{parentName:"ul"},'Edit the "baseurl:" field to specify your repository name. (Example: "/cs299fall21").')),(0,r.kt)("p",null,"Here's what it might look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(7502).Z})),(0,r.kt)("p",null,'Now scroll down to the bottom of the page, write in a commit comment (i.e. "Update _config.yml"), and click "Commit changes".'),(0,r.kt)("h2",{id:"verify-that-github-built-the-site"},"Verify that GitHub built the site"),(0,r.kt)("p",null,'Next, click on the "Actions" tab. You will see a workflow running. This task is building your site and deploying the HTML pages to the gh-pages branch of your repository. When it has completed, you should see a green checkbox next to your commit:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(9133).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the site does not build correctly, first check to make sure the baseurl field matches the repository name. If it doesn't, then just edit the file, commit the change, and wait for the build to conclude."),(0,r.kt)("p",{parentName:"div"},"If that doesn't fix it, please contact a Morea developer (i.e. Philip Johnson (",(0,r.kt)("a",{parentName:"p",href:"mailto:johnson@hawaii.edu"},"johnson@hawaii.edu"),"))."))),(0,r.kt)("p",null,"The first couple of workflow runs could take several minutes, but these runs result in caching that should decrease subsequent build times substantially.  After this initial setup, your site should typically build in less than a minute."),(0,r.kt)("h2",{id:"verify-that-the-site-is-published"},"Verify that the site is published"),(0,r.kt)("p",null,'Now click on the Settings tab, then click "Pages". You should see the following:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(6620).Z})),(0,r.kt)("p",null,'Please click the "Enforce HTTPS" checkbox.'),(0,r.kt)("h2",{id:"display-your-published-course-website"},"Display your published course website"),(0,r.kt)("p",null,"Now click on the link in the GitHub Pages page to see your newly published Morea site. It should look similar to this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(1771).Z})),(0,r.kt)("p",null,'Unfortunately, apart from the site name in the menubar ("CS 299 Fall 2021"), none of this content is appropriate for your course!'),(0,r.kt)("p",null,"Before proceeding, you might want to spend a few minutes clicking around your newly site.  This site illustrates many (though not all) of the features of a Morea site."),(0,r.kt)("p",null,"The next two sections guide you through the tools you need to install to develop a Morea site on your computer as well as some simple examples of modifications to your sample site."))}h.isMDXComponent=!0},520:function(e,t,i){t.Z=i.p+"assets/images/morea-repo-page-2-47e00952f83915c41a3caa9927b91b7b.png"},2505:function(e,t,i){t.Z=i.p+"assets/images/morea-repo-page-3-379c7609867635eba7f931445e1f35e9.png"},8915:function(e,t,i){t.Z=i.p+"assets/images/morea-repo-page-4-0743d6b9248ca86a60cdd3f5c0bbfd54.png"},4254:function(e,t,i){t.Z=i.p+"assets/images/morea-repo-page-5-fd4da52ef3bc20f6971f18147de10533.png"},7502:function(e,t,i){t.Z=i.p+"assets/images/morea-repo-page-6-c1b452fe17b63944735fd7306fc49477.png"},9133:function(e,t,i){t.Z=i.p+"assets/images/morea-repo-page-7-fd3509f0f29a1a431777b54cb8f89690.png"},6620:function(e,t,i){t.Z=i.p+"assets/images/morea-repo-page-8-6bccc4cbc3a1769e2b22ea4935d319af.png"},1771:function(e,t,i){t.Z=i.p+"assets/images/morea-repo-page-9-52ad3cd3279d7783a9409c502da10b60.png"},8403:function(e,t,i){t.Z=i.p+"assets/images/morea-repo-page-1f311bb449a05c7af438610cfa5cc813.png"}}]);