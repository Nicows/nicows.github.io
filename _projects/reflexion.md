---
layout: project
title: Reflexion
image: /assets/images/reflexion/Reflexion.png
itchio_link: https://nicows.itch.io/reflexion
excerpt: "Use your reflex and multiplication tables to get the best score."
---

<div class="project-container">
  <div class="project-header">
    <h1>{{ page.title }}</h1>
  </div>
  <div class="project-content">
    <div class="project-image-container">
      <div class="project-image">
        <img src="{{ page.image }}" alt="{{ page.title }}">
      </div>
      <a href="{{ page.itchio_link }}" class="itchio-button" target="_blank">
        <span>Play on itch.io</span>
      </a>
      <div class="project-image" style="margin-top:1rem;">
        <img src="/assets/images/reflexion/Reflexion_game.gif" alt="{{ page.title }} gameplay" onerror="this.style.display='none'">
      </div>
    </div>
    <div class="project-description">
      <h2>About the Project</h2>
      <p>{{ page.excerpt }}</p>
      <p><strong>Role:</strong> Mobile developer</p>
      <p><strong>Platform:</strong> Android (Play Store)</p>
      <h2>Highlights</h2>
      <ul>
        <li>[Add scoring or gameplay note]</li>
        <li>[Add publishing or store-related note]</li>
      </ul>
    </div>
  </div>
</div>
