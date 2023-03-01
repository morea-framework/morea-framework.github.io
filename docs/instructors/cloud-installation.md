---
title: Cloud installation
hide_table_of_contents: true
---

We recommend Gitpod for cloud-based development of Morea. Here are the steps to set up your Gitpod workspace. We assume that you have already completed the "Quick start" instructions, resulting in a working Morea site, or have cloned (or forked) a pre-existing Morea site that you now want to continue working on. 

## Login to Gitpod

To start, go to <https://gitpod.io/>.

![](/img/cloud-development/gitpod-0.png)

Click the "Continue with GitHub" button and login. That will take you to your Workspaces screen:

![](/img/cloud-development/gitpod-1.0.png)

## Verify provider permissions

Next, check to make sure that GitHub provider permissions are correct. To do this, click on your avatar image at the top right of the page, then click "User Settings", then click "Integrations". You should see a page like this:

![](/img/cloud-development/gitpod-1.1.png)

This image shows that if you click on the three dots by the GitHub provider entry, an "Edit Permissions" selection is available click on that to bring up the following:

![](/img/cloud-development/gitpod-1.2.png)

Look carefully at this image.  You want the "read:user", "public_repo", "repo", and "workflow" permissions selected, and you do **not** want the "read:org" permission selected. If your permissions need adjusting, please do so now and click "Update Permissions" to save your changes. 

### Open the workspace for your Morea site

Now click the "Workspaces" tab at the top of the page to return to the Workspace page. 

Click the "New Workspace" button, which should bring up a pull-down menu that allows you to select the repository associated with your Morea site:

![](/img/cloud-development/gitpod-1.3.png)

Select your repository and you should see a page like this:

![](/img/cloud-development/gitpod-1.4.png)

Notice that the "Context URL" points to your Morea repo. Now click "New Workspace". Gitpod will chug away for a while and then your browser will display a Visual Studio Code UI that should look similar to this:

![](/img/cloud-development/gitpod-1.5.png)

If you're like me, you will want to click the close "X" for the "Welcome" and "Gitpod release notes" windows to get rid of them:

![](/img/cloud-development/gitpod-1.6.png)

## Build and display the site

To build and display the site, type "bundle exec jekyll serve" into the terminal window:

![](/img/cloud-development/gitpod-1.7.png)

This will run jekyll and result in Gitpod asking permission to make a service public on port 4000:

![](/img/cloud-development/gitpod-1.8.png)

Click "Make public" to proceed. Now you can click on the link to display the page:

![](/img/cloud-development/gitpod-1.9.png)

And the home page of your site will be displayed in a new browser tab:

![](/img/cloud-development/gitpod-1.10.png)





We're installed and ready to go!  Please click on the Next button below for instructions on how to continue with development. 
