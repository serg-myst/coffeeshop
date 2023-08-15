let menu = document.getElementById('menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.addEventListener('click', function () {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
}