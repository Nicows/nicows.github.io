---
layout: project
title: Kourou Space Coop
image: /assets/images/kourou-space-coop/kourou-space-coop.png
itchio_link: https://atsue.itch.io/kourou-space-coop
excerpt: "A cooperative VR game inspired by Ariane 5 rocket launches. Play Kourou Space Coop on itch.io !"
category: Academic Project
date: 2024-06-01
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
            <p><strong>Platform:</strong> VR (Meta Quest 3)<br>
                <strong>Genre:</strong> Cooperative Asymmetric Puzzle<br>
                <strong>Description:</strong> Developed during an internship at Level Up! Agency for the CNES, Kourou
                Space Coop is a tribute to the Ariane 5 launcher missions. Two players must cooperate: one inside the
                launcher using a VR robot, and the other in "Mission Control" providing instructions. The game
                emphasizes communication and immersion in a zero-gravity environment.<br>
            </p>
        </div>
    </div>

    <div class="contribution-item">
        <h2>General Gameplay & Objective</h2>
        <p>Kourou Space Coop is an asymmetric cooperative VR experience where communication is the only way to survive
            the vacuum of space. The game pays tribute to the historic missions of the Ariane 5 launcher while
            challenging players with high-pressure decision-making.</p>

        <div class="feature-detail">
            <h4>An Asymmetric Cooperative Duo</h4>
            <p>The experience is built on two radically different roles:</p>
            <ul>
                <li><strong>The Launcher Pilot:</strong> Immersed in VR inside the Ariane 5 rocket, moving in a
                    zero-gravity environment to manipulate physical modules.</li>
                <li><strong>Mission Control:</strong> Stationed at a high-tech terminal, providing vital instructions
                    and monitoring data that the pilot cannot see.</li>
            </ul>
        </div>

        <div class="feature-detail" style="margin-top: 2rem;">
            <h4>Collaborative Problem Solving</h4>
            <p>Inspired by the logic of <i>Keep Talking and Nobody Explodes</i>, every puzzle requires one player to
                describe what they see while the other interprets data to find the solution. Success depends entirely on
                the clarity of verbal communication under pressure.</p>
        </div>

        <div class="video-grid">
            <div class="video-item">
                <a href="https://www.youtube.com/watch?v=nYbNAVecSB0" class="video-thumbnail-link" target="_blank">
                    <div class="video-thumbnail-wrapper">
                        <img loading="lazy" src="https://img.youtube.com/vi/nYbNAVecSB0/maxresdefault.jpg"
                            alt="Mission Control Gameplay" class="video-thumbnail">
                        <div class="play-overlay">
                            <i class="fas fa-play"></i>
                            <span>Mission Control View</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="video-item">
                <a href="https://www.youtube.com/watch?v=V0opKcLwwQw" class="video-thumbnail-link" target="_blank">
                    <div class="video-thumbnail-wrapper">
                        <img loading="lazy" src="https://img.youtube.com/vi/V0opKcLwwQw/maxresdefault.jpg"
                            alt="Launcher Gameplay" class="video-thumbnail">
                        <div class="play-overlay">
                            <i class="fas fa-play"></i>
                            <span>Launcher Pilot View</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div class="my-contribution-section">
        <div class="contribution-header">
            <div class="header-icon">
                <i class="fas fa-rocket"></i>
            </div>
            <h2>My Contribution</h2>
        </div>

        <div class="contribution-item">
            <h3>Zero-G VR Locomotion System</h3>
            <p>I developed a custom movement system for the player inside the rocket to simulate weightlessness, drawing
                inspiration from simulations like <i>Mission ISS</i>.</p>
            <ul>
                <li><strong>Rigidbody Physics Adaptation:</strong> I adapted the XR Interaction Toolkit to work with a
                    Rigidbody-centered movement. The default toolkit utilized Transform-based movements, which didn't
                    account for inertia. I rewrote the core locomotion scripts to handle physical velocity, allowing
                    players to grab handrails and propel themselves through the launcher.</li>
                <li><strong>Hybrid Controls:</strong> To prevent players from getting stuck in open spaces, I
                    implemented a hybrid system combining Zero-G momentum with horizontal joystick control.</li>
                <li><strong>Anti-Motion Sickness Measures:</strong> Focused on minimizing VR discomfort by giving
                    players agency over their movement through physical interactions.</li>
            </ul>
            <div class="contribution-images">
                <!-- Placeholder: Zero-G Locomotion screenshot or gif -->
                <div class="image-placeholder">Visualizing the Handrail Locomotion</div>
            </div>
        </div>

        <div class="contribution-item">
            <h3>Online Multiplayer & Synchronization</h3>
            <p>I architected the online multiplayer system using modern Unity Cloud services to ensure a seamless
                asymmetric experience.</p>
            <ul>
                <li><strong>Unity Relay & Lobby:</strong> Implemented the connection infrastructure using Relay and
                    Lobby services, facilitating easy matchmaking via room codes.</li>
                <li><strong>State Synchronization (RPCs & NetworkVariables):</strong> Managed the complex
                    synchronization between the two asymmetric roles. I used RPCs (Remote Procedure Calls) for
                    event-based triggers and NetworkVariables to track puzzle states (booleans for levers, floats for
                    frequencies) in real-time.</li>
                <li><strong>Optimized Data Flow:</strong> Since players have different views, I optimized the network
                    traffic by only synchronizing essential object states rather than full physics for every item.</li>
            </ul>
        </div>

        <div class="contribution-item">
            <h3>Collaborative Puzzle Engineering</h3>
            <p>I designed and implemented the technical logic for 5 core puzzles that define the co-op loop:</p>
            <ul>
                <li><strong>Takeoff Sequence:</strong> Developed the countdown logic and player attachment validation
                    system synced with the Mission Control console.</li>
                <li><strong>Separation & Orbit (Dual-Lever):</strong> Engineered a dual-input validation system where
                    both players must hold physical levers in sync, tracked through server-side boolean validation.</li>
                <li><strong>Frequency Calibration:</strong> Created a curve-alignment puzzle where players adjust each
                    other's frequencies using float NetworkVariables, requiring precise verbal communication.</li>
                <li><strong>Simon Says Lights:</strong> A sequence validation system where the rocket player identifies
                    light patterns and describes them to Mission Control for input.</li>
            </ul>
            <div class="contribution-images">
                <!-- Placeholder: Puzzle screenshots (Takeoff, Frequency, etc.) -->
                <div class="image-placeholder">Screenshot of the Collaborative Puzzles in Action</div>
            </div>
        </div>
    </div>

    <!-- Team Section -->
    <div class="team-section">
        <h2>Team</h2>
        <div class="team-grid">
            <div class="team-category">
                <h3>Game Programmers</h3>
                <p>Nicolas KOHLER, Lucas GUICHARD</p>
            </div>
            <div class="team-category">
                <h3>Game Artists</h3>
                <p>Flora DENIS, Morgane HUYNH-PEREZ, Enzo DE CORTE, Melvin LITIERE</p>
            </div>
            <div class="team-category">
                <h3>Game Designers</h3>
                <p>Eliass GODSON, Nicolas COULLIAIS, Noé Henriot</p>
            </div>
        </div>
    </div>
</div>