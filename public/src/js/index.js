// coming soon animation
document.addEventListener("DOMContentLoaded", function() {
    new TypeIt("#coming-soon-text", {
        strings: ["COMING SOON"],
        waitUntilVisible: true
    }).go();
});


// Smooth scrolling (ease the scrolling)
const body = document.body,
    scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();