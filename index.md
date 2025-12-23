---
layout: default
title: Welcome
---

<div class="hero full-bleed">
  <!-- Animated background elements -->
  <div class="hero-bg-patterns">
    <div class="geometric-grid"></div>
    <div class="particle-field"></div>
    <div class="wave-overlay"></div>
  </div>

  <div class="hero-content">
    <h1>Nicolas Kohler</h1>
    <p class="subtitle">Game Programmer (Unity, C#) • Gameplay & Tools</p>
    <div class="cta-buttons">
      <a href="#projects" class="cta-button primary">View Projects</a>
      <a href="/contact" class="cta-button secondary">Contact Me</a>
    </div>
  </div>
</div>

<section id="about" class="about-section full-bleed fade-in-up">
  <div class="about-content">
    <h2>About Me</h2>
    <p>I am currently seeking an internship starting in February 2026, and I am ready to fully commit to game
      development with a studio that values trust and collaboration.</p>
    <p>Currently pursuing my second year of a Master’s degree in Game Programming, I have spent the last three years
      deepening my expertise in C# and Unity through various team projects. These experiences have given me a
      comprehensive understanding of different game development disciplines and the ability to collaborate effectively
      within multi-disciplinary teams.</p>
    <p>I am particularly interested in the future of video games and how AI tools can enhance player experiences, such
      as through advanced quest systems or dynamic dialogues.</p>
    <p>What can I bring to your team? My dedication, autonomy, and a strong capacity for analytical thinking and
      problem-solving.</p>
    <p>I was self-taught on the Unity engine before entering my current school, during which time I earned the <a
        href="https://www.credly.com/badges/282ed788-9d3d-4c4c-9ef6-2e090682233d" target="_blank"
        style="color: var(--accent-color); text-decoration: underline;"><strong>Unity Certified Associate:
          Programmer</strong></a> certification.</p>
  </div>
</section>

<section id="projects" class="projects-section full-bleed">
  <div class="project-grid-container">
    <h2 class="section-title">Projects</h2>
    <div class="project-grid">
      {% assign projects = site.projects | where: "category", "Project" | where_exp: "item", "item.hidden != true" |
      sort: "date" | reverse %}
      {% for project in projects %}
      {% if project.featured %}
      <a href="{{ project.url | relative_url }}" class="project-card-link featured-project">
        <div class="project-card featured">
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-card-bg"
            loading="lazy">
          <div class="project-card-content">
            <h3 class="project-card-title">{{ project.title }}</h3>
            <p class="project-card-excerpt">{{ project.excerpt }}</p>
          </div>
        </div>
      </a>
      {% endif %}
      {% endfor %}

      {% for project in projects %}
      {% unless project.featured %}
      <a href="{{ project.url | relative_url }}" class="project-card-link">
        <div class="project-card">
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-card-bg"
            loading="lazy">
          <div class="project-card-content">
            <h3 class="project-card-title">{{ project.title }}</h3>
            <p class="project-card-excerpt">{{ project.excerpt }}</p>
          </div>
        </div>
      </a>
      {% endunless %}
      {% endfor %}
    </div>

    <h2 class="section-title" style="margin-top: 4rem;">Game Jams</h2>
    <div class="project-grid">
      {% assign gamejams = site.projects | where: "category", "Game Jam" | where_exp: "item", "item.hidden != true" |
      sort: "date" | reverse %}
      {% for project in gamejams %}
      <a href="{{ project.url | relative_url }}" class="project-card-link">
        <div class="project-card">
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-card-bg"
            loading="lazy">
          <div class="project-card-content">
            <h3 class="project-card-title">{{ project.title }}</h3>
            <p class="project-card-excerpt">{{ project.excerpt }}</p>
          </div>
        </div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>

<section id="skills" class="skills-section">
  <h2 class="section-title">My Skills</h2>
  <div class="skills-grid">
    <div class="skill-category">
      <h3>Technical Skills</h3>
      <div class="skills--sub-category">
        <h4>Languages</h4>
        <div class="skills-container">
          <span class="skill-badge core-skill">C#</span>
        </div>
      </div>
      <div class="skills-sub-category">
        <h4>Game Engines</h4>
        <div class="skills-container">
          <span class="skill-badge core-skill">Unity</span>
        </div>
      </div>
      <div class="skills-sub-category">
        <h4>Tools & Platforms</h4>
        <div class="skills-container">
          <span class="skill-badge">Jira</span>
          <span class="skill-badge">Github</span>
          <span class="skill-badge">Trello</span>
          <span class="skill-badge">Fork</span>
          <span class="skill-badge">JetBrains Rider</span>
        </div>
      </div>
    </div>
    <div class="skill-category">
      <h3>Soft Skills</h3>
      <div class="skills-container">
        <span class="skill-badge">Design Thinking</span>
        <span class="skill-badge">Problem Solving</span>
        <span class="skill-badge">Resolving Bugs</span>
        <span class="skill-badge">Team Collaboration</span>
        <span class="skill-badge">Agile Methodologies</span>
      </div>
    </div>
  </div>
</section>



<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => scrollObserver.observe(el));

    // Staggered fade-in for skills
    const skillBadges = document.querySelectorAll('.skill-badge');
    const skillObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    skillBadges.forEach((badge, index) => {
      badge.style.transitionDelay = `${index * 100}ms`;
      skillObserver.observe(badge);
    });

    // Carousel functionality
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
      const slides = Array.from(carouselTrack.children);
      const prevButton = document.querySelector('.carousel-button.prev');
      const nextButton = document.querySelector('.carousel-button.next');
      const indicators = document.querySelectorAll('.indicator');
      let currentIndex = 0;
      const totalSlides = slides.length;

      if (totalSlides > 0) {
        function updateCarouselPosition() {
          const slideWidth = slides[0].getBoundingClientRect().width;
          const newTransform = -currentIndex * slideWidth;
          carouselTrack.style.transform = `translateX(${newTransform}px)`;
        }

        function updateCarouselUI() {
          indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
          });
          if (prevButton && nextButton) {
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === totalSlides - 1;
          }
        }

        function goToSlide(index) {
          carouselTrack.style.transition = 'transform 0.5s ease-in-out';
          currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
          updateCarouselPosition();
          updateCarouselUI();
        }

        if (prevButton && nextButton) {
          prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
          nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
        }

        indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => goToSlide(index));
        });

        document.addEventListener('keydown', (e) => {
          const isCarouselFocused = document.activeElement.closest('.projects-carousel');
          if (isCarouselFocused) {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              goToSlide(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
              e.preventDefault();
              goToSlide(currentIndex + 1);
            }
          }
        });

        window.addEventListener('resize', () => {
          carouselTrack.style.transition = 'none';
          updateCarouselPosition();
        });

        // Initial setup
        updateCarouselUI();
      }
    }
  });
</script>