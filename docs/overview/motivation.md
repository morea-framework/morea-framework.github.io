---
title: Motivation for Morea
---

The fundamental goal of the Morea Framework is to provide technology infrastructure that enables new forms of curriculum design that goes beyond traditional, monolithic, semester-based approaches. Morea enables instructional design at the time-frame of weeks, not months, and breaks down technical barriers to interdisciplinary content creation and collaboration. It also addresses chronic problems with traditional learning management systems regarding content management.

## Modules, not courses

First, the fundamental unit of instruction in Morea is a module, not a course. This creates opportunities for fine-grained curricular dependencies and composition. It supports the development of self-contained, cohesive, small-scale educational experiences. This is more aligned with modern workforce development contexts where people cannot commit to an entire semester-length course.

## Remix and mashup curriculum

Development of self-contained, cohesive, short-term educational experiences makes it easier for instructors to "remix" their content for new environments, and/or "swap out" modules to best suit learner needs.  More interestingly, a group of instructors from different disciplines can share and augment each others modules, creating "mashups"  with inter-, cross-, and trans-disciplinary instruction.

## No walled garden

Students complain about educational content that requires access through the "walled garden" (and "paywall") of traditional learning management systems. A common frustration for students (at least at the University of Hawaii) is content that "disappears" once the semester is over. Morea is designed around principles of open access. Because development and hosting of educational content is free for both instructors and the institution, there is no barrier to making content available publicly and permanently.

## Make the pedagogy visible

Morea implements a simple [pedagogical pattern](http://en.wikipedia.org/wiki/Pedagogical_patterns): a course is a sequence of **modules**, each with one or more **learning outcomes**.

Modules can combine one or more passive **readings** (providing background) with one or more active **experiences** (in-class work or homework). Finally, a module can contain one or more **assessments** to help students determine if they've achieved the learning outcomes.

Our experience shows that students and teachers both benefit by making this course design explicit. For example, Morea generates course websites that organize course content in multiple ways: by modules, outcomes, readings, experiences, and assessments. This makes it easier for teachers to design well structured courses, and easier for students to understand what they need to learn and how to learn it.

## Improve development with Github

Content management systems like [Wordpress](http://wordpress.com) make it easy to design the first version of a course website.  But they do not make it easy to duplicate and revise a course website in future semesters, or copy and adapt material developed by others.

On the other hand, [GitHub](http://github.com) provides marvelous infrastructure for iterative enhancement and deployment of educational websites, including:

* Free storage of content.
* Free private repositories for educators.
* Free hosting of project websites.
* The ability to clone, branch, and fork repositories.

Morea uses Github to make it easier to create courses and improve them over time. Morea and Github help you collaborate with students and teachers to more easily create and improve educational content.

## Focus on content, not on styling

Nice websites involve lots of CSS and HTML, which is a pain to maintain manually. [Jekyll](http://jekyllrb.com/) is a "static site generator" that enables you to develop your course content in [Markdown](http://daringfireball.net/projects/markdown/) format without using HTML.

Morea leverages Jekyll to separate HTML/CSS presentation details from your course content. Morea builds modern, responsive websites using [Bootstrap](http://getbootstrap.com/), so they display well on laptops, tables, and smart phones.
