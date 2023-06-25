
// load sections from files
$("#navbar").load('components/navbar.component.html');
$("#welcome-section").load('sections/welcome.section.html');
$("#about-section").load('sections/about.section.html');
$("#organizedby-section").load('sections/organizedby.section.html');
$("#timeline-section").load('sections/timeline.section.html');
$("#awards-section").load('sections/awards.section.html');
$("#sponsors-section").load('sections/sponsors.section.html');
$("#contactus-section").load('sections/contactus.section.html');
$("#footer").load('components/footer.component.html');

// coming soon animation
document.addEventListener("DOMContentLoaded", function () {
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