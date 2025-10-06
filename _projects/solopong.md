---
layout: project
title: SoloPong
image: /assets/images/solopong/Solopong_Thumbnail.png
store_link: https://play.google.com/store/apps/details?id=com.NicowsGames.SoloPong
excerpt: "SoloPong is inspired by the old game Pong; play against yourself."
---

<div class="project-container">
    <!-- Animated background elements -->
    <div class="project-bg-patterns">
        <div class="geometric-pattern"></div>
        <div class="particle-field"></div>
    </div>

    <div class="project-header">
        <h1>{{ page.title }}</h1>
    </div>
    
    <div class="project-content">
        <div class="project-image-container">
            <div class="project-image">
                <img src="{{ page.image }}" alt="{{ page.title }}">
            </div>
            <a href="{{ page.store_link }}" class="itchio-button" target="_blank">
                <div class="itchio-icon">
                    <i class="fab fa-google-play"></i>
                </div>
                <span>View {{ page.title }} on Play Store !</span>
            </a>
            <div class="scroll-indicator">
                <div class="scroll-text">My Contributions</div>
                <div class="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L6 10L7.41 8.59L12 13.17L16.59 8.59L18 10L12 16Z" fill="currentColor"/>
                    </svg>
                </div>
            </div>
        </div>
        
        <div class="project-description">
            <h2>About the Project</h2>
            <p>{{ page.excerpt }}</p>
            <p><strong>Role:</strong> Mobile developer</p>
            <p><strong>Tech:</strong> Unity, C#</p>
        </div>
    </div>
    <div class="my-contribution-section">
        In construction...
    </div>
    <div class="project-image" style="margin-top:1rem;">
        <img src="/assets/images/solopong/SoloPong_game.gif" alt="{{ page.title }} gameplay 1" style="height: 400px; width: auto;" onerror="this.style.display='none'">
    </div>
    <div class="project-image" style="margin-top:1rem;">
        <img src="/assets/images/solopong/SoloPong_gif.gif" alt="{{ page.title }} gameplay 2" style="height: 400px; width: auto;" onerror="this.style.display='none'">
    </div>

    <!-- Team Section -->
    <div class="team-section">
        <h2>Team</h2>
        <div class="team-grid">
            <div class="team-category">
                <h3>Game Programmers</h3>
                <p>Nicolas KOHLER</p>
            </div>
        </div>
    </div>
</div>
