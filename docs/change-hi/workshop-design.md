---
title: Workshop design
hide_table_of_contents: true
---

The previous section documents the *mechanics* of Change-HI workshop development: how to get the files, make a simple update, and create a pull request so that administrators can merge your changes into the official site. 

Let's now discuss how to design the *content* of a workshop.

## Seminars vs. Workshops

We've all been to seminars: you sit down in a room (or login to Zoom), a speaker is introduced, and you sit and listen to the speaker for the next 45 minutes to an hour. Afterwards, there might be a few questions.  In the best case, you leave the seminar thinking, "Well, that was interesting", or even "I have a new idea for my research".  In other cases, you start reading your email around 15 minutes into the event. 

A workshop is different. In a workshop, the goal is more than just experiencing something "interesting" or "having a new idea": the goal is to leave the workshop being able to do something you couldn't do before. Workshops are about *skill acquisition*. 

This means that workshops are intrinsically *participatory* in a way that seminars are not. It also means that, at a minimum, at least a few of the participants will leave the workshop and begin *using* the skill that was introduced in the workshop. 

Workshops thus have a much higher bar for success than seminars.  

## Pre, In, and Post Workshop phases

Unlike designing a seminar, in which you rarely consider the activities of the attendees before or after the seminar, you should consider three distinct phases when designing a workshop: 

* *Pre-workshop*.  What would you like participants to do prior to attending the workshop? 
* *In-workshop*.  What would you like participants to do during the workshop? 
* *Post-workshop*.  Assuming at least some of the participants will want to use the skill you introduced in the workshop, how should they continue to develop the skill?

### The pre-workshop phase

Let's assume you can contact the attendees prior to the workshop.  What would you like them to do prior to the workshop in order to make maximal use of the time you are together? 

In rare cases, the answer might be "nothing", but in most cases, there will be at least some light introductory reading that can orient the attendees to the workshop material. To indicate this, you can create a Morea Reading and add the label "Pre-Workshop" in order to indicate that attendees should take a look in advance. You can also add the label "Optional" to indicate that attendees should read it if they can, but to not worry if they don't have time.

In some cases, you might want attendees to install some software or download some materials in advance of the workshop. This can be crucial when the installation or download might take 15-30 minutes and you only have two hours for the entire workshop. In this case, you can create a Morea Reading with the labels "Pre-Workshop" and "Required" which refers the attendee to the relevant installation instructions.  Attendees who have problems with the installation could arrive at the workshop early in order to receive help completing the installation, or else they simply partner with another attendee during the workshop who has successfully installed the software.

In yet other cases, you might want attendees to have acquired a skill prior to the workshop. For example, your workshop might involve teaching some intermediate-level skill with Jupyter notebooks, and so you require that attendees have basic knowledge of Python and Jupyter.  In this case, you could specify a Morea Prerequisite Module: a separate Module with its own Readings and Experiences that attendees should work through prior to the workshop to make sure they have the necessary knowledge for your workshop.

### The in-workshop phase

A workshop can be organized in many different ways.  Sometimes, it makes sense to interleave short lectures with activities. In this case, you might want to create one or more Morea Readings with the label "In-workshop" that points to the slides associated with your lectures, as well as one or more Morea Experiences with instructions on how to carry out the activities. 

Some workshops might not have any "lecture" at all. Instead, the instructor guides the attendees interactively through the use of a tool or problem solving scenario. In this case, you might want to provide a sequence of Morea Experiences with the label "In-workshop" that document what you the attendees to do for each logical section of the material.

If you want to show a video at some point during the workshop, you can either embed the video at the appropriate point in an Experience, or else include it as a Reading.

Your workshop should always conclude with an assessment. Be sure to leave 10 or so minutes at the end of the workshop for attendees to fill out a Google Form that you've created. This form can be anonymous, and can ask questions such as:

  * For each skill you presented in the workshop, did the attendee find it to be not useful, somewhat useful, or very useful? 
  * Are there any skills that the attendee hopes to use in their work in future? If so, which ones, and how?
  * Are there skills that the attendee wish were covered in the workshop, but weren't?
  * Are there any other suggestions for how the workshop could be improved in future? 

In order to maximize the number of responses, it's best to build this assessment right into the workshop and not ask attendees to fill it out later.

You can create a Morea Assessment with a link to the Google Form you created.

### The post-workshop phase

A well-designed workshop provides attendees with a clear path forward if they want to start using the skill in their work.  There are a variety of ways to help attendees to move forward:

  * Provide Morea Readings to API documentation, more advanced tutorials, videos, or the like.  Label these Readings with "Post-workshop".
  * Provide Morea Experiences that challenge attendees to practice the skills in various ways. Label these Experiences with "Post-workshop".
  * Provide recommendations for future workshops that build upon these skills.

## Sketch your workshop design

As you can see, designing a workshop with Morea involves the creation of:

  * Readings, which might be intended for the pre-workshop, in-workshop, or post-workshop phases.
  * Experiences, which might be intended for the in-workshop or post-workshop phases.
  * An Assessment, which is always intended for the end of the in-workshop phase.

Until you are comfortable with Morea, you might want to start by sketching out your workshop design on a piece of paper or text file: what are the Readings, Experiences, and Assessment to include for each of the three phases?

Once you have that sketch in hand, you can implement it as actual Morea constructs.

## What about Outcomes?

You might think you should begin with Outcomes, but I recommend you leave these until last.  The reason is that if you start with Outcomes, you will often be too ambitious in what you think you can accomplish. 

So, instead, leave the specification of learning outcomes until you have finished the workshop design. Then think about what you hope attendees will be able to do as a result of the material you actually have.

Take a look at the existing set of Outcomes. Are there outcomes from other workshops that you also hope attendees will acquire in yours? If so, just include that outcome ID in your module definition file (don't make a copy of the outcome file). Having the same learning outcome for multiple workshops helps tie them together, and increases the odds that attendees will actually learn the skill!
