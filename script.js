// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(10, 22, 40, 0.98)';
    navLinks.style.padding = '24px';
    navLinks.style.gap = '20px';
    navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
});

// Close menu when link clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
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

// Apply animation to cards
document.querySelectorAll('.problem-card, .service-card, .channel-card, .pricing-card, .faq-item, .step, .niche-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Trigger counters when hero is visible
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statsObserver.disconnect();
            }
        });
    });
    statsObserver.observe(heroStats);
}

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#22C55E';
        }
    });
});

// ===== PRICING CARD HOVER EFFECT =====
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.querySelectorAll('.pricing-card').forEach(c => {
            if (c !== card) {
                c.style.opacity = '0.6';
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        document.querySelectorAll('.pricing-card').forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// ===== GREEN DOT PULSE =====
const badge = document.querySelector('.hero-badge');
if (badge) {
    setInterval(() => {
        badge.style.borderColor = 'rgba(34, 197, 94, 0.6)';
        setTimeout(() => {
            badge.style.borderColor = 'rgba(34, 197, 94, 0.3)';
        }, 500);
    }, 1000);
}

console.log('AlwayzOn — Your Business. Always On. 🟢');