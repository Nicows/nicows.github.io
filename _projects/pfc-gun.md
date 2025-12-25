---
layout: project
title: Pierre Feuille Ciseaux Gun
image: /assets/images/pfc-gun/pfc2.jpg
itchio_link: ""
excerpt: "Personal Project. Multiplayer card game made with Photon Unity Network."
category: Personal Project
date: 2022-06-01
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
            <p><strong>Platform:</strong> PC / Desktop<br>
                <strong>Genre:</strong> Multiplayer Card Game / Tactical Arena<br>
                <strong>Description:</strong> {{ page.excerpt }} This project was my first experience developing an
                online multiplayer game entirely on my own. It served as a functional prototype to master real-time
                networking concepts through a strategic Rock-Paper-Scissors framework. While I handled all the
                programming and game design, I collaborated with a family member who helped create the unique hand-drawn
                card illustrations.<br>
            </p>
        </div>
    </div>

    <div class="project-rules-section" style="margin-top: 2rem;" class="contribution-item">
        <h2>Game Rules & Mechanics</h2>
        <div class="rules-grid"
            style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; background: rgba(255, 255, 255, 0.05); padding: 2rem; border-radius: 15px; border: 1px solid rgba(255, 255, 255, 0.1);">
            <div class="rule-item">
                <h3><i class="fas fa-cards"></i> Tactical Card Combat</h3>
                <p>Players compete in real-time rounds using a deck of action cards. Each card represents one of the
                    classic Rock, Paper, or Scissors moves, but with strategic modifiers that can change the outcome of
                    a clash.</p>
            </div>
            <div class="rule-item">
                <h3><i class="fas fa-crosshairs"></i> The "Gun" Mechanic</h3>
                <p>The core of the game revolves around the <strong>Gun card</strong>. This is a high-stakes item that
                    acts like a "hot potato." If you end up with the Gun, you must find a way to pass it to another
                    player through specific card interactions before it's too late!</p>
            </div>
        </div>
    </div>

    <div class="my-contribution-section">
        <div class="contribution-header">
            <div class="header-icon">
                <i class="fas fa-hand-peace"></i>
            </div>
            <h2>My Contributions</h2>
        </div>

        <div class="contribution-item">
            <h3>Solo Multiplayer Development</h3>
            <p>I developed the entire networking layer from scratch, ensuring that the tactical card-based gameplay felt
                responsive and synchronized across different clients. During development, I optimized my workflow by
                running two simultaneous build instances to test the peer-to-peer and client-server interactions in
                real-time.</p>
            <ul>
                <li><strong>Photon PUN 2 Integration:</strong> Implemented the multiplayer infrastructure using Photon
                    Unity Network, focusing on efficient data transmission and room management.</li>
                <li><strong>Networked State Machine:</strong> Developed a robust state system to manage player turns,
                    countdowns, and the critical "reveal" phase where card interactions are calculated globally.</li>
                <li><strong>Real-time Synchronization:</strong> Used Photon RPCs (Remote Procedure Calls) to trigger
                    visual effects and game state changes simultaneously for all players, preventing desynchronization
                    during fast-paced rounds.</li>
            </ul>
        </div>

        <div class="contribution-item">
            <h3>Gameplay Mechanics & Art Integration</h3>
            <p>I designed the interaction systems and successfully integrated the custom art assets into the tactical
                flow of the game.</p>
            <ul>
                <li><strong>Tactical Card Logic:</strong> Engineered the interaction matrix behind the
                    Rock-Paper-Scissors system, including special modifier cards and damage calculations.</li>
                <li><strong>Artistic Implementation:</strong> Handled the technical integration of unique, hand-drawn
                    art assets provided by my family. I developed custom UI systems to display card info dynamically
                    while maintaining the project's distinctive "sketched" aesthetic.</li>
                <li><strong>Win/Loss Calculation:</strong> Implemented the server-authoritative logic to determine the
                    winner of each round based on the hidden card choices, ensuring a cheat-free experience.</li>
            </ul>
        </div>
    </div>

    <div class="project-image" style="margin-top:1rem;">
        <img loading="lazy" src="/assets/images/pfc-gun/pfc-gif.webp" alt="{{ page.title }} gameplay"
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
            <div class="team-category">
                <h3>Card Art</h3>
                <p>Family Member</p>
            </div>
        </div>
    </div>
</div>