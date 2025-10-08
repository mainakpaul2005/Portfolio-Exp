document.addEventListener('DOMContentLoaded', () => {

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