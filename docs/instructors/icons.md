---
title: Icons
hide_table_of_contents: true
---

## Module icons

The morea template repo provides a subdirectory called `_module-icons` containing over 50 PNG files that have been used in Morea sites as a module icon. You can preview these module icons [here](https://github.com/morea-framework/morea/tree/main/_module-icons).

If you find one that you would like to use as the icon for one of the modules in your site, then copy the icon from the `_module-icons` directory into the directory containing the files for your module, then update the `morea_icon_url` field in the front matter of your module.md file to refer to it. 


## Font Awesome icons

All Morea sites automatically load the [Font Awesome](https://fontawesome.com/) icon set. You can follow their [How To](https://fontawesome.com/docs/web/add-icons/how-to) to learn how to use icons.

Here is a simple example:

```css
<i class="fa-solid fa-user"></i>
```

Learn about how to style icons with [Styling with Font Awesome](https://fontawesome.com/docs/web/style/styling).

You can see an example Morea page containing a Font Awesome icon at: https://morea-framework.github.io/morea/morea/example-introduction/example-icon.html
