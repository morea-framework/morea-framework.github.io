---
title: Quick start
---

This quick start takes you through the steps necessary to set up and publish a new Morea course site with "default" content.

## Join GitHub

If you haven't already, [sign up for GitHub](https://help.github.com/articles/signing-up-for-a-new-github-account). If you are associated with an educational institution (i.e. have a .edu email account), you can  [request an educational account](https://education.github.com/) with additional benefits. However, the basic "free" account should be sufficient.

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

The next sections provide the background conceptual information as well as the practical details necessary for you to edit this template into a course website appropriate to your needs.