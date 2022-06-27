---
title: Updating to a new version
hide_table_of_contents: true
---

Occasionally we will publish a new version of the template repository (https://github.com/morea-framework/morea/).  For example, Bootstrap is updated regularly with new features, and to take advantage of them, we need to produce new versions of our theme files inside the template repository that include the new version of Bootstrap. We will make a News announcement detailing the new version and what features it contains. 

In the event that you would like to take advantage of the new features for an existing site that you have built with an old version of the template, you will need to do an upgrade.  Here are the recommended steps:

1. Download a zip file containing the sources for your site.  To do that, go to your repository, make sure you are viewing the main branch, then click the "Code" button and select "Download ZIP".  This will download a ZIP file containing the source code for your system. You might want to uncompress this file and verify that you have the source files. 

2. Delete your repository.  Now that you have a backup of your sources, click on the "Settings" tab of your repository home page, scroll all the way down to the "Danger Zone", and click on "Delete this repository".

3. Regenerate your site. Follow the [Quick Start](./quick-start) instructions to recreate your repository using the new template.  You will want to get to the point of having the new site run locally.

4. Migrate your files.  The last step is to migrate your files from your backup. In many cases, this is simply a matter of copying over the morea/ directory from your backup copy of your source files.  In other cases, you might have additional includes files or other customizations.  

5. Commit your new version of your site.  This publishes the site and you are ready to take advantage of the new features. 
