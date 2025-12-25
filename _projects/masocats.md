---
layout: project
title: Masocats
image: /assets/images/masocats/Masocats_logo.webp
itchio_link: https://slukor.itch.io/masocats
excerpt: "School Project. Be the first one to suffer the most for the fame."
category: Academic Project
date: 2023-12-01
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
                <div class="scroll-text">My Contribution</div>
                <div class="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L6 10L7.41 8.59L12 13.17L16.59 8.59L18 10L12 16Z" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="project-description">
            <h2>About the Project</h2>
            <p><strong>Platform:</strong> PC (Local Multiplayer 2-4 players)<br>
                <strong>Genre:</strong> Arena Fighting / Masochistic Party Game<br>
                <strong>Description:</strong> {{ page.excerpt }} You play as a masochistic bodybuilder cat in a match
                where pain and suffering are the keys to success. Be the first to emerge victorious as the KO champion
                by taking as much damage as possible!<br>
                <strong>Status:</strong> Released on Itch.io
            </p>
        </div>
    </div>

    <div class="contribution-item">
        <h2>General Gameplay</h2>
        <p>Masocat is a fast-paced local multiplayer arena where players must navigate chaotic environments filled with
            traps and items. The primary goal is to reach a damage threshold as quickly as possible, turning traditional
            combat logic on its head.</p>

        <div class="feature-detail">
            <h4>Slapping & "Protection"</h4>
            <p>Players can slap each other to push opponents away from traps (ironically "protecting" them to prevent
                them from winning) or use items to annoy and disrupt their movements.</p>
        </div>

        <div class="video-container">
            <a href="https://www.youtube.com/watch?v=q2qsSUEFfcI" target="_blank" class="video-thumbnail-link">
                <div class="video-thumbnail-wrapper">
                    <img src="/assets/images/masocats/Masocats_logo.webp" alt="Watch Trailer" class="video-thumbnail">
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                        <span>Watch Trailer on YouTube</span>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="my-contribution-section">
        <h2>My Contribution</h2>

        <div class="contribution-item">
            <h3>Arena Mechanics: Traps & Bumpers</h3>
            <p>In a game where taking damage is the goal, the environment plays a crucial role. I developed the core
                interactive elements of the arenas to ensure varied and dynamic gameplay.</p>

            <div class="feature-detail">
                <h4>Dynamic Traps</h4>
                <p>I implemented a modular trap system that allows for easy integration of different types of hazards
                    across the 5 arenas. These traps are designed to punish (or in this case, reward) player positioning
                    with varying intensities of "pain".</p>
                <div class="contribution-images">
                    <img loading="lazy" src="/assets/images/masocats/Masocat_wreckingball.webp"
                        alt="Wrecking Ball Trap">
                    <img loading="lazy" src="/assets/images/masocats/Masocat_turret.webp" alt="Turret Trap">
                    <img loading="lazy" src="/assets/images/masocats/Masocat_explosive_mouse.webp"
                        alt="Explosive Mouse Mechanic">
                </div>
            </div>

            <div class="feature-detail" style="margin-top: 2rem;">
                <h4>Physics-Based Bumpers</h4>
                <p>To keep the combat fluid and chaotic, I created physics-based bumpers. They react to player
                    collisions by applying precise forces, pushing cats into hazards or away from safety, adding a layer
                    of tactical movement to the madness.</p>
                <div class="contribution-images">
                    <img loading="lazy" src="/assets/images/masocats/Masocat_bumper_hell.webp"
                        alt="Bumper Hell Arena Section">
                </div>
            </div>
        </div>

        <div class="contribution-item">
            <h3>Items & Power-ups System</h3>
            <p>I developed a robust item system designed for scalability and ease of use by the design team.</p>
            <ul>
                <li><strong>ScriptableObjects Data Management:</strong> I used Unity's ScriptableObjects to define item
                    behaviors, damage values, and visual effects. This architecture allowed Game Designers to create and
                    balance new items or modify existing ones directly in the Inspector without touching a single line
                    of code.</li>
                <li><strong>Modular Architecture:</strong> The system supports a wide range of effects, from movement
                    speed boosts to area-of-effect damage, making it easy to iterate on new gameplay mechanics.</li>
            </ul>
            <div class="contribution-images">
                <img loading="lazy" src="/assets/images/masocats/Masocat_powerup_items.webp"
                    alt="Masocat Powerup Items">
            </div>
        </div>

        <div class="contribution-item">
            <h3>Game Flow & States</h3>
            <p>I was responsible for managing the overall game logic, ensuring a seamless transition between different
                phases of the match.</p>
            <ul>
                <li><strong>State Machine Implementation:</strong> Developed a robust game state manager to handle
                    transitions from the lobby to the countdown, active gameplay, and the final "Victory through
                    Suffering" screen.</li>
                <li><strong>Local Multiplayer Synchronization:</strong> Managed the logic for multiple player inputs and
                    score tracking, ensuring the first cat to reach the damage threshold is correctly identified as the
                    winner.</li>
                <li><strong>Arena Management:</strong> Handled the initialization and reset states for the different
                    arenas, facilitating rapid rematches between players.</li>
            </ul>
        </div>

        <div class="contribution-item">
            <h3>In-Game UI & User Experience</h3>
            <p>I designed and implemented the game's user interface to match the high-energy, humorous aesthetic of
                the project.</p>
            <ul>
                <li><strong>Dynamic HUD:</strong> Created a responsive Heads-Up Display that tracks each player's
                    damage level and identifies the current leader in real-time.</li>
                <li><strong>Menu Architecture:</strong> Built the navigation system for the main menu and character
                    selection, ensuring a smooth transition into the game.</li>
                <li><strong>Victory Feedback:</strong> Implemented the end-game screens and visual cues that
                    celebrate the "KO Champion" with style.</li>
            </ul>
            <div class="contribution-images" style="margin-top: 2rem;">
                <img loading="lazy" src="/assets/images/masocats/Masocat_win_tombstone.webp" alt="Victory UI Screen">
            </div>
        </div>
    </div>

    <!-- Team Section -->
    <div class="team-section">
        <h2>Team</h2>
        <div class="team-grid">
            <div class="team-category">
                <h3>Game Programming</h3>
                <p>Nicolas KOHLER, Hugo PETIT-VILLARD, Yanis ROJANO</p>
            </div>
            <div class="team-category">
                <h3>Game Design</h3>
                <p>Maxime CHAMPROUX, Lucas NAUDIN, Scotty FERMIN</p>
            </div>
            <div class="team-category">
                <h3>Game Art</h3>
                <p>Enzo DE CORTE, Chaher HIMAYA, Galadriel LAVASIER</p>
            </div>
            <div class="team-category">
                <h3>Sound Design</h3>
                <p>Solène FALK, Elise CABROL, Damien PAILLOT</p>
            </div>
        </div>
    </div>
</div>