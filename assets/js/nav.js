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


function navAnimation(){
    const nav = document.querySelector('nav')
    let current = 0;
    window.addEventListener('scroll', () => {
        if(window.scrollY > current && window.scrollY > 100){
            nav.style.transition = '0.5s';
            nav.style.transform = 'translateY(-100%)';
        }else{
            nav.style.transition = '0s';
            nav.style.transform = 'translateY(0)';
        }
        current = window.scrollY;
    });
}
navAnimation();  //showing nav on scroll up and hiding it on scroll down

