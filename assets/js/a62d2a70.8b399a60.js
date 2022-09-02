"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[3761],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,g=p["".concat(s,".").concat(d)]||p[d]||h[d]||a;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7016:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],r={title:"Getting started"},s=void 0,u={unversionedId:"change-hi/getting-started",id:"change-hi/getting-started",isDocsHomePage:!1,title:"Getting started",description:"Our development process",source:"@site/docs/change-hi/getting-started.md",sourceDirName:"change-hi",slug:"/change-hi/getting-started",permalink:"/docs/change-hi/getting-started",tags:[],version:"current",frontMatter:{title:"Getting started"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/change-hi/overview"},next:{title:"Development tips",permalink:"/docs/change-hi/change-hi-tips"}},c=[{value:"Our development process",id:"our-development-process",children:[],level:2},{value:"Install tools",id:"install-tools",children:[{value:"Join GitHub",id:"join-github",children:[],level:3},{value:"Install a git client",id:"install-a-git-client",children:[],level:3},{value:"Install an editor",id:"install-an-editor",children:[],level:3},{value:"Install Jekyll",id:"install-jekyll",children:[],level:3}],level:2},{value:"Request a stub module if necessary",id:"request-a-stub-module-if-necessary",children:[],level:2},{value:"Fork the Change-HI site",id:"fork-the-change-hi-site",children:[{value:"Go to site",id:"go-to-site",children:[],level:3},{value:"Fork the repo",id:"fork-the-repo",children:[],level:3},{value:"Download your forked site",id:"download-your-forked-site",children:[],level:3}],level:2},{value:"Run the local site",id:"run-the-local-site",children:[],level:2},{value:"Create a branch",id:"create-a-branch",children:[],level:2},{value:"Update the site",id:"update-the-site",children:[],level:2},{value:"Create the pull request",id:"create-the-pull-request",children:[],level:2}],h={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"our-development-process"},"Our development process"),(0,a.kt)("p",null,'There are many potential ways to support collaborative workshop curriculum development for Change-HI. We would like to use a "Fork-and-Pull-Request" approach to development. This means you will develop and maintain workshop curriculum using the following process:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the required tools and libraries for Morea."),(0,a.kt)("li",{parentName:"ol"},"Create a fork of the Change-HI Morea site repository in your personal GitHub account, and clone that repository to your computer."),(0,a.kt)("li",{parentName:"ol"},"Build and run your local copy of the Change-HI Morea site."),(0,a.kt)("li",{parentName:"ol"},"Create a branch to hold your changes to the site."),(0,a.kt)("li",{parentName:"ol"},"Edit files to update the site with your changes, and review the results locally. "),(0,a.kt)("li",{parentName:"ol"},"Once you are satisfied with your changes, commit them and push your branch to GitHub."),(0,a.kt)("li",{parentName:"ol"},"Create a pull request so that the Change-HI site administrators can review your changes prior to merging them into the published version of the site. Sometimes, the administrators might request a few changes prior to merging, in which case you can easily update the file in the pull request.")),(0,a.kt)("p",null,"Once the pull request is merged, you're done, at least until the next time you need to create another workshop (or update the materials associated with your original workshop).  At that point, the process is a bit simpler:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Update your fork so that it contains the most recent version of the Change-HI Morea site repository."),(0,a.kt)("li",{parentName:"ol"},"Make a new branch to hold your next set of updates. "),(0,a.kt)("li",{parentName:"ol"},"Update the site to your satisfaction."),(0,a.kt)("li",{parentName:"ol"},"Push your changes."),(0,a.kt)("li",{parentName:"ol"},"Create a new pull request.")),(0,a.kt)("p",null,"So, that's the basic process. Let's now provide examples for each of these steps. First, though, we need to install some tools."),(0,a.kt)("h2",{id:"install-tools"},"Install tools"),(0,a.kt)("p",null,"There are a few things you will need to install for Morea."),(0,a.kt)("h3",{id:"join-github"},"Join GitHub"),(0,a.kt)("p",null,"If you haven't already, ",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/articles/signing-up-for-a-new-github-account"},"sign up for GitHub"),"."),(0,a.kt)("h3",{id:"install-a-git-client"},"Install a git client"),(0,a.kt)("p",null,"Next, you will need a git client.  We recommend ",(0,a.kt)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop"),", but if you are already comfortable with another git client, that's fine.  "),(0,a.kt)("p",null,"For Morea, you will need a basic understanding of the git concepts of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"fork"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"},"clone"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches"},"branch"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository"},"push"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"create pull request"),". This might seem like a lot if you are a git newbie, but it's really very simple once you get used to it."),(0,a.kt)("h3",{id:"install-an-editor"},"Install an editor"),(0,a.kt)("p",null,"You cannot use a word processor like Microsoft Word to edit Morea files.  Instead, you need a text editor such as Emacs, Vim, IntelliJ IDEA, Microsoft Visual Studio, Eclipse, Atom, or similar."),(0,a.kt)("p",null,"Please be sure to have one text editor available to you."),(0,a.kt)("h3",{id:"install-jekyll"},"Install Jekyll"),(0,a.kt)("p",null,"The final installation step is to ",(0,a.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/installation/"},"install Jekyll"),". Jekyll runs on all platforms."),(0,a.kt)("p",null,"To verify that you've installed Jekyll correctly, please go through the ",(0,a.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/"},"Jekyll Quickstart")," instructions to be sure that you can create a simple Jekyll site and run it on your computer."),(0,a.kt)("h2",{id:"request-a-stub-module-if-necessary"},"Request a stub module if necessary"),(0,a.kt)("p",null,"The Change-HI site (",(0,a.kt)("a",{parentName:"p",href:"https://change-hi.github.io/modules"},"https://change-hi.github.io/modules"),') contains a set of "stub" modules for upcoming workshops during AY 2022-23.  In most cases, a stub module will already exist, but if not, please ask Philip Johnson to create one for you.  That will simplify content creation when you are just getting started with Morea.  '),(0,a.kt)("h2",{id:"fork-the-change-hi-site"},"Fork the Change-HI site"),(0,a.kt)("p",null,"Once you have installed a git client, an editor, and Jekyll, the next step is to fork a copy of the Change-HI Morea site, download it, and get it to run locally on your computer.  "),(0,a.kt)("h3",{id:"go-to-site"},"Go to site"),(0,a.kt)("p",null,"First, go to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/change-hi/change-hi.github.io"},"https://github.com/change-hi/change-hi.github.io"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6657).Z})),(0,a.kt)("h3",{id:"fork-the-repo"},"Fork the repo"),(0,a.kt)("p",null,'Click the "Fork" button in the top right of the page to bring up the fork window:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9026).Z})),(0,a.kt)("p",null,'You can see that this window selects my personal account, which is typically where you\'ll want the fork of the repository to go. Click "Create fork" which results in a new copy of the repo in your own personal account. For example:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8961).Z})),(0,a.kt)("p",null,'(You can ignore the "Your main branch isn\'t protected" warning.)'),(0,a.kt)("h3",{id:"download-your-forked-site"},"Download your forked site"),(0,a.kt)("p",null,'Now click on the green "Code" button:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4753).Z})),(0,a.kt)("p",null,'You will typically want to select "Open with GitHub Desktop". (If you are experienced with git and are using another client, then do that instead).'),(0,a.kt)("p",null,'Clicking "Open with GitHub Desktop" should automatically open your GitHub Desktop application on your computer and open a dialogue box where you can specify where you want the copy of the repository placed in your file system.  In my case, I use ',(0,a.kt)("inlineCode",{parentName:"p"},"/Users/philipmjohnson/github/philipmjohnson")," to store all the repos associated with my personal account. So that's where I'll put it:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4260).Z})),(0,a.kt)("p",null,'After clicking the "Clone" button, GitHub Desktop will download all of the files and then display the following dialogue box:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7039).Z})),(0,a.kt)("p",null,'Since you want to use this repo to contribute to the parent project, you can just click the "Continue" button. '),(0,a.kt)("p",null,"After clicking this button, GitHub Desktop should look like this, indicating the repo has been successfully cloned to your computer:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5942).Z})),(0,a.kt)("h2",{id:"run-the-local-site"},"Run the local site"),(0,a.kt)("p",null,"Now that you have the system files in a local directory, open a shell window, change directories to the location of the files, and invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle install")," to download all required libraries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd github/philipmjohnson/Change-HI.github.io/\n$ bundle install\nUsing public_suffix 4.0.6\nUsing addressable 2.8.0\n:\n:\nUsing jekyll-gist 1.5.0\nUsing webrick 1.7.0\nBundle complete! 7 Gemfile dependencies, 51 gems now installed.\nUse `bundle info [gemname]` to see where a bundled gem is installed.\n$  \n")),(0,a.kt)("p",null,"Once the libraries are there, you run the system with ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ bundle exec jekyll serve\nConfiguration file: /Users/philipjohnson/github/philipmjohnson/Change-HI.github.io/_config.yml\nConfiguration file: /Users/philipjohnson/github/philipmjohnson/Change-HI.github.io/_config.yml\n            Source: /Users/philipjohnson/github/philipmjohnson/Change-HI.github.io\n       Destination: /Users/philipjohnson/github/philipmjohnson/Change-HI.github.io/_site\n Incremental build: disabled. Enable with --incremental\n      Generating... \n                    done in 0.249 seconds.\n Auto-regeneration: enabled for '/Users/philipjohnson/github/philipmjohnson/Change-HI.github.io'\n    Server address: http://127.0.0.1:4000/\n  Server running... press ctrl-c to stop.\n")),(0,a.kt)("p",null,'Notice the "Server address" line that provides the URL ',(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4000/")," for displaying the site in your browser. If all goes according to plan, retrieving this URL will display the landing page of the Change-HI site in your browser:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7417).Z})),(0,a.kt)("h2",{id:"create-a-branch"},"Create a branch"),(0,a.kt)("p",null,'Now that we have successfully installed a local copy of the site, the next step is to make a branch in which to hold our update.  Click the "Branch" menu item:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4142).Z})),(0,a.kt)("p",null,'Then select "New Branch", which yields the following:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4154).Z})),(0,a.kt)("p",null,'I\'ll call the branch "update-hpc-preparation" and click "Create Branch" to get the following:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3665).Z})),(0,a.kt)("p",null,'Click the "Publish branch" button to push this new branch to GitHub. Afterwards GitHub Desktop will look like this:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8371).Z})),(0,a.kt)("p",null,"We're now ready to create a pull request, but first we actually have to update the repository!"),(0,a.kt)("h2",{id:"update-the-site"},"Update the site"),(0,a.kt)("p",null,'Now let\'s walk through a simple modification of the site. Suppose we want to update the "Preparation" reading for the HPC workshop to include an additional video on learning the command line. First, open an editor and bring up the source file for that page. I use IntelliJ IDEA as my editor:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(901).Z})),(0,a.kt)("p",null,"Here's that same file after adding a sentence on line 19 documenting an additional YouTube video for learning the shell:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5161).Z})),(0,a.kt)("p",null,"To see the updated page, control-c to stop the Jekyll process and re-invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve"),". Then navigate to the page:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2092).Z})),(0,a.kt)("h2",{id:"create-the-pull-request"},"Create the pull request"),(0,a.kt)("p",null,"Let's say that this is the only enhancement you want to make at this time, and now you want to ask the administrators to incorporate this change into the official Change-HI site.  The first step is to commit your change to your local repository. If you go to GitHub Desktop, you'll see an indicating of all the files that have been modified. In this case, it's just a single file to which we've added a single line:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4196).Z})),(0,a.kt)("p",null,'Add a commit message, then press the "Commit to update-hpc-preparation" button to commit your changes to your local repository. Afterwards GitHub Desktop will look like this:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(898).Z})),(0,a.kt)("p",null,'Now press "Push origin" to push your update to GitHub. Now GitHub Desktop looks like this:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(898).Z})),(0,a.kt)("p",null,'As if by magic, GitHub Desktop has anticipated that we might want to make a pull request and it provides us with a button. Click the "Create Pull Request" button. That will send control to your browser and display the following page:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4552).Z})),(0,a.kt)("p",null,'Notice that this page is associated with the Change-HI version of the Change-HI.github.io repository, not your own personal version. You are "opening a pull request" on the official version of the repository, and requesting that the administrators merge the changes in your branch into the official repo.'),(0,a.kt)("p",null,'Add any additional information you\'d like to add, then press "Create pull request". The result will look somewhat similar to this:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8388).Z})),(0,a.kt)("p",null,"In this case, since I am an administrator, I will get a button to merge the pull request, but non-administrators will see something different."))}p.isMDXComponent=!0},9026:function(e,t,n){t.Z=n.p+"assets/images/change-hi.github.io-fork-d0fc8b49a6ece34fc803c0c53aa5e0b3.png"},6657:function(e,t,n){t.Z=n.p+"assets/images/change-hi.github.io-28948ab826d755b2e217d2741462c4cf.png"},7417:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs-landing-page-local-d036f1f7eeab53d68beea634a9180856.png"},4260:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-clone-2-fde9158d41f341072089f91ab66dc9a4.png"},4753:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-clone-3a9ecd8e0346597dcaea887a646b32bb.png"},8961:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-forked-d9efeb4acda375d0b15cd1ddd0e2f2f3.png"},5942:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-local-2176a9709941e366f22a78e788523268.png"},4154:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-new-branch-2-40d0cb5bee1fc634d8b28de932790caf.png"},3665:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-new-branch-3-3c32b258e76ce30e93c4e019c0d44e7d.png"},8371:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-new-branch-4-0d8bfa55d72e178670623461a4aab7c6.png"},4142:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-new-branch-0b79fbd404e4477886c7fa83f28e7648.png"},7039:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-parent-0b1033a1ef6c7f6fcb51207a5758b02c.png"},8388:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-pull-request-2-2f2a35a5498cb83ad87f9ef30a5ec912.png"},4552:function(e,t,n){t.Z=n.p+"assets/images/ci-tracs.github.io-pull-request-ac9e5f94157cd0c7627b01ce1d785249.png"},5161:function(e,t,n){t.Z=n.p+"assets/images/reading-hpc-preparation-2-1b44e82fd9ac4392b163fefbf93c3c0c.png"},2092:function(e,t,n){t.Z=n.p+"assets/images/reading-hpc-preparation-3-d96b01c29bde6e915853ebe64c567431.png"},898:function(e,t,n){t.Z=n.p+"assets/images/reading-hpc-preparation-commit-2-5b3dfed2eba76f0236d018648b8dffb1.png"},4196:function(e,t,n){t.Z=n.p+"assets/images/reading-hpc-preparation-commit-af1620cab2bdea979a421798476d4061.png"},901:function(e,t,n){t.Z=n.p+"assets/images/reading-hpc-preparation-7365a1178a41215c35123e6910fcd194.png"}}]);