---
title: Morea's pedagogical pattern
---

Morea implements a simple [pedagogical pattern](http://en.wikipedia.org/wiki/Pedagogical_patterns) along with a combination of technologies (git, GitHub, Jekyll) that facilitiate development, maintenance, and collaboration. Here are some of the key features of the pattern.

## Morea defines five "entity types"

A **module** is a container that holds a set of outcomes, readings, experiences, and assessments related to course content. Modules have a sort order, which allows you to organize modules into a sequence. Most courses consist of 6 to 30+ modules.  A module can contain zero to many instances of outcomes, readings, experiences, and assessments. It is possible to define a module without zero outcomes, zero readings, zero experiences, and zero assessments, though we're not sure of the utility of such a module.

An **outcome** represents some kind of knowledge or capability that the student should acquire as a result of the readings and experiences in the associated module.  A module can have multiple outcomes.  Conversely, the same outcome can be associated with multiple modules. We find that a useful way to organize and express learning outcomes is through [Bloom's revised taxonomy](https://www.celt.iastate.edu/teaching/effective-teaching-practices/revised-blooms-taxonomy/), which classifies outcomes into six categories: remembering, understanding, applying, analyzing, evaluating, and creating. The latter outcomes (analyzing, evaluating, and creating) are supposed to represent "high-order" cognitive skills.

A **reading** is an artifact that the student studies: it represents "passive" learning. Readings are typically chapters in a book, online web pages, and so forth.

In contrast to a reading, an **experience** represents a more "active" form of learning in which the student solves problems or performs other activities in order to acquire understanding and capability. Morea distinguishes between readings and experiences because modules that contain only readings without experiences will tend to have outcomes associated with lower levels of Bloom's taxonomy, while modules containing a mixture of readings and experiences are more likely to support outcomes at higher levels of Bloom's taxonomy.

An **assessment** is an activity that evaluates the success of the student in achieving the educational goals of the module.  In the best case, the educational goals of the module are adequately expressed by learning outcomes, in which case each assessment should relate to one or more outcomes.  The graphic [Applying Bloom's Taxonomy in your Classroom](/img/Stobaugh_BloomsTaxonomy.png) provides various examples of how outcomes and assessments can be linked together.  While Morea can help make linkages between outcomes and assessments clear, it is common to assess skills not encapsulated by outcomes, or desire outcomes that are not assessed.

## Morea generates five "views" of the content

Morea sites contain a navigation bar at the top of the page with links to pages that organize the content according to each of the five entities: modules, outcomes, readings, experiences, and assessments. For example, here is an example of the Readings page:

![](/img/ics311-readings.png)

And here is an example of the Outcomes page:

![](/img/ics311-outcomes.png)

You can see that the two pages highlight a single entity type but provide links to other entities for context.

We believe that presenting the content organized according to different entity types makes it easier for students and educators to understand the conceptual structure of the course.   For educators, it also provides a useful way to see if the course is structurally coherent. For example, when the learning objectives are examined together, do they create a coherent set?   For another example, are there assessments for each module, and if not, is that appropriate?

## Every Morea entity has its own markdown file

Every instance of a Morea entity (module, outcome, reading, experience, assessment) is represented by a single markdown file. There can also be other markdown files and other non-markdown files (such as the logo image file associated with each module).

## Course content is in the src/morea/ directory

When you first clone a Morea site, you will find a potentially bewildering number of files and directories. For example:

![](/img/morea-source.png)

This organization exists because the Morea framework is basically just a Jekyll site with a custom plugin to process the Morea markdown files.

Fortunately, the only files you will typically need to manage are all located in the src/morea directory. Here is what the src/morea directory looks like:

![](/img/morea-folder.png)

This folder contains (almost) all of the files you will want to manage as part of your course content.

:::tip

There are two other locations you might need to edit outside the src/morea directory:

  1. The `_config.yml` file.  You already edited this file in your browser as part of setting up your Morea site. In some cases, you will further customize your site by editing this file.

  2. As you become experienced with Morea development, you often find it useful to create reusable snippets of contents that you can include on multiple pages. To do this, you will add files to the `_includes` directory which is outside the `src/morea` directory.
:::

## Organize the src/morea/ directory any way you like

The Morea framework does not care how you organize the files within the src/morea directory. For example, you can place all of your files at the top level of this directory. Alternatively, and more typically, you can create subdirectories within the src/morea directory, one per module, as shown in the previous screenshot.
