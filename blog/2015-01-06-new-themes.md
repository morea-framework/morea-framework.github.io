---
title:  "Release 1.1.0: New themes for the new year"
---

The Morea team is happy to inform you of several updates to the user interface:

  * The themes have been updated to use the latest release of [Bootstrap](http://getbootstrap.com/) (3.3.1).

  * Morea themes are based on [Bootswatch](http://bootswatch.com/).  We have incorporated two new Bootswatch themes into Morea: paper and sandstone.

  * In response to user request, we have created four new themes based upon cerulean: cerulean\_green, cerulean\_brown, cerulean\_purple, and cerulean\_red.  If you like cerulean, but are tired of blue, try one of these!

  * To save space in the NavBar for additional menu items, we have removed the "Home" link and made the site title in the NavBar into a link.

  * Also in response to user request, we have made the icons in the module page into links to their corresponding module. Apparently everyone wants to click on them, so we might as well let them.

To use these features, set the basic-template as an upstream repository and merge into your master branch. You can do this using the morea-merge-upstream script.

Note that you may well get merge conflicts, but these should be easy to address.

If the merge conflict involves changes to the "Qux" module that you've deleted in your site, do the following to re-delete the directory:

    % cd master/src/morea
    % git rm -r qux

If the merge conflict involves changes to your master/src/css/style.css file, or master/src/_layouts/default.html file, then simply view those files in your editor, edit to resolve the conflict and remove the conflict indicator lines, and save your changes.

Happy course design in 2015 and don't hesitate to let us know if you encounter problems with these enhancements.


