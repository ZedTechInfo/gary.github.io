// Smooth scrolling for navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Toggle mobile menu
function setupMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('spaceNav');
    
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            updateMenuIcon();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

// Close mobile menu
function closeMobileMenu() {
    const nav = document.getElementById('spaceNav');
    const menuBtn = document.getElementById('mobileMenuBtn');
    
    if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        updateMenuIcon();
    }
}

// Update menu icon
function updateMenuIcon() {
    const nav = document.getElementById('spaceNav');
    const menuBtn = document.getElementById('mobileMenuBtn');
    
    if (menuBtn) {
        menuBtn.innerHTML = nav && nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    }
}

// Add scroll effect to navigation
function setupNavigationScrollEffect() {
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.space-nav');
        if (nav) {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10, 10, 42, 0.9)';
            } else {
                nav.style.background = 'rgba(10, 10, 42, 0.7)';
            }
        }
    });
}

// Active section highlighting
function setupActiveSection() {
    const sections = document.querySelectorAll('.galaxy-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Export functions
window.NavigationModule = {
    setupSmoothScrolling,
    setupMobileMenu,
    closeMobileMenu,
    setupNavigationScrollEffect,
    setupActiveSection
};