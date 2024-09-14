const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle 'open' class for both hamburger and nav-links
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
});
