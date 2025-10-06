---
layout: project
title: Kintsugi
image: /assets/images/kintsugi/kintsugi_title.png
excerpt: "Master Project"
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
            <p><strong>Platform:</strong> PC<br>
            <strong>Genre:</strong> Contemplative platformer<br>
            <strong>Description:</strong>  Project gold to bring life and repair a destroyed world inspired by the famous Japanese art of Kintsugi.<br>
            Find yourself in mythological feudal Japan afflicted by a curse that transforms individuals into gold as retribution for their greed. <br>
            <strong>Download</strong> <a href="" class="download-link">Soon on itch.io</a></p> 
        </div>
    </div>
    <div class="my-contribution-section">
        In construction...
    </div>
    <div class="project-image" style="margin-top:1rem;">
        <img src="/assets/images/kintsugi/Anim_Idle.gif" alt="{{ page.title }} gameplay 1" onerror="this.style.display='none'">
    </div>
    <!-- My Contribution Section
    <div class="my-contribution-section">
        <div class="contribution-header">
            <h2>My Contribution</h2>
            <p class="contribution-subtitle">As a Game Programmer on the project, I leveraged Meta's official SDK to harness the full potential of the Meta Quest 3 headset, implementing core cooperative gameplay features that define the player experience.</p>
        </div>
        
        <div class="contribution-content">
            <div class="contribution-feature">
                <h3>Asymmetric VR Gameplay Features</h3>
                <p>My primary focus was on creating engaging, asymmetric puzzles that required clear communication between the two players. This involved implementing distinct mechanics and interfaces for the player in the rocket and the player in the command center.</p>
                
                <div class="feature-showcase">
                    <div class="puzzle-feature">
                        <h4>The Valves Puzzle</h4>
                        <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <h6>Launcher View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouValves1.png" alt="Valves view from inside the rocket">
                            </div>
                            <div class="puzzle-image">
                                <h6>Command Center View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouValves2.png" alt="Pressure gauges in the command center">
                            </div>
                        </div>
                        <p>The player inside the launcher must turn three separate valves, while the command center player monitors pressure gauges and provides instructions on when to start and stop turning to prevent a system overload.</p>
                    </div>
                    
                    <div class="puzzle-feature">
                        <h4>The Password Puzzle</h4>
                         <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <h6>Launcher View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouPassword1.png" alt="Tablet with abstract symbols">
                            </div>
                            <div class="puzzle-image">
                                <h6>Command Center View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouPassword2.png" alt="Hidden keyboard for password entry">
                            </div>
                        </div>
                        <p>The launcher player finds a tablet with bizarre, abstract symbols and must describe them to the command center player, who first has to find a hidden keyboard to input the correct sequence. This intentionally chaotic design leads to hilarious misunderstandings.</p>
                    </div>
                    
                    <div class="puzzle-feature">
                        <h4>The Fuses Puzzle</h4>
                        <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <h6>Launcher View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouFuses1.png" alt="Fusebox with multiple slots">
                            </div>
                            <div class="puzzle-image">
                                <h6>Command Center View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouFuses2.png" alt="Wall of indicator lights for fuses">
                            </div>
                        </div>
                        <p>The launcher player must place fuses into a fusebox with many possible slots. The command center player sees a corresponding wall of lights, which turn green for a correct placement and red for an incorrect one, forcing precise communication to solve the puzzle.</p>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- Team Section -->
    <div class="team-section">
        <h2>Team</h2>
        <div class="team-grid">
            <div class="team-category">
                <h3>Producer</h3>
                <p>Alessandro</p>
            </div>
            <div class="team-category">
                <h3>Game Programmers</h3>
                <p>Maxime, Tom, Nicolas, Leo</p>
            </div>
            <div class="team-category">
                <h3>Game Artists</h3>
                <p>Alizee, Paul, Enzo</p>
            </div>
            <div class="team-category">
                <h3>Game Designers</h3>
                <p>Paul, Nathan, Lucas, Aloïs</p>
            </div>
            <div class="team-category">
                <h3>Sound Designer</h3>
                <p>Thomas</p>
            </div>
        </div>
    </div>
</div>