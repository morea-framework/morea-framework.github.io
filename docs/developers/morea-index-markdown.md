---
title: Morea index markdown files
---

The MoreaGenerator plugin processes the `morea/` directory but doesn't control the layout and appearance of the site.   That part is done outside the `morea/` directory, primarily through a set of index.md files illustrated below:

![](/img/basic-template-src-directory.png)

You can see that there is a top-level index.md file (below favicon.ico) which becomes the home page for the site.  Then, there are five directories (modules, outcomes, readings, experiences, assessments) each with their own index.md file.  Each of these index.md files gets processed by Jekyll to produce the corresponding page in the site.

Most of the index.md files have a very similar structure. Here's the one from the readings directory:

```
---
layout: default
title: Readings
---
{% include breadcrumb-2.html %}

<div class="container">
  <h1>Readings <small class="header-small">"Passive" learning opportunities</small></h1>
</div>

{% if site.morea_overview_readings %}
<div class="container">
  {{ site.morea_overview_readings.content | markdownify }}
</div>
{% endif %}

{% for module in site.morea_module_pages %}
{% if module.morea_coming_soon != true and module.morea_readings.size > 0 %}
<div class="{% cycle 'section-background-1', 'section-background-2' %}">
  <div class="container">
    <h2><small>Module:</small> <a href="{{ site.baseurl }}{{ module.module_page.url }}">{{ module.title }}</a></h2>
    <div class="row">
    {% for page_id in module.morea_readings %}
      {% assign reading = site.morea_page_table[page_id] %}
      {% include entity-card.html url=reading.morea_url title=reading.title summary=reading.morea_summary labels=reading.morea_labels %}
    {% endfor %}
    </div>
  </div>
</div>
{% endif %}
{% endfor %}
```

Basically, the MoreaGenerator has updated the `site` hashmap with key value pairs providing access to the various Morea instances. So, for example, `site.morea_module_pages` provides a list of all the Morea modules found during generation.  In this page, we cycle through all of the modules and print out the readings associated with each module (that has readings).
