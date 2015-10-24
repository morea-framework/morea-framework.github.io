---
layout: post
title:  "Breadcrumbs!"
date:   2015-10-23 14:29:39
---

The Morea team is delighted to announce the addition of [breadcrumbs](http://getbootstrap.com/components/#breadcrumbs) as a standard feature of Morea sites. 

Breadcrumbs are located just below the navbar and provide an indication of where you are in the site. For example, [this page](http://philipmjohnson.github.io/ics314f15/morea/introduction/reading-athletic-software-engineering.html) shows you are at the page "WODs: An athletic approach to software engineering", inside the "Introduction" module, which is inside the "Modules" page, which is below the "Home" page. 

#### Upgrade instructions

To update your current Morea site to support breadcrumbs with minimal hassle, please do the following:

  1. Inspect your current master/src/\_layouts/default.html.  Do you add any navbar items (or anything else) to that file? If so, copy the added lines to a text buffer someplace and remember where they were located in your default.html file.  If you didn't add anything, great.

  2. Invoke `morea-merge-upstream.sh`.  You will get a merge conflict in default.html. Don't panic.

  3. Edit your `master/src/_layouts/default.html` file.   Make it identical to this [default.html](https://raw.githubusercontent.com/morea-framework/core/master/src/_layouts/default.html) file.

  4. If you had added navbar links or something to your original default.html file,  then edit the `master/src/_layouts/core.html` file to put them back in.  This will look almost exactly like your old default.html file. Add back in whatever customizations you saved to your text buffer in Step 1.

  5. There is a slight chance your `master/_config.html` file also has a merge conflict. If so, just edit it back to your original version. (the changes are just the addition of comments.)

That's it. Now invoke `morea-run-local.sh` and see if everything looks OK. If not, fix it. If you can't fix it, send me an email.

Now invoke `morea-publish.sh` to publish your cool new breadcrumbs to the world!
