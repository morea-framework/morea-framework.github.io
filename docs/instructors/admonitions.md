---
title: Admonitions (Call outs)
hide_table_of_contents: true
---

Admonitions, otherwise known as "call outs", are a very useful documentation pattern. In Morea, you can create admonitions in a few different ways by combining Bootstrap alerts, font awesome icons, and markdown. Here are a few examples to get you started.

The approach below involves the following:

1. Create a div with the Bootstrap alert class, and decide what kind of alert (warning, danger, etc.) The alert type sets the background color (danger is red, success is green, etc.)
2. Set markdown equal to "1" (so that the interior of the div is parsed as markdown),
3. Use a font awesome icon appropriate to the type of admonition. If you don't like the ones I use below, find your own at the [Font Awesome Icon Search Page](https://fontawesome.com/search?).
4. Make a bold faced title with a horizontal line underneath.
5. Add the body text as markdown underneath.

## Example Admonition

Here's one way to produce a "danger" admonition, which will have a red background:

```
<div class="alert alert-danger" role="alert" markdown="1">
<i class="fa-solid fa-circle-exclamation fa-xl"></i> **Danger: the following is not recommended.**
<hr/>

You really don't want to do the following:
* Stay up too late.
* Get up too early.
* Drink coffee after lunch.
</div>
```

Which looks like this:

![](/img/example-admonition.png)

You can see a variety of different example admonitions by going to https://morea-framework.github.io/morea/morea/example-introduction/example-admonitions.html.
