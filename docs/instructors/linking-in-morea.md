---
title: Linking within Morea
---

You may wish to reference one Morea page from another.  For example, you might want to link to one Readings page from another Readings page, or to an Experience from an Assessment.

Linking in Morea is complicated by the fact that Modules, Outcomes, Readings, Experiences, and Assessments are implemented in different ways. Modules, Readings, Experiences, and Assessments are implemented as standalone pages, while Outcomes are implemented as page "fragments" that are integrated into other pages.

A second complication is the fact that the URL required to show the page locally is slightly different from the URL required to show the page when published: a parameter called "site.baseurl" is needed to be included in the URL.

A third complication is that some files (readings, experiences) are located within a morea/ subdirectory, while others (modules, outcomes, and assessments) are not.

The following table documents the structure of absolute links to each of the five Morea entity types:

| Entity type | Link syntax |
| ------------| ------------ |
| Module | `{{ site.baseurl }}/modules/&lt;module ID&gt;` |
| Outcome | `{{ site.baseurl }}/outcomes/#&lt;outcome ID&gt;` |
| Reading | `{{ site.baseurl}}/morea/&lt;path-to-reading-file&gt;/&lt;reading file name&gt;.html` |
| Experience | `{{ site.baseurl }}/morea/&lt;path-to-experience-file&gt;/&lt;experience file name&gt;.html` |
| Assessment | `{{ site.baseurl }}/assessments/&lt;assessment ID&gt;` |

For example, let's say you have created a module with morea\_id "foo" in a directory called "01.foo/" that contains files module.md, outcome.md (with morea\_id outcome-foo), reading.md, experience.md, and assessment.md (with morea\_id assessment-foo).  Here is how you would create absolute links to each of these entities:

| Entity type | Link |
| ------------| ------------ |
| Module | `{{ site.baseurl }}/modules/foo` |
| Outcome | `{{ site.baseurl }}/outcomes/#outcome-foo` |
| Reading | `{{ site.baseurl }}/morea/01.foo/reading.html` |
| Experience | `{{ site.baseurl }}/morea/01.foo/experience.html` |
| Assessment | `{{ site.baseurl}}/assessments/assessment.html` |


You will typically use Markdown syntax, so an actual link might look like

```
[Readings about Foo]({{ site.baseurl }}/morea/01.foo/reading.html)
```

There is a shortcut that you can use when linking between reading and experience files that are located in the same directory. In this case, you can use a relative link:

```
[the readings for this experience](reading.html)
```


