---
layout: userguide
title: Quick Start
---

# 1. Installation

To use Morea, you need to have git, python, ruby, and jekyll installed and have an account at GitHub.

## Set up Git and GitHub
 
#### A. Join GitHub

If you haven't already, [sign up for GitHub](https://help.github.com/articles/signing-up-for-a-new-github-account).If you are associated with an educational institution (i.e. have a .edu email account), you can  [request a free micro account](https://education.github.com/) providing you with 5 private repos.

#### B. Install git

Check to see if you have git installed and can invoke it from the command line:

    % git --version
      git version 1.7.9.6 (Apple Git-31.1)

If not, follow these instructions to [install git](https://help.github.com/articles/set-up-git). (Be sure to click the tab corresponding to your OS.) Note that Morea uses a variety of scripts that invoke git from the command line, so you cannot simply download the GitHub GUI app.

<div class="alert alert-warning">
<p><strong>Windows OS Warning!</strong> When installing Git on Windows, we recommend you select the option to 
provide "Git Bash".   Git Bash (which is available from the Start menu as an option under the Git submenu) 
is a way of running Git within a Unix-like command shell.  This is extremely useful for Morea, since this enables
you to run Morea scripts without modification.
</p>
</div>

#### C. Verify your ssh key

Follow the instructions on [this page](https://help.github.com/articles/generating-ssh-keys) to set up SSH keys for communication with GitHub.

To verify that your ssh keys are set up and you can communicate with GitHub, type the following into a shell:

    % ssh -T git@github.com
      Hi philipmjohnson! You've successfully authenticated, but GitHub does not provide shell access.
      
## Install Ruby

Check to see if you have Ruby installed and can invoke it from the command line: 

    % ruby --version
      ruby 2.1.0p0 (2013-12-25 revision 44422) [x86_64-darwin12.0]

If not, follow these instructions to [install Ruby](https://www.ruby-lang.org/en/downloads/). Ruby is the programming language used to run Jekyll.

Morea is compatible with either Ruby 1.9.x or 2.x.


## Install Jekyll 2.5.2

Check to see if you have Jekyll installed and can invoke it from the command line:

    $ jekyll --version
      jekyll 2.5.2

If not, follow these instructions to [install Jekyll](http://jekyllrb.com/docs/installation/). Jekyll is the system used by Morea to convert the source files into the actual website. Note that Jekyll is easy to install on Linux and Mac, less so on Windows.

Note that since Morea uses the Rouge syntax highlighter, **you do not need to install Python.**

<div class="alert alert-warning">
<p><strong>Windows OS Warning!</strong> We recommend <a href="http://jekyll-windows.juthilo.com/">Run Jekyll on Windows</a> as documentation on the Windows OS installation process. 
</p>
</div>

# 2. Create a course

Now that you have the tools installed, the next step is to create a GitHub repository containing the files needed to generate a Morea course website.  You do this by creating an empty repository on GitHub, cloning it to your local computer, setting the Morea core repo as an "upstream" repository, and merging the contents of the upstream repo.  The net effect of all this is to initialize your repo with the contents of core, so that you can start off with a functional Morea website.
 
<div class="alert alert-warning">
<p><strong>Why not just fork the core repo?</strong> If you are familiar with git, you might be wondering why we do not advise you to fork the core repository.  The reason is that the core repo is a public repository, and you cannot make your repository private if you forked it from a public one.  Our approach enables you to start with a working Morea site based on a public repository and allow you to make your repository private later.
</p>
</div>

## Create an empty repository

Login to GitHub and click the "+" icon in the upper right corner to pull down a menu that allows you to select "New repository":

<img src="images/CS300-Fall2014-create.png" class="img-responsive">

Provide a name for the repository that identifies the course you are creating. Note that you typically indicate both the course and the semester in the repo name.  When you want to teach a course again, you simply clone this repo and rename it to the new semester.  Add a short description, make the repo public or private as you like, but **do not initialize the repository with a README** (so that you avoid a merge conflict later).  

After clicking "Create Repository", you will see the following page. 

<img src="images/CS300-Fall2014-create2.png" class="img-responsive">

Once you get to this page, we're done with GitHub. Let's now set up files on your local computer.

## Set up local development directory

Developing a Morea site requires managing (at a minimum) two branches for each repository: a "master" branch containing the source files for your course, and a special orphan "gh-pages" branch containing the website files produced by running Jekyll over your source files.

First, make a top-level directory for your course. Let's assume that your GitHub repository is called "CS300-Fall2014", so we'll name this directory the same way:

{% highlight bash %}
[~] $ mkdir CS300-Fall2014
{% endhighlight %}

Next, go into this directory:

    [~] $ cd CS300-Fall2014
    
## Run morea-vanilla-install

The set of git commands needed to create the master and gh-pages branches in this directory are rather tedious, so we've created the [morea-vanilla-install.sh](https://github.com/morea-framework/scripts/blob/master/morea-vanilla-install.sh) script to make this setup process easier. 

You can download this script from the command line with the following command:

     [~/CS300-Fall2014/] $ curl https://raw.githubusercontent.com/morea-framework/scripts/master/morea-vanilla-install.sh >> morea-vanilla-install.sh

Now change the permissions to make this script executable:

     [~/CS300-Fall2014/] $ chmod u+x morea-vanilla-install.sh

Now run this script to clone your new repo locally into a subdirectory named "master" and create a new orphan branch named "gh-pages". You pass the script two arguments: your github account and the name of your repo.  If your account is named "johndoe" and your repo is named "CS300-Fall2014", the script invocation and its output would be similar to this:

{% highlight bash %}
[~/CS300-Fall2014]-> ./morea-vanilla-install.sh johndoe CS300-Fall2014
Creating master/ directory with repo.
+ git clone git@github.com:johndoe/CS300-Fall2014.git master
Cloning into 'master'...
warning: You appear to have cloned an empty repository.

Creating orphan branch, empty gh-pages/ directory.
+ git clone git@github.com:johndoe/CS300-Fall2014.git gh-pages
Cloning into 'gh-pages'...
warning: You appear to have cloned an empty repository.
+ cd gh-pages
+ git checkout --orphan gh-pages
+ git rm -rf .
fatal: pathspec '' did not match any files

master/ and gh-pages/ directories created.
Setting the remote to morea-framework/basic-template (this can fail if already set)
Here are the current upstream repos:
origin	git@github.com:johndoe/CS300-Fall2014.git (fetch)
origin	git@github.com:johndoe/CS300-Fall2014.git (push)
upstream	https://github.com/morea-framework/basic-template.git (fetch)
upstream	https://github.com/morea-framework/basic-template.git (push)
Fetching upstream basic-template
+ cd ./master
+ git fetch upstream
remote: Reusing existing pack: 2098, done.
remote: Total 2098 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (2098/2098), 685.58 KiB | 246 KiB/s, done.
Resolving deltas: 100% (1059/1059), done.
From https://github.com/morea-framework/basic-template
 * [new branch]      gh-pages   -> upstream/gh-pages
 * [new branch]      jekyll-2.0 -> upstream/jekyll-2.0
 * [new branch]      master     -> upstream/master
From https://github.com/morea-framework/basic-template
 * [new tag]         1.0.0      -> 1.0.0
 * [new tag]         release-jekyll-1.4.3 -> release-jekyll-1.4.3
Merging upstream into master
+ cd ./master
+ git merge upstream/master
{% endhighlight %}

Now you have a "master" directory containing a clone of the core repo, and a "gh-pages" directory which is empty:

     [~/CS300-Fall2014/] $ ls 
                  gh-pages		master			morea-vanilla-install.sh
  
Now we can start working on the content of the course. 

# 3. Develop course content

## Configure the \_config.yml file

The first step in developing course content is to configure the master/src/\_config.yml file. There are three fields to edit:

  * **name**:  change this from "core" to the name of your course.
  * **baseurl**: change this from /core to your repo name.
  * **morea_theme**:  if you wish, you can change this to any of the supported [Morea themes](userguide.html#Themes).

For example, here's how we might configure the \_config.yml file for our CS300-Fall2014 example course:

{% highlight yaml %}
name: CS300 Fall 2014
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge
mathjax: true
baseurl: /CS300-Fall2014
exclude: [morea]
morea_theme: spacelab
morea_navbar_items:
  #- Prerequisites
  - Modules
  - Outcomes
  - Readings
  - Experiences
  - Assessments
  #-Schedule
{% endhighlight %}

In general, you only need to touch the \_config.yml file once. Anytime you edit the \_config.yml file, you need to restart Jekyll (i.e. re-run morea-run-local.sh as discussed below) to see the changes. 

## Play around with sample content

The core repo does not contain a morea/ directory, so it does not have any content.  Let's fix that by downloading some [sample content](https://github.com/morea-framework/sample-morea-directory/archive/master.zip). This zip file contains a morea/ directory with example Morea modules, readings, and so forth.  

After downloading that file, copy its morea/ directory into the src/ directory of your new repo. 

For details on the structure and content of Morea markdown files, see the [User Guide](/userguide.html).

For now, just make some simple changes.  The easiest and fastest change to make is to modify the src/morea/home.md file to provide very preliminary information about your course.  Your changes will show up on the home page of the site. You can also edit footer.md in that same location. 

Use any editor you like, although those that have a Markdown mode are generally preferable.

## Display your site locally

Once you've edited markdown files, you'll want to review the formatted version in a browser.  

We have developed a script called [morea-run-local.sh](https://github.com/morea-framework/scripts/blob/master/morea-run-local.sh) to generate and display your site locally. As before, download it into your top-level directory and change its permissions to allow execution:

    [~/CS300-Fall2014] $ curl https://raw.githubusercontent.com/morea-framework/scripts/master/morea-run-local.sh >> morea-run-local.sh
    [~/CS300-Fall2014] $ chmod u+x morea-run-local.sh

Now you can invoke this command to get Jekyll to both compile the source files into HTML and serve them at [http://localhost:4000](http://localhost:4000). 

    [~/CS300-Fall2014] $ ./morea-run-local.sh
              Configuration file: /Users/johnson/CS300-Fall2014/master/src/_config.yml
                Source: /Users/johnson/CS300-Fall2014/master/src
                Destination: /Users/johnson/CS300-Fall2014/master/src/_site
              Generating...
              Starting Morea page processing...
                Processing Morea file:     assessment-1.md
                Processing Morea file:     assessment-2.md
                Processing Morea file:     assessment-3.md
                Processing Morea file:     experience-1.md
                Processing Morea file:     experience-2.md
                Processing Morea file:     experience-3.md
                Processing Morea file:     footer.md
                Processing Morea file:     home.md
                Processing Morea file:     module-1.md
                Processing Morea file:     module-2.md
                Processing Morea file:     module-3.md
                Processing Morea file:     module-4.md
                Processing Morea file:     outcome-1.md
                Processing Morea file:     outcome-2.md
                Processing Morea file:     outcome-3.md
                Processing Morea file:     reading-1.md
                Processing Morea file:     reading-2.md
                Processing Morea file:     reading-3.md
                Processing Morea file:     reading-4.md
                Processing non-Morea file: javacoding.png
                Warning(s): module-2.md missing optional front matter: morea_icon_url (set to /modules/default-icon.png)
                Warning(s): module-3.md missing optional front matter: morea_icon_url (set to /modules/default-icon.png)
                Warning(s): module-4.md missing optional front matter: morea_outcomes, morea_readings, morea_experiences,
                Summary:
                  20 total, 19 published, 0 unpublished, 19 morea, 1 non-morea
                  4 modules, 3 outcomes, 4 readings, 3 experiences, 3 assessments
                  0 errors, 7 warnings
                done.
                Auto-regeneration: enabled
                   Server address: http://0.0.0.0:4000
                  Server running... press ctrl-c to stop.

This output indicates that the Morea plugin to Jekyll processed 20 Morea files to generate the website.  It also noticed some issues and generated warnings. These are OK.

The script tells Jekyll to regenerate the HTML files whenever the markdown sources change.  If you use a browser plugin like [LiveReload](http://livereload.com/) and tell it to monitor the master/src/_site directory, your browser will automatically re-render and re-display the page whenever a change is made to your source files. This makes development quite efficient.

# 4. Publish your website

The final step is to make your Morea course site available to the world using GitHub's free [Pages](http://pages.github.com/) facility. As you might be expecting by now, we have created a script (this time called [morea-publish.sh](https://github.com/morea-framework/scripts/blob/master/morea-publish.sh)) to simplify this process. 

Download it into your top-level directory and make it executable as follows:

    [~/CS300-Fall2014] $ curl https://raw.githubusercontent.com/morea-framework/scripts/master/morea-publish.sh >> morea-publish.sh
    [~/CS300-Fall2014] $ chmod u+x morea-publish.sh

Running the script generates the HTML files into the gh-pages directory, then commits the contents of both the gh-pages and the master 
directories to their respective branches on GitHub.  You must supply the commit message as an argument. Here's an example:

    [~/CS300-Fall2014] $ ./morea-publish.sh "Fixing typo"
              Generating HTML site into gh-pages directory
              + jekyll build --source ./master/src --destination ./gh-pages
              Configuration file: ./master/src/_config.yml
                          Source: ./master/src
                     Destination: ./gh-pages
                    Generating... 
              Starting Morea page processing...
                Processing Morea file:     assessment-1.md
                Processing Morea file:     assessment-2.md
                Processing Morea file:     assessment-3.md
                Processing Morea file:     experience-1.md
                Processing Morea file:     experience-2.md
                Processing Morea file:     experience-3.md
                Processing Morea file:     footer.md
                Processing Morea file:     home.md
                Processing Morea file:     module-1.md
                Processing Morea file:     module-2.md
                Processing Morea file:     module-3.md
                Processing Morea file:     module-4.md
                Processing Morea file:     outcome-1.md
                Processing Morea file:     outcome-2.md
                Processing Morea file:     outcome-3.md
                Processing Morea file:     reading-1.md
                Processing Morea file:     reading-2.md
                Processing Morea file:     reading-3.md
                Processing Morea file:     reading-4.md
                Processing non-Morea file: javacoding.png
                Warning(s): module-2.md missing optional front matter: morea_icon_url (set to /modules/default-icon.png)
                Warning(s): module-3.md missing optional front matter: morea_icon_url (set to /modules/default-icon.png)
                Warning(s): module-4.md missing optional front matter: morea_outcomes, morea_readings, morea_experiences,
                Summary:
                  20 total, 19 published, 0 unpublished, 19 morea, 1 non-morea
                  4 modules, 3 outcomes, 4 readings, 3 experiences, 3 assessments
                  0 errors, 7 warnings
              done.
              Committing the gh-pages branch.
              + cd ./gh-pages
              + git add .
              + git commit -a -m 'Fixing typo'
              [gh-pages 8bb768e] Fixing typo
               18 files changed, 19 insertions(+), 19 deletions(-)
              + git push origin gh-pages
              Counting objects: 60, done.
              Delta compression using up to 8 threads.
              Compressing objects: 100% (23/23), done.
              Writing objects: 100% (31/31), 2.75 KiB, done.
              Total 31 (delta 19), reused 0 (delta 0)
              To git@github.com:morea-framework/basic-template.git
                 fd19896..8bb768e  gh-pages -> gh-pages
              Committing the master branch
              + cd ./master
              + git add .
              + git commit -a -m 'Fixing typo'
              [master 6fe3b5e] Fixing typo
               2 files changed, 4 insertions(+), 2 deletions(-)
               rename master.iml => src/_plugins/_plugins.iml (70%)
              + git push origin master
              Counting objects: 12, done.
              Delta compression using up to 8 threads.
              Compressing objects: 100% (7/7), done.
              Writing objects: 100% (7/7), 881 bytes, done.
              Total 7 (delta 3), reused 0 (delta 0)
              To git@github.com:morea-framework/basic-template.git
                 683ff6d..6fe3b5e  master -> master

Now your site should be publicly available.  For example, if your account is "johndoe" and your repo is "CS300-Fall2014", then you should be able to retrieve your site at [http://johndoe.github.io/CS300-Fall2014](http://johndoe.github.io/CS300-Fall2014). 

**Note:** the morea-publish.sh script assumes you are working alone. If you are working with others and need to pull their commits from the repository, you'll need to invoke additional git commands as part of your work flow.  Otherwise you could get errors when trying to push your changes.

# 5. Summary

While the setup process requires some time and effort, the benefit is that once you're done, the actual development workflow is quite straightforward:

* Invoke the morea-run-local.sh script.
* Edit the contents within the master/src/morea/ subdirectory.
* Review your changes privately at [http://localhost:4000](http://localhost:4000).
* When ready, invoke the morea-publish.sh script to publish your changes to the world.

Now that you've successfully installed Morea, it's time to learn about the system in more detail through the User Guide.


<p style="text-align: center; padding-top: 10px">
  <a href="/userguide.html" class="btn btn-primary btn-md" role="button">Go to User Guide <span class="glyphicon glyphicon-chevron-right"></span> </a>
</p>








