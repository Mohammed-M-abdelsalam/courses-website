function renderHomePage() {
    const root = document.querySelector('#root');
    root.innerHTML = `
        <header>
            <div class="bottom-header">
                <h1>Empowering Minds for a Brighter Future</h1>
                <img src="./assets/images/header_img.svg" width="50%" alt="pic">
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
            <div class="cards">
                <div class="card">
                    <div class="inner-card">
                        <div class="card-img">
                            <img src="assets/images/card.webp" width="100%" alt="pic">
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum...</p>
                        <div class="bottom-card">
                            <p>Web Development</p>
                            <button>Enroll Now</button>
                        </div>  
                    </div>
                </div>
                    <div class="card">
                        <div class="inner-card">
                            <div class="card-img">
                                <img src="assets/images/card.webp" width="100%" alt="pic">
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum...</p>
                            <div class="bottom-card">
                                <p>Web Development</p>
                                <button>Enroll Now</button>
                            </div>  
                        </div>
                    </div>
                    <div class="card">
                        <div class="inner-card">
                            <div class="card-img">
                                <img src="assets/images/card.webp" width="100%" alt="pic">
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum...</p>
                            <div class="bottom-card">
                                <p>Web Development</p>
                                <button>Enroll Now</button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
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
    `
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

import { getLevel, filterCourses, toggleAside } from './filter-courses.js';

let list = [
    { id: 1, category: "Web Development", level: "beginner", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum..." },
    { id: 2, category: "Web Development", level: "advanced", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum..." },
    { id: 3, category: "Web Development", level: "advanced", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum..." },
    { id: 4, category: "UI/UX", level: "intermediate", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum..." },
    { id: 5, category: "UI/UX", level: "intermediate", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum..." },
    { id: 6, category: "UI/UX", level: "beginner", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum..." },
    { id: 7, category: "marketing", level: "beginner", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum..." },
];

function renderCourses(list) {
    const cards = document.querySelector('.main-courses .cards');
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
                <p>${el.desc}</p>
                <div class="bottom-card">
                    <p>${el.category}</p>
                    <button>Enroll Now</button>
                </div>  
            </div>
        </div>
    `);
    }).join('');
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
    renderCourses(list);
    getLevel(list, renderCourses, filterCourses);
}
// renderCoursesPage();


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
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    renderHomePage();
    route();
});

