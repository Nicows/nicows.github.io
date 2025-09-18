---
layout: project
title: SoloPong
image: /assets/images/solopong/Solopong_Thumbnail.png
store_link: https://play.google.com/store/apps/details?id=com.NicowsGames.SoloPong
excerpt: "SoloPong is inspired by the old game Pong; play against yourself."
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
      <a href="{{ page.store_link }}" class="itchio-button" target="_blank">
        <span>View on Play Store</span>
      </a>
      <div class="project-image" style="margin-top:1rem;">
        <img src="/assets/images/solopong/SoloPong_game.gif" alt="{{ page.title }} gameplay 1" onerror="this.style.display='none'">
      </div>
      <div class="project-image" style="margin-top:1rem;">
        <img src="/assets/images/solopong/SoloPong_gif.gif" alt="{{ page.title }} gameplay 2" onerror="this.style.display='none'">
      </div>
    </div>
    <div class="project-description">
      <h2>About the Project</h2>
      <p>{{ page.excerpt }}</p>
      <p><strong>Role:</strong> Mobile developer</p>
      <p><strong>Tech:</strong> Unity, C#</p>
      <h2>Highlights</h2>
      <ul>
        <li>[Add input or physics detail]</li>
        <li>[Add challenge or mode note]</li>
      </ul>
    </div>
  </div>
</div>
