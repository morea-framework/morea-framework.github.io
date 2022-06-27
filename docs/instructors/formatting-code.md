---
title: Formatting code
hide_table_of_contents: true
---

You have several options when it comes to presenting code in your repository.

## Jekyll highlight tag

To put code into your pages, one option is to use [Jekyll code snippet highlighting](http://jekyllrb.com/docs/templates/#code-snippet-highlighting).

For example,

```
{% highlight java %}
public static void main(String args[]) {
  System.out.println("Hello world");
}
{% endhighlight %}
</pre>
```

produces:

```java
public static void main(String args[]) {
  System.out.println("Hello world");
}
```

### Jekyll gist tag

For larger code samples, you might prefer to use the [Jekyll gist tag](https://rubygems.org/gems/jekyll-gist).

For example,

```
<pre>
{% gist philipmjohnson/5288814 %}
</pre>
```

produces:

import Gist from 'react-gist';

<Gist id="philipmjohnson/5288814" />

## Code repo

For documenting executable systems, as opposed to code samples, your best bet is to create a GitHub repo containing the system and provide links to it in your markdown.
