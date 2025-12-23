---
layout: project
title: KickCurling
image: /assets/images/kickcurling/KickCurling.png
itchio_link: https://nicows.itch.io/kickcurling
excerpt: "Made in 2 days in a Gamejam with Curling theme."
category: Game Jam
date: 2021-11-01
hidden: true
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
                <img loading="lazy" src="{{ page.image }}" alt="{{ page.title }}">
            </div>
            <a href="{{ page.itchio_link }}" class="itchio-button" target="_blank">
                <div class="itchio-icon">
                    <i class="fab fa-itch-io"></i>
                </div>
                <span>Play {{ page.title }} on itch.io !</span>
            </a>
            <div class="scroll-indicator">
                <div class="scroll-text">My Contributions</div>
                <div class="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L6 10L7.41 8.59L12 13.17L16.59 8.59L18 10L12 16Z" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="project-description">
            <h2>About the Project</h2>
            <p>{{ page.excerpt }}</p>
            <p><strong>Role:</strong> Gamejam developer</p>
            <p><strong>Tech:</strong> Unity, C#</p>
        </div>
    </div>
    <div class="my-contribution-section">
        In construction...
    </div>
    <div class="project-image" style="margin-top:1rem;">
        <img loading="lazy" src="/assets/images/kickcurling/KickCurling_game.gif" alt="{{ page.title }} gameplay"
            style="height: 400px; width: auto;" onerror="this.style.display='none'">
    </div>

    <!-- Team Section -->
    <div class="team-section">
        <h2>Team</h2>
        <div class="team-grid">
            <div class="team-category">
                <h3>Developer</h3>
                <p>Nicolas KOHLER</p>
            </div>
        </div>
    </div>
</div>