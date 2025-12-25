---
layout: project
title: Memorize
image: /assets/images/memorize/Memorize.webp
itchio_link: https://nicows.itch.io/memorize
excerpt: "Personal Project. Reflexion and memory game: remember the path in the darkness."
category: Personal Project
date: 2022-12-01
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
            <div class="project-buttons">
                <a href="{{ page.itchio_link }}" class="itchio-button" target="_blank">
                    <div class="itchio-icon">
                        <i class="fab fa-itch-io"></i>
                    </div>
                    <span>Play on itch.io !</span>
                </a>
                <a href="#play-now" class="play-now-button">
                    <div class="itchio-icon">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <span>Play also here !</span>
                </a>
            </div>
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
            <p><strong>Platform:</strong> WebGL / PC<br>
                <strong>Genre:</strong> Memory & Reflexion<br>
                <strong>Description:</strong> {{ page.excerpt }}<br>
                <strong>Status:</strong> Released on Itch.io
            </p>
        </div>
    </div>

    <div class="my-contribution-section">
        <h2>My Development Process</h2>

        <div class="contribution-item">
            <h3>Core Game Loop & Memory Mechanic</h3>
            <p>As a solo developer, I designed and implemented the central "Memorize & Move" loop. The player is briefly
                shown a path which then disappears, requiring them to navigate solely from memory.</p>

            <div class="feature-detail">
                <h4>Grid-Based Movement System</h4>
                <p>I developed a C# system to handle precise tile-by-tile movements. The challenge was ensuring that the
                    player's inputs were correctly queued and executed, even when the visual path was hidden, to
                    maintain a fair but challenging experience.</p>
            </div>

            <div class="feature-detail" style="margin-top: 2rem;">
                <h4>Atmosphere & Visual Feedback</h4>
                <p>To enhance the "memory" aspect, I worked on a minimalist visual style. Using Unity's lighting and
                    transparency systems, I created a "darkness" effect that smoothly transitions between the
                    memorization phase and the blind navigation phase.</p>
                <div class="contribution-images">
                    <img loading="lazy" src="/assets/images/memorize/Memorize-gameplay.webp" alt="Memorize Gameplay">
                </div>
            </div>
        </div>

        <div class="contribution-item">
            <h3>Custom Gameplay Mechanics</h3>
            <p>I expanded the core memory loop with variety of interactive elements to deepen the puzzle complexity:</p>
            <ul class="mechanics-list">
                <li><span style="color: #fbbf24; font-weight: bold;">● Yellow Points:</span> Teleportation nodes that
                    transport the player across the grid.</li>
                <li><span style="color: #60a5fa; font-weight: bold;">● Blue Points:</span> Key points used to unlock
                    doors blocking the path.</li>
                <li><span style="color: #f87171; font-weight: bold;">● Red Zones:</span> Death zones that trigger an
                    immediate level restart upon contact.</li>
                <li><span style="color: #9ca3af; font-weight: bold;">● Grey Points:</span> Intersections that define
                    path branches.</li>
                <li><span style="color: #c084fc; font-weight: bold;">● Purple Points:</span> Activation nodes that can
                    trigger or toggle intersections.</li>
                <li><span style="color: #4ade80; font-weight: bold;">● Green Points:</span> The goal and end point of
                    each level.</li>
            </ul>
        </div>

        <div class="contribution-item">
            <h3>In-Game Level Editor</h3>
            <p>To facilitate content creation and allow for rapid iteration, I developed a custom **Level Editor**
                directly within Unity. This tool allows for the placement of various mechanic nodes and the definition
                of the memorization path, which can then be saved and loaded dynamically.</p>
            <div class="tool-showcase invert">
                <div class="tool-description">
                    <h4>Persistence & Scalability</h4>
                    <p>The editor supports saving levels in a structured format, enabling a large variety of challenges
                        without increasing build size. It was a key step in implementing the progressive difficulty
                        curve of the game.</p>
                </div>
                <img loading="lazy" src="/assets/images/memorize/memorize_level_editor.webp" alt="Level Editor Tool"
                    class="tool-gif">
            </div>
        </div>
    </div>

    <!-- Team Section -->
    <div class="team-section">
        <h2>Team</h2>
        <div class="team-grid">
            <div class="team-category">
                <h3>Developer</h3>
                <p>Nicolas KOHLER</p>
            </div>
            <div class="team-category">
                <h3>Music</h3>
                <p>Komiku ("Night Owl")</p>
            </div>
        </div>
    </div>

</div>

<!-- WebGL Game Section -->
<div class="webgl-game-section" id="play-now">
    <h2>Play the Game</h2>
    <div class="webgl-container">
        <iframe src="/assets/games/Memorize_0.3.1/index.html" allow="fullscreen; autoplay; encrypted-media">
        </iframe>
    </div>
</div>