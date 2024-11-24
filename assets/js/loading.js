function start(){
    const cover = document.createElement('div');
    cover.className = 'cover';
    cover.innerHTML = `
    <div class="box">
       <div class="plane"></div>
    </div>
    `;
    document.body.appendChild(cover);
    setTimeout(() => {
        cover.remove();
    }, 2000);
}
// start();