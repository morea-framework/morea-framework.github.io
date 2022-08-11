---
title: Dependabot Alerts
hide_table_of_contents: true
---

GitHub has a security mechanism called [Dependabot](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/), which scans repositories to check for dependencies that have known security issues. 

In the case of Morea sites, Dependabot scans your site's Gemfile.lock to see if any of the libraries required by Jekyll have known security problems. (For example, here is [the Morea template repository Gemfile.lock](https://github.com/morea-framework/morea/blob/main/Gemfile.lock)).

If Dependabot discovers that the listed version of a library in your Gemfile.lock has a known security problem, it will issue one or more warnings.  For example:

![image](/img/dependabot-alert.png)

To fix these issues, it is generally sufficient to run `bundle update` in your local copy of your Morea site, which will update your Gemfile.lock file:

```shell
$ bundle update
Fetching gem metadata from https://rubygems.org/..........
Resolving dependencies...
Using public_suffix 4.0.7 (was 4.0.6)
:
Using nokogiri 1.13.8 (arm64-darwin) (was 1.11.7)
:
Using jekyll-gist 1.5.0
Bundle updated!
1 installed gem you directly depend on is looking for funding.
  Run `bundle fund` for details
```

As you can see, bundler updated the problematic library (Nokogiri).

Now commit your updated site to GitHub. Dependabot should rescan your site shortly thereafter and your Dependabot errors should go away. 

Now that you know *how* to fix Dependabot errors, it is worth discussing whether you *need* to fix Dependabot errors. Morea sites are "static" sites. This means that the deployed site has no backend database, no password files, no payment information, no user data, etc. Second, the deployed site does not contain or reference any of the libraries in the Gemfile.lock file; the code in these files are used only to support the development of the site. Finally, the deployed site is hosted at GitHub, not on your own servers. 

What this means is that while the security issues identified by Dependabot could be of great concern to developers in certain application contexts, they are almost certainly not a concern for you as a Morea site developer.

Our recommendation is this:  while your Morea site is under active development, it is appropriate to run `bundle update` to resolve any Dependabot notifications you might receive.  

However, after you have finished development of your site (for example, your site is developed for a specific course in a specific semester, and the semester is over), then it is appropriate to ignore (and/or disable) Dependabot notifications.  This is because Dependabot is now warning you about problems in versions of libraries listed in Gemfile.lock that your site does not only not contain now, but also will not ever reference in the future.  Put another way, it is *safe* to let your site stay deployed as an archive for the class even if Dependabot later discovers security issues with libraries listed in your Gemfile.lock. 
