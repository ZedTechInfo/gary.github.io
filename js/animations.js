// Scroll-based animations
function setupScrollAnimations() {
    // Intersection Observer for scroll reveals
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.skill-item, .interest-card, .project-card, .timeline-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const animatedSections = document.querySelectorAll('.galaxy-section:not(.hero)');
    animatedSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Animate individual elements
    const animatedElements = document.querySelectorAll('.skill-item, .interest-card, .project-card, .timeline-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
}

// Floating animation for cards
function setupFloatingCards() {
    const cards = document.querySelectorAll('.interest-card, .project-card, .skill-category');
    
    cards.forEach((card, index) => {
        // Add subtle floating animation with different delays
        card.style.animation = `float 6s ease-in-out infinite`;
        card.style.animationDelay = `${index * 0.5}s`;
    });
}

// Typewriter effect for hero text
function setupTypewriterEffect() {
    const title = document.querySelector('.name');
    const subtitle = document.querySelector('.title');
    
    if (title && subtitle) {
        // Add typewriter class for CSS animation
        setTimeout(() => {
            title.classList.add('typewriter');
        }, 500);
        
        setTimeout(() => {
            subtitle.classList.add('typewriter');
        }, 1500);
    }
}

// Particle trail effect for mouse movement
function setupParticleTrail() {
    if (window.innerWidth <= 768) return; // Skip on mobile for performance
    
    const particles = [];
    const particleCount = 5;
    
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--accent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${x}px;
            top: ${y}px;
            opacity: 0.8;
            transition: all 0.3s ease-out;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.opacity = '0';
            particle.style.transform = 'scale(0)';
        }, 50);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 350);
    }
    
    let mouseX = 0, mouseY = 0;
    let lastTime = 0;
    
    document.addEventListener('mousemove', function(e) {
        const currentTime = Date.now();
        if (currentTime - lastTime > 50) { // Throttle particle creation
            mouseX = e.clientX;
            mouseY = e.clientY;
            createParticle(mouseX, mouseY);
            lastTime = currentTime;
        }
    });
}

// Button interaction effects
function setupButtonEffects() {
    const buttons = document.querySelectorAll('.btn-launch');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.05)';
        });
    });
}

// Glow effect on scroll
function setupGlowEffects() {
    const glowElements = document.querySelectorAll('.interest-card, .project-card, .timeline-content');
    
    const glowObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.boxShadow = 'var(--glow)';
            }
        });
    }, { threshold: 0.5 });
    
    glowElements.forEach(element => {
        glowObserver.observe(element);
    });
}

// Export functions
window.AnimationsModule = {
    setupScrollAnimations,
    setupFloatingCards,
    setupTypewriterEffect,
    setupParticleTrail,
    setupButtonEffects,
    setupGlowEffects
};