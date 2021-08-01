---
title:  "Morea Version 3.0 release"
---

The Morea team is delighted to announce a new major release of the system.  This release should be almost completely backward compatible with existing Morea data files, though there are extensive changes (and simplifications!) to the way sites are developed and managed.

Here is a summary of the changes from Version 2:

  1. Morea runs on the latest release of Jekyll (Version 4.2.0), as well as the latest releases of Bootstrap (5), Bootstrap 5, FullCalendar (5.8), and ChartJS (3.5).

  2. New Morea sites are built by using the GitHub "template" mechanism to create a copy of https://github.com/morea-framework/morea.  This enables you to make a private repository and initialize it with those files, even though the template directory is public.

  3. Morea sites are automatically built and deployed via GitHub Actions whenever there is a commit to the main branch.

  4. The net impact of 1, 2, and 3 is that you no longer need to maintain multiple branches locally, and you no longer need to run special scripts.   To build and run a Morea site locally, you use the standard Jekyll command `bundle exec jekyll serve`.

  5. The net impact of 1-4 is that Morea development is finally cross-platform including MacOS, Linux, and Windows.

Astute Morea users will also observe that this site has been reimplemented and now uses Docusaurus.  This will make documenation easier to maintain moving forward.

If you are a current user of Morea, please read the initial sections of the Instructor Guide and try building a new site using your old Morea files.  If you run into problems, please create an issue or send an email so we can address it.


