---
title: Check for broken links
hide_table_of_contents: true
---

You can easily check your site for broken links prior to publication.

First, build your site locally using `bundle exec jekyll build --baseurl ''`:

```
$ bundle exec jekyll build --baseurl ''
Configuration file: /Users/philipjohnson/github/morea-framework/morea/_config.yml
Configuration file: /Users/philipjohnson/github/morea-framework/morea/_config.yml
            Source: /Users/philipjohnson/github/morea-framework/morea
       Destination: /Users/philipjohnson/github/morea-framework/morea/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
          Conflict: The following destination is shared by multiple files.
                    The written file may end up with unexpected contents.
                    /Users/philipjohnson/github/morea-framework/morea/_site/schedule/schedule-info.js
                     - /Users/philipjohnson/github/morea-framework/morea/schedule/schedule-info.js
                     - /Users/philipjohnson/github/morea-framework/morea/schedule/schedule-info.js

                    done in 1.124 seconds.
 Auto-regeneration: disabled. Use --watch to enable.
$
```

Note that unlike `bundle exec jekyll serve`, the build command simply creates the files but does not bring up a local webserver, and you do not need to type control-c to terminate the process.

Once the site is built, invoke `bundle exec htmlproofer ./_site` to check for broken links:

 ```
 $ bundle exec htmlproofer ./_site
 Running ["ImageCheck", "LinkCheck", "ScriptCheck"] on ["./_site"] on *.html...


 Checking 44 external links...
 Ran on 68 files!


 HTML-Proofer finished successfully.
 $
 ```
