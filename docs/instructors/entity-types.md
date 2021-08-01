---
title: Morea entity types
---

This section documents the structure and behavior of the five Morea entity types.

## Module

Modules are represented by a markdown file where the Front Matter defines the structure of the module
and the body of the file (typically a sentence or two) summarizes the module contents.

Here's an example Module markdown file:

```
---
title: "Learn to Foo"
published: true
morea_id: foo
morea_outcomes:
  - outcome1
morea_readings:
  - reading1
morea_experiences:
  - experience1
morea_assessments:
  - assessment1
morea_type: module
morea_icon_url: /morea/foo/logo.png
morea_labels:
   - required
   - intro
morea_sort_order: 1
morea_start_date: "2015-06-15"
morea_end_date: "2015-06-22"
---
    Provides everything you need to know to learn to Foo.
```

Here's the documentation for those fields:

| Keyword | Required? | Value |
| ------- | --------- | ----- |
| morea_type | required | module |
| morea_id | required | A symbol (letters, numbers, hyphens, underscores) identifying this Morea entity. Morea IDs must be unique.  The Morea compiler will terminate with an error if it encounters two markdown files containing the same Morea ID. |
| title | required | A string indicating the title of the module. The module title appears in all of the top-level pages whereever the module is referenced. |
| published | optional | If true, the module will appear in the output. If false, the module will not appear. Default: true |
| morea_coming_soon | optional | If true, the module name will appear in the Modules page with a "Coming soon" button that does not link anywhere. Any outcomes, readings, experiences, and assessments defined for the module will not appear in the associated top-level pages. However, the module page can still be retrieved by entering its URL manually.  This parameter is useful during early course deployment where you want to indicate to students the set of topics in the course and their sequence but have not yet finished the internal structure of certain modules.  Default: false |
| morea_prerequisites | optional | If present, a list of Morea IDs indicating the Prerequisites associated with this module. |
| morea_outcomes | optional | If present, a list of Morea IDs indicating the Outcomes associated with this module. |
| morea_readings | optional | If present, a list of Morea IDs indicating the Readings associated with this module. |
| morea_experiences | optional | If present, a list of Morea IDs indicating the Experiences associated with this module. |
| morea_assessments | optional |  If present, a list of Morea IDs indicating the Assessments associated with this module. |
| morea_icon_url | optional | If present, the URL of the icon appearing with this module in the modules/ page.  For best effect, the icon image should be square. |
| morea_summary | optional | If present, a short string that will appear in the tile representing the module in the Modules page. If absent, then the module body text (see below) will be used in the tile.
| morea_labels | optional | If present, a list of strings that appear as badges on the page.
| morea_sort_order | optional | If present, an integer used to sort the set of published modules for presentation from low to high. Defaults to zero. |
| morea_start_date | optional | If present, a string that indicates the date (and potentially the time) where this module should be placed on the calendar on the Schedule page. Example: "2015-06-25" indicates June 25, 2015, and "2015-06-15T18:30" indicates 6:30pm on June 15, 2015. You can specify a start date without an end date. |
| morea_end_date | optional | If present, a string that indicates (along with the start date) the duration associated with this module on the calendar on the Schedule page. Example: "2015-06-25" indicates June 25, 2015, and "2015-06-15T18:30" indicates 6:30pm on June 15, 2015. If you specify an end date, you should specify the start date as well. |

If morea_summary does not appear in the module's Front Matter, then the module body text will appear both in the tile and at the top of the page describing the module in full.

Alternatively, you can provide a short string as the morea_summary, and significantly more text as the module body text.  In this case, the summary string will appear in the tile and the module body text will appear at the top of the page describing the module.

## Outcome

Each outcome represents knowledge or capability that the educator hopes the students will acquire as a
result of the module or modules in which this outcome appears.

```
    ---
    title: "Remember concepts of asymptotic growth."
    published: true
    morea_id: outcome-growth
    morea_type: outcome
    morea_sort_order: 30
    morea_labels:
      - "Bloom: Remember"
    ---

    Learn the concepts of asymptotic growth and recognize them in context.
```

| Keyword | Required? | Value |
| ------- | --------  | ----- |
| morea_type | required| outcome |
| morea_id | required | A symbol (letters, numbers, hyphens, underscores) identifying this Morea entity. Morea IDs must be unique.  The Morea compiler will terminate with an error if it encounters two markdown files containing the same Morea ID. |
| title | required | A string indicating the title of this outcome. The outcome title appears in all of the top-level pages whereever the outcome is referenced. |
| published | optional | If true, the outcome will appear in the output. If false, the outcome will not appear. Default: true. Note: if an outcome is not referenced by at least one module, it will not appear in the output even if published is true. |
| morea_labels | optional | If present, a list of strings that appear as badges in this outcome's description.
| morea_sort_order | optional | If present, an integer used to sort the set of published outcomes for presentation from low to high in the outcomes/ page.  Defaults to zero. |


In an outcome definition, the text following the Front Matter describes the outcome. This text appears both in all of the Module pages referring to this outcome, as well as on the Outcomes page.

## Reading

Each reading represents a "passive" learning opportunity associated with the module.
There are two types of readings:

  1. Readings in which the material is "inline", as the body text associated with the file.
  2. Readings in which the material is "online", and the Front Matter provides a link to that material.

Whether or not the reading is "inline" or "online" depends upon whether the keyword morea_url appears
in the Front Matter.   Here are examples of each:

```
    ---
    title: "Chapter 3 Notes"
    published: true
    morea_id: reading-notes-3
    morea_summary: "Introduction to asymptotic analysis"
    morea_type: reading
    morea_start_date: "2015-06-15T18:30"
    morea_sort_order: 9
    morea_labels:
      - Notes
    ---

    ## Outline

      1. Intro to Asymptotic Analysis
      2. Big-O
      3. Omega
      4. Theta

    (remaining inline reading material deleted)

```

```
    ---
    title: "CLRS 3 - Growth of functions"
    published: true
    morea_id: reading-cormen-3
    morea_summary: "Asymptotic notation, standard notation, and common functions."
    morea_type: reading
    morea_sort_order: 8
    morea_url: http://mitpress.mit.edu/books/introduction-algorithms
    morea_start_date: "2015-06-15T18:30"
    morea_labels:
     - Textbook
     - 22 pages
    ----
```

| Keyword | Required? | Value |
| ------- | --------  | ----- |
| morea_type | required| reading |
| morea_id | required | A symbol (letters, numbers, hyphens, underscores) identifying this Morea entity. Morea IDs must be unique.  The Morea compiler will terminate with an error if it encounters two markdown files containing the same Morea ID. |
| title | required | A string indicating the title of this outcome. The outcome title appears in all of the top-level pages whereever the outcome is referenced. |
| published | optional | If true, the reading will appear in the output. If false, the reading will not appear. Default: true. Note: if an reading is not referenced by at least one module, it will not appear in the output even if published is true. |
| morea_labels | optional | If present, a list of strings that appear as badges in this reading's description.
| morea_sort_order | optional | If present, an integer used to sort the set of published reading for presentation from low to high in the reading/ page.  Defaults to zero. |
| morea_url | optional | If present, specifies the URL of a reading. To refer to internal pages, the string must start with '/morea/' and continue with the path to the page. To refer to external pages, the string should start with 'http'.  If this parameter is absent, then the body text of this file is the reading. |
| morea_start_date | optional | If present, a string that indicates the date (and potentially the time) where this reading should be placed on the calendar on the Schedule page. Example: "2015-06-25" indicates June 25, 2015, and "2015-06-15T18:30" indicates 6:30pm on June 15, 2015. You can specify a start date without an end date, and this typically indicates the "Due date" for this reading. |

When the morea\_url keyword is provided to specify the URL, then no body text need appear. When the
morea\_url keyword is absent, then the body text should be the intended reading.

## Experience

Each experience represents an active learning opportunity associated with the module.
Experiences appear as the body text of the file.

```
    ---
    title: "Asymptotic concepts"
    published: true
    morea_id: experience-asymptotic-concepts
    morea_type: experience
    morea_summary: "Practice analysis of functions"
    morea_start_date: "2015-06-15T18:30"
    morea_sort_order: 1
    morea_labels:
     - In class
    ---

    ## Asymptotic Concepts

    ---
```

| Keyword | Required? | Value |
| ------- | --------  | ----- |
| morea_type | required| experience |
| morea_id | required | A symbol (letters, numbers, hyphens, underscores) identifying this Morea entity. Morea IDs must be unique.  The Morea compiler will terminate with an error if it encounters two markdown files containing the same Morea ID. |
| title | required | A string indicating the title of this experience. The experience title appears in all of the top-level pages whereever the outcome is referenced. |
| published | optional | If true, the experience will appear in the output. If false, the experience will not appear. Default: true. Note: if an experience is not referenced by at least one module, it will not appear in the output even if published is true. |
| morea_labels | optional | If present, a list of strings that appear as badges in this experience's description.
| morea_sort_order | optional | If present, an integer used to sort the set of published experience for presentation from low to high in the experiences/ page.  Defaults to zero. |
| morea_start_date | optional | If present, a string that indicates the date (and potentially the time) where this experience should be placed on the calendar on the Schedule page. Example: "2015-06-25" indicates June 25, 2015, and "2015-06-15T18:30" indicates 6:30pm on June 15, 2015. You can specify a start date without an end date, and this typically indicates the "Due date" for this experience. |

**Experience body text**

The body text should describe the experience in markdown format.

## Assessment

Each assessment represents the results of some activity intended to determine whether or not the students
have acquired the knowledge and/or capabilities intended by the module's readings and experiences.

Assessments appear as the body text of the file, typically as charts. We recommend that
you publish the assessment results in a manner that preserves student anonymity.

For each assessment, you can provide a list of outcomes that the assessment checked. This list
 of outcomes will be listed with the assessment, and the assessment will appear with the outcome.

Publishing assessment results has a number of benefits:

  * Students get a sense for both how they are performing relative to others during the course.
  * Students understand how the educator is attempting to assess the learning associated with the module.
  * Assessment results become part of the "public record" associated with the module, facilitating future
    modification and improvement of the assessment technique.

To present assessment results as charts, you can include Javascript directly in the markdown file, as illustrated in the following example:

**Sample assessment markdown file contents**

```
    ---
    title: "Ability to recall asymptotic concepts"
    published: true
    morea_id: assessment-asymptotic-concepts
    morea_type: assessment
    morea_sort_order: 1
    morea_outcomes_assessed:
     - outcome-technical-writing
    morea_labels:
     - "Bloom: Remember"
    ---

    Assessed ability to remember asymptotic concepts through an in-class multiple choice exam:

    <link rel="stylesheet" href="http://cdn.oesmith.co.uk/morris-0.4.3.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script src="http://cdn.oesmith.co.uk/morris-0.4.3.min.js"></script>

    <div class="well">
      <div id="assessment" style="height: 250px;"></div>
    </div>

    <script>
    Morris.Bar({
      element: 'assessment',
      hideHover: false,
      data: [
            { y: 'Very satisfactory (%)', num: 15 },
            { y: 'Satisfactory (%)', num: 55 },
            { y: 'Unsatisfactory (%)', num: 25 },
            { y: 'Absent (%)', num: 5 },
            ],
      xkey: 'y',
      ykeys: ['num'],
      resize: true,
      labels: ['Students']
    });
    </script>

```

| Keyword | Required? | Value |
| ------- | --------  | ----- |
| morea_type | required| assessment |
| morea_id | required | A symbol (letters, numbers, hyphens, underscores) identifying this Morea entity. Morea IDs must be unique.  The Morea compiler will terminate with an error if it encounters two markdown files containing the same Morea ID. |
| title | required | A string indicating the title of this outcome. The outcome title appears in all of the top-level pages whereever the outcome is referenced. |
| published | optional | If true, this entity will appear in the output. If false, this entity will not appear. Default: true. |
| morea_labels | optional | If present, a list of strings that appear as badges in this assessment's description.
| morea_sort_order | optional | If present, an integer used to sort the set of published assessments for presentation from low to high in the assessments/ page.  Defaults to zero. |
| morea_start_date | optional | If present, a string that indicates the date (and potentially the time) where this assessment should be placed on the calendar on the Schedule page. Example: "2015-06-25" indicates June 25, 2015, and "2015-06-15T18:30" indicates 6:30pm on June 15, 2015. You can specify a start date without an end date, and this typically indicates the "Due date" for this assessment. |
| morea_outcomes_assessed | optional | If present, a list of outcome morea_ids which are checked by this assessment. |

**Assessment body text**

The body text should describe the assessment in markdown format.

## Prerequisite

It is possible to define *Prerequisite* modules, or modules from another Morea site whose material should be mastered prior to starting this module.

The following image illustrates the top part of a Module definition page specifying three prerequisite modules from three prior courses:

As with all other "tiles" in Morea sites, these can be clicked to go to the corresponding module from the external site.

There are two steps to using Prerequisite modules. First, you must define them, and second, you must reference them in another module as a Prerequisite.

**Sample prerequisite markdown file contents**

```
---
title: "Algorithms"
published: true
morea_id: 141-algorithms
morea_url: http://courses.ics.hawaii.edu/ReviewICS141/modules/algorithms/
morea_icon_url: http://courses.ics.hawaii.edu/ReviewICS141/morea/algorithms/algorithms.png
morea_type: prerequisite
morea_labels:
  - ICS 141
---
Algorithms, computational complexity, asymptotic notations, pseudocode, greedy algorithms, easy vs. hard problems.

```

| Keyword | Required? | Value |
| ------- | --------  | ----- |
| morea_type | required| prerequisite |
| morea_id | required | A symbol (letters, numbers, hyphens, underscores) identifying this Morea entity. Morea IDs must be unique.  The Morea compiler will terminate with an error if it encounters two markdown files containing the same Morea ID. |
| title | required | A string indicating the title of this outcome. The outcome title appears in all of the top-level pages whereever the outcome is referenced. |
| published | optional | If true, the outcome will appear in the output. If false, the outcome will not appear. Default: true. Note: if an outcome is not referenced by at least one module, it will not appear in the output even if published is true. |
| morea_labels | optional | If present, a list of strings that appear as badges in this outcome's description.
| morea_sort_order | optional | If present, an integer used to sort the set of published outcomes for presentation from low to high in the outcomes/ page.  Defaults to zero. |
| morea_url | required | The URL to the location where the prerequisite module page can be retrieved. |
| morea_icon_url |  required | The URL to the location where the icon associated with this module page can be retrieved. |


The body text should describe the prerequisite in markdown format. It will appear in the tile, so should be relatively concise.
