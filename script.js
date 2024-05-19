const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
});

cancelBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});
