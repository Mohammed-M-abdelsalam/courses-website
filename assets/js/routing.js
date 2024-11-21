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

function route(){
    const navUl = document.querySelector('nav>ul');
    [...navUl.children].forEach(el =>{
        el.addEventListener('click', e =>{
            if(el.id === 'home'){
                renderHomePage();
            }else if(el.id === 'about'){
                renderAboutPage();
            }
        });
    });
}

renderHomePage();
route();

