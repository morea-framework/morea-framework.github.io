---
layout: documentation
title: Quick Start
---

# Morea Quick Start

## 1. Installation

To use Morea, you need to have git and jekyll installed and have an account at GitHub.

#### Join GitHub

If you haven't already, [sign up for GitHub](https://help.github.com/articles/signing-up-for-a-new-github-account).
If you are associated with an educational institution (i.e. have a .edu email account), you can [request a free micro account](https://education.github.com/) providing you with 5 private repos.

#### Install git

Follow these instructions to [install git](https://help.github.com/articles/set-up-git). (Be sure to click the tab corresponding to your OS.)
Note that Morea uses a variety of scripts that invoke git from the command line, so you cannot simply download their GUI app.

#### Install Jekyll

Finally, [install Jekyll](http://jekyllrb.com/docs/installation/). Jekyll is the system used by Morea to convert the source
files into the actual website. Note that Jekyll is easy to install on Linux and Mac, less so on Windows.
If you have problems, you might want to consider using [Vagrant for Jekyll site generation](http://dwradcliffe.com/2013/04/12/vagrant-to-compile-jekyll.html).

## 2. Create a course

Now that you have the tools installed, the next step is to create a GitHub repository containing the files needed to
generate a Morea course website.  You do this by forking a current Morea repository on GitHub into your own account,
then setting up local branches for development.

#### Fork a Morea repo

While you can fork any Morea repo, this Quickstart will use
the [basic-template](https://github.com/morea-framework/basic-template) repo. Go to this page in a browser,
then press the "Fork" button in the upper right corner.  This will create a copy of that repo in your own account and
take you to your new repo's home page.

Now click the "Settings" link on the right side of the page, and rename the repo from "basic-template"
to the name of the course you wish to develop (such as "cs300").

You now have a Morea repo, but it's in the cloud, and it doesn't have your course content. To fix this, you need
to set up a local environment and download the files to it.

#### Set up your local directory structure

Developing a Morea site requires managing (at a minimum) two branches for each repo: a "master" branch containing the source
files for your course, and a special orphan "gh-pages" branch containing the website files produced by running Jekyll over your
source files.

First, make a top-level directory for your course. Let's assume that your Github repo is called "cs300", so we'll 
name this directory the same way:

    [~] $ mkdir cs300

Next, go into this directory:

    [~] $ cd cs300

The set of git commands needed to create the master and gh-pages branches in this directory are rather tedious, so we've created
the [morea-install.sh](https://github.com/morea-framework/scripts/blob/master/morea-install.sh) script to make this setup process easier. 

You can download this script from the command line with the following command:

     [~/cs300/] $ curl https://raw.github.com/morea-framework/scripts/master/morea-install.sh >> morea-install.sh

Now change the permissions to make this script executable:

     [~/cs300/] $ chmod u+x morea-install.sh

Now run this script to clone your new repo locally into a subdirectory named "master" and create a new orphan branch named "gh-pages". You 
pass the script two arguments: your github account and the name of your repo.  If your account is named "johndoe" and your repo is named
"cs300", the script invocation and its output would be similar to this:

     [~/cs300/] $ ./morea-install.sh johndoe cs300 
                  Creating master/ directory with repo.
                  + git clone git@github.com:johndoe/cs300.git master
                  Cloning into 'master'...
                  remote: Counting objects: 5, done.
                  remote: Compressing objects: 100% (3/3), done.
                  remote: Total 5 (delta 0), reused 0 (delta 0)
                  Receiving objects: 100% (5/5), 4.17 KiB, done.

                  Creating orphan branch, empty gh-pages/ directory.
                  + git clone git@github.com:johndoe/cs300.git gh-pages
                  Cloning into 'gh-pages'...
                  remote: Counting objects: 5, done.
                  remote: Compressing objects: 100% (3/3), done.
                  remote: Total 5 (delta 0), reused 0 (delta 0)
                  Receiving objects: 100% (5/5), 4.17 KiB, done.
                  + cd gh-pages
                  + git checkout --orphan gh-pages
                  Switched to a new branch 'gh-pages'
                  + git rm -rf .
                  rm '.gitignore'
                  rm 'LICENSE'
                  rm 'README.md'

                  master/ and gh-pages/ directories created.

The script has created a "master" directory containing a clone of the basic-template files, and a "gh-pages" directory
which is empty:

     [~/cs300/] $ ls 
                  gh-pages		master			morea-install.sh

  

## 3. Develop your course content

Development of your course content involves the following basic workflow:

  * Edit your markdown files in the master/ directory
  * Run Jekyll locally to see the resulting HTML website in your browser.
  * Once you are satisfied with your content, run Jekyll to place the HTML files into your gh-pages/ directory.
  * Commit the gh-pages branch to GitHub to make the improved website publicly available.
  * Commit the master branch to GitHub to back up your edits and make your sources available to others.

This section documents the first two steps, and the next section documents the final three steps.

#### Edit markdown files.

For more information on the structure and content of Morea markdown files, see the [User Guide](/userguide.html).

For now, just make some simple changes to the basic-template files.  Use any editor you like, although those that
have a Markdown mode are generally preferable.

#### Display your site locally

We have developed a script called [morea-run-local.sh](https://github.com/morea-framework/scripts/blob/master/morea-run-local.sh) to generate and display your site locally. As before, download it into your top-level directory and
change its permissions to allow execution:

    [~/cs300] $ curl https://raw.github.com/morea-framework/scripts/master/morea-run-local.sh >> morea-run-local.sh
    [~/cs300] $ chmod u+x morea-run-local.sh

Now you can invoke this command to get Jekyll to both compile the source files into HTML and serve them at [http://localhost:4000](http://localhost:4000). 

    [~/cs300] $ ./morea-run-local.sh
              Configuration file: /Users/johnson/cs300/master/src/_config.yml
                Source: /Users/johnson/cs300/master/src
                Destination: /Users/johnson/cs300/master/src/_site
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

This output indicates that the Morea plugin to Jekyll processed 20 Morea files to generate the website.  It also noticed
some issues and generated warnings. These are OK.

The script tells Jekyll to regenerate the HTML files whenever the markdown sources change.  If you use 
a browser plugin like [LiveReload](http://livereload.com/) and tell it to monitor the master/src/_site directory, your browser will automatically re-render and re-display the page whenever a change is made to your source files. This makes development quite efficient.

## 4. Publish your website

The final step is to make your Morea course site available to the world using GitHub's free [Pages](http://pages.github.com/) facility. As
you might be expecting by now, we have created a script (this time called [morea-publish.sh](https://github.com/morea-framework/scripts/blob/master/morea-publish.sh)) to simplify this process. 

Download it into your top-level directory and make it executable as follows:

    [~/cs300] $ curl https://raw.github.com/morea-framework/scripts/master/morea-publish.sh >> morea-publish.sh
    [~/cs300] $ chmod u+x morea-publish.sh

Running the script generates the HTML files into the gh-pages directory, then commits the contents of both the gh-pages and the master 
directories to their respective branches on GitHub.  You must supply the commit message as an argument. Here's an example:

    [~/cs300] $ ./morea-publish.sh "Fixing typo"
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

Now your site should be publically available.  For example, if your account is "johndoe" and your repo is "cs300", then you should be able to 
retrieve your site at [http://johndoe.github.io/cs300](http://johndoe.github.io/cs300). 

**Note:** the morea-publish.sh script assumes you are working alone. If you are working with others and need to pull their commits from the repository, you'll need to invoke additional git commands as part of your work flow.  Otherwise you could get errors when trying to push your changes.








