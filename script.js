// Blueprxnt Website JavaScript
// Main interactive functionality

document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    initMobileMenu();

    // Smooth Scrolling for Navigation Links
    initSmoothScroll();

    // Intersection Observer for Scroll Animations
    initScrollAnimations();

    // Contact Form Handler
    initContactForm();

    // FAQ Accordion
    initFAQ();

    // Active Navigation State
    updateActiveNavigation();

    // Navbar Background on Scroll
    initNavbarScroll();

    // Audience Tabs (for landing page)
    initAudienceTabs();

    // Coaching Options Tabs (for coaching page)
    initCoachingTabs();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    // Create mobile menu button if it doesn't exist
    if (!document.querySelector('.mobile-menu-toggle')) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-toggle';
        mobileMenuBtn.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');

        const logoContainer = document.querySelector('.logo-container');
        logoContainer.after(mobileMenuBtn);

        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

// Smooth Scrolling
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // For staggered animations on grids
                if (entry.target.classList.contains('features-grid') ||
                    entry.target.classList.contains('services-grid') ||
                    entry.target.classList.contains('team-grid')) {
                    staggerAnimation(entry.target.children);
                }
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    // Observe grids
    const grids = document.querySelectorAll('.features-grid, .services-grid, .team-grid, .values-grid');
    grids.forEach(grid => observer.observe(grid));
}

// Stagger animation for grid items
function staggerAnimation(elements) {
    Array.from(elements).forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }, index * 100);
    });
}

// Contact Form Handler
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!data.name || !data.email || !data.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            console.log('Form data:', data);

            // Show success message
            showFormMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');

            // Reset form
            form.reset();

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Show form message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (!formMessage) return;

    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                const toggle = faq.querySelector('.faq-toggle');
                if (toggle) toggle.textContent = '+';
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                const toggle = item.querySelector('.faq-toggle');
                if (toggle) toggle.textContent = '−';
            }
        });
    });
}

// Update Active Navigation
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Navbar Background on Scroll
function initNavbarScroll() {
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            if (navbar) navbar.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            if (navbar) navbar.classList.remove('scrolled');
        }
    });
}

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const isDecimal = target % 1 !== 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = isDecimal ? target.toFixed(1) : Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
        }
    }, 16);
}

// Initialize stats counter when in view
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    const suffix = text.replace(/[0-9]/g, '');

                    stat.textContent = '0' + suffix;

                    setTimeout(() => {
                        animateCounter(stat, number);
                        // Re-add suffix after animation
                        setTimeout(() => {
                            stat.textContent = stat.textContent + suffix.replace(/[0-9]/g, '');
                        }, 2000);
                    }, 200);
                });

                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// Parallax effect for hero logo
const heroLogo = document.querySelector('.hero-logo');
if (heroLogo) {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        heroLogo.style.transform = `translateY(${parallax}px)`;
    });
}

// Add hover effect to feature cards
const featureCards = document.querySelectorAll('.feature-card, .service-item');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect on home page hero
const heroTitle = document.querySelector('.hero-title');
if (heroTitle && window.location.pathname.includes('index.html')) {
    const originalText = heroTitle.textContent;
    // Uncomment to enable typing effect
    // typeWriter(heroTitle, originalText, 100);
}

// Audience Tabs for Who It's For Section
function initAudienceTabs() {
    const tabs = document.querySelectorAll('.audience-tab');
    const panels = document.querySelectorAll('.audience-panel');

    if (tabs.length === 0 || panels.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetAudience = this.getAttribute('data-audience');

            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetAudience);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Coaching Options Tabs for Coaching Page
function initCoachingTabs() {
    const tabs = document.querySelectorAll('.coaching-tab');
    const panels = document.querySelectorAll('.coaching-panel');

    if (tabs.length === 0 || panels.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetOption = this.getAttribute('data-option');

            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById('panel-' + targetOption);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}
