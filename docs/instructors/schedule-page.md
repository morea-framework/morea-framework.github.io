---
title: Schedule page
---

The Module, Reading, and Experience entity types support the `morea_start_date` and `morea_end_date` parameters in their Front Matter.   This information is read when the files are processed, and used to generate a page containing a calendar that displays these dates and durations.  For example:

![](/img/morea-2.0/schedule.png)

Clicking on one of these events in a live calendar will take you to the corresponding Module, Reading, or Experience definition page.

In order to display a link to this Schedule page in the NavBar, you must edit your `_config.yml` file and uncomment the Schedule entry in the `morea_navbar_items` field:

```
morea_navbar_items:
  #- Prerequisites
  - Modules
  - Outcomes
  - Readings
  - Experiences
  #- Assessments
  - Schedule
```

Note that whenever you modify `_config.yml`, you must restart Jekyll to see your changes.