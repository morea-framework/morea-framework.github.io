---
title: "The _config.yml file"
---

The `_config.yml` file provides configuration information to Jekyll.  The Morea Framework uses this file to provide important configuration information.

For general information about this configuration file, see [https://jekyllrb.com/docs/configuration/](https://jekyllrb.com/docs/configuration/).   The following sections document each of the important configuration fields for a Morea site.

## Sample contents

Here is an example version taken from the template that illustrates the default settings. There are three sets of fields:

  * Site Specific: fields that the user frequently modifies for each site.
  * Morea Portal: fields that are only important if this site is part of a "Morea Portal".
  * Internal Configuration: fields that the user should not normally edit.

```
# MOREA CONFIGURATION FILE
# See https://morea-framework.github.io/docs/instructors/config-yml

# SITE SPECIFIC: The following fields are typically changed for each site
name: ICS 199
baseurl: /morea
morea_theme: spacelab
timezone: Pacific/Honolulu
morea_navbar_items:
  - Prerequisites
  - Modules
  - Outcomes
  - Readings
  - Experiences
  - Assessments
  - Schedule
logger_factory:
  Morea: error

# MOREA PORTAL: The following fields are only needed if this site is part of a "Morea Portal".
# morea_course: ics311
# morea_domain: http://morea-framework.github.io/
# morea_google_analytics_tracking_id: "<your tracking id here>"
# morea_head_breadcrumb_link: "http://cnn.com"
# morea_head_breadcrumb_label: "CNN Site"

# INTERNAL CONFIGURATION: The following fields are not normally edited by users.
markdown: kramdown
kramdown:
  hard_wrap: false
  input: GFM
  syntax_highlighter: rouge
mathjax: true
exclude: [morea]
keep_files: [schedule/schedule-info.js]
plugins:
  - jekyll-gist
```

## Field documentation

The following sections document each field.

### baseurl

| |
| ----- | --- |
| Description | The baseurl field tells Jekyll what the root domain URL should look like. |
| Type | Site Specific |
| Value | Typically the name of the repo. |

### exclude

| |
| ----- | --- |
| Description | The exclude field tells Jekyll not to process the morea/ subdirectory. Instead, the MoreaGenerator plugin will process all of those files. |
| Type | Internal |
| Value | `[morea]`|

### keep_files

| |
| ----- | --- |
| Description | The keep\_files field tells Jekyll not to delete the schedule-info.js file in the destination directory upon regeneration, because it is written directly to the destination directory by the MoreaGenerator plugin.  |
| Type | Internal |
| Value | `[schedule/schedule-info.js]` |

### kramdown

| |
| ----- | --- |
| Description | The kramdown field provides configuration information to the kramdown markdown processor. In rare cases, the user might want to adjust these settings.  |
| Type | Internal |
| Value | See the sample file.|

### logger_factory

| |
| ----- | --- |
| Description | Morea has a configurable logger (based on the logger\_factory plugin) which allows different amounts of output to be sent to the console.  There are four possible values. In order of increasing output, they are: error, warn, info, and debug.|
| Type | Site specific |
| **error** | fatal errors only. combine with -q on command line for least amount of output   |
| **warn** | error output + missing optional YAML matter  |
| **info** | warn output + summary of processing steps   |
| **debug** | info output + internal debugging data, for developers   |

### markdown

| |
| ----- | --- |
| Description | The markdown field tells Jekyll what markdown processor to use. |
| Type | Internal |
| Value | Typically kramdown. |

### mathjax

| |
| ----- | --- |
| Description | The mathjax field tells Morea whether or not to download the MathJax CSS and JS files. |
| Type | Internal |
| Value | It's easiest just to keep this enabled, unless you are experiencing errors or slow page display times due to MathJax. |

### morea\_course

| |
| ----- | --- |
| Description | The morea\_course field tells the Morea Portal what course this is. |
| Type | Morea Portal |
| Value | Typically the name of the repo. |

### morea\_navbar\_items

| |
| ----- | --- |
| Description | The morea\_navbar\_items field tells Morea which of the Morea entities to display in the Navbar. |
| Type | Site Specific |
| Value | Comment out any entities you don't actually use. For example, "prerequisites" is often commented out. |

### morea\_theme

| |
| ----- | --- |
| Description | The morea\_theme field tells Morea which Bootswatch theme to use. |
| Type | Site Specific |
| Value | Use any theme in the css/themes directory. At the time of writing, the following theme values are available: cerulean, cerulean-green, cerulean-purple, cerulean-red, darkly, spacelab. |

### name

| |
| ----- | --- |
| Description | The name field tells Jekyll (and Morea) what the name of the site is. |
| Type | Site Specific |
| Value | Typically the name of the site. You can include spaces. |

### plugins

| |
| ----- | --- |
| Description | The plugins field tells Jekyll what gems must be installed. |
| Type | Internal |
| Value | We have one for GitHub Gists at the time of writing. |

### timezone

| |
| ----- | --- |
| Description | The timezone field helps Jekyll to format times and dates correctly. For a list of legal timezone specifications, see [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) |
| Type | Site Specific |
| Value | Currently set to Honolulu time. |
