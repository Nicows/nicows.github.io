---
layout: project
title: Memorize
image: /assets/images/memorize/Memorize.jpg
itchio_link: https://nicows.itch.io/memorize
excerpt: "Reflexion and memory game: remember the path in the darkness."
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
                        <path d="M12 16L6 10L7.41 8.59L12 13.17L16.59 8.59L18 10L12 16Z" fill="currentColor"/>
                    </svg>
                </div>
            </div>
        </div>
        
        <div class="project-description">
            <h2>About the Project</h2>
            <p>{{ page.excerpt }}</p>
            <p><strong>Role:</strong> Solo developer</p>
            <p><strong>Tech:</strong> Unity, C#</p>
        </div>
    </div>
    
    <div class="my-contribution-section">
        In construction...
    </div>
    
    <div class="project-image" style="margin-top:1rem;">
        <img src="/assets/images/memorize/Memorize.gif" alt="{{ page.title }} gameplay" onerror="this.style.display='none'">
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
    
    <!-- WebGL Game Section 
    <div class="webgl-game-section">
        <h2>Play the Game</h2>
        <div class="webgl-container">
            <iframe 
                src="/assets/games/Memorize_0.3.1/index.html" 
                width="100%" 
                height="700" 
                frameborder="0"
                allow="fullscreen; autoplay; encrypted-media"
                style="border-radius: 10px; background: #1a2e1a;">
            </iframe>
        </div>
    </div>-->
    
</div>

<style>
    .webgl-game-section {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 2px solid rgba(255, 255, 255, 0.1);
    }
    
    .webgl-game-section h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2rem;
        color: var(--text-color);
    }
    
    .webgl-container {
        /* Removed backdrop-filter to avoid potential interference with iframe interactions */
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 1rem;
    }
    
    .webgl-container iframe {
        pointer-events: auto; /* Ensure the iframe can receive clicks and interactions */
    }
    
    @media (max-width: 768px) {
        .webgl-container iframe {
        }
    }
</style>
