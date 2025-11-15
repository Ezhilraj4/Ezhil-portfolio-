// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Page Navigation Logic ---
    const navLinks = document.querySelectorAll('nav a.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Stop the browser from jumping 

            const targetPageId = link.getAttribute('data-page');
            const targetPage = document.getElementById(targetPageId);

            // Remove 'active' class from all pages and nav links
            pages.forEach(page => {
                page.classList.remove('active');
            });
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Add 'active' class to the target page and nav link
            targetPage.classList.add('active');
            link.classList.add('active');
        });
    });

    // --- Typing Effect Logic ---
    const typingText = document.getElementById('typing-effect');
    // Your self-described roles for the typing effect
    const words = ["Developer", "Designer", "Data Analyst", "Creator"]; 
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Logic to control speed and movement
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Wait 2s before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; 
            setTimeout(type, 500); // Wait 0.5s before typing next word
        } else {
            const typeSpeed = isDeleting ? 100 : 200;
            setTimeout(type, typeSpeed);
        }
    }

    // Start the typing effect
    type();
});
