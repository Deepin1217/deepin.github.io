const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, _index) => {
            if (link.style.animation) {
                link.style.animation ='';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s';
            }
        });
    });

   
}
navSlide();

