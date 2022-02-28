---
title: Quick start
---

This quick start takes you through the steps necessary to set up and publish a new Morea course site with "default" content.

## Join GitHub

If you haven't already, [sign up for GitHub](https://help.github.com/articles/signing-up-for-a-new-github-account). There are two common types of GitHub accounts:

  * Free Accounts.  You can use a GitHub "Free" account to create Morea sites, but with one important restriction: you cannot make your repository private *and* publish the site as a GitHub Page.  If your Morea source code is in a public GitHub repo, then you cannot store private information (such as tests) in your repo.  If you are OK with anyone (including students) seeing every file stored in your Morea repo, then a Free Account is fine. 

  * Education Accounts.  If you request a GitHub "Educator" account, then you can upgrade any of your organisations to "Team" status for free. Organizations under the "Team" plan can have private GitHub repos that are also published as a GitHub Page. This is quite nice, as it means you can store tests and other confidential information using Morea's [private files](private-files.md) mechanism.  If you are associated with an educational institution, you can  [apply for an educator or researcher discount](https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount). Once you have been approved for the GitHub Educator Plan, you can go to the [Upgrade Organization](https://education.github.com/toolbox/offers/github-org-upgrades) page to upgrade your organization to the Team plan.

## Create your course repository

Login to GitHub and go to [https://github.com/morea-framework/morea](https://github.com/morea-framework/morea):

![image](/img/quick-start/morea-repo-page.png)

Next, click "Use this template" and fill out the page:

 * Provide a repository name (typically the course number and semester).
 * Make the repo private.
 * Include all branches.

It should look like this:

![image](/img/quick-start/morea-repo-page-2.png)


When you are done, click on "Create repository from template". After the repo is created, you should be at a page in your own GitHub account with a copy of the Morea files:

![image](/img/quick-start/morea-repo-page-3.png)

## Configure the config.yml file

Next, scroll down the list of files until you see "_config.yml", and click it:

![image](/img/quick-start/morea-repo-page-4.png)


Click on the pencil icon to edit this file within your browser:

![image](/img/quick-start/morea-repo-page-5.png)


Make the following changes to this file:

  * Edit the "name:" field to specify your course name. (Example: "CS 299 Fall 2021")
  * Edit the "baseurl:" field to specify your repository name. (Example: "/cs299fall21").

Here's what it might look like:

![image](/img/quick-start/morea-repo-page-6.png)


Now scroll down to the bottom of the page, write in a commit comment (i.e. "Update _config.yml"), and click "Commit changes".

## Verify that GitHub built the site

Next, click on the "Actions" tab. You will see a workflow running. This task is building your site and deploying the HTML pages to the gh-pages branch of your repository. When it has completed, you should see a green checkbox next to your commit:

![image](/img/quick-start/morea-repo-page-7.png)

:::tip
If the site does not build correctly, first check to make sure the baseurl field matches the repository name. If it doesn't, then just edit the file, commit the change, and wait for the build to conclude.

If that doesn't fix it, please contact a Morea developer (i.e. Philip Johnson (johnson@hawaii.edu)).
:::

The first couple of workflow runs could take several minutes, but these runs result in caching that should decrease subsequent build times substantially.  After this initial setup, your site should typically build in less than a minute.

## Verify that the site is published

Now click on the Settings tab, then click "Pages". You should see the following:

![image](/img/quick-start/morea-repo-page-8.png)

Please click the "Enforce HTTPS" checkbox.

## Display your published course website

Now click on the link in the GitHub Pages page to see your newly published Morea site. It should look similar to this:

![image](/img/quick-start/morea-repo-page-9.png)

Unfortunately, apart from the site name in the menubar ("CS 299 Fall 2021"), none of this content is appropriate for your course!

Before proceeding, you might want to spend a few minutes clicking around your newly site.  This site illustrates many (though not all) of the features of a Morea site.

The next two sections guide you through the tools you need to install to develop a Morea site on your computer as well as some simple examples of modifications to your sample site.
