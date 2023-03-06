---
title: Module implementation
---

Now that you have designed your module, let's get to the fun part: implementation!

:::info Cloud vs. Local
In this section, we will illustrate the activities using cloud-based development (Gitpod), but there are very few differences for local development (and we'll point them out as we go).
:::

## Prepare your workspace

I assume that you've already gone through the local or cloud-based "installation" and "development" sections, so you have a running Morea template site. To start, make sure that you can build and view the site without error. This means you can run `bundle exec jekyll serve` and (1) no error messages result, and (2) you can display the site successfully at the URL listed in the "Server address" field. For example:

![](/img/module-design/module-design-1.png)

Notice that there are no errors following the invocation of `bundle exec jekyll serve`. 

Clicking on the Server address link (`http://127.0.0.1:4000/ics888s23`) brings up the home page for my site in a new browser tab:

![](/img/module-design/module-design-2.png)

Obviously, the home page needs to be rewritten for this course. You can change the contents of this page by editing the `morea/home.md` file.  But let's focus on the implementation of our new module.

:::tip **Modifications for local development**
If you are doing local development, this step is basically identical: bring up the repository contents in your editor, run `bundle exec jekyll serve` in a terminal window, and display the site in a browser. 
:::

## Make a copy of template-module

The `morea` directory contains a subdirectory called `morea-template` that contains a skeleton set of files for defining new modules. Let's use that as the basis for our new module. 

First, click your mouse on the "template-module" directory label in the Project window to select it, right click to bring up a menu of operations, and select "Copy".

Second, click your mouse on the "morea" directory label in the Project window to select it, right click to bring up a menu of operations, and select "Paste".

In the case of VS Code, a new directory will be created in the "morea" directory called "template-module copy".  

Third, click your mouse on the "template-module copy" directory label in the Project window to select it, right click to bring up a menu of operations, and select "Rename". Rename the directory to "dart". 

If you click on the "dart" directory label to reveal its contents, you'll see something like this:

![](/img/module-design/module-design-3.png)


As you can see, the dart directory contains five files corresponding to each of the Morea entity types: "module-CHANGE-ME.md", "outcome-CHANGE-ME.md", "reading-CHANGE-ME.md", "experience-CHANGE-ME.md", and "assessment-CHANGE-ME.md", 

As you can see, the dart directory contains the text "CHANGE ME" at various places to help you understand what you need to edit to create a Morea module.

## Rename and/or create a file for each module entity

The previous section presented a Dart module design document which specifies that this module should have 1 outcome, 2 readings, and 2 experiences.  So, let's create another reading and outcome file, and rename all of the files to better indicate their contents.  The dart directory now looks like this:

![](/img/module-design/module-design-4.png)


:::info **Why no Morea errors?**
The astute Morea developer might be wondering why we are able to create copies of Morea directories and files and not get any "duplicate ID" errors. 

The answer is that all of files in the template-module directory have their `published:` field set to `false`. Because of this, the Morea "compiler" never processes the file and so their IDs are never defined.

As you will see, we will incrementally "publish" the files in the dart directory by setting their `published:` field to `true`, but only after their contents have been edited and ready for publication.
:::

## Define the Dart module

Let's now edit the contents of the `module-dart.md` file. It currently looks like this:

```dart
---
title: "CHANGE ME"
published: false
morea_coming_soon: false
morea_id: module-CHANGE-ME
morea_prerequisites:
morea_outcomes:
  # - outcome-CHANGE-ME
morea_readings:
  # - reading-CHANGE-ME
morea_experiences:
  # - experience-CHANGE-ME
morea_assessments:
  # - assessment-CHANGE-ME
morea_type: module
morea_icon_url: /morea/CHANGE-ME/CHANGE-ME.png
morea_start_date: "2021-07-12"
morea_end_date: "2021-07-16T23:00"
morea_labels:
morea_sort_order: 21
---

CHANGE ME
```

As you can see, there are several occurrences of "CHANGE ME". Let's start by doing just the minimum to get the module into a publishable form.

* Change `title:` to "Introduction to Dart"
* Change `published:` to "true"
* Change `morea_id:` to "module-dart".
* Change `morea_icon_url:` to point to a Dart icon. I decided to download logo_dart_1080px_clr.png from the [Dart Logomark Assets Folder](https://drive.google.com/drive/folders/1DxMhhBNFraUR3sRVRL5jATEZTkPz6d_s), and put it in the dart module folder. I renamed it to dart.png. 
* Change the body of the file to a one sentence overview of the module. I chose "Provides an overview of elementary Dart programming constructs and tools."

When you've finished with this, there will be a new file called dart.png in the folder, and the module-dart.md file will be updated. For example:

![](/img/module-design/module-design-5.png)


Now, in the Terminal window, type `control-c` , `control-p`, `return` to restart Jekyll, and go to the modules page. You should now see the Dart module:

![](/img/module-design/module-design-6.png)

Clicking into the actual module is currently not very exciting:

![](/img/module-design/module-design-7.png)

Let's fix that next.

## Define outcomes

## Define readings

## Define experiences

## Define schedule

## Commit, push, and publish 
