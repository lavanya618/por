// Typing Effect
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    var typed = new Typed('.typing-text', {
        strings: ['Python Developer', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 2000,
        loop: true
    });

    // Toggle Mobile Menu
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('.message').value;
            
            // Simple validation
            if(name && email && message) {
                // In a real application, you would send this data to a server
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Animate skill bars on scroll
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-per');
        
        skillBars.forEach(skillBar => {
            const skillValue = skillBar.getAttribute('per');
            skillBar.style.width = '0%';
            
            // Create an intersection observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        setTimeout(() => {
                            skillBar.style.width = skillValue;
                        }, 200);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(skillBar);
        });
    };
    
    // Initialize skill bar animation
    animateSkillBars();

    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if(window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = '#fff';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});