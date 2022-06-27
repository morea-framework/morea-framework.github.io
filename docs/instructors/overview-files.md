---
title: Overview files
hide_table_of_contents: true
---

Morea allows the instructor to define "overview files" whose content is inserted at the top of the six standard pages (Prerequisites, Modules, Outcomes, Readings, Experiences, Assessments).

Example overview files are provided in the morea directory. You can edit these as you wish.

Here's an example overview file for the modules page:

```
---
title: "Ignored"
morea_id: morea_overview_modules
morea_type: overview_modules
published: true
---

This page presents the "modules",
or the topics that are covered in this course.

Click on the tile associated with a module
to go to a page containing that module's contents.
```

| Keyword | Required? | Value |
| ------- | --------  | ----- |
| morea_type | required| One of: overview_modules, overview_outcomes, overview_readings, overview_experiences, overview_assessments, overview_schedule |
| morea_id | required | A symbol (letters, numbers, hyphens, underscores) identifying this Morea entity. Morea IDs must be unique.  The Morea compiler will terminate with an error if it encounters two markdown files containing the same Morea ID. |
| title | optional | ignored |
| published | optional | If true, the overview will appear at the top of its associated page. |

The body of the overview file will be placed at the beginning of its associated page.
