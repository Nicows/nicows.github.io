---
layout: project
title: Team 27 - Gambling Hell
image: /assets/images/gambling-hell/gambling_hell_title.png
itchio_link: https://valkyriecho.itch.io/gambling-hell
excerpt: "Defend yourself and your gains, and bet and shoot your way through the greedy monsters!"
category: Game Jam
date: 2023-09-01
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
            <p>Made during the "IIM Godfather/Godmother Jam 2023". Our theme was "extravagance". In Gambling Hell,
                defend yourself and your gains, and bet and shoot your way through the greedy monsters who just want to
                get their grubby hands on your hard earned money!</p>
            <p><strong>Category:</strong> {{ page.category }}</p>
        </div>
    </div>

    <div class="my-contribution-section">
        <div class="contribution-header">
            <div class="header-icon">
                <i class="fas fa-dice"></i>
            </div>
            <h2>My Contribution</h2>
            <p class="contribution-subtitle">I worked on calculating the score and implementing all game art assets in
                the game.</p>
        </div>

        <div class="contribution-content">
            <div class="contribution-feature">
                <h3>Gallery</h3>
                <div class="feature-showcase">
                    <div class="feature-item">
                        <div class="feature-image-container">
                            <div class="feature-image">
                                <img src="/assets/images/gambling-hell/gambling_hell_gameplay.png"
                                    alt="Gambling Hell Gameplay">
                            </div>
                            <div class="feature-image">
                                <img src="/assets/images/gambling-hell/gambling_hell_inputs1.jpg"
                                    alt="Gambling Hell Inputs 1">
                            </div>
                            <div class="feature-image">
                                <img src="/assets/images/gambling-hell/gambling_hell_inputs2.jpg"
                                    alt="Gambling Hell Inputs 2">
                            </div>
                            <div class="feature-image">
                                <img src="/assets/images/gambling-hell/gambling_hell_machine.jpg"
                                    alt="Gambling Hell Machine">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Team Section -->
    <div class="team-section">
        <h2>Team</h2>
        <div class="team-grid">
            <div class="team-category">
                <h3>Producing</h3>
                <p>Paul MARTINI</p>
            </div>
            <div class="team-category">
                <h3>Game Programmers</h3>
                <p>Nicolas KOHLER, Nicolas MANACH, Simon HUBERT</p>
            </div>
            <div class="team-category">
                <h3>Game Artists</h3>
                <p>Hugo DOBRENEL, Mehdi HAFFOUDHI</p>
            </div>
            <div class="team-category">
                <h3>Game Designers</h3>
                <p>Gaëtan PERRÉ, Nathan PICKE</p>
            </div>
        </div>
    </div>
</div>