---
layout: project
title: Reflexion
image: /assets/images/reflexion/Reflexion.png
itchio_link: https://nicows.itch.io/reflexion
excerpt: "Personal Project. Use your reflex and multiplication tables to get the best score."
category: Personal Project
date: 2021-10-01
featured: false
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
                <div class="scroll-text">My Development</div>
                <div class="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L6 10L7.41 8.59L12 13.17L16.59 8.59L18 10L12 16Z" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="project-description">
            <h2>About the Project</h2>
            <p><strong>Platform:</strong> WebGL (Previously Android)<br>
                <strong>Genre:</strong> Educational / Reflex Game<br>
                <strong>Description:</strong> {{ page.excerpt }} Designed to make practicing mathematics engaging,
                Reflexion challenges players to solve multiplication problems under pressure. Originally developed and
                published on the Google Play Store, the game has transitioned to a WebGL experience.<br>
            </p>
        </div>
    </div>

    <div class="my-contribution-section">
        <div class="contribution-header">
            <div class="header-icon">
                <i class="fas fa-lightbulb"></i>
            </div>
            <h2>My Contributions</h2>
        </div>

        <div class="contribution-item">
            <h3>Educational Game Design</h3>
            <p>I developed a progressive learning system that adapts to the player's skill level, making the mastery of
                multiplication tables an interactive experience.</p>
            <ul>
                <li><strong>Learning Path (Levels 1-10):</strong> Each level focuses on a specific multiplication table,
                    allowing students to practice and master them one by one.</li>
                <li><strong>Dynamic Infinite Mode:</strong> A survival-style mode where problems from different tables
                    appear randomly. This mode is designed for advanced players to test their speed and accuracy for the
                    highest possible score.</li>
                <li><strong>Variable Difficulty Tiers:</strong> Implemented a timing system providing three levels of
                    challenge:
                    <ul>
                        <li><strong>Slow:</strong> 10 seconds to answer.</li>
                        <li><strong>Normal:</strong> 5 seconds to answer.</li>
                        <li><strong>Fast:</strong> 2 seconds to answer.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="contribution-item">
            <h3>Mobile Optimization & User Experience</h3>
            <p>As the sole developer, I handled the entire technical pipeline for the Android release.</p>
            <ul>
                <li><strong>Avatar System:</strong> Integrated a collection of 21 original unlockable avatars to
                    encourage player retention and provide a sense of progression.</li>
                <li><strong>Touch Interface Logic:</strong> Optimized the input system for quick response times on
                    mobile devices, crucial for the "Fast" difficulty setting.</li>
                <li><strong>Play Store Integration:</strong> Managed the build process, UI scaling for various Android
                    devices, and the final publication to the Google Play Store.</li>
            </ul>
        </div>
    </div>

    <div class="project-image" style="margin-top:1rem;">
        <img loading="lazy" src="/assets/images/reflexion/Reflexion_game.gif" alt="{{ page.title }} gameplay"
            onerror="this.style.display='none'">
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