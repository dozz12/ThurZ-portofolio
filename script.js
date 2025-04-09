// Hamburger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        }
    });
});

// Testimonials slider
let scrollPosition = 0;
const testimonialsSlider = document.querySelector('.testimonials-slider');

function scrollTestimonials(direction) {
    const cardWidth = testimonialsSlider.querySelector('.testimonial-card').offsetWidth + 20; // Including gap
    scrollPosition += direction * cardWidth * 2; // Scroll two cards at a time
    scrollPosition = Math.max(0, Math.min(scrollPosition, testimonialsSlider.scrollWidth - testimonialsSlider.clientWidth));
    testimonialsSlider.scrollLeft = scrollPosition;
}

// Add click events for navigation arrows (if you want to add them in HTML)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') scrollTestimonials(-1);
    if (e.key === 'ArrowRight') scrollTestimonials(1);
});

// Form submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Animation on scroll
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Initial load animations
window.addEventListener('load', () => {
    document.querySelectorAll('.animate').forEach(element => {
        element.classList.add('visible');
    });
});

// Theme toggle
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light'); // Save preference
});

// Load saved theme
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }
});
