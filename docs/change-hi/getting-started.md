---
title: Getting started
---

## Our development process

There are many potential ways to support collaborative workshop curriculum development for Change-HI. We would like to use a "Fork-and-Pull-Request" approach to development. This means you will develop and maintain workshop curriculum using the following process:

1. Install the required tools and libraries for Morea.
2. Create a fork of the Change-HI Morea site repository in your personal GitHub account, and clone that repository to your computer.
3. Build and run your local copy of the Change-HI Morea site.
4. Create a branch to hold your changes to the site.
5. Edit files to update the site with your changes, and review the results locally. 
6. Once you are satisfied with your changes, commit them and push your branch to GitHub.
7. Create a pull request so that the Change-HI site administrators can review your changes prior to merging them into the published version of the site. Sometimes, the administrators might request a few changes prior to merging, in which case you can easily update the file in the pull request.

Once the pull request is merged, you're done, at least until the next time you need to create another workshop (or update the materials associated with your original workshop).  At that point, the process is a bit simpler:

1. Update your fork so that it contains the most recent version of the Change-HI Morea site repository.
2. Make a new branch to hold your next set of updates. 
3. Update the site to your satisfaction.
4. Push your changes.
5. Create a new pull request.

So, that's the basic process. Let's now provide examples for each of these steps. First, though, we need to install some tools.

## Install tools

There are a few things you will need to install for Morea.

### Join GitHub

If you haven't already, [sign up for GitHub](https://help.github.com/articles/signing-up-for-a-new-github-account).

### Install a git client

Next, you will need a git client.  We recommend [GitHub Desktop](https://desktop.github.com/), but if you are already comfortable with another git client, that's fine.  

For Morea, you will need a basic understanding of the git concepts of [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo), [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository), [branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches), [push](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository), and [create pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). This might seem like a lot if you are a git newbie, but it's really very simple once you get used to it.

### Install an editor

You cannot use a word processor like Microsoft Word to edit Morea files.  Instead, you need a text editor such as Emacs, Vim, IntelliJ IDEA, Microsoft Visual Studio, Eclipse, Atom, or similar.

Please be sure to have one text editor available to you.

### Install Jekyll

The final installation step is to [install Jekyll](https://jekyllrb.com/docs/installation/). Jekyll runs on all platforms.

To verify that you've installed Jekyll correctly, please go through the [Jekyll Quickstart](https://jekyllrb.com/docs/) instructions to be sure that you can create a simple Jekyll site and run it on your computer.

## Request a stub module if necessary

The Change-HI site ([https://change-hi.github.io/modules](https://change-hi.github.io/modules)) contains a set of "stub" modules for upcoming workshops during AY 2022-23.  In most cases, a stub module will already exist, but if not, please ask Philip Johnson to create one for you.  That will simplify content creation when you are just getting started with Morea.  

## Fork the Change-HI site

Once you have installed a git client, an editor, and Jekyll, the next step is to fork a copy of the Change-HI Morea site, download it, and get it to run locally on your computer.  

### Go to site

First, go to [https://github.com/change-hi/change-hi.github.io](https://github.com/change-hi/change-hi.github.io):

![](/img/change-hi/change-hi.github.io.png)

### Fork the repo

Click the "Fork" button in the top right of the page to bring up the fork window:

![](/img/change-hi/change-hi.github.io-fork.png)

You can see that this window selects my personal account, which is typically where you'll want the fork of the repository to go. Click "Create fork" which results in a new copy of the repo in your own personal account. For example:

![](/img/ci-tracs/ci-tracs.github.io-forked.png)

(You can ignore the "Your main branch isn't protected" warning.)

### Download your forked site

Now click on the green "Code" button:

![](/img/ci-tracs/ci-tracs.github.io-clone.png)

You will typically want to select "Open with GitHub Desktop". (If you are experienced with git and are using another client, then do that instead).

Clicking "Open with GitHub Desktop" should automatically open your GitHub Desktop application on your computer and open a dialogue box where you can specify where you want the copy of the repository placed in your file system.  In my case, I use `/Users/philipmjohnson/github/philipmjohnson` to store all the repos associated with my personal account. So that's where I'll put it:

![](/img/ci-tracs/ci-tracs.github.io-clone-2.png)

After clicking the "Clone" button, GitHub Desktop will download all of the files and then display the following dialogue box:

![](/img/ci-tracs/ci-tracs.github.io-parent.png)

Since you want to use this repo to contribute to the parent project, you can just click the "Continue" button. 

After clicking this button, GitHub Desktop should look like this, indicating the repo has been successfully cloned to your computer:

![](/img/ci-tracs/ci-tracs.github.io-local.png)

## Run the local site

Now that you have the system files in a local directory, open a shell window, change directories to the location of the files, and invoke `bundle install` to download all required libraries:

```shell
$ cd github/philipmjohnson/Change-HI.github.io/
$ bundle install
Using public_suffix 4.0.6
Using addressable 2.8.0
:
:
Using jekyll-gist 1.5.0
Using webrick 1.7.0
Bundle complete! 7 Gemfile dependencies, 51 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
$  
```

Once the libraries are there, you run the system with `bundle exec jekyll serve`:

```shell
$ bundle exec jekyll serve
Configuration file: /Users/philipjohnson/github/philipmjohnson/Change-HI.github.io/_config.yml
Configuration file: /Users/philipjohnson/github/philipmjohnson/Change-HI.github.io/_config.yml
            Source: /Users/philipjohnson/github/philipmjohnson/Change-HI.github.io
       Destination: /Users/philipjohnson/github/philipmjohnson/Change-HI.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.249 seconds.
 Auto-regeneration: enabled for '/Users/philipjohnson/github/philipmjohnson/Change-HI.github.io'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

Notice the "Server address" line that provides the URL `http://127.0.0.1:4000/` for displaying the site in your browser. If all goes according to plan, retrieving this URL will display the landing page of the Change-HI site in your browser:

![](/img/ci-tracs/ci-tracs-landing-page-local.png)

## Create a branch

Now that we have successfully installed a local copy of the site, the next step is to make a branch in which to hold our update.  Click the "Branch" menu item:

![](/img/ci-tracs/ci-tracs.github.io-new-branch.png)

Then select "New Branch", which yields the following:

![](/img/ci-tracs/ci-tracs.github.io-new-branch-2.png)

I'll call the branch "update-hpc-preparation" and click "Create Branch" to get the following:

![](/img/ci-tracs/ci-tracs.github.io-new-branch-3.png)

Click the "Publish branch" button to push this new branch to GitHub. Afterwards GitHub Desktop will look like this:

![](/img/ci-tracs/ci-tracs.github.io-new-branch-4.png)

We're now ready to create a pull request, but first we actually have to update the repository!

## Update the site

Now let's walk through a simple modification of the site. Suppose we want to update the "Preparation" reading for the HPC workshop to include an additional video on learning the command line. First, open an editor and bring up the source file for that page. I use IntelliJ IDEA as my editor:

![](/img/ci-tracs/reading-hpc-preparation.png)

Here's that same file after adding a sentence on line 19 documenting an additional YouTube video for learning the shell:

![](/img/ci-tracs/reading-hpc-preparation-2.png)

To see the updated page, control-c to stop the Jekyll process and re-invoke `bundle exec jekyll serve`. Then navigate to the page:

![](/img/ci-tracs/reading-hpc-preparation-3.png)

## Create the pull request

Let's say that this is the only enhancement you want to make at this time, and now you want to ask the administrators to incorporate this change into the official Change-HI site.  The first step is to commit your change to your local repository. If you go to GitHub Desktop, you'll see an indicating of all the files that have been modified. In this case, it's just a single file to which we've added a single line:

![](/img/ci-tracs/reading-hpc-preparation-commit.png)

Add a commit message, then press the "Commit to update-hpc-preparation" button to commit your changes to your local repository. Afterwards GitHub Desktop will look like this:

![](/img/ci-tracs/reading-hpc-preparation-commit-2.png)

Now press "Push origin" to push your update to GitHub. Now GitHub Desktop looks like this:

![](/img/ci-tracs/reading-hpc-preparation-commit-2.png)

As if by magic, GitHub Desktop has anticipated that we might want to make a pull request and it provides us with a button. Click the "Create Pull Request" button. That will send control to your browser and display the following page:

![](/img/ci-tracs/ci-tracs.github.io-pull-request.png)

Notice that this page is associated with the Change-HI version of the Change-HI.github.io repository, not your own personal version. You are "opening a pull request" on the official version of the repository, and requesting that the administrators merge the changes in your branch into the official repo.

Add any additional information you'd like to add, then press "Create pull request". The result will look somewhat similar to this:

![](/img/ci-tracs/ci-tracs.github.io-pull-request-2.png)

In this case, since I am an administrator, I will get a button to merge the pull request, but non-administrators will see something different.
