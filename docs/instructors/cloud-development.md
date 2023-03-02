---
title: Cloud development
---

If you've completed the Quick Start and Cloud Installation sections, you now have your own Morea website in a GitHub repository, and you've set up GitPod to access your code, build the site, and display it in a browser. 

## Customize your content

Now let's make some simple changes to your site.

### Modify theme & navbar

To begin, let's change the theme of the site from spacelab to cerulean, and get rid of the "Prerequisites" navbar menu item (because your course will not include any prerequisite modules).  Edit config.yml by changing morea_theme: to cerulean, and comment out the Prerequisites entry in morea_navbar_items:

![](/img/cloud-development/gitpod-2.0.png)

Now click into your terminal window, press `control-c` to terminate the Jekyll process, `control-p` to retrieve the last command (i.e. `bundle exec jekyll serve`), and `return` to restart. Refresh the browser window in the other tab and it now should look like this:

![](/img/cloud-development/gitpod-2.1.png)

The Prerequisites menu item is gone, and the color theme is now blue.

### Unpublish modules

The example modules provide useful guidance on the syntax of Morea, but you don't want them to be part of your actual site. The easiest way to do that is to unpublish them. To unpublish the Introduction module, go into morea/modules/example-introduction/module-introduction.md, and change the published: field to `false`:

![](/img/cloud-development/gitpod-2.2.png)

Jekyll may report some errors in the terminal window after you save this change. You can ignore them. Just type `control-c` followed by `bundle exec jekyll serve` as before to restart Jekyll. The first thing you'll notice after refreshing your browser window is that the Introduction module no longer appears on the Modules page:

![](/img/cloud-development/gitpod-2.3.png)

More significantly, the outcomes, readings, experiences, and assessments associated with that module have also disappeared.

Now go ahead and unpublish the remaining three example modules in the same fashion. Restart Jekyll, and now there's no modules at all:

![](/img/cloud-development/gitpod-2.4.png)

### Create a new  module

Let's start creating our own course content. Do the following:

1. Make a copy of the example-introduction directory and call it introduction.
2. Once you've made the copy, delete the example-introduction directory.
3. In morea/introduction/module-introduction.md, edit the published: field from false to true.
4. Edit the title: field to your course number.
5. Edit the morea_id: field from example-introduction to introduction.
6. Edit the morea_icon_url: field from /example-introduction/ to /introduction/.
7. In module-introduction.md, delete all of the morea_readings: except for reading-syllabus. (You can delete the files as well if you like.)
8. In module-introduction.md, delete all of the morea_experiences: except for experience-introduce-yourself. (You can delete the files as well if you like.) 
9. In module-introduction.md, edit the text following the front matter to refer to your course name.

When you're done, module-introduction.md might look similar to this:

![](/img/cloud-development/gitpod-2.5.png)

Restart Jekyll, and the modules page might look like this:

![](/img/cloud-development/gitpod-2.6.png)

And the readings page might look like this:

![](/img/cloud-development/gitpod-2.7.png)

Whoops! The reading still refers to ICS 199!  Go into the reading-syllabus.md file and edit the title: field (as well as any other content you want).  Now restart Jekyll, and the readings page might look like this:

![](/img/cloud-development/gitpod-2.8.png)

## Publish your changes

Of course, there's lots more that needs to be done to this site, but let's now see how to publish these local modifications.  Click on the "Source Control" icon on the left side bar (it will have a badge indicating the number of changed files). Your browser window will now look something like this:

![](/img/cloud-development/gitpod-2.9.png)

It shows all of the files which have been changed since the last commit. In the above image, you can see that some existing files have been modified (indicated by an "M"), some files have been deleted (indicated by a "D"), and some files are new (indicating by a "U", which indicates they are currently "untracked" by GitHub). 

We want all the files in the repository to be "tracked" by GitHub. The easiest way to do that is to click on the "..." icon at the top of the Source Control pane, then select the "Changes" menu item, which will reveal a submenu including the "Stage All Changes" selection. 

![](/img/cloud-development/gitpod-2.10.png)

Click "Stage All Changes". This will result in all of the changes being "tracked" by git. In this case, git now understands that several of the files have been renamed (as indicated by an "R"):

![](/img/cloud-development/gitpod-2.11.png)

Now you're ready to commit your changes to your local repository, and (if you like) push the changes to your copy of the repository at GitHub. 

To do that, type in a message indicating the nature of the changes (for example, "Fix introduction module"), then pull down the "Commit" menu and select (for example) "Commit and push":

![](/img/cloud-development/gitpod-2.12.png)

After it's finished, the Source Control panel's "Commit" button is grayed out, indicating that there all changes have been committed and there's no changes to commit:

![](/img/cloud-development/gitpod-2.13.png)


Morea is configured so that every time you push changes to GitHub, a GitHub Action is triggered to rebuild the site. In your browser, go to your repository on GitHub and click on "Actions". You should see something similar to this:

![](/img/cloud-development/gitpod-2.14.png)

This page indicates that the commit "Fix introduction module" triggered a build, which took 1 minute and 1 second. It successfully completed (as indicated by the green checkmark), which then triggered a "pages build and deployment" action, which also completed successfully.

Let's confirm that our local changes are published by retrieving the URL to our site:

![](/img/cloud-development/gitpod-2.15.png)

## Summary

This might seem complicated the very first time you do it, but with a little bit of practice, you'll find that content development with Morea is relatively efficient.

To review, there are a couple of one-time setup actions following the "Quick Start" instructions:

1. Login to GitPod.io, and create a workspace for your repository.
2. Check permissions.

Once that's done, develop your site by an iterative process of:

1. Type `bundle exec jekyll serve` to build your site and display it in a browser window.
2. Edit source files and directories to change your course content.
3. Type `control-c` followed by `bundle exec jekyll serve` to rebuild and redisplay your site.

Finally, once you're ready to publish your changes, go to the Source Control panel:

1. Stage All Changes to make ensure all new files are tracked by GitHub.
2. Commit your changes to your local repository and push them to the GitHub copy of your repository.
3. Monitor the GitHub actions to build and deploy your site, then check to see that your changes are public (usually takes about one minute).

## Continuing on

There are other changes you will need to make to ready your site for publication: configuring the [Schedule Page](schedule-page.md), the [Nav Bar](navbar-configuration.md), and so forth. The Reference Guide contains pages on these and other important topics. It is useful to at least skim all of the pages in the Reference Guide so you are aware of the different features of Morea when developing your site.

Now that you understand the mechanics of Morea site development, let's take a step back and provide some background concepts, starting with a comparison to similar systems. 

To get there, please skip over the next section on Local Development and start reading the first section of the Reference Guide.
