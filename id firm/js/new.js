document.addEventListener('DOMContentLoaded', function () {
    // Spinner Functions
    const spinner = document.getElementById('spinner');
    
    function showSpinner() {
        spinner.classList.add('active');
    }

    function hideSpinner() {
        spinner.classList.remove('active');
    }

    // Example: Hide spinner after 3 seconds
    setTimeout(hideSpinner, 3000);

    // Close navbar on link click (for mobile view)
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('navbarCollapse');
            if (navbarCollapse.classList.contains('show')) {
                const collapse = new bootstrap.Collapse(navbarCollapse);
                collapse.hide();
            }
        });
    });

    // Toggle search modal visibility
    const searchButton = document.querySelector('.navbar .btn');
    const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));

    searchButton.addEventListener('click', () => {
        searchModal.toggle();
    });

    // Initialize WOW.js if used
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

    // Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for animated elements
    const animatedElements = document.querySelectorAll('.animated');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Intersection Observer for WOW.js elements
    const wowElements = document.querySelectorAll('.wow');
    const wowObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                wowObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    wowElements.forEach(element => {
        wowObserver.observe(element);
    });

    // Counter Up Animation
    const counters = document.querySelectorAll('[data-toggle="counter-up"]');
    const speed = 200; // The lower the faster

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

    // Accordion Button Toggle
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        item.addEventListener('show.bs.collapse', () => {
            item.querySelector('.accordion-button').classList.remove('collapsed');
        });

        item.addEventListener('hide.bs.collapse', () => {
            item.querySelector('.accordion-button').classList.add('collapsed');
        });
    });

    // Team Item Hover Effect
    const teamItems = document.querySelectorAll('.team-item');
    teamItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered');
        });
    });

    // Initialize Owl Carousel
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });

    // Subscribe Button Functionality
    const subscribeButton = document.querySelector('.btn-primary');
    subscribeButton.addEventListener('click', function() {
        const emailInput = document.querySelector('.form-control');
        const email = emailInput.value;

        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            emailInput.value = ''; // Clear input field
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Smooth scrolling for footer links
    const footerLinks = document.querySelectorAll('.footer-menu a, .btn-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for fixed headers if needed
                    behavior: 'smooth'
                });
            }
        });
    });
});
