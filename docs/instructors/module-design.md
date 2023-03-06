---
title: Module design
---

Now that you've learned how to set up a Morea site, edit it, and publish your changes, it's time to focus on the most important task of all: designing and implementing a module.

## Write a module design document

Interestingly, the first step in module design and implementation doesn't involve Morea at all. Until you are very comfortable with Morea, we recommend that you start by creating a document using Word or Google Docs or pencil and paper; whatever feels easiest.  Here is an example:

----
![](/img/module-design/dart-module-google-doc.png)

----

Writing a design document prior to implementation in Morea is useful for the same reason that creating a design of your code prior to writing it is useful: it frees you from focusing on low-level syntax/language issues, and allows you to focus on the structure and content in a format that is easy to change and improve.  Then, when you actually turn to implementation, you can switch to focusing on syntax and language without having to simultaneously think about design.  

## Assess and improve your module design

Not every module is a good module.  The Dart Module Design illustrates several heuristics we've discovered over the years for good module design. Before moving on to implementation, you can use the following heuristics as a guideline to assessing and improving your initial design.

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

### Experiences are due along the way

It is useful to provide due dates for experiences. This helps you think about the pace of the module, and whether you are providing them opportunities to practice what they are doing along the way. 

A module design anti-pattern is to have all of the experiences due on the last day of the module, or on the first day of the module. If you find yourself doing that, you probably haven't designed the experiences correctly.  

The Dart Module design illustrates a reasonable approach to a one week module: one experience is due about half way through the module, and another is due near the end of the module. 

### Outcome descriptions are important

In Morea, providing high quality module Outcome descriptions are important for two reasons.

First, when they are aggregated together on the Outcomes page of a Morea site, the result is a high quality description of what students will obtain from the entire course. 

Second, high quality module descriptions encourage reusability, by making it clear what students can be expected to know and do following the module. 

### Experiences should collectively assess all outcomes

You will often assess whether students have acquired the learning outcomes for a module by having a test at the end of the module. This is fine, but students will typically perform better on the test if they had a chance to practice and self-assess their acquisition of material prior to the end of the module.

So, make sure that your experiences give students a chance to self-assess all of your learning outcomes. If they do not, it might mean that you need to adjust the experiences, or adjust the learning outcomes.

### You can omit Assessments during initial design

The "A" in Morea stands for "Assessment", and refers to a page that you can include if you want to publicly report on the results of assessment of the learning outcomes (via, for example, a test at the end of the module). 

During initial design of a module, you will not have any Assessment results, so there's no need to include that Morea entity. All the other entities (Module, Outcome, Reading, Experience) should be included in your design.

### BTW, Laulima "modules" often aren't Morea

You might be tempted to skip the writing of a Morea design document because "it's already there in my Laulima site".  I suggest you still take a few minutes to create a design document for the following reasons:

1. If it's really "already there", then creating the design document won't take much time, and it might be easier to cut and paste it into Morea.
2. You might find that the process of writing the Morea design document helps you surface design issues that are not obvious in your Laulima site, such as: what is the appropriate boundary for the module? What are the appropriate outcomes for the module? Is the module "cohesive"? Do experiences actually assess outcomes?

In the next section, we'll take our google doc and put it into Morea. 
