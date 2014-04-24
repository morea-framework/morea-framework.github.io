---
layout: userguide
title: User Guide
---

# Basic concepts

To begin, here are the most important principles underlying the framework.

**Morea defines five "entity types": module, outcome, reading, experience, and assessment.**

A _module_ is a container that holds a set of outcomes, readings, experiences, and assessments related
to course content. Modules have a sort order, which allows you to organize modules into a sequence. Most
courses consist of 6 to 30+ modules.  A module can contain zero to many instances of outcomes, readings,
experiences, and assessments. It is possible to define a module without zero outcomes, zero readings, zero experiences,
and zero assessments, though we're not sure of the utility of such a module.

An _outcome_ represents some kind of knowledge or capability that the student should acquire as a result of
the readings and experiences in the associated module.  A module can have multiple outcomes.  Conversely, the same
outcome can be associated with multiple modules. We find that a useful way to organize and express learning outcomes
 is through [Bloom's revised taxonomy](http://www.utar.edu.my/fegt/file/Revised_Blooms_Info.pdf), which classifies
 outcomes into six categories: remembering, understanding, applying, analyzing, evaluating, and creating. The latter outcomes
 (analyzing, evaluating, and creating) are supposed to represent "high-order" cognitive skills.

A _reading_ is an artifact that the student studies: it represents "passive" learning. Readings are typically
chapters in a book, online web pages, and so forth.

In contrast to a reading, an _experience_ represents a more "active" form of learning in which the student solves
problems or performs other activities in order to acquire understanding and capability. Morea distinguishes between
readings and experiences because modules that contain only readings without experiences will tend to have outcomes associated
with lower levels of Bloom's taxonomy, while modules containing a mixture of readings and experiences are more
likely to support outcomes at higher levels of Bloom's taxonomy.

An _assessment_ is an activity that evaluates the success of the student in achieving the educational goals
of the module.  In the best case, the educational goals of the module are adequately expressed by learning outcomes,
in which case each assessment should relate to one or more outcomes.  The graphic
[Applying Bloom's Taxonomy in your Classroom](images/Stobaugh_BloomsTaxonomy.png) provides various examples of how
outcomes and assessments can be linked together.  While Morea can help make linkages between outcomes and
assessments clear, it is common to assess skills not encapsulated by outcomes, or desire outcomes that are not
assessed.

**Morea generates five "views" of the content, each organized according to an entity.**

Morea sites contain a navigation bar at the top of the page with links to pages that organize the content
according to each of the five entities: modules, outcomes, readings, experiences, and assessments.
For example, here is an example of the Readings page:

<img src="images/ics311-readings.png" width="600px" />

And here is an example of the Outcomes page:

<img src="images/ics311-outcomes.png" width="600px" />

You can see that the two pages highlight a single entity type but provide links to other entities for context.

We believe that presenting the content organized according to different entity types makes it easier for
students and educators to understand the conceptual structure of the course.   For educators, it also
provides a useful way to see if the course is structurally coherent. For example, when the learning
objectives are examined together, do they create a coherent set?   For another example, are there assessments for each module,
and if not, is that appropriate?

**Every Morea entity has its own markdown file.**

Every instance of a Morea entity (module, outcome, reading, experience, assessment) is represented by a single markdown file.
There can also be other markdown files and other non-markdown files (such as the logo image file associated with each module).

**All of your course content is located in the src/morea/ directory.**

When you first clone a Morea site, you will find a potentially bewildering number of files and directories. For example:

<img src="images/morea-source.png" width="200px" />

This organization exists because the Morea framework is basically just a Jekyll site with a custom plugin to process the Morea markdown files.

Fortunately, the only files you will typically need to manage are all located in the src/morea directory. Here is
an example of the src/morea directory from the basic-template system:

<img src="images/morea-folder.png" width="200px" />

This folder contains all of the files you will want to manage as part of your course content.

**You can organize the src/morea/ directory any way you like.**

The Morea framework does not care how you organize the files within the src/morea directory.
For example, you can place all of your files at the top level of this directory.
Alternatively, and more typically, you can create subdirectories within the src/morea directory, one
per module, as shown in the previous screenshot.

In addition, Morea does not care how you name files.  In fact, it is
possible to use the same file name in multiple modules (i.e. foo/module.md, bar/module.md, baz/module.md, and
qux/module.md in the screenshot above)

**It is the "front matter" in each Morea entity file that uniquely identifies it.**

Morea does not care about directory structure nor file name, because it uses the _front matter_ in the
markdown file to uniquely identify each Morea entity and determine how they relate to each other.
"Front matter" is a [Jekyll](http://jekyllrb.com/) term for key-value pairs
represented via YAML notation and separated from the rest of the file contents by three dashes. For example,
here is the front matter for a hypothetical module entity:

    ---
    title: "Learn to Foo"
    morea_id: foo
    morea_outcomes:
      - foo-outcome1
      - foo-outcome2
    morea_readings:
      - foo-reading
    morea_experiences:
      - foo-experience
    morea_assessments:
      - foo-assessment
    morea_type: module
    morea_icon_url: /morea/images/foo.png
    morea_labels:
      - required
      - intro
    morea_sort_order: 2
    ---

So, even though each module (foo, bar, baz, qux) in the basic template system contains a file with the name module.md,
the front matter in that file will be different in order to represent the unique structure of the four modules.

Note that while you _can_ use the same name, you _don't have to_.   You could name the file containing the front
matter for the Foo module "module-foo.md".  You could even name it "outcome.md" (although that would be really
confusing.) The point is:  Morea does not utilize file name information.


We will explain the front matter in more detail later in this User Guide.

**Morea makes a "mirror image" of the src/morea directory in the published HTML site.**

Because we want you to provide course content in the src/morea directory, and because course content can include
(for example) image files, Morea creates a kind of "mirror image" of the src/morea directory in the published site
so that your content can include links within itself as well as to external sites.

The basic rule is that markdown files are converted to HTML in the published site, and all other files get copied
over without change. So, for example, here is the src/morea directory (on the left) and the site's published morea directory
(on the right):

<img src="images/mirror-image.png" width="400px" />

As you can see, the markdown files have become HTML, and the sole non-markdown file (logo.png) has been copied over
unchanged.  The directory structure below the morea/ directory is unchanged.

# Related systems

Another way to understand Morea is by contrasting it with other tools used by educators to create course content.

[GitBook](http://www.gitbook.io/), like Morea, creates educational websites using Markdown and Git.  If you want to
write a textbook, GitBook is a better choice.  Morea is preferred when you want to create a course curriculum from
a variety of sources including your own and/or other sources, and when you want to make learning objectives and
assessments explicit.

[Blackboard](http://www.blackboard.com/) is a commercial offering that provides comprehensive support for all
aspects of course management: content management, testing, grading, etc.
Morea provides a small subset of the capabilities of Blackboard, but is free, simpler to use, and facilitates
sharing through its underlying use of Git and GitHub.  Morea is oriented toward "public" materials, since by default
the materials you create can be accessed by anyone.

[Metacademy](http://www.metacademy.org/) is a site for community curated educational content.  Unlike Morea,
Metacademy supports a single version of curriculum material for any given topic.  In contrast, Morea tries to make it
as easy as possible for each educator to have their own, slightly (or radically) different version of curriculum
material for any given topic.  It's much like the difference between centralized version control (i.e. SVN) where there is
always a single "golden" version of a system, and distributed version control (i.e. git) where there can be many "different
but equal" versions of a system.

# Anatomy of a Module

This section overviews the structure of a single module (called "Foo" in the basic-template system).  Here is a
graphic to help illustrates the various components:

 <img src="images/module-anatomy.png" />

The top row illustrates various "source" files, and the bottom row illustrates various "output" HTML pages
produced from these files.

The top right window shows the contents of the src/morea/foo directory. There are various files in there that define
the content associated with the Foo module.  Interestingly, there are a couple of files in this directory that are
not associated with the Foo module.  The presence of non-Foo content in the foo directory illustrates that the directory and file organization
of the morea/ directory is arbitrary.

The second window on the top row shows the content of module.md.  The content of this file is mostly Front Matter,
and provides the definition of the Foo module.  The outcomes, readings, experiences, and assessments associated with
the Foo module are all referenced by unique IDs.

The third and fourth windows on the top row show the content of two files that define a reading and an experience entity.
These entities have unique IDs that are referenced in the definition of the Foo module, and that is the way that Morea
connects them together.

The bottom row shows a variety of pages produced by Morea.  Because a module was defined in the module.md file, it
will show up in the modules/ page.  Clicking on the link in the modules page takes you to a page which details the
contents of that module. As you can see, the content associated with each of the unique IDs referenced in the module.md file shows up in this
page.  The other pages illustrate the content (such as a Reading) will not only appear in the module (or modules) with
which it is associated, but also in the Readings page.

In summary, Morea markdown files create a set of entities, each of which are identified by a unique ID.  The
contents of a module (outcomes, readings, experiences, and assessments) are specified by providing unique IDs. The
relationship between modules and its content entities is many-to-many. First, a module can refer to multiple outcomes,
readings, experiences, and assessments. Conversely, any given outcome, reading, experiences, and assessment can
appear in multiple modules. 



# Morea file documentation

Here is the Morea file documentation.

### Module

This is the module documentation.

### Outcome

This is the outcome documentation.

### Reading

Readings documentation.

### Experience

Experiences.

### Assessment

Assessment.

# Workflow

Some typical issues in workflow.

### An example editing session.

Example editing.

### Upstream merging.

Upstream merging.





