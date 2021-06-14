// ----------------- cursor -----------------------

var cursor = document.querySelector(".cursor");
  document.addEventListener('mousemove', function(e){
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
});

// ------------------- hovers ---------------------

const ctas = document.querySelector(".cta");
const cta_span = document.querySelector(".cta__span");

ctas.addEventListener("mouseover", e => {
    cta_span.style.left = e.pageX - ctas.offsetLeft + "px";
    cta_span.style.top = e.pageY - ctas.offsetTop + "px";
    cursor.classList.add("hide-cursor");
});

ctas.addEventListener("mouseout", e => {
    cta_span.style.left = e.pageX - ctas.offsetLeft + "px";
    cta_span.style.top = e.pageY - ctas.offsetTop + "px";
    cursor.classList.remove("hide-cursor");
});

// ------------ lottie animations ------------------

const sleepingCat = bodymovin.loadAnimation({
    container: document.querySelector('.sleeping-cat'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie-animations/slapende-kat-final-2.json'
})

const standingCat = bodymovin.loadAnimation({
    container: document.querySelector('.standing-cat'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie-animations/Kat staand.json'
})

const catLicking = bodymovin.loadAnimation({
    container: document.querySelector('.cat-licking'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie-animations/kat pootje.json'
})