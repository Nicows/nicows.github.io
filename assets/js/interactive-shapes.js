document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('shape-container');
    if (!container) return;

    const shapes = [];
    const shapeTypes = [
        { class: 'star', html: '⭐', name: 'star' },
        { class: 'planet', html: '🪐', name: 'planet' },
        { class: 'asteroid', html: '☄️', name: 'asteroid' },
        { class: 'comet', html: '☄️', name: 'comet' },
        { class: 'nebula', html: '🌌', name: 'nebula' },
        { class: 'satellite', html: '🛰️', name: 'satellite' },
        { class: 'moon', html: '🌙', name: 'moon' },
        { class: 'galaxy', html: '🌌', name: 'galaxy' }
    ];

    const colors = [
        { base: 'hsla(200, 100%, 80%, 1)', gradient: 'hsla(200, 100%, 30%, 0)' }, // Deep Blue
        { base: 'hsla(280, 100%, 70%, 1)', gradient: 'hsla(280, 100%, 20%, 0)' }, // Purple
        { base: 'hsla(0, 100%, 80%, 1)', gradient: 'hsla(0, 100%, 30%, 0)' },     // Red
        { base: 'hsla(60, 100%, 80%, 1)', gradient: 'hsla(60, 100%, 30%, 0)' },  // Yellow
        { base: 'hsla(120, 100%, 70%, 1)', gradient: 'hsla(120, 100%, 20%, 0)' }, // Green
        { base: 'hsla(30, 100%, 80%, 1)', gradient: 'hsla(30, 100%, 30%, 0)' }   // Orange
    ];

    const numShapes = 15;
    const mouse = {
        x: null,
        y: null,
        radius: 150
    };

    // Black hole properties
    const blackHole = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        radius: 80,
        pullStrength: 0.02
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });


    class Shape {
        constructor(x, y, dx, dy, size, type, color) {
            this.x = x;
            this.y = y;
            this.baseX = x;
            this.baseY = y;
            this.dx = dx;
            this.dy = dy;
            this.size = size;
            this.type = type;
            this.color = color;
            this.density = (Math.random() * 20) + 10;
            this.rotation = 0;
            this.rotationSpeed = (Math.random() - 0.5) * 0.02;

            this.element = document.createElement('div');
            this.element.className = `shape ${this.type.class}`;
            this.element.style.width = `${this.size}px`;
            this.element.style.height = `${this.size}px`;

            // Space-themed styling
            if (this.type.name === 'star') {
                this.element.innerHTML = '⭐';
                this.element.style.fontSize = `${this.size}px`;
                this.element.style.opacity = '0.8';
                this.element.style.filter = 'drop-shadow(0 0 10px currentColor)';
            } else if (this.type.name === 'planet') {
                this.element.innerHTML = '🪐';
                this.element.style.fontSize = `${this.size}px`;
                this.element.style.opacity = '0.7';
            } else if (this.type.name === 'asteroid' || this.type.name === 'comet') {
                this.element.innerHTML = '☄️';
                this.element.style.fontSize = `${this.size}px`;
                this.element.style.opacity = '0.6';
            } else if (this.type.name === 'nebula' || this.type.name === 'galaxy') {
                this.element.innerHTML = '🌌';
                this.element.style.fontSize = `${this.size}px`;
                this.element.style.opacity = '0.5';
            } else if (this.type.name === 'satellite') {
                this.element.innerHTML = '🛰️';
                this.element.style.fontSize = `${this.size}px`;
                this.element.style.opacity = '0.7';
            } else if (this.type.name === 'moon') {
                this.element.innerHTML = '🌙';
                this.element.style.fontSize = `${this.size}px`;
                this.element.style.opacity = '0.6';
            } else {
                // Fallback for other shapes
                const gradientColor = `radial-gradient(circle, ${this.color.base} 0%, ${this.color.gradient} 70%)`;
                this.element.style.background = gradientColor;
                this.element.style.border = `1px solid ${this.color.base.replace(/, 1\)/, ', 0.2)')}`;
                this.element.style.opacity = '0.3';
            }

            this.element.style.position = 'absolute';
            this.element.style.left = `${this.x}px`;
            this.element.style.top = `${this.y}px`;
            this.element.style.transition = 'transform 0.1s ease-out';
            this.element.style.color = this.color.base;

            container.appendChild(this.element);
        }

        draw() {
            this.rotation += this.rotationSpeed;
            this.element.style.transform = `translate(${this.x - this.baseX}px, ${this.y - this.baseY}px) rotate(${this.rotation}rad)`;
        }

        update() {
            // Black hole attraction
            let dxBlackHole = blackHole.x - this.x;
            let dyBlackHole = blackHole.y - this.y;
            let distanceToBlackHole = Math.sqrt(dxBlackHole * dxBlackHole + dyBlackHole * dyBlackHole);

            if (distanceToBlackHole > blackHole.radius && distanceToBlackHole < 300) {
                const forceDirectionX = dxBlackHole / distanceToBlackHole;
                const forceDirectionY = dyBlackHole / distanceToBlackHole;
                const force = blackHole.pullStrength * (1 - distanceToBlackHole / 300);

                this.dx += forceDirectionX * force;
                this.dy += forceDirectionY * force;
            }

            // Mouse repulsion
            if (mouse.x && mouse.y) {
                let dxMouse = mouse.x - this.x;
                let dyMouse = mouse.y - this.y;
                let distance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distance < mouse.radius) {
                    const forceDirectionX = dxMouse / distance;
                    const forceDirectionY = dyMouse / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = forceDirectionX * force * this.density;
                    const directionY = forceDirectionY * force * this.density;

                    this.x -= directionX;
                    this.y -= directionY;
                }
            }

            // Wall bouncing
            if (this.x + this.size > window.innerWidth || this.x < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.size > window.innerHeight || this.y < 0) {
                this.dy = -this.dy;
            }

            // Move particle
            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }

    function createBlackHole() {
        const blackHoleElement = document.createElement('div');
        blackHoleElement.id = 'black-hole';
        blackHoleElement.style.position = 'absolute';
        blackHoleElement.style.left = `${blackHole.x - blackHole.radius}px`;
        blackHoleElement.style.top = `${blackHole.y - blackHole.radius}px`;
        blackHoleElement.style.width = `${blackHole.radius * 2}px`;
        blackHoleElement.style.height = `${blackHole.radius * 2}px`;
        blackHoleElement.style.borderRadius = '50%';
        blackHoleElement.style.background = 'radial-gradient(circle, #000000 0%, #1a1a1a 30%, transparent 70%)';
        blackHoleElement.style.opacity = '0.8';
        blackHoleElement.style.zIndex = '1';
        blackHoleElement.style.boxShadow = '0 0 50px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.1)';
        blackHoleElement.style.animation = 'blackHolePulse 3s ease-in-out infinite';

        // Add CSS animation
        if (!document.getElementById('black-hole-styles')) {
            const style = document.createElement('style');
            style.id = 'black-hole-styles';
            style.textContent = `
                @keyframes blackHolePulse {
                    0%, 100% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.1); opacity: 0.9; }
                }
            `;
            document.head.appendChild(style);
        }

        container.appendChild(blackHoleElement);
    }

    function init() {
        shapes.length = 0;
        container.innerHTML = '';

        // Update black hole position
        blackHole.x = window.innerWidth / 2;
        blackHole.y = window.innerHeight / 2;

        // Create black hole
        createBlackHole();

        for (let i = 0; i < numShapes; i++) {
            let size = Math.random() * 30 + 15;
            let x = Math.random() * (window.innerWidth - size * 2) + size;
            let y = Math.random() * (window.innerHeight - size * 2) + size;
            let dx = (Math.random() - 0.5) * 0.3;
            let dy = (Math.random() - 0.5) * 0.3;
            let type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            let color = colors[Math.floor(Math.random() * colors.length)];
            shapes.push(new Shape(x, y, dx, dy, size, type, color));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        shapes.forEach(shape => {
            shape.update();
        });
    }

    init();
    animate();

    // Re-init on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(init, 500);
    });
}); 