---
title: "Python Core Notebooks"
date: 2025-05-20
excerpt: "A curated set of notebooks that document my learning journey through Python, NumPy, and Pandas."
layout: project-page
collection: projects
tags: [Python, Jupyter, Learning, Data Structures, Functional Programming]
teaser: /assets/images/python-notebooks.png
github_url: https://github.com/Ardit-Islami/learning-python-notes/
---

This project is a curated set of Jupyter notebooks that chronicle my learning journey through Python programming. The notebooks cover a wide range of topics, from core syntax and object-oriented principles to advanced techniques like multithreading, recursion, and working with NumPy.

### Key Topics Covered

- **Object-Oriented Programming**: Classes, objects, methods, and principles of OOP.
- **Dynamic & Functional Programming**: Techniques like recursion, memoization, first-class functions, and closures.
- **Data Structures**: Stacks, queues, iterators, and abstract data types.
- **Modules & Libraries**: Usage of `itertools`, `re` for regex, and `numpy` for numerical computations.
- **Advanced Concepts**: Decorators, multithreading, exception handling, and list comprehensions.

### Learning Journey

These notebooks reflect hands-on experimentation, code exercises, and summaries from various learning resources including books, tutorials, and AI guidance. The aim is to solidify concepts through practice.

### Example Code Snippet

```python
# Example: Simple closure

def outer_function(x):
    def inner_function(y):
        return x + y
    return inner_function

add_five = outer_function(5)
print(add_five(10))  # Output: 15
```

### Future Enhancements

- **Add solution notebooks for common coding interview questions**
- **Integrate visualizations for data structures and algorithms**
- **Supplement with video explanations**

Feel free to explore the notebooks and follow along on GitHub!
