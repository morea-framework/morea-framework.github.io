---
title: Getting started
---

## Our development process

There are many potential ways to support collaborative workshop curriculum development for HI-DSI. We would like to use a "Fork-and-Pull-Request" approach to development. This means you will develop and maintain workshop curriculum using the following process:

1. Create a fork of the most recent version of the [Change-HI/EDU Morea site repository](https://github.com/change-hi/change-hi.github.io) in your personal GitHub account.
2. Decide whether you want to develop your site using the cloud-based Gitpod.io service, or locally. You might find [Choose local or cloud development](/docs/instructors/quick-start#choose-local-or-cloud-development) to be useful in making that choice.
3. Depending upon your choice, [Install a local morea development environment](/docs/instructors/local-installation), or [Install a cloud-based development environment](/docs/instructors/cloud-installation)  .
4. Before making any changes, check your work by building and running your fork of the Change-HI/EDU Morea site (either locally or in the cloud).
5. Now, create a branch to hold your changes to the site.
6. Edit files to update the site with your changes, and review the results.
7. Once you are satisfied with your changes, commit them and push your branch to GitHub.
8. Create a pull request so that the Change-HI/EDU site administrators can review your changes prior to merging them into the published version of the site. Sometimes, the administrators might request a few changes prior to merging, in which case you can easily update the file in the pull request.

Once the pull request is merged, you're done, at least until the next time you need to create another workshop (or update the materials associated with your original workshop).  At that point, the process is a bit simpler:

1. Update your fork so that it contains the most recent version of the Change-HI Morea site repository.
3. Update the site to your satisfaction.
4. Push your changes.
5. Create a new pull request.

So, that's the basic process. Let's now provide examples for some of these steps. 

### Fork the repo

Click the "Fork" button in the top right of the page to bring up the fork window:

![](/img/change-hi/change-hi.github.io-fork.png)

You can see that this window selects my personal account, which is typically where you'll want the fork of the repository to go. Click "Create fork" which results in a new copy of the repo in your own personal account. For example:

![](/img/change-hi/change-hi.github.io-forked.png)


## Create the pull request

Let's say you have made some enhancements, and now you want to ask the administrators to incorporate this change into the official Change-HI site.  The first step is to commit your change to your local repository and push those changes to GitHub. The actual process used depends upon whether you are doing [local development](/docs/instructors/local-development) or [cloud-based development](/docs/instructors/cloud-development). 

Once you've committed your changes to your branch and pushed them to GitHub, you can browse to your GitHub repo and pull down the "Contribute" menu, which enables you to create a pull request:

![](/img/change-hi/change-hi.github.io-local-repo.png)

Click the "Open pull request" button, which brings up a page that looks like this:

![](/img/change-hi/change-hi.github.io-local-repo-2.png)

You are "opening a pull request" on the official version of the repository, and requesting that the Change-HI administrators merge the changes in your branch into the official repo.

You can add additional information if you like as a message to the Change-HI administrators. Then press "Create pull request". The result will look somewhat similar to this:

![](/img/change-hi/change-hi.github.io-pull-request-2.png)

In this screen image, since I am actually an administrator, I will get a button to merge the pull request, but regular users will see a slightly different page. 

## Updating your fork

So, let's say you've followed all of the above instructions, developed your workshop materials, issued your pull request, and it's been incorporated into the published site. 

Then, let's say a Change-HI administrator notices an opportunity to improve your workshop, and so they make changes to your workshop materials and incorporate them into the published site. 

Now, after that's happened, let's say *you* realize you want to add some additional material. In this situation, what you want to do is:

1. Incorporate the changes made to your workshop materials by the administrator into your local fork.
2. Update your fork with your additional material.
3. Create a new pull request from your fork.

You already know how to do (2) and (3), the only question is how to do (1). This turns out to be easy in GitHub Desktop: simply select "Update from upstream/main" in the "Branch" menubar:

![](/img/change-hi/update-from-upstream-main.png)

(A similar menu item exists in the Source Control menu for GitPod.)

This will incorporate the changes and you can now proceed with your own modifications.
