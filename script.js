// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Page Navigation Logic ---
    const navLinks = document.querySelectorAll('nav a.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Stop the browser from jumping to the #hash

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
    const words = ["Developer", "Designer", "Data Analyst", "Creator"]; // Add your roles
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Deleting characters
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing characters
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Logic to switch between typing and deleting
        if (!isDeleting && charIndex === currentWord.length) {
            // Finished typing the word
            isDeleting = true;
            setTimeout(type, 2000); // Wait 2s before deleting
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting the word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word
            setTimeout(type, 500); // Wait 0.5s before typing next word
        } else {
            // Continue typing or deleting
            const typeSpeed = isDeleting ? 100 : 200;
            setTimeout(type, typeSpeed);
        }
    }

    // Start the typing effect
    type();
});
