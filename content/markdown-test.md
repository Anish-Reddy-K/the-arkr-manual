---
title: "Markdown Formatting Test"
slug: "markdown-test"
---

# Heading Level 1

This is a test page to demonstrate all markdown formatting elements for The ARKR Manual theme.

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

---

## Text Formatting

This is **bold text** and this is *italic text*. You can also use ***bold and italic together***. Here's some ~~strikethrough text~~.

This is a paragraph with `inline code` and some regular text. You can also have `multiple code spans` in the same paragraph.

## Lists

### Unordered List

- First item
- Second item
  - Nested item
  - Another nested item
- Third item
- Fourth item with **bold text** and *italic text*

### Ordered List

1. First numbered item
2. Second numbered item
   1. Nested numbered item
   2. Another nested numbered item
3. Third numbered item
4. Fourth item with `code` inside

### Task List

- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
- [ ] Another incomplete task

## Blockquotes

> This is a blockquote. It can span multiple lines and contain other markdown elements like **bold** and *italic* text.

> This is a nested blockquote.
> > This is a nested blockquote inside another blockquote.

> Blockquotes can also contain:
> - Lists
> - `Code`
> - **Bold** and *italic* text

## Code Blocks

### Inline Code

Here's some `inline code` in a sentence.

### Code Block with Language

```python
def hello_world():
    print("Hello, World!")
    return True

# This is a Python code block
```

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
    return `Hello, ${name}!`;
}

// JavaScript code block
```

```bash
#!/bin/bash
echo "Hello from bash!"
ls -la
```

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

### Code Block without Language

```
This is a code block without syntax highlighting.
It preserves whitespace and formatting.
```

## Links

Here's an [inline link](https://arkr.ca) and another [link with title](https://arkr.ca/manual "The ARKR Manual").

You can also use [reference-style links][reference] and [automatic links](https://arkr.ca).

[reference]: https://arkr.ca/manual "Reference link"

## Images


You can also add images with titles:

![Image with title](../images/test-image.png "This is a test image")

## Horizontal Rules

---

## Tables

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| **Bold** | *Italic* | `Code`   |
| Left     | Center   | Right    |

| Left Align | Center Align | Right Align |
|:-----------|:------------:|------------:|
| Left       | Center       | Right       |
| Data 1     | Data 2       | Data 3      |

## Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## Math (if enabled)

Inline math: $E = mc^2$

Block math:

$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$

## HTML Elements

You can also use <strong>HTML</strong> directly in markdown:

<details>
<summary>Click to expand</summary>

This is hidden content that can be revealed.

</details>

## Paragraphs and Line Breaks

This is the first paragraph. It contains multiple sentences. Each sentence flows naturally into the next.

This is the second paragraph. It's separated from the first by a blank line.

This line has two spaces at the end.  
This creates a line break without starting a new paragraph.

## Emphasis Combinations

- **Bold only**
- *Italic only*
- ***Bold and italic***
- `Code`
- **Bold with `code`**
- *Italic with `code`*
- ***Bold italic with `code`***

## Special Characters

You can escape special characters: \*asterisk\*, \_underscore\_, \`backtick\`, \[brackets\], \(parentheses\).

## Long Content Section

This section demonstrates how longer content flows. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

## Mixed Content

Here's a paragraph with **bold**, *italic*, `code`, and a [link](https://arkr.ca).

1. First item with **bold**
2. Second item with *italic*
3. Third item with `code`
4. Fourth item with a [link](https://arkr.ca)

> This blockquote contains:
> - A list
> - With multiple items
> - And `code` elements

```python
# Code block example
def example():
    return "This is a code block"
```

---

## End of Test Content

This test file demonstrates all common markdown elements. You can add your own image to test image rendering.

