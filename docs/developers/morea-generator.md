---
title: MoreaGenerator plugin
---

The Morea plugin is a Jekyll plugin written in Ruby and located in the `_plugins` directory.

The plugin code is pretty straightforward, though not well-written.  (Part of the attraction of developing the Morea Framework for me was the chance to try Ruby, so MoreaGenerator is my first and (at the time of writing) only Ruby program I have ever written.) I would gratefully accept pull requests that improve the structure and use of Ruby language idioms.

The plugin works as follows:

  1. The `generate()` method reads in all of the files in the `morea/` directory.  All files that end in the extension `.md` are assumed to be "real" Morea files, in that they should have morea IDs and so forth. These files are processed in the `processMoreaFile()` method.  Other files not ending in `.md` are just handed off to Jekyll for standard processing through the `processNonMoreaFile()` method.

  2. The `processMoreaFile()` method creates a new `MoreaPage` instance corresponding to each file. A `MoreaPage` is just a regular Jekyll `Page` with some additional state, such as the related outcomes, referencing assessments, referencing modules, etc.

  3. The `processMoreaFile()` method also figures out the type of the instance (i.e. Module, Outcome, Reading, Experience, or Assessment) and updates site variables that hold all of the defined Morea instances of each type.  In the case of Modules, there is a special instance called `ModulePage` that is created.

  4. There is data validation done in both `processMoreaFile()` (where each page is checked for required YAML front matter, such as a morea_id field) and in the `generate()` method (after all of the pages are read in, we check to make sure that a reference to a morea_id has an associated instance and so forth.

  5. If we have read in all of the files and didn't detect any data validation errors, then the plugin ends normally after printing out some summary statistics.  If any fatal data validation errors occur, then the plugin prints out a message indicating the problem and calls `exit` to terminate Jekyll immediately.   Though experience, I've found it's more user friendly to "fail fast" and force you to fix errors right away.

