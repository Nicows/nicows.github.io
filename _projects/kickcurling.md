---
layout: project
title: KickCurling
image: /assets/images/kickcurling/KickCurling.png
itchio_link: https://nicows.itch.io/kickcurling
excerpt: "Made in 2 days in a Gamejam with Curling theme."
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
        <img src="/assets/images/kickcurling/KickCurling_game.gif" alt="{{ page.title }} gameplay" onerror="this.style.display='none'">
      </div>
    </div>
    <div class="project-description">
      <h2>About the Project</h2>
      <p>{{ page.excerpt }}</p>
      <p><strong>Role:</strong> Gamejam developer</p>
      <p><strong>Tech:</strong> Unity, C#</p>
      <h2>Highlights</h2>
      <ul>
        <li>[Add mechanic or team size]</li>
        <li>[Add time constraint note]</li>
      </ul>
    </div>
  </div>
</div>
