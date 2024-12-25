import { getLevel, filterCourses, toggleAside } from './filter-courses.js';

const list = [
    { id: 1, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "Web Development", level: "beginner", price:200, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum", parts: ['html', 'css', 'js'] },
    { id: 2, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "Web Development", level: "advanced", price:300, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum", parts: ['html', 'css', 'js'] },
    { id: 3, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "Web Development", level: "advanced", price:450, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum", parts: ['html', 'css', 'js'] },
    { id: 4, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "UI/UX", level: "intermediate", price:200, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum",  parts: ['user experience', 'colors'] },
    { id: 5, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "UI/UX", level: "intermediate", price:300, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum",  parts: ['user experience', 'colors'] },
    { id: 6, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "UI/UX", level: "beginner", price:100, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum", parts: ['user experience', 'colors'] },
    { id: 7, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "marketing", level: "beginner", price:50, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum", parts: ['market research', 'digital marketing'] },
    { id: 8, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "marketing", level: "beginner", price:150, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum" , parts: ['market research', 'digital marketing']},
    { id: 9, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "marketing", level: "beginner", price:200, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum" , parts: ['market research', 'digital marketing']},
    { id: 10, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "fitness", level: "beginner", price:200, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum" , parts: ['stretching', 'exercieses', 'nutration']},
    { id: 11, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "fitness", level: "beginner", price:200, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum" , parts: ['stretching', 'exercieses', 'nutration']},
    { id: 12, instractor: 'mohamed magdy', title: "lorem ipsm dolor sit", category: "fitness", level: "beginner", price:200, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum" , parts: ['stretching', 'exercieses', 'nutration']},
];

function renderHomePage() {
    const root = document.querySelector('#root');
    root.innerHTML = `
        <header>
            <div class="bottom-header">
                <h1>Empowering Minds for a Brighter Future</h1>
                <div class="header-img">
                    <img src="./assets/images/header_img.png" height="100%" alt="pic">
                </div>
            </div>
        </header>

        <main class="main-home">
            <div class="right-main">
                <div class="text">
                    <h2>Lorem</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <button class="aboutus-btn">About Us</button>
            </div>
            <div class="left-main">
                <img src="assets/images/main-home.webp" width="100%" alt="pic">
            </div>
        </main>

        <section class="popular-courses">
            <h2>Popular Courses</h2>
            <div class="cards"></div>
        </section>

        <section class="courses-categories">
            <h2>Categories</h2>
            <div class="category-cards">

                <div class="category-card">
                    <h4>Marketing</h4>
                    <p>Lorem Ipsum is simply dummy text </p>
                    <button>more</button>
                </div>
                <div class="category-card">
                    <h4>Web Development</h4>
                    <p>Lorem Ipsum is simply dummy text </p>
                    <button>more</button>
                </div>
                <div class="category-card">
                    <h4>Fitness</h4>
                    <p>Lorem Ipsum is simply dummy text </p>
                    <button>more</button>
                </div>
                <div class="category-card">
                    <h4>UI/UX</h4>
                    <p>Lorem Ipsum is simply dummy text </p>
                    <button>more</button>
                </div>
            </div>
            <button>View All</button>
        </section>
    `;
    const aboutusBtn = document.querySelector('.aboutus-btn');
    aboutusBtn.addEventListener('click', () => renderAboutPage());
    const cards = document.querySelector('.cards');
    const filterList = [];
    let randoms = [];
    for(let i=0; i<3; i++){
        let randomNum = Math.floor(Math.random() * 11) + 1
        randoms.push(randoms.includes(randomNum) ? randomNum + 1 : randomNum);  
        filterList.push(list.find(el => el.id === randoms[i] ));
    }
    renderCourses(filterList, cards, showCourseDetails);
}

function renderAboutPage(){
    const root = document.querySelector('#root');
    root.innerHTML = `
            <main class="main-about">
            <div class="top-main">
                <h1>About lorem</h1>
                <p>Empowering learners worldwide with quality education</p>
            </div>
            <div class="ourmission">
                <h2>Our Mission</h2>
                <p>To provide you with the best experience for watching movies, so you can watch as much as you want, whenever you want.
                    There is always something new to discover and new TV shows and novies are added every week.
                </p>
            </div>
        </main>

        <section class="statistics">
            <div class="box">
                +1000 <span>students</span>
            </div>
            <div class="box">
                +50 <span>instructors</span>
            </div>
            <div class="box">
                +100 <span>courses</span>
            </div>
        </section>

        <section class="why-us">
            <h2>Why Choose Us</h2>
            <div class="boxes">
                <div class="box">
                    <span class="material-symbols-outlined">school</span>
                    <h3>Expert Instructors</h3>
                    <p>Our instructors are experts in their field, and are passionate about teaching.</p>
                </div>
                <div class="box">
                    <span class="material-symbols-outlined">laptop_windows</span>
                    <h3>Latest Technology</h3>
                    <p>We use the latest technology to deliver high-quality education.</p>
                </div>
                <div class="box">
                    <span class="material-symbols-outlined">groups</span>
                    <h3>Hand-on Projects</h3>
                    <p>We provide hands-on projects to help you apply what you learn.</p>
                </div>
            </div>
        </section>
    `;
}

function renderCourses(list, cards, showCourseDetails) {
    if (!cards) return console.error('Cards container not found!');
    cards.innerHTML = list.map(el =>{ 
        let style = {};
        if(el.level === 'beginner'){
            style = {color: '#22543D', backgroundColor: '#C6F6D5'}
        }else if(el.level === 'intermediate'){
            style = {color: '#744210', backgroundColor: '#FEEBC8'}
        }else if(el.level === 'advanced'){
            style = {color: '#742A2A', backgroundColor: '#FED7D7'}
        }
        const {color, backgroundColor} = style;
        return(
        `
        <div class="card">
            <div class="inner-card">
                <div class="card-img">
                    <span style="color: ${color}; background-color: ${backgroundColor};">${el.level}</span>
                    <img src="assets/images/card.webp" width="100%" alt="pic">
                </div>
                <p>${el.desc.substr(0, 40)}...</p>
                <div class="bottom-card">
                    <p>${el.category}</p>
                    <button class="course-btn" data-id="${el.id}">Enroll Now</button>
                </div>  
            </div>
        </div>
        `);
    }).join('');
    showCourseDetails()
}

function renderCoursesPage() {
    const root = document.querySelector('#root');
    if (!root) return console.error('Root container not found!');
    root.innerHTML = `
        <section class="courses-page">
            <span class="material-symbols-outlined" id="filter-alt">filter_alt</span>
            <aside>
                <span class="material-symbols-outlined" id="arrow-back">arrow_back</span>
                <h2>Filter Courses</h2>
                <div class="level">
                    <h3>Level</h3>
                    <ul>
                        <li class="active-filter">All Courses</li>
                        <li>beginner</li>
                        <li>intermediate</li>
                        <li>advanced</li>
                    </ul>
                </div>
            </aside>
            <main class="main-courses">
                <div class="cards"></div>
            </main>
        </section>
    `;
    toggleAside();
    const cards = document.querySelector('.main-courses .cards');
    renderCourses(list, cards, showCourseDetails);
    getLevel(list, renderCourses, filterCourses);
}

function renderCourseDetailsPage(id, list){
    const root = document.querySelector('#root');
    if (!root) return console.error('Root container not found!');
    const course = list.find(el => {
        return el.id === parseInt(id);
    });
    const {title, instractor, level, category, price, desc, parts} = course;
    root.innerHTML = `
        <main class="course-details-main">
            <div class="content">
                <h1>${title}</h1>
                <p>${desc}</p>
                <div style="display:flex; align-items:center;"> <span class="material-symbols-outlined">person</span> instructor: ${instractor}</div>
                <div class="parts">
                    <h3>What you will learn</h3>
                    <ul>
                        ${parts.map(el => `
                            <li>
                                <span style="color: #34A853" class="material-symbols-outlined">check</span>
                                ${el}
                            </li>`).join('')}                  
                    </ul>
                </div>
            </div>
            <div class="course-card">
                <div class="img">
                    <span>${level}</span>
                    <img width="100%" src="assets/images/card.webp" alt="img" />
                </div>
                <div class="price"><span style="font-size:1rem">$</span>${price}</div>
                <button>Buy Now</button>
            </div>
        </main>

        <section class="recommendation-cards">
            <h2> Recommended Courses </h2>
            <div class="cards"></div>
        </section>   
    `
    const cards = document.querySelector('.recommendation-cards .cards');
    const filterList = list.filter(el => el.category === category && el.id !== parseInt(id));
    renderCourses(filterList, cards, showCourseDetails);
}

export function showCourseDetails(){
    const btn = document.querySelectorAll('.course-btn');
    btn.forEach(el => {
        el.addEventListener('click', function(){
            renderCourseDetailsPage(el.dataset.id, list)
        });
    })
}


function renderProfilePage(){
    const root = document.querySelector('#root');
    root.innerHTML = `
    
    `;
}

// search courses
function searchCourses(str, list){
    list = list.filter(el => el.category.toLowerCase().includes(str.trim().toLowerCase()));
    return list;
}
function renderSearchPage(){
    const root = document.querySelector('#root');
    const input = document.querySelector('.search-form input');
    input.addEventListener('keyup', e => {
        root.innerHTML = `
            <main class="search-cards">
               <div class="cards"></div>
            </main>
        `;
        const cards = document.querySelector('.cards');
        e.preventDefault();
        const inputData = e.target.value;        
        const searchList = searchCourses(inputData, list);
        if(searchList.length === 0) return cards.innerHTML = `<h2>No Courses Found</h2>`;
        renderCourses(searchList, cards, showCourseDetails);
    });
}
renderSearchPage();

function route(){
    const navUl = document.querySelector('nav>ul');
    [...navUl.children].forEach(el =>{
        el.addEventListener('click', e =>{
            if(el.id === 'home'){
                renderHomePage();
            }else if(el.id === 'about'){
                renderAboutPage();
            }else if(el.id === 'courses'){
                renderCoursesPage();
            }else if(el.id === 'profile'){
                renderProfilePage();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    renderHomePage();
    // renderProfilePage();
    route();
});

