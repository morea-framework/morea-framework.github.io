---
title: Include files
hide_table_of_contents: true
---

Jekyll allows you to create small page fragments that you can include in multiple places on your site using the [include file syntax](https://jekyllrb.com/docs/includes/). Include files can be passed parameters, which enables a simple kind of macro language that you can use to simplify your Morea content.

The only tricky thing to note about include files is that they are stored outside the `morea` directory in a top-level directory called `_includes`. This means that if you create your own include files, you'll need to remember to migrate those files as well as those in the morea directory when you provide content to another Morea repository.
