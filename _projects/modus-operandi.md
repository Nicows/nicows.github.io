---
layout: project
title: Modus Operandi
image: /assets/images/modus-operandi/modus_operandi_title.png
itchio_link: https://haethor.itch.io/modus-operandi
excerpt: "School Project. Modus Operandi immerses you in a VR simulation of agoraphobia, complete with its associated
anxieties."
category: Academic Project
date: 2025-01-01
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
            <p>Lost in the crowd, you’re alone despite the multitude. Push your way through this sea of humanity, but
                don’t look back—someone might be following you. Feel the oppressive ambient noise, the suffocating
                proximity of a faceless crowd, the dread of being unable to find an escape, and the creeping paranoia
                that follows.</p>
            <p><strong>Category:</strong> {{ page.category }}</p>
            <p><strong>Tech:</strong> Unreal Engine 5, Oculus Quest 3</p>
        </div>
    </div>
</div>