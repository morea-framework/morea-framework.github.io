---
title: Getting started
---

## Overview of the development process

There are many potential ways to support collaborative workshop curriculum development for CI-TRACS. We would like to use a "Fork-and-Pull-Request" approach to development. This means you will develop and maintain workshop curriculum using the following process:

1. Create a fork of the CI-TRACS Morea site repository in your own GitHub account.
2. Clone that repository to your local computer.
3. Make a branch to hold your changes to the site.
4. Build and run your local copy of the CI-TRACS Morea site.
5. Edit files to create your new workshop (or update files for an existing workshop).
6. Once you are satisfied with your changes, push your changes to GitHub.
7. Create a pull request so that the CI-TRACS site administrators can review your changes prior to merging them into the published version of the site. Sometimes, the administrators might request a few changes prior to merging, in which case you can easily update the file in the pull request.

Once the pull request is merged, you're done, at least until the next time you need to create another workshop (or update the materials associated with your original workshop).  At that point, the process is a bit simpler:

1. Update your fork so that it contains the most recent version of the CI-TRACS Morea site repository.
2. Make a new branch to hold your next set of updates. 
3. Update the site to your satisfaction.
4. Push your changes.
5. Create a new pull request.

So, that's the basic process. Let's now provide examples for each of these steps. First, though, we need to install some tools.

## Install tools

There are a few things you will need to install for workshop curriculum development using Morea.

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

## Fork CI-TRACS Morea site

Once you have the required tools, the next step is to download a copy of the CI-TRACS Morea site and get it to run locally on your computer.  
