---
title: Tables
hide_table_of_contents: true
---

In Morea, you can create tables using standard markdown. For example:

```md
| Attribute | Description|
|:----------|------------|
| shape     | Returns a tuple representing the dimensionality of the DataFrame. |
| size      | Returns an int representing the number of elements in this object. |
| dtypes    | Returns the data types in the DataFrame. |
| columns   | Returns a Series of the header names from the DataFrame|
```

This produces a table, but not one that is particularly nicely formatted:

![](/img/tables-1.png)

You can make the table look much nicer by adding the `.table` class to the HTML. This is how you do it in markdown:

```md
| Attribute | Description|
|:----------|------------|
| shape     | Returns a tuple representing the dimensionality of the DataFrame. |
| size      | Returns an int representing the number of elements in this object. |
| dtypes    | Returns the data types in the DataFrame. |
| columns   | Returns a Series of the header names from the DataFrame|
{: .table}
```

Now that table looks like this:

![](/img/tables-2.png)

The underlying CSS framework for Morea, Bootstrap, provides some other table formatting. You can learn about other options by reading the [Bootstrap Table Documentation](https://getbootstrap.com/docs/4.1/content/tables/). 

For example, here is how you could produce a striped table:

```md
| Attribute | Description|
|:----------|------------|
| shape     | Returns a tuple representing the dimensionality of the DataFrame. |
| size      | Returns an int representing the number of elements in this object. |
| dtypes    | Returns the data types in the DataFrame. |
| columns   | Returns a Series of the header names from the DataFrame|
{: .table .table-striped}
```

Which looks like this:

![](/img/tables-3.png)
