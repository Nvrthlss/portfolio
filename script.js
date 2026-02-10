// AVAILABILITY STATUS
// ==========================================
const availabilityStatus = "available";

const availabilityBadge = document.getElementById('availabilityBadge');
const statusText = availabilityBadge.querySelector('.status-text');

if (availabilityStatus === "employed") {
    availabilityBadge.classList.add('employed');
    statusText.textContent = 'Currently Employed';
} else {
    statusText.textContent = 'Open to Work';
}

// MOBILE MENU TOGGLE
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navRight = document.querySelector('.nav-right');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navRight.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = menuToggle.querySelectorAll('span');
    if (navRight.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navRight.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// VERSION HISTORY MODAL
// ==========================================
const versionBtn = document.getElementById('versionBtn');
const versionModal = document.getElementById('versionModal');
const modalClose = document.getElementById('modalClose');

// Open modal
versionBtn.addEventListener('click', () => {
    versionModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close modal
modalClose.addEventListener('click', () => {
    versionModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
versionModal.addEventListener('click', (e) => {
    if (e.target === versionModal) {
        versionModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (versionModal.classList.contains('active')) {
            versionModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (gameModal.classList.contains('active')) {
            gameModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// GAME MODAL
// ==========================================
const playGameBtn = document.getElementById('playGameBtn');
const gameModal = document.getElementById('gameModal');
const gameModalClose = document.getElementById('gameModalClose');

// Open game modal
playGameBtn.addEventListener('click', () => {
    gameModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close game modal
gameModalClose.addEventListener('click', () => {
    gameModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
gameModal.addEventListener('click', (e) => {
    if (e.target === gameModal) {
        gameModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// SMOOTH SCROLL WITH OFFSET
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offset = 80; // navbar height
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// SCROLL REVEAL ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections except hero
document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// TECH ICONS STAGGER ANIMATION
// ==========================================
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
});

const techObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.tech-item');
            items.forEach(item => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            });
        }
    });
}, { threshold: 0.2 });

// Observe ALL tech-icons sections (not just the first one)
const techIconsSections = document.querySelectorAll('.tech-icons');
techIconsSections.forEach(section => {
    techObserver.observe(section);
});

// PROJECT CARDS STAGGER ANIMATION
// ==========================================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
});

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }
    });
}, { threshold: 0.1 });

const projectsGrid = document.querySelector('.projects-grid');
if (projectsGrid) {
    projectObserver.observe(projectsGrid);
}

// ACTIVE NAV LINK BASED ON SCROLL
// ==========================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});