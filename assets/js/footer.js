function renderFooter() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="contact">
            <h4>contact us</h4>
            <ul>
                <li>
                    <span class="material-symbols-outlined">call</span>
                     <a href="tel:+201008840871" aria-label="phone number"> Tel :+20 1008840871 </a> 
                </li>
                <li>
                    <span class="material-symbols-outlined">schedule</span>
                    <span>Response hours: 8 to 20</span> 
                </li>
                <li>
                    <span class="material-symbols-outlined">email</span>
                     <a href="mailto:info@onlearn.com" aria-label="email"> Email: info@onlearn.com </a> 
                </li>
            </ul>
        </div>

        <div class="mid-footer">
            <div class="footer-categories">
                <h4>Categories</h4>
                <ul>
                    <li> <a href="">Web Development</a> </li>
                    <li> <a href="">UI/UX</a> </li>
                    <li> <a href="">Fitness</a> </li>
                    <li> <a href="">Marketing</a> </li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>links</h4>
                <ul>
                    <li> <a href="">Home</a> </li>
                    <li> <a href="">About us</a> </li>
                    <li> <a href="">courses</a> </li>
                    <li> <a href="">profile</a> </li>
                </ul>
            </div>
        </div>

        <div class="footer-logo">
            <h4>LOGO</h4>
        </div>
    `
}
renderFooter();