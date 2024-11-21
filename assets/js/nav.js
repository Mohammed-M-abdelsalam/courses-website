function toggleNav(getNav, closeNav){
    const nav = document.querySelector('nav')
    getNav(nav);
    closeNav(nav);
}
function getNav(nav){
    const menuBtn = document.querySelector('.menu-btn')
    menuBtn.addEventListener('click', () => nav.className = 'show-nav');
    removeEventListener('click', () => nav.className = '');
}
function closeNav(nav){
    const closeBtn = document.querySelector('.close-btn')
    closeBtn.addEventListener('click', () => nav.className = '');
    removeEventListener('click', () => nav.className = 'show-nav');
}
toggleNav(getNav, closeNav);

