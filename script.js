// Mobile Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle Navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Smooth Scrolling for Navigation Links
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            const nav = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
}

// Form Handling
const handleForm = () => {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple form validation
            if (!name || !email || !subject || !message) {
                alert('Please fill out all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // Since this is a portfolio template, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
}

// Scroll Animation for Skills and Projects
const scrollAnimation = () => {
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Animate on scroll
    const checkCards = () => {
        skillCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.transform = 'translateY(0)';
                card.style.opacity = '1';
            }
        });
        
        projectCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.transform = 'translateY(0)';
                card.style.opacity = '1';
            }
        });
    }
    
    // Initialize styles
    skillCards.forEach(card => {
        card.style.transform = 'translateY(50px)';
        card.style.opacity = '0';
        card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    });
    
    projectCards.forEach(card => {
        card.style.transform = 'translateY(50px)';
        card.style.opacity = '0';
        card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('load', checkCards);
    window.addEventListener('scroll', checkCards);
}

// Update current year in the footer
const updateYear = () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Initialize all functions
const init = () => {
    navSlide();
    smoothScroll();
    handleForm();
    scrollAnimation();
    updateYear();
}

// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
