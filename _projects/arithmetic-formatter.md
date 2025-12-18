---
title: "Arithmetic Formatter"
description: "A Python CLI tool that formats simple arithmetic expressions for visual clarity."
image: "/assets/images/arithmetic-formatter-teaser.jpg"
date: 2025-05-09
published: published
featured: false
category: "python"
layout: project-page
collection: projects
tags: [Python, String Manipulation, FreeCodeCamp]
github_url: https://github.com/Ardit-Islami/Arithmetic_Formatter
---

### Project Overview

This formatter was originally built during my first month as an intern. Which helped and validating my python basics at the time.

The tool accepts a list of arithmetic problems (e.g., `"32 + 8", "1 - 3801"`) and outputs them in a neatly aligned, column-style format, mimicking how you'd solve them on paper.

### Learning Journey

What made this challenge interesting wasn’t the math — it was the formatting logic. I had to write conditionals to calculate alignment, pad spacing, and handle different operators. It also taught me:

- Why input validation matters, even for small tools
- How to avoid hardcoding by calculating max lengths dynamically
- When to raise meaningful errors vs. fail silently

### Key Features

- Accepts a list of addition/subtraction expressions
- Dynamically aligns results without fixed-width logic
- Option to toggle solution display (via argument)
- Clean, minimal CLI output for education or logging

### What I’d Do Differently

- Add test cases using pytest to formalize validation
- Expand to support multiplication and division
- Package as a reusable formatter module with CLI args

### Preview

Screenshots and terminal demo coming soon. The tool is currently usable and testable via GitHub.

### Code Snippet

```python
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])

# Output:
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```