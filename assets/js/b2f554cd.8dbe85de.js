"use strict";(self.webpackChunkMorea_Framework=self.webpackChunkMorea_Framework||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/03/02/module-icons","metadata":{"permalink":"/blog/2023/03/02/module-icons","source":"@site/blog/2023-03-02-module-icons.md","title":"Module icons","description":"Some folks have fun creating the \\"module icon\\": the square image that appears on each card on the Modules page.  Other folks find this to be an irritating waste of time.","date":"2023-03-02T00:00:00.000Z","formattedDate":"March 2, 2023","tags":[],"readingTime":0.55,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Module icons"},"nextItem":{"title":"Morea Version 3.1 release","permalink":"/blog/2022/06/28/morea-version-3.1"}},"content":"Some folks have fun creating the \\"module icon\\": the square image that appears on each card on the Modules page.  Other folks find this to be an irritating waste of time. \\n\\nIf you are in the latter camp, we have some potentially good news for you. The Morea template module now comes with a directory containing over 50 PNG files that have been used as module icons. With any luck, you might be able to use some of these icons in your upcoming Morea site and save time looking for an appropriate icon. \\n\\nFor details, see [Module Icons documentation](https://morea-framework.github.io/docs/instructors/icons#module-icons).\\n\\nHave fun and let us know if you run into problems."},{"id":"/2022/06/28/morea-version-3.1","metadata":{"permalink":"/blog/2022/06/28/morea-version-3.1","source":"@site/blog/2022-06-28-morea-version-3.1.md","title":"Morea Version 3.1 release","description":"The Morea team is delighted to announce the release of Version 3.1.  This release adds a number of useful new features to Morea, including:","date":"2022-06-28T00:00:00.000Z","formattedDate":"June 28, 2022","tags":[],"readingTime":0.74,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Morea Version 3.1 release"},"prevItem":{"title":"Module icons","permalink":"/blog/2023/03/02/module-icons"},"nextItem":{"title":"Morea Version 3.0 release","permalink":"/blog/2021/08/01/morea-version-3"}},"content":"The Morea team is delighted to announce the release of Version 3.1.  This release adds a number of useful new features to Morea, including:\\n\\n* Update of Bootstrap to 5.1.3.  This enables style customization using [Bootstrap CSS Variables](https://getbootstrap.com/docs/5.0/customize/css-variables/).\\n\\n* Morea 3.1 sites now load [FontAwesome](https://fontawesome.com/). This makes a gazillion icons available. For documentation, see the [Morea User Guide Chapter on Icons](/docs/instructors/icons).\\n\\n* You can now easily create \\"Admonitions\\" or \\"Callouts\\". See the [Morea User Guide Chapter on Admonitions](/docs/instructors/admonitions) for details.\\n\\n* Morea 3.1 sites now load [Anchor.js](https://www.bryanbraun.com/anchorjs/). This provides deep linking into sections of pages. \\n\\nMany users might decide to wait to obtain these features until the next time they create a Morea site. If you want to upgrade an existing site to Version 3.1, then we provide guidance in the [Morea User Guide Chapter on Updating](/docs/instructors/updating).\\n\\nHave fun and let us know if you run into problems."},{"id":"/2021/08/01/morea-version-3","metadata":{"permalink":"/blog/2021/08/01/morea-version-3","source":"@site/blog/2021-08-01-morea-version-3.md","title":"Morea Version 3.0 release","description":"The Morea team is delighted to announce a new major release of the system.  This release should be mostly backward compatible with existing Morea instructor content, though there are extensive changes (and simplifications!) to the way sites are developed and managed.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[],"readingTime":2.64,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Morea Version 3.0 release"},"prevItem":{"title":"Morea Version 3.1 release","permalink":"/blog/2022/06/28/morea-version-3.1"},"nextItem":{"title":"Fix font loading over https","permalink":"/blog/2016/08/09/font-fix"}},"content":"The Morea team is delighted to announce a new major release of the system.  This release should be mostly backward compatible with existing Morea instructor content, though there are extensive changes (and simplifications!) to the way sites are developed and managed.\\n\\n## Summary of changes\\n\\nHere is a summary of the changes from Version 2:\\n\\n  1. Morea 3 uses the latest releases of Jekyll (Version 4.2.0), Bootstrap (5), Bootswatch (5), FullCalendar (5.8), and ChartJS (3.5).\\n\\n  2. Create a new Morea 3 site using the GitHub \\"template\\" mechanism.  Templates have advantages over the previous approach of cloning: you can create a private repository even though the template is a public repository, and you can create multiple repositories in a single organization from the same template.\\n\\n  3. Morea 3 sites are automatically built and deployed via GitHub Actions whenever there is a commit to the main branch. Unlike Morea 2, Morea 3 does not use custom scripts (such as `morea-run-local.sh`, `morea-publish.sh`, etc.).\\n\\n  4. Morea 3 does not require local management of multiple branches.  Unlike Morea 2, there are no \\"src\\" and \\"gh-pages\\" subdirectories.\\n\\n  5. To build and run a Morea 3 site locally, you no longer use a custom script (`morea-run-local.sh`). Instead, you use the standard Jekyll command `bundle exec jekyll serve`.\\n\\n  6. To publish a Morea 3 site, you no longer use a special script (`morea-publish.sh`). Instead, you just commit your changes and push your repository to GitHub. Morea 3 uses GitHub Actions to automatically build and publish the site whenever there is a commit to the main branch in GitHub.\\n\\n  5. Morea 3 is (finally!) cross-platform: there should be no significant differences between development on MacOS, Linux, and Windows platforms.\\n\\nAstute Morea users will also observe that https://morea-framework.github.io has been reimplemented using Docusaurus.  This will make documentation easier to maintain.\\n\\n## Migrating your V2 content to V3\\n\\nInstructors who have existing Morea V2 sites for a course taught in a prior semester and who wish to build a new Morea site for a future semester will need to migrate their content.  Here are the issues that have been discovered with this migration:\\n\\nIn Morea 3, Assessments are no longer \\"page fragments\\" (like Outcomes), but rather their own page. This leads to several breaking changes:\\n\\n* The morea_summary field is now required for Assessment pages.\\n* The URL for interior linking to an Assessment page has changed. Please see [this page](/docs/instructors/linking-in-morea).\\n\\nMorea 3 updates JSChart from Version 1 to Version 3. As a result:\\n\\n* Pages that embed JSChart graphs must be updated to the JSChart 3 API. For example, see the [example Morea assessment page](https://morea-framework.github.io/morea/morea/example-javascript/assessment-javascript-1.html).\\n\\nMorea 3 updates Bootstrap from Version 3 to Version 5. As a result:\\n\\n* Pages that embed Bootstrap CSS and HTML must be updated to Bootstrap Version 5.\\n\\n\\n## Getting started\\n\\nIf you are a current user of Morea, please read the Getting Started section of the Instructor Guide and try building a new site using your old Morea files.  If you run into problems, please create an issue or send an email so we can address it.\\n\\nA list of known issues and desired enhancements for Morea 3 is available at [https://github.com/morea-framework/morea/issues](https://github.com/morea-framework/morea/issues)."},{"id":"/2016/08/09/font-fix","metadata":{"permalink":"/blog/2016/08/09/font-fix","source":"@site/blog/2016-08-09-font-fix.md","title":"Fix font loading over https","description":"Unfortunately, several of the Morea \\"cerulean\\" style themes (i.e. cerulean\\\\green, cerulean\\\\red, etc.) were loading the Open Sans font using the http by default, sites built using those themes were not displaying the Open Sans font correctly when retrieved from a github.io domain.  (Instead, the Open Sans font fails to load and the site falls back to the use of the  Times Roman font.)","date":"2016-08-09T00:00:00.000Z","formattedDate":"August 9, 2016","tags":[],"readingTime":0.81,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Fix font loading over https"},"prevItem":{"title":"Morea Version 3.0 release","permalink":"/blog/2021/08/01/morea-version-3"},"nextItem":{"title":"Gallery refresh","permalink":"/blog/2016/03/04/gallery-refresh"}},"content":"Unfortunately, several of the Morea \\"cerulean\\" style themes (i.e. cerulean\\\\_green, cerulean\\\\_red, etc.) were loading the Open Sans font using the http: protocol. Now that GitHub uses https: by default, sites built using those themes were not displaying the Open Sans font correctly when retrieved from a github.io domain.  (Instead, the Open Sans font fails to load and the site falls back to the use of the  Times Roman font.)\\n\\nWe just published a fix to these themes in the core repo so that Open Sans will be loaded correctly regardless of the protocol (http: or https:) used.\\n\\nTo get the fix, cd into your Morea top-level directory, then invoke the morea-merge-upstream.sh script to incorporate the corrected code into your local copy of these themes.\\n\\nThen republish your site and all should be well.\\n\\nOther themes (SuperHero, SpaceLab, etc.) did not have this bug and so you should not have noticed this problem if you were using them.\\n\\nOur apologies for the inconvenience!"},{"id":"/2016/03/04/gallery-refresh","metadata":{"permalink":"/blog/2016/03/04/gallery-refresh","source":"@site/blog/2016-03-04-gallery-refresh.md","title":"Gallery refresh","description":"We\'ve neglected the Gallery page for quite a while, so we spent a few minutes today updating it with links to additional sites using Morea---some in quite interesting ways!   Take a look and let us know if you\'d like your site included.","date":"2016-03-04T00:00:00.000Z","formattedDate":"March 4, 2016","tags":[],"readingTime":0.21,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Gallery refresh"},"prevItem":{"title":"Fix font loading over https","permalink":"/blog/2016/08/09/font-fix"},"nextItem":{"title":"Breadcrumbs!","permalink":"/blog/2015/10/23/breadcrumbs"}},"content":"We\'ve neglected the Gallery page for quite a while, so we spent a few minutes today updating it with links to additional sites using Morea---some in quite interesting ways!   Take a look and let us know if you\'d like your site included."},{"id":"/2015/10/23/breadcrumbs","metadata":{"permalink":"/blog/2015/10/23/breadcrumbs","source":"@site/blog/2015-10-23-breadcrumbs.md","title":"Breadcrumbs!","description":"The Morea team is delighted to announce the addition of breadcrumbs as a standard feature of Morea sites.","date":"2015-10-23T00:00:00.000Z","formattedDate":"October 23, 2015","tags":[],"readingTime":1.365,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Breadcrumbs!"},"prevItem":{"title":"Gallery refresh","permalink":"/blog/2016/03/04/gallery-refresh"},"nextItem":{"title":"morea-watch.rb","permalink":"/blog/2015/10/10/morea-watch"}},"content":"The Morea team is delighted to announce the addition of [breadcrumbs](http://getbootstrap.com/components/#breadcrumbs) as a standard feature of Morea sites. \\n\\nBreadcrumbs are located just below the navbar and provide an indication of where you are in the site. For example, [this page](http://philipmjohnson.github.io/ics314f15/morea/introduction/reading-athletic-software-engineering.html) shows you are at the page \\"WODs: An athletic approach to software engineering\\", inside the \\"Introduction\\" module, which is inside the \\"Modules\\" page, which is below the \\"Home\\" page. \\n\\n#### Upgrade instructions\\n\\nTo update your current Morea site to support breadcrumbs with minimal hassle, please do the following:\\n\\n  1. Inspect your current master/src/\\\\_layouts/default.html.  Do you add any navbar items (or anything else) to that file? If so, copy the added lines to a text buffer someplace and remember where they were located in your default.html file.  If you didn\'t add anything, great.\\n\\n  2. Invoke `morea-merge-upstream.sh`.  You will get a merge conflict in default.html. Don\'t panic.\\n\\n  3. Edit your `master/src/_layouts/default.html` file.   Make it identical to this [default.html](https://raw.githubusercontent.com/morea-framework/core/master/src/_layouts/default.html) file.\\n\\n  4. If you had added navbar links or something to your original default.html file,  then edit the `master/src/_layouts/core.html` file to put them back in.  This will look almost exactly like your old default.html file. Add back in whatever customizations you saved to your text buffer in Step 1.\\n\\n  5. There is a slight chance your `master/_config.html` file also has a merge conflict. If so, just edit it back to your original version. (the changes are just the addition of comments.)\\n\\nThat\'s it. Now invoke `morea-run-local.sh` and see if everything looks OK. If not, fix it. If you can\'t fix it, send me an email.\\n\\nNow invoke `morea-publish.sh` to publish your cool new breadcrumbs to the world!"},{"id":"/2015/10/10/morea-watch","metadata":{"permalink":"/blog/2015/10/10/morea-watch","source":"@site/blog/2015-10-10-morea-watch.md","title":"morea-watch.rb","description":"The Morea team is delighted to announce the release of morea-watch.rb, a ruby script you can use instead of morea-run-local.sh and which will automatically stop and restart morea-run-local.sh whenever files in the morea directory change.","date":"2015-10-10T00:00:00.000Z","formattedDate":"October 10, 2015","tags":[],"readingTime":0.26,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"morea-watch.rb"},"prevItem":{"title":"Breadcrumbs!","permalink":"/blog/2015/10/23/breadcrumbs"},"nextItem":{"title":"Morea Lintui","permalink":"/blog/2015/09/22/morea-lintui"}},"content":"The Morea team is delighted to announce the release of morea-watch.rb, a ruby script you can use instead of morea-run-local.sh and which will automatically stop and restart morea-run-local.sh whenever files in the morea directory change.\\n\\nMorea-watch.rb was developed by Dan Port. Please check it out and let us know what you think!"},{"id":"/2015/09/22/morea-lintui","metadata":{"permalink":"/blog/2015/09/22/morea-lintui","source":"@site/blog/2015-09-22-morea-lintui.md","title":"Morea Lintui","description":"The Morea team is delighted to announce the release of morea-lintui, which combines \\"lint\\" content validation with a refreshingly retro terminal user interface (tui) for manipulating the structure of Morea sites.","date":"2015-09-22T00:00:00.000Z","formattedDate":"September 22, 2015","tags":[],"readingTime":0.26,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Morea Lintui"},"prevItem":{"title":"morea-watch.rb","permalink":"/blog/2015/10/10/morea-watch"},"nextItem":{"title":"Morea Version 2.0 release","permalink":"/blog/2015/06/18/morea-version-two"}},"content":"The Morea team is delighted to announce the release of [morea-lintui](http://morea-framework.github.io/morea-lintui/), which combines \\"lint\\" content validation with a refreshingly retro terminal user interface (tui) for manipulating the structure of Morea sites.\\n\\n<img src=\\"https://raw.githubusercontent.com/morea-framework/morea-lintui/master/morealintui/docs/screenshot1.jpg\\" width=\\"600px\\" class=\\"img-responsive\\"/>\\n\\nMorea-lintui was developed by Henri Casanova.  Please check it out and let us know what you think!"},{"id":"/2015/06/18/morea-version-two","metadata":{"permalink":"/blog/2015/06/18/morea-version-two","source":"@site/blog/2015-06-18-morea-version-two.md","title":"Morea Version 2.0 release","description":"The Morea team is delighted to announce the 2.0 release.   Enhancements include:","date":"2015-06-18T00:00:00.000Z","formattedDate":"June 18, 2015","tags":[],"readingTime":0.28,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Morea Version 2.0 release"},"prevItem":{"title":"Morea Lintui","permalink":"/blog/2015/09/22/morea-lintui"},"nextItem":{"title":"Morea: Now with Google Analytics!","permalink":"/blog/2015/04/01/google-analytics"}},"content":"The Morea team is delighted to announce the 2.0 release.   Enhancements include:\\n\\n   * Improved user interface\\n   * Improved calendar integration\\n   * Module meta-data\\n   * Google analytics\\n   * LaTeX equations\\n   * Eliminate dependency on Python\\n   * Page overviews\\n   * ... and much more!\\n\\nPlease see the release notes for details and a migration guide for current users."},{"id":"/2015/04/01/google-analytics","metadata":{"permalink":"/blog/2015/04/01/google-analytics","source":"@site/blog/2015-04-01-google-analytics.md","title":"Morea: Now with Google Analytics!","description":"Cam Moore has contributed an include file that makes it easy for you to track the use of pages in Morea sites with Google Analytics.  To learn more, see the documentation.","date":"2015-04-01T00:00:00.000Z","formattedDate":"April 1, 2015","tags":[],"readingTime":0.155,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Morea: Now with Google Analytics!"},"prevItem":{"title":"Morea Version 2.0 release","permalink":"/blog/2015/06/18/morea-version-two"},"nextItem":{"title":"Release 1.1.0: New themes for the new year","permalink":"/blog/2015/01/06/new-themes"}},"content":"Cam Moore has contributed an include file that makes it easy for you to track the use of pages in Morea sites with Google Analytics.  To learn more, see the documentation."},{"id":"/2015/01/06/new-themes","metadata":{"permalink":"/blog/2015/01/06/new-themes","source":"@site/blog/2015-01-06-new-themes.md","title":"Release 1.1.0: New themes for the new year","description":"The Morea team is happy to inform you of several updates to the user interface:","date":"2015-01-06T00:00:00.000Z","formattedDate":"January 6, 2015","tags":[],"readingTime":1.355,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Release 1.1.0: New themes for the new year"},"prevItem":{"title":"Morea: Now with Google Analytics!","permalink":"/blog/2015/04/01/google-analytics"},"nextItem":{"title":"Morea Framework on Stack Overflow","permalink":"/blog/2014/08/15/stackoverflow"}},"content":"The Morea team is happy to inform you of several updates to the user interface:\\n\\n  * The themes have been updated to use the latest release of [Bootstrap](http://getbootstrap.com/) (3.3.1).\\n\\n  * Morea themes are based on [Bootswatch](http://bootswatch.com/).  We have incorporated two new Bootswatch themes into Morea: paper and sandstone.\\n\\n  * In response to user request, we have created four new themes based upon cerulean: cerulean\\\\_green, cerulean\\\\_brown, cerulean\\\\_purple, and cerulean\\\\_red.  If you like cerulean, but are tired of blue, try one of these!\\n\\n  * To save space in the NavBar for additional menu items, we have removed the \\"Home\\" link and made the site title in the NavBar into a link.\\n\\n  * Also in response to user request, we have made the icons in the module page into links to their corresponding module. Apparently everyone wants to click on them, so we might as well let them.\\n\\nTo use these features, set the basic-template as an upstream repository and merge into your master branch. You can do this using the morea-merge-upstream script.\\n\\nNote that you may well get merge conflicts, but these should be easy to address.\\n\\nIf the merge conflict involves changes to the \\"Qux\\" module that you\'ve deleted in your site, do the following to re-delete the directory:\\n\\n    % cd master/src/morea\\n    % git rm -r qux\\n\\nIf the merge conflict involves changes to your master/src/css/style.css file, or master/src/_layouts/default.html file, then simply view those files in your editor, edit to resolve the conflict and remove the conflict indicator lines, and save your changes.\\n\\nHappy course design in 2015 and don\'t hesitate to let us know if you encounter problems with these enhancements."},{"id":"/2014/08/15/stackoverflow","metadata":{"permalink":"/blog/2014/08/15/stackoverflow","source":"@site/blog/2014-08-15-stackoverflow.md","title":"Morea Framework on Stack Overflow","description":"The Morea Framework now has its own tag (morea-framework) on StackOverflow.","date":"2014-08-15T00:00:00.000Z","formattedDate":"August 15, 2014","tags":[],"readingTime":0.205,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Morea Framework on Stack Overflow"},"prevItem":{"title":"Release 1.1.0: New themes for the new year","permalink":"/blog/2015/01/06/new-themes"},"nextItem":{"title":"Virtual Box and Vagrant for Morea","permalink":"/blog/2014/07/16/vagrant"}},"content":"The Morea Framework now has its own tag ([morea-framework](http://stackoverflow.com/questions/tagged/morea-framework)) on [StackOverflow](http://stackoverflow.com). \\n\\nPlease use StackOverflow for technical support questions, and the Morea Framework GitHub Issues.\\n\\nThe morea-framework tag is monitored, so you should get a response to your query within a day."},{"id":"/2014/07/16/vagrant","metadata":{"permalink":"/blog/2014/07/16/vagrant","source":"@site/blog/2014-07-16-vagrant.md","title":"Virtual Box and Vagrant for Morea","description":"Users have reported problems installing Ruby and Jekyll under Windows 8.   We have created a Vagrant \\"box\\" that simplifies the process of running a virtual Unix environment on Windows with Python, Ruby, git, and Jekyll pre-installed.","date":"2014-07-16T00:00:00.000Z","formattedDate":"July 16, 2014","tags":[],"readingTime":0.18,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Virtual Box and Vagrant for Morea"},"prevItem":{"title":"Morea Framework on Stack Overflow","permalink":"/blog/2014/08/15/stackoverflow"},"nextItem":{"title":"Non-Morea markdown files","permalink":"/blog/2014/06/25/nonmorea-markdown"}},"content":"Users have reported problems installing Ruby and Jekyll under Windows 8.   We have created a [Vagrant](http://www.vagrantup.com/) \\"box\\" that simplifies the process of running a virtual Unix environment on Windows with Python, Ruby, git, and Jekyll pre-installed."},{"id":"/2014/06/25/nonmorea-markdown","metadata":{"permalink":"/blog/2014/06/25/nonmorea-markdown","source":"@site/blog/2014-06-25-nonmorea-markdown.md","title":"Non-Morea markdown files","description":"The Morea generator now allows you to create markdown files inside the morea/ directory with the extension .markdown.","date":"2014-06-25T00:00:00.000Z","formattedDate":"June 25, 2014","tags":[],"readingTime":0.38,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Non-Morea markdown files"},"prevItem":{"title":"Virtual Box and Vagrant for Morea","permalink":"/blog/2014/07/16/vagrant"},"nextItem":{"title":"Ignore directories","permalink":"/blog/2014/06/21/ignore-directories"}},"content":"The Morea generator now allows you to create markdown files inside the `morea/` directory with the extension `.markdown`.\\nThese files are processed into HTML by Jekyll, but will not appear as a module, outcome, reading, experience, or assessment. This is useful for creating (for example) quizzes in markdown format that are kept with other module files. \\n\\nFor more details, see the non-morea markdown section of the user guide.\\n\\nTo obtain this update, run the `morea-merge-upstream.sh` script."},{"id":"/2014/06/21/ignore-directories","metadata":{"permalink":"/blog/2014/06/21/ignore-directories","source":"@site/blog/2014-06-21-ignore-directories.md","title":"Ignore directories","description":"The latest version of basic-template contains an update to the MoreaGenerator.rb file which now ignores any directories inside the morea/ directory named _ignore.  This allows you to store private data inside the morea/ directory if you (for example) which to associate tests or other files with the module.","date":"2014-06-21T00:00:00.000Z","formattedDate":"June 21, 2014","tags":[],"readingTime":0.34,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Ignore directories"},"prevItem":{"title":"Non-Morea markdown files","permalink":"/blog/2014/06/25/nonmorea-markdown"},"nextItem":{"title":"QuickStart process redesigned","permalink":"/blog/2014/06/17/quickstart-redesign"}},"content":"The latest version of basic-template contains an update to the MoreaGenerator.rb file which now ignores any directories inside the `morea/` directory named `_ignore`.  This allows you to store private data inside the `morea/` directory if you (for example) which to associate tests or other files with the module.\\n\\nFor more details, see the private data section of the user guide.\\n\\nTo obtain this update, run the `morea-merge-upstream.sh` script."},{"id":"/2014/06/17/quickstart-redesign","metadata":{"permalink":"/blog/2014/06/17/quickstart-redesign","source":"@site/blog/2014-06-17-quickstart-redesign.md","title":"QuickStart process redesigned","description":"The original QuickStart procedure directed you to fork the basic-template repository in order to initialize your own course website.","date":"2014-06-17T00:00:00.000Z","formattedDate":"June 17, 2014","tags":[],"readingTime":0.29,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"QuickStart process redesigned"},"prevItem":{"title":"Ignore directories","permalink":"/blog/2014/06/21/ignore-directories"},"nextItem":{"title":"Morea Version 1.0 release","permalink":"/blog/2014/05/22/morea-version-one"}},"content":"The original QuickStart procedure directed you to fork the basic-template repository in order to initialize your own course website. \\n\\nUnfortunately, GitHub does not allow forks of public repositories (like basic-template) to be made private.  \\n\\nThe QuickStart page has now been modified to avoid the use of forking.  Course repositories created using the new procedure can be made private."},{"id":"/2014/05/22/morea-version-one","metadata":{"permalink":"/blog/2014/05/22/morea-version-one","source":"@site/blog/2014-05-22-morea-version-one.md","title":"Morea Version 1.0 release","description":"The Morea team is delighted to announce the 1.0 release.  This release constitutes a","date":"2014-05-22T00:00:00.000Z","formattedDate":"May 22, 2014","tags":[],"readingTime":0.255,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Morea Version 1.0 release"},"prevItem":{"title":"QuickStart process redesigned","permalink":"/blog/2014/06/17/quickstart-redesign"}},"content":"The Morea team is delighted to announce the 1.0 release.  This release constitutes a \\n\\"minimum viable product\\" with sufficient functionality and documentation for users to \\nbegin building their own course websites using the framework. \\n\\nTo use these features, set the basic-template as an upstream repository and merge into your master branch."}]}')}}]);