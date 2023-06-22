let img5 = document.getElementById("image-5");
let img4 = document.getElementById("image-4");
let img3 = document.getElementById("image-3");
let img2 = document.getElementById("image-2");
let img1 = document.getElementById("image-1");

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    // img5.style.top = value * -0.5 + 'px';
    img4.style.top = value * 0.3 + 'px';
    img3.style.top = value * 0.2 + 'px';
    img2.style.top = value * 0.1 + 'px';
    // img1.style.top = value * -0.4 + 'px';
});