---
title: Development tips
---

The previous section documents the "mechanics" of Change-HI workshop development: how to get the files, make a simple update, and create a pull request so that administrators can merge your changes into the official site. 

The goal of this page is to provide guidance on how to actually create workshop curriculum. 

## Tip 1: Skim the Morea reference guide

It's important that you have a basic understanding of how Morea works.  We recommend that you skim through the "Reference" section of the Instructor Guide (see the sidebar at left for links). Skimming through the Reference section will give you a sense for where to go for help if you need it later during development of your workshop.

## Tip 2: Copy existing Reading, Outcome, Experience, and Assessment files

Rather than try to write a new Reading, Outcome, Experience, or Assessment from scratch, it's far easier to make a copy of a pre-existing file and then edit it. 

So, look for similar files in other modules, and copy them over.

Note: You will always need to change the morea_id field!  Otherwise Morea will terminate with an error that a duplicate ID has been found.


## Tip 3: Make your module images square

In your module definition file, you will see a `module_icon_url` property in the front matter. For example:

```yaml
morea_icon_url: /morea/introduction/introduction.jpg
```

To ensure that those images look good, please make sure to crop them into squares (I.e. a 1:1 aspect ratio) and ensure that they are at least 200 pixels wide. 

## Tip 4: Consider reusing Outcomes and/or Readings

When developing your workshop, it is worth taking a look at the already existing Outcomes and Readings. You can see the full list by navigating to the [Change-HI Outcomes page](https://change-hi.github.io/outcomes/) and the [Change-HI Readings page](https://change-hi.github.io/readings/) in the navbar. For example:

![](/img/change-hi/change-hi-readings-page.png)

While you almost never want to reuse Experiences or Assessments, since they will be very specific to your workshop, you might often want to reuse Readings (i.e. background information) or Outcomes (since a high-level Outcome could apply to multiple workshops). 

## Tip 5: Use Change-HI conventions for admonitions

Morea provides [admonitions](../instructors/admonitions) (a.k.a. callouts). The [HPC workshop tutorial section on Deep Learning CPU vs GPU](https://change-hi.github.io/morea/hpc/experience-hpc-deep-learning.html) provides a nice example of the various forms of admonitions and how they can be used in a workshop tutorial. Let's look at a few examples:

**Success for overview**

To begin, the section starts with the table of contents (enabled by setting `morea_enable_toc: true` in the front matter), followed by the "success" admonition to provide overview information:

![](/img/change-hi/admonition-overview.png)

**Info for sidebars**

Later on, the tutorial uses the "info" admonition to provide a "sidebar" of information:

![](/img/change-hi/admonition-info.png)

**Secondary for activities**

To distinguish a "hands on activity" from reading material, the tutorial uses the "secondary" admonition:

![](/img/change-hi/admonition-secondary.png)

Note the use of the HTML "details" element to provide a toggle-able "Solution" in the above admonition!

**Warning for warnings**

Finally, to provide a "warning", the tutorial uses the "warning" admonition:

![](/img/change-hi/admonition-warning.png)
