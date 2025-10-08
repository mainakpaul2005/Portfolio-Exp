document.addEventListener('DOMContentLoaded', () => {

    // --- CUSTOM CURSOR ---
    const cursorInner = document.querySelector('.cursor--inner');
    const cursorOuter = document.querySelector('.cursor--outer');
    const interactiveElements = document.querySelectorAll('a, .card');
    
    let mouse = { x: -100, y: -100 }; // Current mouse position
    let target = { x: -100, y: -100 }; // Target mouse position
    const speed = 0.1; // Smoothing factor

    // Update mouse position
    window.addEventListener('mousemove', (e) => {
        target.x = e.clientX;
        target.y = e.clientY;
    });

    // Animate cursor using requestAnimationFrame for smoothness
    const animateCursor = () => {
        // Linear interpolation for smooth movement
        mouse.x += (target.x - mouse.x) * speed;
        mouse.y += (target.y - mouse.y) * speed;

        cursorInner.style.transform = `translate(${mouse.x - 4}px, ${mouse.y - 4}px)`;
        cursorOuter.style.transform = `translate(${mouse.x - 20}px, ${mouse.y - 20}px)`;

        requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Cursor hover effects
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOuter.classList.add('cursor--hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorOuter.classList.remove('cursor--hover');
        });
    });

    // --- AURORA EFFECT ON CARDS ---
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- STAGGERED CARD ANIMATION ---
    // Use Intersection Observer for performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cardsInView = entry.target.querySelectorAll('.card');
                cardsInView.forEach((card, index) => {
                    // Set a staggered animation delay
                    card.style.animationDelay = `${index * 100}ms`;
                });
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.1 });

    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        observer.observe(projectGrid);
    }
});