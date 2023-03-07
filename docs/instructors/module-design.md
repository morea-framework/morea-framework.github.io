---
title: Module design
---

Now that you've learned how to set up a Morea site, edit it, and publish your changes, it's time to focus on the most important task of all: designing and implementing a module. This page focuses on module design, and the next one will cover module implementation.

## Write a module design document

Interestingly, the first step in module design and implementation doesn't involve Morea at all. Until you are very comfortable with Morea, we recommend that you start by creating a document using Word or Google Docs or pencil and paper; whatever feels easiest.  Here is an example:

----
![](/img/module-design/dart-module-google-doc.png)

----

Writing a design document prior to implementation in Morea is useful for the same reason that creating a design of your code prior to writing it is useful: it frees you from focusing on low-level syntax/language issues, and allows you to focus on the structure and content in a format that is easy to change and improve.  Then, when you actually turn to implementation, you can switch to focusing on syntax and language without having to simultaneously think about design.  

## Assess and improve your module design

Not every module is a good module.  The Dart Module Design illustrates several best practices we've discovered over the years for good module design. Before moving on to implementation, you can use the following practices as a guideline to assessing and improving your initial design.

### A module is cohesive 

The Dart module focuses only on developing proficiency with introductory Dart programming. Focusing on a single concept might seem intuitively obvious, but you should be aware that in the real world of a classroom, you often want to present multiple concepts concurrently.

For example, during the week that Dart is introduced, you might simultaneously want to introduce students to Visual Studio code, or GitHub.  In Morea, it is a design anti-pattern to create a module called "Week 3" (for example) that mixes together all the concepts you want to present that week.  Instead, you should create three modules: Dart, VS Code, and GitHub, two (or even three) of which are simultaneously scheduled for the same week.

Keeping modules cohesive focused on a single concept makes them more reusable, and encourages you to present them in a more conceptually independent manner. 

### A module (usually) presents 1-2 weeks worth of material

As with many things, there is a "Goldilocks Zone" for module size. In most cases, you should try to design modules with content that can be covered in one to two weeks. So, for example, if you want to go deeper into Dart than is possible in a single week or two, you might have a sequence of 1-2 week modules, such as: "Dart: Simple Syntax", "Dart: Object Orientation", "Dart: Asynchronous Programming", etc. 

While this is a good rule of thumb, there are definitely exceptions. For example, my "Introduction" modules are often less than a week (and focus on course administrivia: grading, syllabus, communication, code of conduct, etc.). I also often have a "Final Project" module that lasts for 4-6 weeks at the end of the semester, and runs concurrently with shorter modules. 

### A module "balances" readings and experiences

Readings are passive learning opportunities.  Experiences are active learning opportunities. We have found that effective modules incorporate a balance of both.  If students are simply "reading" without "practicing", it's hard for them to know if they have actually learned the material.  Conversely, "doing" without any "background" or "reference" might not provide them with insight into whether their work is "correct" or "good".

In the Dart Design module, there are two readings and two experiences, which seems to be a reasonable first cut at a design.  Please note that it is difficult to know a priori if you have achieved the right balance. The only way to know for sure is by getting feedback from the students in some fashion. You could ask them, and/or you could test them. If, for example, you test them and they do poorly, then this might mean that you have not provided them with the appropriate set of readings and experiences.

### Outcome descriptions are important

In Morea, providing high quality module Outcome descriptions are important for two reasons.

First, when they are aggregated together on the Outcomes page of a Morea site, the result is a high quality description of what students will obtain from the entire course.

Second, high quality module descriptions encourage reusability, by making it clear what students can be expected to know and do following the module.


### Experiences should collectively assess all outcomes

You will often assess whether students have acquired the learning outcomes for a module by having a test at the end of the module. This is fine, but students will typically perform better on the test if they had a chance to practice and self-assess their acquisition of material prior to the end of the module.

So, make sure that your experiences give students a chance to self-assess all of your learning outcomes. If they do not, it might mean that you need to adjust the experiences, or adjust the learning outcomes.

### Experiences are due intermittently during the module

It is useful to provide due dates for experiences. This helps you think about the pace of the module, and whether you are providing them opportunities to practice what they are doing along the way.

A module design anti-pattern is to have all of the experiences due on the last day of the module, or on the first day of the module. If you find yourself doing that, you probably haven't designed the experiences correctly.

The Dart Module design illustrates a reasonable approach to a one week module: one experience is due about half way through the module, and another is due near the end of the module.

### Experiences include solutions

Experiences can be thought of as "homework assignments", but with one caveat: they should always include solutions.  If they don't include solutions, then students don't know whether or not they are actually learning what you are hoping they are learning (and they have no way of "debugging" their mistakes by comparing their work to a solution).

There are many ways to include solutions.  In my software engineering class, I include a screencast with each experience that shows me solving the problem.  These screencasts make it easy to provide details regarding the "why", to show common mistakes and how to recover, and to show how to incrementally construct the solution. For example, here is the [Project Euler Problem 1](https://courses.ics.hawaii.edu/ics314f22/morea/javascript-1/experience-project-euler-1.html) experience. 

Just because you provide a solution doesn't mean you can't require submission of the experience (and give students credit for doing so). In my experience, providing deadlines for experience submission, and providing credit for submission helps incentivize students to actually take the time to work through the material in the experience, rather than superficially skim it.

### Assessments collectively cover all Outcomes

Assessments differ from Experiences in that they typically occur at the end of the module, and they also do not provide the solution along with the problem. Assessments enable both students and instructors to determine if they have studied the Readings and engaged with the Experiences in sufficient depth to achieve the Outcomes associated with the module. 

Assessments should be designed such that success demonstrates facility with all of the Outcomes associated with the module. If they do not, then you should adjust either the Outcomes or the Assessments so that they are compatible. 

Assessments thus provide a "quality assurance" check on your Learning Outcomes: an Outcome that cannot be assessed is not a good Outcome. 

### Midterm and final exams fall outside the scope of Morea

By definition, midterm and final exams assess material spanning multiple modules.  While midterms and finals can be useful, they generally fall outside the scope of Morea and typically do not serve the function of Morea Assessments.

If your course currently includes only a midterm and final, then converting it to Morea will have significant benefits for your students. The new structure will provide them with a more "incremental" assessment of whether or not they are learning what you desire for them to learn from the course.  These assessment results will enable them to make adjustments to their study habits and engagement with the course, and you as the instructor to make adjustments to the material and pedagogy (based on aggregate assessment results), all of which should improve the odds of success. 



### BTW, Laulima "modules" often don't conform to Morea best practices

At the University of Hawaii, the Course Management System is called "Laulima".  If you use Laulima (or some other CMS), you might be tempted to skip the writing of a Morea design document because "it's already there in my course site".  I suggest you still take a few minutes to create a design document for the following reasons:

1. If it's really "already there", then creating the design document won't take much time, and the resulting document might be easier to cut and paste it into Morea.
2. You might find that the process of writing the Morea design document helps you surface areas where your current structure falls short of Morea best practices. 

In the next section, we'll show how we can take this Dart design doc and implement it as a Morea module.
