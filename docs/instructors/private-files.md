---
title: Private files
---

In many cases, you might want to keep files in your repository that are not made a part of the published website.

The Morea processor ignores any directories inside the `morea/` directory that are named `_ignore`.  So, if you
create a directory called `java/` to hold the contents of the Java module, and then put a subdirectory inside `java/` called `_ignore`, the contents of that directory will not appear in the published site.  This is a nice way to keep tests associated with a module but not make them available on the site.

:::warning
Private files are only private if your repository is private. If you did not make your repository private when you created it, then all of the files are accessable! 

Note that the organization associated with your Morea repo must be on the "Team" plan in order for you to have a private repo that can also publish itself as a GitHub Page.  If you have been authorized for the GitHub Educator Plan, then you can upgrade your organizations to the Team plan for free.  See the [Quick Start](quick-start.md) page for details.  
:::
