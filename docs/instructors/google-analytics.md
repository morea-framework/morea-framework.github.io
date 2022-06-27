---
title: Google Analytics
hide_table_of_contents: true
---

If you are interesting in tracking usage of your pages, Morea supports [Google Analytics](http://www.google.com/analytics/).

To use, first read the [Google Analytics Get Started](https://support.google.com/analytics/answer/1008015?hl=en&ref_topic=3544906) and set up an account and tracking ID.

Then, edit your `_config.yml` file to provide the tracking ID. For example:

```
name: Review ICS 241
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge
mathjax: true
baseurl: /ReviewICS241
exclude: [morea]
morea_theme: cerulean
morea_navbar_items:
  - Prerequisites
  - Modules
  - Outcomes
  - Readings
  - Experiences
morea_google_analytics_tracking_id: "UA-64069138-1"
morea_course: ics241
morea_domain: http://courses.ics.hawaii.edu/
```
