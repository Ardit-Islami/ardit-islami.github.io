---
title: "My Projects Showcase"
permalink: /projects/
<<<<<<< HEAD
layout: single # Or any layout that gives you a clean page structure
author_profile: true # Or false, depending on preference
published: true # Important for GHA
=======
published: true
>>>>>>> 4b4127380842515b9a2a78fb466d048a6c7fdf8a
---

Here are some of the projects I've been working on:

<div class="project-list-manual">
{% for project_item in site.data.my_manual_projects %}
  <div class="project-card">
    {% if project_item.teaser %}
      <a href="{{ project_item.url | relative_url }}">
        <img src="{{ project_item.teaser | relative_url }}" alt="Teaser image for {{ project_item.title }}">
      </a>
    {% endif %}
    <h2><a href="{{ project_item.url | relative_url }}">{{ project_item.title }}</a></h2>
    <p>{{ project_item.excerpt }}</p>
    {% if project_item.tags %}
      <p class="page__meta"><strong><i class="fas fa-fw fa-tags" aria-hidden="true"></i> Tags: </strong> <span itemprop="keywords">
        {% for tag in project_item.tags %}
          <a href="#" rel="tag">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </span></p>
    {% endif %}
    <p><a href="{{ project_item.url | relative_url }}" class="btn btn--inverse">View Project Details</a></p>
  </div>
{% endfor %}
</div>

<style>
/* Basic styling for the cards - you can refine this or use theme classes */
.project-list-manual .project-card {
  border: 1px solid #eee;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.project-list-manual .project-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
