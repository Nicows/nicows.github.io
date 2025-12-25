---
layout: project
title: Kintsugi
image: /assets/images/kintsugi/kintsugi_title.webp
excerpt: "Master Project"
category: Academic Project
date: 2025-11-30
featured: true
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
            <!-- <a href="{{ page.itchio_link }}" class="itchio-button" target="_blank">
                <div class="itchio-icon">
                    <i class="fab fa-itch-io"></i>
                </div>
                <span>Play {{ page.title }} on Steam !</span>
            </a> -->
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
            <p><strong>Platform:</strong> PC<br>
                <strong>Genre:</strong> Contemplative platformer<br>
                <strong>Description:</strong> Project gold to bring life and repair a destroyed world inspired by the
                famous Japanese art of Kintsugi.<br>
                Find yourself in mythological feudal Japan afflicted by a curse that transforms individuals into gold as
                retribution for their greed. <br>
                <strong>Download</strong> <a class="download-link">Soon on Steam</a>
            </p>
        </div>
    </div>
    <div class="my-contribution-section">
        <div class="contribution-header">
            <div class="header-icon">
                <i class="fas fa-wand-magic-sparkles"></i>
            </div>
            <h2>My Contributions</h2>
        </div>

        <div class="contribution-item">
            <h3>First Year: Mechanics & Prototypes</h3>
            <p>During the initial phase of <strong>Kintsugi</strong>, my focus was on prototyping some core mechanics
                that
                would define the gameplay experience.</p>

            <div class="feature-detail">
                <h4>Wind Gameplay Research</h4>
                <p>I helped develop a wind-based puzzle mechanic, which required balancing procedural
                    forces with a character controller still in active development. This role demanded constant
                    synchronization with the person developping the character controller to ensure
                    consistent movement physics.</p>
                <div class="contribution-images">
                    <img loading="lazy" src="/assets/images/kintsugi/wind_prototype1.webp" alt="Wind Prototype 1">
                    <img loading="lazy" src="/assets/images/kintsugi/wind_prototype2.webp" alt="Wind Prototype 2">
                </div>
            </div>

            <div class="feature-detail" style="margin-top: 2rem;">
                <h4>Iterative Gold Shot Development</h4>
                <p>I was responsible for the core USP—the <strong>Gold Shot</strong>. I worked through multiple
                    iterations to align with the evolving vision of game designers and the technical implementation from
                    our artists, ensuring the gold infusion mechanic felt fluid and rewarding.</p>
                <div class="contribution-images">
                    <img loading="lazy" src="/assets/images/kintsugi/Kintsugi_iteration_goldshot-gif.webp"
                        alt="Gold Shot Iteration">
                </div>
            </div>
        </div>

        <div class="contribution-item">
            <h3>Custom Productivity Tools</h3>
            <p>To streamline the team's workflow, I developed a suite of custom Unity Editor tools dedicated to level
                design and debugging.</p>
            <div class="tool-showcase">
                <div class="tool-description">
                    <h4>Sequencer & Collider Searcher</h4>
                    <p>I built an editor tool that allowed designers to search and filter for interactive sequencers and
                        their associated colliders across all scenes. This significantly reduced the time spent on
                        manual scene traversal and level debugging.</p>
                </div>
                <img loading="lazy" src="/assets/images/kintsugi/sequencer_tool_gif.webp" alt="Sequencer Tool"
                    class="tool-gif">
            </div>
            <div class="tool-showcase invert">
                <div class="tool-description">
                    <h4>Teleportation System</h4>
                    <p>A multi-mode teleportation tool designed to help the team navigate large scenes quickly. It
                        supported both standard spawn points and custom coordinate management via ScriptableObjects,
                        allowing for "drag & drop" coordinate capture.</p>
                </div>
                <img loading="lazy" src="/assets/images/kintsugi/teleporter_tool_gif.webp" alt="Teleporter Tool"
                    class="tool-gif">
            </div>
        </div>

        <div class="contribution-item">
            <h3>Second Year: Architecture & Polish</h3>
            <ul>
                <li><strong>Systems Refactoring:</strong> As the project scaled, I led the refactoring of the
                    <strong>Gold Shot</strong> system. We were lacking in gameplay features during our first year, so we
                    went full prototyping at the start of the second year.
                    Since we knew that we would need to add these new features, we decided to go full refactoring of the
                    original monolithic script into modular
                    components managed by a centralized intermediary, I improved codebase maintainability and allowed
                    for easier expansion of gameplay features.
                </li>
                <li><strong>Lead Debugging:</strong> During the final polish sprint, I took on a lead role in bug
                    resolution. I found a great deal of satisfaction in deep-diving into complex issues, analyzing root
                    causes, and implementing fixes to ensure a seamless final product.</li>
            </ul>
        </div>
    </div>

    <!-- Team Section -->
    <div class="team-section">
        <h2>Team</h2>
        <div class="team-grid">
            <div class="team-category">
                <h3>Producers</h3>
                <p>Alessandro, Vincent</p>
            </div>
            <div class="team-category">
                <h3>Game Programmers</h3>
                <p>Maxime, Tom, Nicolas, Leo, Justin</p>
            </div>
            <div class="team-category">
                <h3>Game Artists</h3>
                <p>Alizee, Paul, Enzo, Matteo</p>
            </div>
            <div class="team-category">
                <h3>Game Designers</h3>
                <p>Paul, Nathan, Lucas, Aloïs</p>
            </div>
            <div class="team-category">
                <h3>Sound Designer</h3>
                <p>Thomas, Jérémy, Jolan</p>
            </div>
        </div>
    </div>
</div>