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

First, make a top-level directory for your course. Let's call it "cs300", and let's assume
that's the name of your GitHub repo as well. Make the directory and enter it as follows:


    [~] $ mkdir cs300
    [~] $ cd cs300


Second, "clone" the master branch of your repo residing on GitHub into a subdirectory of cs300/ named "master". 

     [~/cs300/] $ git clone git@github.com:accountname/cs300.git master
     
Replace "accountname" by your own account.

Third, create an "orphan" branch called "gh-pages" next to the "master" branch following [GitHub's approach](https://help.github.com/articles/creating-project-pages-manually)
(again replacing "accountname" by your own account):

     [~/cs300/] $ git clone git@github.com:accountname/cs300.git gh-pages
     [~/cs300/] $ cd gh-pages
     [~/cs300/gh-pages] $ git checkout --orphan gh-pages
     [~/cs300/gh-pages] $ git rm -rf .

At this point you have a "master" directory containing a clone of the basic-template files, and a "gh-pages" directory
which is empty.

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

#### Run Jekyll locally

To generate the HTML sources locally and view them in a browser, cd to the master/src/ directory and invoke:

    [~/cs300/master/src] $ jekyll serve --baseurl "" --watch

The expected output from running this command with the basic-template is:

    [~/basic-template/master/src]-> jekyll serve --baseurl "" --watch
    Configuration file: /Users/johnson/projecthosting/github/morea-framework/basic-template/master/src/_config.yml
                Source: /Users/johnson/projecthosting/github/morea-framework/basic-template/master/src
           Destination: /Users/johnson/projecthosting/github/morea-framework/basic-template/master/src/_site
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
      Issues discovered in module-2.md:
        Warning(s): Missing optional front matter: morea_icon_url (set to /modules/default-icon.png)
      Issues discovered in module-3.md:
        Warning(s): Missing optional front matter: morea_icon_url (set to /modules/default-icon.png)
      Issues discovered in module-4.md:
        Warning(s): Missing optional front matter: morea_outcomes, morea_readings, morea_experiences, morea_assessments, morea_icon_url (set to /modules/default-icon.png)
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

The resulting site will be available at [http://localhost:4000]().

The --watch option tells jekyll to regenerate the HTML files whenever the markdown sources change.  Combine --watch with
a browser plugin like [LiveReload](http://livereload.com/) and your browser will automatically refresh whenever a change is made
to the Morea markdown files. Sweet!

**Note:** Sometimes you run this Jekyll command and it crashes with lots of error messages.  This is usually due to running
Jekyll in a directory other than master/src.  If you have a problem with this step, the first thing to do is to make
sure you are in the master/src directory.

## 4. Publish your website

The final step is to make your Morea course site available to the world using GitHub's free [Pages](http://pages.github.com/) facility.

#### Generate your website into gh-pages

Start by running
the following command to place the HTML files into the gh-pages directory. Note that you must run this command
from the master/src directory:

    [~/cs300/] $ cd master/src
    [~/cs300/master/src] $ jekyll build --destination ../../gh-pages

#### Commit the gh-pages branch

Now you need to upload the content to GitHub. First change to the gh-pages directory, then use the following
git commands to upload the content to the gh-pages branch:

    [~/cs300/master/src] $ cd ../../gh-pages
    [~/cs300/gh-pages] $ git add .
    [~/cs300/gh-pages] $ git commit -m "Commit latest html sources"
    [~/cs300/gh-pages] $ git push origin gh-pages

If everything worked correctly, you should now be able to view your published course website at the following
address (substituting your account for "accountname"):

    http://accountname.github.io/cs300

#### Commit the master branch

Of course you will also want to commit the master branch as well:

    [~/cs300/master/src] $ cd ../../master
    [~/cs300/gh-pages] $ git add .
    [~/cs300/gh-pages] $ git commit -m "Commit latest html sources"
    [~/cs300/gh-pages] $ git push origin master





