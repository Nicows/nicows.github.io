---
layout: default
title: Contact
---

<div class="contact-container">
    <!-- Animated background elements -->
    <div class="contact-bg-patterns">
        <div class="geometric-pattern"></div>
        <div class="particle-field"></div>
    </div>

    <div class="contact-header">
        <h1>Contact</h1>
    </div>

    <div class="contact-content">
        <div class="contact-info">
            <div class="social-links">
                <a href="https://github.com/Nicows" class="social-link" target="_blank">
                    <div class="social-icon">
                        <i class="fab fa-github"></i>
                    </div>
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/nicolas-kohler/" class="social-link" target="_blank">
                    <div class="social-icon">
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <span>LinkedIn</span>
                </a>
                <a href="https://nicows.itch.io/" class="social-link" target="_blank">
                    <div class="social-icon">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <span>itch.io</span>
                </a>
            </div>

            <div class="personal-info">
                <a href="mailto:contact@nicolaskohler.com" class="info-link">
                    <i class="fas fa-envelope"></i>
                    <span>nicolas.kohler@free.fr</span>
                </a>
                <div class="info-link">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Chelles, Île-de-France, France</span>
                </div>
            </div>

            <div class="cv-section">
                <h2>CV</h2>
                <div class="cv-buttons">
                    <a href="/assets/cv.pdf" class="cv-button" target="_blank">
                        <i class="fas fa-eye"></i>
                        <span>View CV</span>
                    </a>
                    <a href="/assets/cv.pdf" class="cv-button" download>
                        <i class="fas fa-download"></i>
                        <span>Download CV</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /* Contact Page - Completely Redesigned */
    .contact-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
        position: relative;
        min-height: 80vh;
        overflow: hidden;
    }

    /* Animated Background Patterns */
    .contact-bg-patterns {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        pointer-events: none;
    }

    /* Geometric Pattern */
    .geometric-pattern {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(34, 197, 94, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.03) 1px, transparent 1px);
        background-size: 40px 40px;
        animation: pattern-move 40s linear infinite;
    }

    /* Particle Field */
    .particle-field {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(22, 163, 74, 0.1) 1px, transparent 1px);
        background-size: 80px 80px, 120px 120px;
        animation: particle-drift-contact 30s ease-in-out infinite;
    }

    /* Contact Header */
    .contact-header {
        text-align: center;
        margin-bottom: 4rem;
        position: relative;
        z-index: 2;
    }

    .contact-header h1 {
        font-size: 3.5rem;
        background: linear-gradient(45deg, var(--text-color), var(--accent-color), var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-contact 4s ease-in-out infinite;
        margin-bottom: 1rem;
        text-shadow: 0 0 30px rgba(34, 197, 94, 0.3);
    }

    .subtitle {
        font-size: 1.3rem;
        color: var(--text-secondary);
        opacity: 0.9;
    }


    /* Contact Info */
    .contact-info {
        flex: 1;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    /* Social Links */
    .social-links {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .social-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        color: var(--text-secondary);
        padding: 1.5rem;
        border-radius: 15px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        box-shadow: 0 4px 12px var(--shadow-color);
        transition: all 0.3s ease;
        flex: 1;
        min-width: 100px;
    }

    .social-link:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px var(--hover-shadow);
        color: var(--accent-color);
        border-color: var(--accent-color);
    }

    .social-icon {
        font-size: 2rem;
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: linear-gradient(145deg, var(--bg-color), var(--card-bg));
        box-shadow: inset 0 2px 4px var(--shadow-color);
        transition: all 0.3s ease;
    }

    .social-link:hover .social-icon {
        transform: rotate(360deg) scale(1.1);
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    }

    .social-icon i {
        font-size: 1.5rem;
        color: white;
    }

    .social-link span {
        font-weight: 600;
    }

    /* Personal Info Section */
    .personal-info {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 15px;
        padding: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .info-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--text-color);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    a.info-link {
        background: linear-gradient(90deg, #22c55e, #16a34a, #15803d, #166534, #14532d, #052e16, #22c55e);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: rainbow-flow 3s linear infinite;
        font-weight: 600;
    }

    a.info-link:hover {
        text-decoration: underline;
    }

    .info-link i {
        font-size: 1.2rem;
        color: var(--accent-color);
        width: 20px;
        text-align: center;
    }

    /* CV Section */
    .cv-section {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .cv-section h2 {
        text-align: center;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        color: var(--text-color);
    }

    .cv-buttons {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
    }

    .cv-button {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        color: white;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        background: var(--accent-color);
    }

    .cv-button:hover {
        background: var(--accent-hover);
        transform: translateY(-2px);
        box-shadow: 0 6px 15px var(--hover-shadow);
    }

    .cv-button:last-child {
        background: transparent;
        border: 2px solid var(--accent-color);
        color: var(--accent-color);
    }

    .cv-button:last-child:hover {
        background: var(--accent-color);
        color: white;
    }


    /* Animations */
    @keyframes pattern-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(40px, 40px); }
    }

    @keyframes particle-drift-contact {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-15px, -15px); }
    }

    @keyframes text-shimmer-contact {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }

    @keyframes rainbow-flow {
        0% { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .contact-header h1 {
            font-size: 2.5rem;
        }

        .social-links {
            grid-template-columns: 1fr;
        }
    }
</style> 