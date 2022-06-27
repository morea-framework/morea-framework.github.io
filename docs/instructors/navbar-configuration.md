---
title: Navigation bar configuration
hide_table_of_contents: true
---


The six standard navbar menu items can be enabled or disabled through the top-level `_config.yml` file.  Here is an example:

```yaml
---
name: Review ICS 311
baseurl: /ReviewICS311
exclude: [morea]
morea_theme: cerulean
morea_navbar_items:
  - Prerequisites
  - Modules
  - Outcomes
  - Readings
  - Experiences
  # - Schedule
---
```

In this example, the site has enabled five of the standard nav bar items (Prerequisites, Modules, Outcomes, Readings, and Experiences), but has commented out the Schedule nav bar item and thus it will not be displayed.
