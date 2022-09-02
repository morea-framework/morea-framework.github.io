---
title: Development tips
---

The previous section documents the "mechanics" of CI-TRACS workshop development: how to get the files, make a simple update, and create a pull request so that administrators can merge your changes into the official site. 

The goal of this page is to provide guidance on how to actually create workshop curriculum. 

## Tip 1: Skim the Morea reference guide

It's important that you have a basic understanding of how Morea works.  We recommend that you skim through the "Reference" section of the Instructor Guide (see the sidebar at left for links). Skimming through the Reference section will give you a sense for where to go for help if you need it later during development of your workshop.

## Tip 2: Bootstrap a new workshop

If you find that there is an existing workshop that has a similar structure to the one you are creating, then it's reasonable to bootstrap your new one by making a copy of the existing one and then editing it until the content reflects your workshop curriculum.

Here's the general approach:

First, look through the `morea` directory. Many of the subdirectories in there hold a module representing a workshop, such as `hpc`, and `smart-data-collection`. Other subdirectories hold a different kind of module (i.e. `introduction`). So, pick a module that seems similar to what you want to create. 

Let's say that you find that the HPC module is pretty close. Here's what that module looks like:

![](/img/ci-tracs/hpc-module-directory.png)

So, the second step is to copy that directory, and paste it back into the `morea` directory, calling it with a name that reflects the new workshop contents.  Let's say that your new workshop is basically a "Part 2" for HPC, so we'll call the new directory `hpc-part-2`.  After copying and pasting, the `morea` subdirectory looks like this:

![](/img/ci-tracs/hpc-part-2-module-directory.png)

If we try to run the system locally at this point using `bundle jekyll exec serve`, we'll get errors:

```shell
$ bundle exec jekyll serve                                                       13:35:14
Configuration file: /Users/philipjohnson/github/philipmjohnson/ci-tracs.github.io/_config.yml
Configuration file: /Users/philipjohnson/github/philipmjohnson/ci-tracs.github.io/_config.yml
            Source: /Users/philipjohnson/github/philipmjohnson/ci-tracs.github.io
       Destination: /Users/philipjohnson/github/philipmjohnson/ci-tracs.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
Error: assessment-hpc-workshop.md has duplicate id: assessment-hpc-workshop
Error: assessment-hpc.md has duplicate id: assessment-hpc
Error: experience-hpc-connecting.md has duplicate id: experience-hpc-connecting
Error: experience-hpc-deep-learning.md has duplicate id: experience-hpc-deep-learning
Error: experience-hpc-file-systems.md has duplicate id: experience-hpc-file-systems
Error: experience-hpc-intro.md has duplicate id: experience-hpc-intro
Error: module-hpc.md has duplicate id: hpc
Error: outcome-hpc.md has duplicate id: outcome-hpc
Error: reading-hpc-preparation.md has duplicate id: reading-hpc-preparation
Errors found. Exiting
```

Because we made a copy of the hpc directory called hpc-part-2, the Morea system discovers that there exist files in the `morea` subdirectory tree that have the same `morea_id`.  This is illegal in Morea: all Morea Outcomes, Readings, Experiences, and Assessments must have a unique ID. 

So, the next thing you have to do is make sure that there are no files with duplicate IDs in the hpc-part-2 directory. A quick way to do that is to:

1. Delete all the Outcome, Reading, Experience, and Assessment files from the new hpc-part-2 directory, 
2. Rename the module_id in the hpc-part-2/module_hpc.md file from `hpc` to `hpc-part-2`, 
3. Change the title string in the module_hpc.md file to "High Performance Computing, Part 2".  

Once we do that, the system runs locally and the hpc-part-2 module displays as follows:

![](/img/ci-tracs/hpc-part-2-module-page.png)

The problem now is the contents of this workshop, as defined in hpc-part-2/module_hpc.md, is exactly the same as the content in the original HPC module! That's because this module file specifies the module_IDs associated with files in the hpc directory.

So, now that you have something running, you can start creating new Outcome, Reading, Experience, and Assessment files in your new directory, giving them unique IDs, and then updating the module definition file to refer to them. Before you know it, your new module will be ready for integration into the official site!

## Tip 3: Make your module images square

In your module definition file, you will see a `module_icon_url` property in the front matter. For example:

```yaml
morea_icon_url: /morea/introduction/introduction.jpg
```

To ensure that those images look good, please make sure to crop them into squares (I.e. a 1:1 aspect ratio) and ensure that they are at least 200 pixels wide. 

## Tip 4: Consider reusing Outcomes and/or Readings

When developing your workshop, it is worth taking a look at the already existing Outcomes and Readings. You can see the full list by navigating to the [CI-TRACS Outcomes page](https://ci-tracs.github.io/outcomes/) and the [CI-TRACS Readings page](https://ci-tracs.github.io/readings/) in the navbar. For example:

![](/img/ci-tracs/ci-tracs-readings-page.png)

While you almost never want to reuse Experiences or Assessments, since they will be very specific to your workshop, you might often want to reuse Readings (i.e. background information) or Outcomes (since a high-level Outcome could apply to multiple workshops). 

## Tip 5: Use CI-TRACS conventions for admonitions

Morea provides [admonitions](../instructors/admonitions) (a.k.a. callouts). The [HPC workshop tutorial section on Deep Learning CPU vs GPU](https://ci-tracs.github.io/morea/hpc/experience-hpc-deep-learning.html) provides a nice example of the various forms of admonitions and how they can be used in a workshop tutorial. Let's look at a few examples:

**Success for overview**

To begin, the section starts with the table of contents (enabled by setting `morea_enable_toc: true` in the front matter), followed by the "success" admonition to provide overview information:

![](/img/ci-tracs/admonition-overview.png)

**Info for sidebars**

Later on, the tutorial uses the "info" admonition to provide a "sidebar" of information:

![](/img/ci-tracs/admonition-info.png)

**Secondary for activities**

To distinguish a "hands on activity" from reading material, the tutorial uses the "secondary" admonition:

![](/img/ci-tracs/admonition-secondary.png)

Note the use of the HTML "details" element to provide a toggle-able "Solution" in the above admonition!

**Warning for warnings**

Finally, to provide a "warning", the tutorial uses the "warning" admonition:

![](/img/ci-tracs/admonition-warning.png)
