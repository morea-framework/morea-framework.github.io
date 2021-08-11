---
title: Schedule page
---

## Overview

The Module, Reading, and Experience entity types support the `morea_start_date` and `morea_end_date` parameters in their Front Matter.   This information is read when the files are processed, and used to generate a page containing a calendar that displays these dates and durations.  For example:

![](/img/morea-2.0/schedule.png)

Clicking on one of these events in a live calendar will take you to the corresponding Module, Reading, or Experience definition page.

## Setup

### Show the Schedule page in the navbar

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

### Configure the schedule/index.html file

The schedule/index.html file contains embedded scripts that must be slightly modified. Here is what the file contents look like to start:

```
---
layout: default
title: Schedule
---
{% include breadcrumb-2.html %}

<!--
  Load FullCalendar for schedule page.
  Documentation available at: http://fullcalendar.io/

  Things to do to configure your Schedule page:
  (1) Edit the holidayData variable to include holidays appropriate for this semester.
  (2) Delete the initialDate field in the FullCalendar constructor so that the calendar automatically
      displays the current month.
-->

<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/fullcalendar@5.8.0/main.min.css">
<script src="//cdn.jsdelivr.net/npm/fullcalendar@5.8.0/main.min.js"></script>

<!-- This script defines the moreaEventData variable containing an array of events from Morea pages. -->
<script src="schedule-info.js"></script>

<script>
  var holidayData = {color: 'green',
    events: [
      {title: "Classes start", start: "2021-07-06"},
      {title: "Holiday: Independence Day (Observed)", start: "2021-07-05"},
      {title: "Classes end", start: "2021-07-30"},
    ]};
</script>

<div style="margin-bottom: 10px" class="container">
  <h1>Schedule</h1>
  <div id='calendar'></div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      eventColor: '#446e9b',
      initialDate: '2021-07-01',
      eventSources: [{events: moreaEventData}, holidayData]
    });
    calendar.render();
  });
</script>
```

As noted in the embedded comment, there are two things you must do to configure your schedule:

1. Edit the holidayData variable with the dates of holidays during your semester.
2. Remove the "initialDate" field in the bottom script. That enables the Schedule page to automatically display the current month when it is retrieved.