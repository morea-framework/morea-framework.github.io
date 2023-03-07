"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=o,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={title:"Module implementation"},i=void 0,l={unversionedId:"instructors/module-implementation",id:"instructors/module-implementation",title:"Module implementation",description:"Now that you have designed your module, let's get to the fun part: implementation!",source:"@site/docs/instructors/module-implementation.md",sourceDirName:"instructors",slug:"/instructors/module-implementation",permalink:"/docs/instructors/module-implementation",draft:!1,tags:[],version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1678213761,formattedLastUpdatedAt:"Mar 7, 2023",frontMatter:{title:"Module implementation"},sidebar:"tutorialSidebar",previous:{title:"Module design",permalink:"/docs/instructors/module-design"},next:{title:"Morea's pedagogical pattern",permalink:"/docs/instructors/pedagogical-pattern"}},s={},d=[{value:"Prepare your workspace",id:"prepare-your-workspace",level:2},{value:"Make a copy of template-module",id:"make-a-copy-of-template-module",level:2},{value:"Rename and/or create a file for each module entity",id:"rename-andor-create-a-file-for-each-module-entity",level:2},{value:"Define the Dart module",id:"define-the-dart-module",level:2},{value:"Define outcomes",id:"define-outcomes",level:2},{value:"Define readings",id:"define-readings",level:2},{value:"Define experiences",id:"define-experiences",level:2},{value:"Define assessments",id:"define-assessments",level:2},{value:"Define the module schedule",id:"define-the-module-schedule",level:2},{value:"Edit schedule/index.html",id:"edit-scheduleindexhtml",level:3},{value:"Edit module start and end dates",id:"edit-module-start-and-end-dates",level:3},{value:"Edit experience and assessment due dates",id:"edit-experience-and-assessment-due-dates",level:3},{value:"Commit, push, and publish",id:"commit-push-and-publish",level:2},{value:"Additional edits",id:"additional-edits",level:2}],m={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that you have designed your module, let's get to the fun part: implementation!"),(0,o.kt)("admonition",{title:"Cloud vs. Local",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In this section, we will illustrate the activities using cloud-based development (Gitpod), but there are very few differences for local development (and we'll point them out as we go).")),(0,o.kt)("p",null,"The following video provides a walkthrough of the instructions in this page."),(0,o.kt)("iframe",{width:"100%",height:"415",src:"https://www.youtube.com/embed/twz1YXF-JFQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"prepare-your-workspace"},"Prepare your workspace"),(0,o.kt)("p",null,'I assume that you\'ve already gone through the local or cloud-based "installation" and "development" sections, so you have a running Morea template site. To start, make sure that you can build and view the site without error. This means you can run ',(0,o.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve"),' and (1) no error messages result, and (2) you can display the site successfully at the URL listed in the "Server address" field. For example:'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7165).Z,width:"1500",height:"1086"})),(0,o.kt)("p",null,"Notice that there are no errors following the invocation of ",(0,o.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve"),". "),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Restarting a Gitpod workspace requires re-running ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"bundle install")),(0,o.kt)("p",{parentName:"admonition"},'Gitpod automatically "stops" workspaces after 30 minutes of inactivity.  To resume work, you need to "restart" the workspace.'),(0,o.kt)("p",{parentName:"admonition"},"When a stopped Gitpod workspace is restarted, you will need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"bundle install")," again. If you get an error when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve"),", this might be the reason.")),(0,o.kt)("p",null,"Clicking on the Server address link (",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4000/ics888s23"),") brings up the home page for my site in a new browser tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3421).Z,width:"1500",height:"1086"})),(0,o.kt)("p",null,"Obviously, the home page needs to be rewritten for this course. You can change the contents of this page by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"morea/home.md")," file.  But let's focus on the implementation of our new module."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Modifications for local development")),(0,o.kt)("p",{parentName:"admonition"},"If you are doing local development, this step is basically identical: bring up the repository contents in your editor, run ",(0,o.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," in a terminal window, and display the site in a browser. ")),(0,o.kt)("h2",{id:"make-a-copy-of-template-module"},"Make a copy of template-module"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"morea")," directory contains a subdirectory called ",(0,o.kt)("inlineCode",{parentName:"p"},"morea-template")," that contains a skeleton set of files for defining new modules. Let's use that as the basis for our new module. "),(0,o.kt)("p",null,'First, click your mouse on the "template-module" directory label in the Project window to select it, right click to bring up a menu of operations, and select "Copy".'),(0,o.kt)("p",null,'Second, click your mouse on the "morea" directory label in the Project window to select it, right click to bring up a menu of operations, and select "Paste".'),(0,o.kt)("p",null,'In the case of VS Code, a new directory will be created in the "morea" directory called "template-module copy".  '),(0,o.kt)("p",null,'Third, click your mouse on the "template-module copy" directory label in the Project window to select it, right click to bring up a menu of operations, and select "Rename". Rename the directory to "dart". '),(0,o.kt)("p",null,'If you click on the "dart" directory label to reveal its contents, you\'ll see something like this:'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8981).Z,width:"1500",height:"1086"})),(0,o.kt)("p",null,'As you can see, the dart directory contains five files corresponding to each of the Morea entity types: "module-CHANGE-ME.md", "outcome-CHANGE-ME.md", "reading-CHANGE-ME.md", "experience-CHANGE-ME.md", and "assessment-CHANGE-ME.md", '),(0,o.kt)("p",null,'As you can see, the dart directory contains the text "CHANGE ME" at various places to help you understand what you need to edit to create a Morea module.'),(0,o.kt)("h2",{id:"rename-andor-create-a-file-for-each-module-entity"},"Rename and/or create a file for each module entity"),(0,o.kt)("p",null,"The previous section presented a Dart module design document which specifies that this module should have 1 outcome, 2 readings, and 2 experiences.  So, let's create another reading and outcome file, and rename all of the files to better indicate their contents.  The dart directory now looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(139).Z,width:"1500",height:"1129"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Why no Morea errors?")),(0,o.kt)("p",{parentName:"admonition"},'The astute Morea developer might be wondering why we are able to create copies of Morea directories and files and not get any "duplicate ID" errors. '),(0,o.kt)("p",{parentName:"admonition"},"The answer is that all of files in the template-module directory have their ",(0,o.kt)("inlineCode",{parentName:"p"},"published:")," field set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),'. Because of this, the Morea "compiler" never processes the file and so their IDs are never defined.'),(0,o.kt)("p",{parentName:"admonition"},'As you will see, we will incrementally "publish" the files in the dart directory by setting their ',(0,o.kt)("inlineCode",{parentName:"p"},"published:")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", but only after their contents have been edited and ready for publication.")),(0,o.kt)("h2",{id:"define-the-dart-module"},"Define the Dart module"),(0,o.kt)("p",null,"Let's now edit the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"module-dart.md")," file. It currently looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "CHANGE ME"\npublished: false\nmorea_coming_soon: false\nmorea_id: module-CHANGE-ME\nmorea_prerequisites:\nmorea_outcomes:\n  # - outcome-CHANGE-ME\nmorea_readings:\n  # - reading-CHANGE-ME\nmorea_experiences:\n  # - experience-CHANGE-ME\nmorea_assessments:\n  # - assessment-CHANGE-ME\nmorea_type: module\nmorea_icon_url: /morea/CHANGE-ME/CHANGE-ME.png\nmorea_start_date: "2021-07-12"\nmorea_end_date: "2021-07-16T23:00"\nmorea_labels:\nmorea_sort_order: 21\n---\n\nCHANGE ME\n')),(0,o.kt)("p",null,'As you can see, there are several occurrences of "CHANGE ME". Let\'s start by doing just the minimum to get the module into a publishable form.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"title:"),' to "Introduction to Dart"'),(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"published:"),' to "true"'),(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"morea_id:"),' to "module-dart".'),(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"morea_icon_url:")," to point to a Dart icon. I decided to download logo_dart_1080px_clr.png from the ",(0,o.kt)("a",{parentName:"li",href:"https://drive.google.com/drive/folders/1DxMhhBNFraUR3sRVRL5jATEZTkPz6d_s"},"Dart Logomark Assets Folder"),", and put it in the dart module folder. I renamed it to dart.png. "),(0,o.kt)("li",{parentName:"ul"},'Change the body of the file to a one sentence overview of the module. I chose "Provides an overview of elementary Dart programming constructs and tools."')),(0,o.kt)("p",null,"When you've finished with this, there will be a new file called dart.png in the folder, and the module-dart.md file will be updated. For example:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4271).Z,width:"1500",height:"1129"})),(0,o.kt)("p",null,"Now, in the Terminal window, type ",(0,o.kt)("inlineCode",{parentName:"p"},"control-c")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"control-p"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," to restart Jekyll, and go to the modules page. You should now see the Dart module:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6894).Z,width:"1500",height:"1129"})),(0,o.kt)("p",null,"Clicking into the actual Dart module page is currently not very exciting:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6131).Z,width:"1500",height:"745"})),(0,o.kt)("p",null,"Let's fix that next."),(0,o.kt)("h2",{id:"define-outcomes"},"Define outcomes"),(0,o.kt)("p",null,"The Dart design document defines a single outcome. Here's what the outcome-dart.md file looks like after editing to conform to the design:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "You can develop simple programs in Dart"\npublished: true\nmorea_id: outcome-dart\nmorea_type: outcome\nmorea_sort_order: 7\n---\n\n* You have a basic understanding of Dart programming language concepts.\n* You can write snippets of Dart code to solve simple problems using DartPad.\n* You can create GitHub repos containing small Dart applications.\n')),(0,o.kt)("p",null,"Next, we have to update the module-dart.md file to include this Morea entity by providing its ",(0,o.kt)("inlineCode",{parentName:"p"},"morea_id")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"morea_outcomes:")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "Introduction to Dart"\npublished: true\nmorea_coming_soon: false\nmorea_id: module-dart\nmorea_prerequisites:\nmorea_outcomes:\n  - outcome-dart\nmorea_readings:\n  # - reading-CHANGE-ME\nmorea_experiences:\n  # - experience-CHANGE-ME\nmorea_assessments:\n  # - assessment-CHANGE-ME\nmorea_type: module\nmorea_icon_url: /morea/dart/dart.png\nmorea_start_date: "2021-07-12"\nmorea_end_date: "2021-07-16T23:00"\nmorea_labels:\nmorea_sort_order: 21\n---\n\nProvides an overview of elementary Dart programming constructs and tools.\n')),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"control-c"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"control-p"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," to restart Jekyll. Refresh your browser window and the Dart module page should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5183).Z,width:"1500",height:"1011"})),(0,o.kt)("h2",{id:"define-readings"},"Define readings"),(0,o.kt)("p",null,"The Dart design document defines two readings.  After updating, reading-dart-language-tour.md will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "Dart Language Tour"\npublished: true\nmorea_id: reading-dart-language-tour\nmorea_summary: "How to use each major Dart feature"\nmorea_url: https://dart.dev/guides/language/language-tour\nmorea_type: reading\nmorea_labels:\n---\n')),(0,o.kt)("p",null,"The reading-effective-dart.md file will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "Effective Dart"\npublished: true\nmorea_id: reading-effective-dart\nmorea_summary: "How to write consistent, fast, and robust Dart code."\nmorea_url: https://dart.dev/guides/language/effective-dart\nmorea_type: reading\nmorea_labels:\n---\n')),(0,o.kt)("p",null,"And after updating the module-dart.md file to include these two readings, it will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "Introduction to Dart"\npublished: true\nmorea_coming_soon: false\nmorea_id: module-dart\nmorea_prerequisites:\nmorea_outcomes:\n  - outcome-dart\nmorea_readings:\n  - reading-dart-language-tour\n  - reading-effective-dart\nmorea_experiences:\n  # - experience-CHANGE-ME\nmorea_assessments:\n  # - assessment-CHANGE-ME\nmorea_type: module\nmorea_icon_url: /morea/dart/dart.png\nmorea_start_date: "2021-07-12"\nmorea_end_date: "2021-07-16T23:00"\nmorea_labels:\nmorea_sort_order: 21\n---\n\nProvides an overview of elementary Dart programming constructs and tools.\n')),(0,o.kt)("p",null,"Let's ",(0,o.kt)("inlineCode",{parentName:"p"},"control-c"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"control-p"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," to restart Jekyll, and voila:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9340).Z,width:"1500",height:"1320"})),(0,o.kt)("p",null,"As you can infer from the screenshot, clicking on the reading card takes you directly to the Dart documentation page. "),(0,o.kt)("h2",{id:"define-experiences"},"Define experiences"),(0,o.kt)("p",null,"The Dart design document defines two experiences.  After updating, experience-dart-for-java-developers.md might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "Introduction to Dart for Java Developers"\npublished: true\nmorea_id: experience-dart-for-java-developers\nmorea_type: experience\nmorea_summary: "Follow the codelab and build a GitHub respository with your code."\nmorea_start_date: "2021-07-15T23:00"\nmorea_labels:\n  - Codelab\n---\n\n# Introduction to Dart for Java Developers\n\nFor this experience, please go through the Intro to Dart for Java Developers codelab: <https://developers.google.com/codelabs/from-java-to-dart#0>\n\nDuring the codelab, you should use the embedded DartPad environment to execute the examples.\n\nTake your time, don\u2019t rush, and make sure you understand every line of code and every sentence in this codelab! If you have questions or get stuck, post a message to our Discord server.\n\nWhen you are done with the codelab, please do the following:\n  * Create a private GitHub repository called \u201cdart-scream\u201d.\n  * Clone it to your laptop.\n  * Edit the scream application to produce the same output as Section 6 of this codelab\n  * Commit your changes when finished.\n\n## Submission instructions:\nBy the date and time associated with this assignment in Laulima, please submit the URL to your github repository.\n')),(0,o.kt)("p",null,"The experience-dart-cool-features.md file might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "Cool features of Dart"\npublished: true\nmorea_id: experience-dart-cool-features\nmorea_type: experience\nmorea_summary: "Explore useful and unique features of Dart"\nmorea_start_date: "2021-07-15T23:00"\nmorea_labels:\n  - Codelab\n---\n\n# Cool features of Dart\n\nFor this experience, please go through the Dart Cheatsheet codelab:\n<https://dart.dev/codelabs/dart-cheatsheet>\n\nThis codelab introduces a lot of interesting language features, including:\n  * ??= assignment, ?? operator, null-shorting cascade: ?.., initializer lists, redirecting constructor.\n\nWhen you are done with the codelab, please do the following:\n  * Create a private GitHub repository called \u201cdart-recipe\u201d.\n  * Clone it to your laptop.\n  * Run \u201cdart create recipe\u201d to create a template Dart application.\n  * Edit the recipe application to include the (corrected) code from the bottom of the final section of this codelab (\u201cConst constructors\u201d).\n  * Commit your changes when finished.\n\n## Submission instructions:\n\nBy the date and time associated with this assignment in Laulima, please submit the URL to your github repository.\n')),(0,o.kt)("p",null,"Update module-dart.md to include these two experiences:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "Introduction to Dart"\npublished: true\nmorea_coming_soon: false\nmorea_id: module-dart\nmorea_prerequisites:\nmorea_outcomes:\n  - outcome-dart\nmorea_readings:\n  - reading-dart-language-tour\n  - reading-effective-dart\nmorea_experiences:\n  - experience-dart-for-java-developers\n  - experience-dart-cool-features\nmorea_assessments:\n  # - assessment-CHANGE-ME\nmorea_type: module\nmorea_icon_url: /morea/dart/dart.png\nmorea_start_date: "2021-07-12"\nmorea_end_date: "2021-07-16T23:00"\nmorea_labels:\nmorea_sort_order: 21\n---\n\nProvides an overview of elementary Dart programming constructs and tools.\n')),(0,o.kt)("p",null,"Now the module is really coming together:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1574).Z,width:"1500",height:"1665"})),(0,o.kt)("h2",{id:"define-assessments"},"Define assessments"),(0,o.kt)("p",null,"The Dart design document defines one assessment. After updating, assessment-dart.md might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "Solve a problem with Dart"\npublished: true\nmorea_id: assessment-dart\nmorea_summary: "So simple you\'ll need less than 30 minutes"\nmorea_outcomes_assessed:\n - outcome-dart\nmorea_type: assessment\nmorea_labels:\nmorea_start_date: "2021-07-16T09:00"\nmorea_sort_order: 2\n---\n\n# Solve a problem with Dart\n\nFor this assessment, you will be given a problem to solve using Dart within 30 minutes in class. \n\nIt will require you to:\n* Have the Dart SDK, GitHub Desktop, and IntelliJ installed on your laptop.\n* Create a GitHub repo.\n* Use DartPad and the Dart programming language to solve a problem.\n\nYou must work alone, but you can use any non-human Internet resources (Google, ChatGPT, etc.)\n\nThe actual problem, and submission instructions, will be provided in-class on the day of this assessment.\n')),(0,o.kt)("p",null,"Update module-dart.md to include this assessment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "Introduction to Dart"\npublished: true\nmorea_coming_soon: false\nmorea_id: module-dart\nmorea_prerequisites:\nmorea_outcomes:\n  - outcome-dart\nmorea_readings:\n  - reading-dart-language-tour\n  - reading-effective-dart\nmorea_experiences:\n  - experience-dart-for-java-developers\n  - experience-dart-cool-features\nmorea_assessments:\n  - assessment-dart\nmorea_type: module\nmorea_icon_url: /morea/dart/dart.png\nmorea_start_date: "2023-03-06"\nmorea_end_date: "2023-03-13"\nmorea_labels:\nmorea_sort_order: 21\n---\n\nProvides an overview of elementary Dart programming constructs and tools.\n')),(0,o.kt)("p",null,"And the module structure is complete:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(410).Z,width:"1500",height:"1746"})),(0,o.kt)("h2",{id:"define-the-module-schedule"},"Define the module schedule"),(0,o.kt)("p",null,'You may have noticed some dates associated with modules, experiences, and assessments. Also, the "Schedule" page appears to be empty. Let\'s fix that now.'),(0,o.kt)("h3",{id:"edit-scheduleindexhtml"},"Edit schedule/index.html"),(0,o.kt)("p",null,"First, open the schedule/index.html page.  It looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'---\nlayout: default\ntitle: Schedule\n---\n{% include breadcrumb-2.html %}\n\n\x3c!--\n  Load FullCalendar for schedule page.\n  Documentation available at: http://fullcalendar.io/\n\n  Things to do to configure your Schedule page:\n  (1) Edit the holidayData variable to include holidays appropriate for this semester.\n  (2) Delete the initialDate field in the FullCalendar constructor so that the calendar automatically\n      displays the current month.\n--\x3e\n\n<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/fullcalendar@5.8.0/main.min.css">\n<script src="//cdn.jsdelivr.net/npm/fullcalendar@5.8.0/main.min.js"><\/script>\n\n\x3c!-- This script defines the moreaEventData variable containing an array of events from Morea pages. --\x3e\n<script src="schedule-info.js"><\/script>\n\n<script>\n  var holidayData = {color: \'green\',\n    events: [\n      {title: "Classes start", start: "2021-07-06"},\n      {title: "Holiday: Independence Day (Observed)", start: "2021-07-05"},\n      {title: "Classes end", start: "2021-07-30"},\n    ]};\n<\/script>\n\n<div style="margin-bottom: 10px" class="container">\n  <h1>Schedule</h1>\n  <div id=\'calendar\'></div>\n</div>\n\n<script>\n  document.addEventListener(\'DOMContentLoaded\', function() {\n    var calendarEl = document.getElementById(\'calendar\');\n    var calendar = new FullCalendar.Calendar(calendarEl, {\n      initialView: \'dayGridMonth\',\n      eventColor: \'#446e9b\',\n      initialDate: \'2021-07-01\',\n      eventSources: [{events: moreaEventData}, holidayData]\n    });\n    calendar.render();\n  });\n<\/script>\n')),(0,o.kt)("p",null,"The comment at the top indicates two things you usually want to do to set up the schedule page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit the holidayData variable to include holidays appropriate for this semester."),(0,o.kt)("li",{parentName:"ol"},"Delete the initialDate field in the FullCalendar constructor so that the calendar automatically displays the current month.")),(0,o.kt)("p",null,"We won't deal with the ",(0,o.kt)("inlineCode",{parentName:"p"},"holidayData")," variable for this tutorial, but definitely delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialDate")," so that the calendar displays the current month. "),(0,o.kt)("h3",{id:"edit-module-start-and-end-dates"},"Edit module start and end dates"),(0,o.kt)("p",null,"Now edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"morea_start_date:")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"morea_end_date:")," fields in module-dart.md. The Dart design document said this module was a week long, but did not indicate exactly which week. Go ahead and edit these fields so that the module lasts for one week during the current month, starting on Tuesday and ending on the following Monday. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'morea_start_date: "2023-03-07"\nmorea_end_date: "2023-03-14"\n')),(0,o.kt)("p",null,"Do a ",(0,o.kt)("inlineCode",{parentName:"p"},"control-c"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"control-p"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," and refresh the Schedule page to see if the module is now listed for the current month."),(0,o.kt)("h3",{id:"edit-experience-and-assessment-due-dates"},"Edit experience and assessment due dates"),(0,o.kt)("p",null,"Let's now edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"morea_start_date:"),' fields associated with our experiences and assessments. These dates (and times) will indicate the "due date" associated with the experience. '),(0,o.kt)("p",null,"Our design document said that the Intro to Dart for Java Developers experience was due on Day 4, the Cool Features of Dart experience was due on Day 6, and assessment was due on Day 7 (in class). Let's update the fields appropriately."),(0,o.kt)("p",null,"When you're all finished, do a ",(0,o.kt)("inlineCode",{parentName:"p"},"control-c"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"control-p"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," and refresh the Schedule page. It should look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7475).Z,width:"1500",height:"1436"})),(0,o.kt)("p",null,"Notice that all of the schedule entries are clickable URLs: the module entry takes you to the module page, and the experience and assessment entries take you to their pages as well. "),(0,o.kt)("h2",{id:"commit-push-and-publish"},"Commit, push, and publish"),(0,o.kt)("p",null,"Our module is looking pretty good, so let's publish our changes. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Modifications for local development")),(0,o.kt)("p",{parentName:"admonition"},"If you are doing local development, you will use GitHub Desktop (or your favorite local git client) rather than using the facilities inside VS Code for the Browser. ")),(0,o.kt)("p",null,'First, click on the "Source Control" icon in the left sidebar (it should have a badge listing a dozen or so changes). You will see a list of files, so marked with an "M" indicating that they\'ve been modified, and some marked with a "U", indicating that they are "untracked" by git.'),(0,o.kt)("p",null,'Second, we want all files to be tracked, so click on the "..." at the top of the pane, select "Changes", and then select "Stage All Changes".  After you do this, all the "U" marks will change to "A", indicating that the files are marked for "adding" to the repo. That\'s good.'),(0,o.kt)("p",null,'Third, enter a commit message, such as "Publish dart module", pull down the "Commit" menu button bar, and select "Commit and Push".  This will commit the changes to the local repo at Gitpod, and push those changes to your repository at GitHub. '),(0,o.kt)("p",null,"Fourth, visit your repo on GitHub. You should see, just above the code directory, the commit message you just entered indicating that the commit was received at GitHub:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3965).Z,width:"1500",height:"1093"})),(0,o.kt)("p",null,'Furthermore, if you click on the "Actions" tab, you will see that GitHub is now rebuilding and republishing your site. '),(0,o.kt)("p",null,"Finally, once GitHub has finished rebuilding the site, click on the URL to see the published and publicly available version of your site:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2775).Z,width:"1500",height:"1145"})),(0,o.kt)("h2",{id:"additional-edits"},"Additional edits"),(0,o.kt)("p",null,"Just FYI, there remains a few additional edits to make this site your own:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"home.md"),".  Edit this file to change the content appearing on your home page."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"footer.md"),". Edit this file to change the content appearing in the footer of all pages. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"introduction/"),". You probably want an Introduction module, but you probably want to change its contents."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"morea/prerequisites"),". If you want to define prerequisite modules for any of our modules, use the file in this directory as an example. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"morea_sort_order:"),". As the number of modules and outcomes grow, you should adjust the ",(0,o.kt)("inlineCode",{parentName:"li"},"morea_sort_order:")," field in the front matter associated with each module and outcome file so that the modules and outcomes appear in an appropriate order in their respective index pages.")))}p.isMDXComponent=!0},7165:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-1-3e7441ea0812de0de86e3298aa1f13aa.png"},1574:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-10-1478df08cf507ace5d1482abeba184c9.png"},7475:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-11-351f644e4dd86eabb871e0415b298f03.png"},3965:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-12-76a4b6d76a61b5bb825464a5ca7eb7a3.png"},2775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-13-56d336598979c7242926d5aa882a8255.png"},410:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-14-bfac9bcfe51d952f1c54aa8c98400c31.png"},3421:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-2-0a02402617c6a9b17f96dc8c5e0c9f72.png"},8981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-3-14040ba01d780e9299d39fd55479db2d.png"},139:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-4-aea61daf98e7aa40044b255b660b87ad.png"},4271:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-5-e6a3dec0233c99fa49f88bc3e6fe7aa8.png"},6894:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-6-abdf72890ef3cadd27861ad4e5eae64b.png"},6131:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-7-acc9c2168c137fa3e9b2e9775345a507.png"},5183:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-8-515215478f4315970e235df9f91527b3.png"},9340:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/module-design-9-8ca455387bf6a9a625275a05b0952025.png"}}]);