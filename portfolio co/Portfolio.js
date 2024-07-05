document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll Functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to handle scroll event for about cards
    function handleAboutCards() {
        const cards = document.querySelectorAll('.about-card');
        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('visible');
                const headings = card.querySelectorAll('h3, p');
                headings.forEach(element => {
                    element.classList.add('visible');
                });
            }
        });
    }

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Event listener for scroll events
    window.addEventListener('scroll', () => {
        handleAboutCards(); // Ensure about cards visibility is updated on scroll
    });

    // Initial check when the page loads
    handleAboutCards(); // Check about cards visibility initially
});
