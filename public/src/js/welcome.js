let img5 = document.getElementById("image-5");
let img4 = document.getElementById("image-4");
let img3 = document.getElementById("image-3");
let img2 = document.getElementById("image-2");
let img1 = document.getElementById("image-1");

let img5_mob = document.getElementById("image-mob-5");
let img4_mob = document.getElementById("image-mob-4");
let img3_mob = document.getElementById("image-mob-3");
let img2_mob = document.getElementById("image-mob-2");
let img1_mob = document.getElementById("image-mob-1");

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    // img5.style.top = value * -0.5 + 'px';
    img4.style.top = value * 0.3 + 'px';
    img3.style.top = value * 0.2 + 'px';
    img2.style.top = value * 0.1 + 'px';
    // img1.style.top = value * -0.4 + 'px';
    
    // Apply smooth transition to images
    img4.style.transition = 'top 0.4s ease';
    img3.style.transition = 'top 0.4s ease';
    img2.style.transition = 'top 0.4s ease';

    // mobile view 
    // img5_mob.style.top = value * -0.5 + 'px';
    img4_mob.style.top = value * 0.3 + 'px';
    img3_mob.style.top = value * 0.2 + 'px';
    img2_mob.style.top = value * 0.1 + 'px';
    // img1_mob.style.top = value * -0.4 + 'px';
    
    // Apply smooth transition to images
    img4_mob.style.transition = 'top 0.4s ease';
    img3_mob.style.transition = 'top 0.4s ease';
    img2_mob.style.transition = 'top 0.4s ease';
});



