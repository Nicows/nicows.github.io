---
layout: project
title: Smoke and Mirrors
image: /assets/images/smoke-and-mirrors/cover.png
itchio_link: https://xref.itch.io/smoke-and-mirrors
excerpt: "School Project. Point & click narrative game. Solve the murder by talking with the objects that witnessed the
scene."
category: Academic Project
date: 2024-02-01
featured: false
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
        </div>

        <div class="project-description">
            <h2>About the Project</h2>
            <p>{{ page.excerpt }}</p>
            <p>Smoke and Mirrors is a narrative point and click game made by 9 students in 2 weeks. An investigator
                enters the bedroom of a murder victim. The objects in the room are animated. They change state, their
                point of view if the room is lit or not. Talk to them to discover the truth...</p>
            <p><strong>Category:</strong> {{ page.category }}</p>
        </div>
    </div>

    <div class="my-contribution-section">
        <div class="contribution-header">
            <div class="header-icon">
                <i class="fas fa-mask"></i>
            </div>
            <h2>My Contribution</h2>
        </div>
        <div class="contribution-item">
            <p>In construction...</p>
        </div>
    </div>
</div>