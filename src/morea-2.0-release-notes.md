---
#layout: documentation
layout: userguide
title: Morea 2.0 Release Notes
---

# Overview

In May, 2015, we performed a [usability case study](case-study-may-2015.html) to learn about user experience with the Morea Framework and how it could be improved.  Among other things, this case study identified several areas for improvement:

  * Provide better calendar integration.
  * Better document the Morea structure
  * Improve user interface (reduce pane size, make clickable areas more obvious)

In addition, we spoke to instructors currently using Morea to solicit their ideas and suggestions, and came up with the following:

  * Eliminate dependency on the basic template Morea files.
  * Support overview areas at top of each page.
  * Provide separate content for "summarizing" vs. "introducing" a module.
  * Simplify menubar configuration
  * Support module meta-data for representing multiple sites. 
  * Simplify google analytics integration.
  * Support LaTeX equations in Markdown.

From this, we generated a set of [Morea Version 2 Issues](https://github.com/morea-framework/core/issues?utf8=%E2%9C%93&q=milestone%3AMorea2+) to track progress to this release. 

This page documents for current users of Morea Version 1 the changes and enhancements in Morea 2 and how to make the transition. 

# Changes

### UI/Navigation

In Morea 1, some users complained that they didn't know what was a link. To address this, in Morea 2 the entire "tile" used to represent Modules, Readings, and Experiences is clickable.  

Other users complained that Modules took up too much screen real estate.  In Morea 2, because the entire tile is clickable, there is no reason to have a "Learn More" or "Coming Soon" button, so these have been eliminated.

The following image illustrates the new module page design:

{% include morea-2.0-image.html src="tiled-modules.png" %}

The mouse was hovering over the first module at the time the screenshot was taken to illustrate how clickable tiles are highlighted.

### Prerequisite modules

In Morea 2.0, it is possible to define prerequisite modules that link to other Morea sites.  This makes it easy for an instructor to indicate the material from prior courses that students should know in order to successfully complete the current module.  

The following image illustrates the top part of a Module definition page specifying three prerequisite modules from three prior courses:

{% include morea-2.0-image.html src="prerequisite-modules.png" %}

As with all other "tiles" in Morea sites, these can be clicked to go to the corresponding module from the external site.

### Schedule Events

A significant number of case study respondents wished that the Morea Schedule page would link directly to the Reading, Experience, or Module indicated in the schedule.

In Morea 2.0, you can now indicate in the Module markdown file the start and end times for the module.  You can also indicate the due date in a Reading and Experience markdown file. These values will be incorporated into an automatically generated Schedule page, where clicking on the associated Module, Reading, or Experience entry will retrieve the associated page. Here is an example Schedule page illustrating two clickable events: a Module ("Learn to Baz") covering several days and the due date and time for an Experience ("Experience the Baz"):

{% include morea-2.0-image.html src="schedule.png" %}

### MathJax support

[MathJax](http://www.mathjax.org) is a popular package for rendering LaTeX-style equations in HTML.  Morea 2.0 provides built-in support for MathJax, so that you can write LaTeX equations in your Markdown files and have it render appropriately. 
 
 Here is a screen image illustrating this support:
 
 {% include morea-2.0-image.html src="mathjax.png" %}

### NavBar configuration

In Morea 1, it was necessary to edit the default.html template file by hand in order to add or remove menu items.
 
In Morea 2, the six standard menu items can be enabled or disabled through the top-level \_config.yml file.  Here is an example:

```yaml
name: Review ICS 311
baseurl: /ReviewICS311
exclude: [morea]
morea_theme: cerulean
morea_navbar_items:
  - Prerequisites
  - Modules
  - Outcomes
  - Readings
  - Experiences
  # - Schedule
```
In this example, the site has enabled five of the standard nav bar items (Prerequisites, Modules, Outcomes, Readings, and Experiences), but has commented out the Schedule nav bar item and thus it will not be displayed.

### Module summary \& intro

In Morea 1, the text shown to summarize the module on the Modules page, and the text shown to introduce the module at the top of the page associated with that module are identical.  For example:

{% include morea-2.0-image.html src="module-summary-intro-1.png" %}

As you can see, the same text starting with "Assertions and propositions" appears in both the Propositional Logic module tile and the module's page.

In Morea 2, it is possible to specify different text for summaries and introductions.  This is useful, for example, when you want the introduction to provide a road map for the contents of the module that would be too lengthy for the summary.  Here's an example:

{% include morea-2.0-image.html src="module-summary-intro-2.png" %}

### Module metadata

Morea 2 produces a top-level file called module-info.js that contains module metadata: an ordered list of the modules in the site, their published location (URL), and the names and locations of any prerequisite modules.
 
The purpose of module metadata is to support higher-level services, such as a visualization of how courses in a curriculum relate to each other. For example, the [Courses.ICS](http://courses.ics.hawaii.edu) site reads in the module metadata from each of its constituent review sites and uses this data to build a visualization of modules and their relationships. Here's a snapshot of the visualization:
 
{% include morea-2.0-image.html src="module-metadata.png" %}
 
### Page overview

Morea 2 allows the instructor to define "overview files" whose content is inserted at the top of the six standard pages (Prerequisites, Modules, Outcomes, Readings, Experiences, Assessments).  
  
One use case occurs when the instructor wants to provide course-level outcomes in the site. One reasonable place for this information is at the top of the "Outcomes" page, followed by the module-level outcomes.  Here is an example:

{% include morea-2.0-image.html src="overview-files.png" %}

In other cases, the overview file can simply provide documentation on the contents of the page.

### Google analytics

Morea 2 makes it easy to enable Google Analytics by simply including the tracking ID in the \_config.yml file as follows:

```yaml
name: Review ICS 311
baseurl: /ReviewICS311
exclude: [morea]
morea_theme: cerulean
morea_navbar_items:
  - Prerequisites
  - Modules
  - Outcomes
  - Readings
  - Experiences
  # - Schedule
morea_google_analytics_tracking_id: "<your tracking ID>"
```

You'll need to sign up for Google Analytics and replace <your tracking ID> by your actual tracking ID. Once enabled, site traffic will be automatically tracked and a variety of potentially interesting reports become available. For example, here is a report indicated the flow of visitors through the pages of one Morea site:

{% include morea-2.0-image.html src="google-analytics.png" %}

### No Python required

In Morea 2, the dependency on Python has been removed through the use of the kramdown markdown processor and the Ruby-based rouge syntax highlighter.  This simplifies installation. 
   
   

# Migration Guide

If you are a current Morea user and want to upgrade to 2.0, here is one way to do it.

### Update Jekyll

First, make sure that your gem command is up to date:

```
% sudo gem update --system
Latest version currently installed. Aborting.
%
```

Next, install Jekyll version 2.5.2

```
% sudo gem install jekyll -v '2.5.2'
Fetching: jekyll-2.5.2.gem (100%)
Successfully installed jekyll-2.5.2
Parsing documentation for jekyll-2.5.2
Installing ri documentation for jekyll-2.5.2
Done installing documentation for jekyll after 1 seconds
1 gem installed
%
```

Next, install the kramdown markdown processor and the rouge syntax highlighter:

```
% sudo gem install kramdown rouge
Successfully installed kramdown-1.7.0
Parsing documentation for kramdown-1.7.0
Done installing documentation for kramdown after 1 seconds
Successfully installed rouge-1.9.0
Parsing documentation for rouge-1.9.0
Done installing documentation for rouge after 2 seconds
2 gems installed
%
```

### Create new repository

I don't recommend you try to "overwrite" a Morea 1 repo with Morea 2.  If you want to update a Morea 1 repo, then I recommend that you do something like the following.  Let's say you have a GitHub repo named "Foo" in a local directory called "foo". 
 
First, rename your local repo:

    % mv foo foo-old
    
Second, delete your Foo repository on GitHub.  (Don't worry, it's still in your foo-old local directory.)

Third, immediately recreate your Foo repository on GitHub.  Now it's completely empty. 

Fourth, create a new local directory called "foo":

    % mkdir foo
    
Fifth, change directories into foo, and download the morea-vanilla-install.sh script:

    % cd foo
    % curl https://raw.githubusercontent.com/morea-framework/scripts/master/morea-vanilla-install.sh --output morea-vanilla-install.sh
        % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                       Dload  Upload   Total   Spent    Left  Speed
      100  1238  100  1238    0     0   3423      0 --:--:-- --:--:-- --:--:--  4421
      

Sixth, invoke morea-vanilla-install with your GitHub username and the "Foo" repository name:

    % ./morea-vanilla-install.sh philipmjohnson Foo
    
This will initialize this directory with the master/ and gh-pages/ subdirectories.   In Morea 2, the upstream repository is "core" (not basic-template) and it does not contain a morea/ subdirectory with Foo, Bar, and Baz modules.  This reduces the odds of conflict when merging the upstream master. 

### Incorporate morea/

At this point, you should only have to do two things to complete a basic migration:

  1. Copy your morea/ directory from foo-old/master/src to foo/master/src/.
  2. Update foo/master/src/\_config.yml.  You do not want to use your old \_config.yml, as several settings have changed. At a minimum, you'll fix the 'name' and 'baseurl' settings. 
  
### Complete migration

Now download the remaining [Morea 2 scripts](https://github.com/morea-framework/scripts), run morea-run-local.sh to see if everything looks OK, and morea-publish.sh to push your new version back to GitHub.

If you have made local modifications to the Morea 1 scripts (for example, to use with BitBucket), you'll still want to download the new scripts, then compare with your old ones and port any changes as needed.


### Problems? Surprises?

If you experience problems or surprises during the migration, please let me (johnson@hawaii.edu) know.  
  







