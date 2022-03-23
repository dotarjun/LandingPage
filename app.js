const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];
const notNav = document.getElementsByClassName('not-nav')

console.log(navLinks);
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    notNav.classList.toggle('faded');
})