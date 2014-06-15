---
layout: userguide
title: Quick Start
---

# Installation

To use Morea, you need to have git, python, ruby, and jekyll installed and have an account at GitHub.

### Join GitHub

If you haven't already, [sign up for GitHub](https://help.github.com/articles/signing-up-for-a-new-github-account).
If you are associated with an educational institution (i.e. have a .edu email account), you can [request a free micro account](https://education.github.com/) providing you with 5 private repos.

<div class="alert alert-warning">
<p><strong>Warning!</strong> Morea requires that you have an ssh key on your laptop and that you provide
the public key to GitHub. If you do not do this, then you will later encounter the error "Permission denied (publickey)". 
</p>

<p>
To define a public key and provide it to GitHub, follow the instructions on GitHub's
<a class="alert-link" href="https://help.github.com/articles/generating-ssh-keys">Generating SSH Keys</a> page.
</p>
</div>

### Install git

Check to see if you have git installed and can invoke it from the command line:

    % git --version
      git version 1.7.9.6 (Apple Git-31.1)

If not, follow these instructions to [install git](https://help.github.com/articles/set-up-git). (Be sure to click the tab corresponding to your OS.)
Note that Morea uses a variety of scripts that invoke git from the command line, so you cannot simply download the GitHub GUI app.

<div class="alert alert-warning">
<p><strong>Windows OS Warning!</strong> When installing Git on Windows, we recommend you select the option to 
provide "Git Bash".   Git Bash (which is available from the Start menu as an option under the Git submenu) 
is a way of running Git within a Unix-like command shell.  This is extremely useful for Morea, since this enables
you to run Morea scripts without modification.
</p>
</div>


### Install Ruby

Check to see if you have Ruby installed and can invoke it from the command line: 

    % ruby --version
      ruby 2.1.0p0 (2013-12-25 revision 44422) [x86_64-darwin12.0]

If not, follow these instructions to [install Ruby](https://www.ruby-lang.org/en/downloads/). Ruby is the programming language used to run Jekyll.

Morea is compatible with either Ruby 1.9.x or 2.x.


### Install Python

Check to see if you have Python 2.x installed and can invoke it from the command line:

    % python --version
      Python 2.7.2

If not, follow these instructions to [install Python](https://www.python.org/download/).

<div class="alert alert-warning">
<p><strong>Warning!</strong> Jekyll (and thus Morea) is incompatible with Python 3.x.</p>
</div>

### Install Jekyll

Check to see if you have Jekyll 2.x installed and can invoke it from the command line:

    $ jekyll --version
      jekyll 2.0.3

If not, follow these instructions to [install Jekyll](http://jekyllrb.com/docs/installation/). Jekyll is the system used by Morea to convert the source
files into the actual website. Note that Jekyll is easy to install on Linux and Mac, less so on Windows.

<div class="alert alert-warning">
<p><strong>Windows OS Warning!</strong> We recommend the GitHub repo called <a href="https://github.com/juthilo/run-jekyll-on-windows/">Run Jekyll on Windows</a> as documentation on the Windows OS installation process.
</p>
</div>



# Create a course

Now that you have the tools installed, the next step is to create a GitHub repository containing the files needed to
generate a Morea course website.  You do this by forking a current Morea repository on GitHub into your own account,
then setting up local branches for development.

### Fork a Morea repo

While you can fork any Morea repo, this Quickstart will use
the [basic-template](https://github.com/morea-framework/basic-template) repo. Go to this page in a browser,
then press the "Fork" button in the upper right corner.  This will create a copy of that repo in your own account and
take you to your new repo's home page.

Now click the "Settings" link on the right side of the page, and rename the repo from "basic-template"
to the name of the course you wish to develop (such as "cs300").

You now have a Morea repo, but it's in the cloud, and it doesn't have your course content. To fix this, you need
to set up a local environment and download the files to it.

### Set up local directory structure

Developing a Morea site requires managing (at a minimum) two branches for each repo: a "master" branch containing the source
files for your course, and a special orphan "gh-pages" branch containing the website files produced by running Jekyll over your
source files.

First, make a top-level directory for your course. Let's assume that your Github repo is called "cs300", so we'll 
name this directory the same way:

{% highlight bash %}
[~] $ mkdir cs300
{% endhighlight %}

Next, go into this directory:

    [~] $ cd cs300

The set of git commands needed to create the master and gh-pages branches in this directory are rather tedious, so we've created
the [morea-install.sh](https://github.com/morea-framework/scripts/blob/master/morea-install.sh) script to make this setup process easier. 

You can download this script from the command line with the following command:

     [~/cs300/] $ curl https://raw.githubusercontent.com/morea-framework/scripts/master/morea-install.sh >> morea-install.sh

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
  

# Develop course content

## Configure the \_config.yml file

The first step in developing course content is to configure the master/src/\_config.yml file. There are three fields to edit:

  * **name**:  change this from "Basic Template" to the name of your course.
  * **baseurl**: change this from /basic-template to your repo name.
  * **morea_theme**:  if you wish, you can change this to any of the supported [Morea themes](userguide.html#Themes).

For example, here's how we might configure the \_config.yml file for our cs300 example course:

{% highlight yaml %}
name: CS 300
highlighter: pygments
safe: false
baseurl: /cs300
exclude: [morea]
morea_theme: superhero
{% endhighlight %}

In general, you only need to touch the \_config.yml file once. Anytime you edit the \_config.yml file, you need to restart Jekyll (i.e. re-run morea-run-local.sh as discussed below) to see the changes. 

## Edit markdown files

The next step is to edit the markdown files to present additional course content. 

For details on the structure and content of Morea markdown files, see the [User Guide](/userguide.html).

For now, just make some simple changes.  The easiest and fastest change to make is to modify the src/morea/home.md file to provide very preliminary information about
your course.  Your changes will show up on the home page of the site. You can also edit footer.md in that same location. 

Use any editor you like, although those that have a Markdown mode are generally preferable.


## Display your site locally

Once you've edited markdown files, you'll want to review the formatted version in a browser.  

We have developed a script called [morea-run-local.sh](https://github.com/morea-framework/scripts/blob/master/morea-run-local.sh) to generate and display your site locally. As before, download it into your top-level directory and
change its permissions to allow execution:

    [~/cs300] $ curl https://raw.githubusercontent.com/morea-framework/scripts/master/morea-run-local.sh >> morea-run-local.sh
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

# Publish your website

The final step is to make your Morea course site available to the world using GitHub's free [Pages](http://pages.github.com/) facility. As
you might be expecting by now, we have created a script (this time called [morea-publish.sh](https://github.com/morea-framework/scripts/blob/master/morea-publish.sh)) to simplify this process. 

Download it into your top-level directory and make it executable as follows:

    [~/cs300] $ curl https://raw.githubusercontent.com/morea-framework/scripts/master/morea-publish.sh >> morea-publish.sh
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

# Summary

While the setup process requires some time and effort, the benefit is that once you're done, the actual development workflow is quite straightforward:

* Invoke the morea-run-local.sh script.
* Edit the contents of the morea/ directory.
* Review your changes privately at [http://localhost:4000](http://localhost:4000).
* When ready, invoke the morea-publish.sh script to publish your changes to the world.

Now that you've successfully installed Morea, it's time to learn about the system in more detail through
the User Guide.


<p style="text-align: center; padding-top: 10px">
     <a href="/userguide.html" class="btn btn-primary btn-md" role="button">Go to User Guide <span class="glyphicon glyphicon-chevron-right"></span> </a>
   </p>








