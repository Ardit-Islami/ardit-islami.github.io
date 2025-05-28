---
layout: default
title: "Projects"
permalink: /projects/
---

<div class="page-container">
  <div class="main-wrapper">
    <aside class="sidebar">
      <img src="/assets/images/bio-photo.png" alt="Ardit Islami" class="bio-photo">
      <h3>Ardit Islami</h3>
      <p>Mathematics grad with real-world SQL support experience and a passion for Python + AI.</p>
      <p>
        📍 UK<br>
        📧 <a href="mailto:arditislami.pro@gmail.com">Email</a><br>
        💼 <a href="https://linkedin.com/in/ardit-islami">LinkedIn</a><br>
        🐙 <a href="https://github.com/Ardit-Islami">GitHub</a>
      </p>
    </aside>
    <div class="content-column">
      <div class="about-spacer"></div>
      <div class="projects-content-container">
      <h1 class="projects-main-title">A Showcase of My Projects</h1>
        <section class="project-section">
          <h2 class="project-category-title">🤖 AI + Data</h2>
          <div class="project-grid-wrapper scrollable">
            {% for item in site.data.projects_ai %}
              {% include project_card.html item=item %}
            {% endfor %}
          </div>
        </section>
        <section class="project-section">
          <h2 class="project-category-title">🐍 Python Basics</h2>
          <div class="project-grid-wrapper scrollable">
            {% for item in site.data.projects_python %}
              {% include project_card.html item=item %}
            {% endfor %}
          </div>
        </section>
        <section class="project-section" data-type="viz">
          <h2 class="project-category-title">📊 Data Visualisation</h2>
          <div class="project-grid-wrapper scrollable">
            {% for item in site.data.projects_viz %}
              {% include project_card.html item=item %}
            {% endfor %}
          </div>
        </section>
      </div>
    </div>
  </div>
</div>