let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlayMenu = document.getElementById('overlay-menu');
let btnClose = document.querySelector('.btn-fechar i');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlayMenu.style.display = 'block'; // Exibir o overlay
});

btnClose.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlayMenu.style.display = 'none'; // Ocultar o overlay
});

overlayMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlayMenu.style.display = 'none'; // Ocultar o overlay
});
