---
title: "Markdown Guide"
slug: "markdown-guide"
weight: 1
draft: true
---

## Include Email component
{{< email-signup >}}

# Heading Level 1
This is a test page to demonstrate all markdown formatting elements for The ARKR Manual theme.

## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

## Text Formatting
**bold text** 
*italic text*
***bold and italic together***
~~strikethrough text~~
`code` for technical terms
<mark>Highlighted text</mark>
<sub>Subscript</sub> and <sup>Superscript</sup>

This is a paragraph with `inline code` and some regular text.

## Lists

### Unordered List
- First item
- Second item
  - nested item
- Third item

### Ordered List
1. First numbered item
   1. Nested numbered item
2. Third numbered item

### Task List
- [x] Completed task
- [ ] Incomplete task

## Blockquotes
> This is a blockquote. It can span multiple lines.

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

```bash
#!/bin/bash
echo "Hello from bash!"
ls -la
```

```
### Code Block without Language
```
This is a code block without syntax highlighting.
It preserves whitespace and formatting.
```

## Links
Here's an [inline link](https://arkr.ca) and another [link with title](https://arkr.ca/manual "The ARKR Manual").

Email link: <user@example.com>

## Images
![Image](/images/test4.png)

![Image with title](/images/test3.png "This is a test image")

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

## Special Characters
- Copyright: ©
- Trademark: ™
- Registered: ®
- Em dash: —
- En dash: –
- Ellipsis: …