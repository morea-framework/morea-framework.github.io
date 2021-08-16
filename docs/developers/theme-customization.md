---
title: Customizing Morea themes
---

The Morea Framework provides a pre-built set of themes which the user selects in their `_config.yml` file.

These themes are based on Bootswatch 5.  We maintain a fork of Bootswatch in [morea-framework/bootswatch](https://github.com/morea-framework/bootswatch).

We have customized only a subset of the Bootswatch themes for use in Morea. To see the Bootswatch themes that are currently available, see the [morea/css/themes](https://github.com/morea-framework/morea/tree/main/css/themes).

Developing a custom theme involves the following steps:

First, download both the morea repo and the bootswatch repo into sibling directories.

Second, follow the [Bootswatch instructions for theme customization](https://bootswatch.com/help/#customization) to set up your environment.

Bring, bring up a local version of the morea template (using `bundle exec jekyll serve`). Make sure to edit the `_config.yml` file to set the theme to the theme you are working on. You will use this running instance to preview your changes.

Fourth, in the morea/bootswatch repo, modify the `_variables.scss` and/or `_bootswatch.scss` files for the theme you are working on.

Fifth, execute the following command to build your theme and copy it (as well as all other defined themes) to the morea repo:

```
grunt swatch:spacelab && ./copy-themes.sh
```

You will replace "spacelab" by whatever theme you are actually working on.

When the theme is just exactly perfect, commit and push both the morea and bootswatch repos to GitHub to publish your changes.

Please provide an informative commit message so that others know what you've done.


