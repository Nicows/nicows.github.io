---
layout: project
title: Team 30 - Tavern & Trials
image: /assets/images/tavern-trials/cover.png
itchio_link: https://haethor.itch.io/tavern-trials
excerpt: "Invite all your friends to judge the fates of two criminals of a mystical realm in a TV show style!"
category: Game Jam
date: 2024-09-01
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
        </div>

        <div class="project-description">
            <h2>About the Project</h2>
            <p>{{ page.excerpt }}</p>
            <p>Join the crowd of a tavern trying to judge cases to make your town peaceful again! Take part in the fate
                of two convicts and choose the fate of the one you find guilty! This game puts two players into the skin
                of “maybe-criminals” against a crowd of people and a presenter.</p>
            <p><strong>Category:</strong> {{ page.category }}</p>
        </div>
    </div>
</div>