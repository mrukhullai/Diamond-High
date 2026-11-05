const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
    menu.classList.toggle('active');

    const isOpen = menu.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation' : 'Open navigation'
    );
}

menuToggle.addEventListener('click', toggleMenu);