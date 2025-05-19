---
layout: default
title: "Projects"
permalink: /projects/
---

<div class="projects-layout">
  <div class="sidebar">
    <img src="/assets/images/bio-photo.png" alt="Ardit Islami">
    <h3>Ardit Islami</h3>
    <p>Mathematics grad with real-world SQL support experience and a passion for Python + AI.</p>
    <p>
      📍 UK<br>
      📧 <a href="mailto:arditislami.pro@gmail.com">Email</a><br>
      💼 <a href="https://linkedin.com/in/ardit-islami">LinkedIn</a><br>
      🐙 <a href="https://github.com/Ardit-Islami">GitHub</a>
    </p>
  </div>

  <div class="projects-content">
    <h2 class="project-grid-title">A Showcase of My Projects</h2>
    <div class="project-grid-wrapper">
      {% for item in site.data.my_manual_projects %}
        <div class="project-tile">
          <a href="{{ item.url }}">
            <div class="tile-image" style="background-image: url('{{ item.image }}');"></div>
            <div class="tile-overlay">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </a>
        </div>
      {% endfor %}
    </div>
  </div>
</div>
