// showing aside filter 
function showAside(){
    const aside = document.querySelector('.courses-page aside')
    const btn = document.querySelector('#filter-alt');
    btn.addEventListener('click', () => aside.classList.add('show-aside'));
    removeEventListener('click', () => aside.classList.remove('show-aside'));
}
function closeAside(){
    const aside = document.querySelector('.courses-page aside')
    const btn = document.querySelector('#arrow-back');
    btn.addEventListener('click', () => aside.classList.remove('show-aside'));
    removeEventListener('click', () => aside.classList.remove('show-aside'));
}

document.addEventListener('DOMContentLoaded', () => {
    showAside();
    closeAside();
});

// filtering
export function getLevel(list, renderCourses, filterCourses){
    const level = document.querySelectorAll('.courses-page aside .level ul li');
    level.forEach(el => {
        el.addEventListener('click', () => {
            level.forEach(el => el.classList.remove('active-filter'));
            el.classList.add('active-filter');             
            const selectedLevel = el.textContent.trim().toLowerCase();
            const filteredList = filterCourses(list, selectedLevel);
            renderCourses(filteredList);
        });
    });
}
export function filterCourses(list, level){
    if(list.length === 0) return [];
    if(level === 'all courses') return list;
    return list.filter(el => el.level.toLowerCase() === level.toLowerCase());
}



