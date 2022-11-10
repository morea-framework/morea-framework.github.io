---
title: Admin Editing
---

This page provides guidance to Change-HI administrators on how to help maintain the Change-HI/EDU site.

## Motivation

The Change-HI project maintains several public-facing sites: the [Hawaii Data Science Institute](https://datascience.hawaii.edu/) site, the [Change-HI EPSCoR](https://hawaii.edu/epscor/change-hi/) site, and the [Change-HI/EDU](https://change-hi.github.io/) site. The first two sites are implemented using WordPress, but Change-HI/EDU is implemented using Morea, and so the process for maintaining the site is quite different. 

To make changes to a WordPress site, an administrator can:

1. Log into the WordPress admin panel associated with the site,
2. Make changes to pages (or creates new pages) using a WYSIWYG editor,
3. Press a "Preview" button to review the changes, and finally 
4. Press a "Publish" button to make the changes "live" on the public site.

To make changes to the Change-HI/EDU site, an administrator can:

1. Log into GitHub, and traverses to the Change-HI/EDU github repository.
2. Edit one or more Markdown files using a browser-based editor.
3. Commit those files after making changes to save them to the repository. 
4. Step (3) automatically kicks off a build of the site. If no mistakes were made during editing, then the changes will be live on the public site within a couple of minutes. If not, then the site stays the way it was before.

At first glance, changing the Change-HI/EDU seems much more humbug. First, the files are in a weird format called "Markdown". Second, it seems like you can't "preview" your work before publishing it. Third, what happens if there are mistakes? How do you even know?

All of these problems can be addressed, but requires a certain amount of tool installation and training (which the Data Fellows are receiving as part of their workshop development).

To simplify things for Change-HI administrators, we will use the following process at present:

1. Drafts of documents to be posted on the Change-HI/EDU site are developed initially as Google Docs and circulated for review. 
2. When ready for publication, Philip will create a new page in the Change-HI/EDU site that contains the document, translated into Markdown format.
3. If minor changes need to be made, then a Change-HI administrator can use the following process to make the edits. 

## Editing an existing Change-HI/EDU document

### Login to GitHub

Sign up for an account on GitHub here: <https://github.com/join>

Once you have signed up, email Philip with your GitHub username so he can give you privileges to edit the Change-HI/EDU files.  GitHub will email you an "invitation" to join the Change-HI GitHub organization which you will need to accept. 

### Find the file of interest

The Change-HI source files are at: <https://github.com/change-hi/change-hi.github.io>:

![](/img/change-hi/change-hi-github-repo.png)

This is a public repo, so anyone can see it, but only GitHub users who have "write" access can actually make changes. 

Make sure you are logged in to GitHub (check the upper right corner) and that Philip has given you "write" permission before proceeding.

The Change-HI source files are in the "morea" subdirectory. Click on the "morea" link at the top level to navigate into it:

![](/img/change-hi/change-hi-github-repo-morea.png)




### Edit the 
