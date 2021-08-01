---
title: Embedding slideshows
---

Rather than include a link to a .ppt or .pdf file, you might find it more user-friendly to embed your slides in a page. The easiest way to do this is by using a cloud-based presentation hosting service, such as [SlideShare](http://www.slideshare.net/). In the following example, we will use a similar service, [Speaker Deck](https://speakerdeck.com/), which provides a responsive HTML5 embedded player. If you prefer SlideShare, the same general procedure will work.

After creating your slideshow, find the "Embed" button.  Clicking this button will pop up a dialog box with the HTML `<script>` element you must place in your Morea page to embed this  presentation.  For example, here is what a readings page might look like with the `<script>` code

```
---
title: "Lecture Notes: Sequential Warmup"
published: true
morea_id: sequentiallecturenotesreadings
morea_summary: "Parallelism, sequential performance, sequential code optimization, the memory wall, compiler optimization, not really sequential, conclusion"
morea_type: reading
morea_sort_order: 1
---

## Lecture Notes: Sequential Warmup

<script async class="speakerdeck-embed" data-id="ef27d6f0f33001316dfc66ebab3e7b80" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

``