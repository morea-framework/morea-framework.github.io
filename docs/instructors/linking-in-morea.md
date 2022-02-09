---
title: Linking within Morea
---

You may wish to reference one Morea page from another.  For example, you might want to link to one Readings page from another Readings page, or to an Experience from an Assessment.

Linking in Morea is complicated by the fact that Modules, Outcomes, Readings, Experiences, and Assessments are implemented in different ways. Modules, Readings, Experiences, and Assessments are implemented as standalone pages, while Outcomes are implemented as page "fragments" that are integrated into other pages.

A second complication is that some files (readings, experiences) are located within a morea/ subdirectory, while others (modules, outcomes, and assessments) are not.

A third complication is that it is easiest to always use *relative* links in Morea when linking inside the site. In other words, internal links should never start with a `/`. (If you start your link with a `/`, then it work correctly when run locally but not work correctly when published.)

So. The following table documents the structure of links to each of the five Morea entity types if you are at the top level of the Morea site (for example, the home.md file):

| Entity type | Link syntax                                                   |
| ------------|---------------------------------------------------------------|
| Module | `modules/<module ID>`                                         |
| Outcome | `outcomes/<outcome ID>`                                       |
| Reading | `morea/<path-to-reading-file>/<reading file name>.html`       |
| Experience | `morea/<path-to-experience-file>/<experience file name>.html` |
| Assessment | `assessments/<assessment ID>`                                 |

If you are creating a link anywhere else (say, inside a Reading file), then you should use standard relative link syntax. For example, if you want to link to another reading in the same module, then it would look like this:

```
[Another Reading](another-reading.html)
```

If you want to link to another reading in another module, it might look like this:

```
[Another Reading in another module](../another-module/another-reading.html)
```

Of course, you can always use absolute links to link to a page at another site:

```
[Another Page at another site](https://foo.com/another-reading.html)
```
