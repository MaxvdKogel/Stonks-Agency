// ----------------- cursor -----------------------

var cursor = document.querySelector(".cursor");
  document.addEventListener('mousemove', function(e){
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
});

// ------------------- hovers ---------------------

// hero cta

const hero_cta = document.querySelector(".hero__cta");
const hero_cta_span = document.querySelector(".hero__cta-span");

hero_cta.addEventListener("mouseover", e => {
    hero_cta_span.style.left = e.pageX - hero_cta.offsetLeft + "px";
    hero_cta_span.style.top = e.pageY - hero_cta.offsetTop + "px";
    cursor.classList.add("hide-cursor");
});

hero_cta.addEventListener("mouseout", e => {
    hero_cta_span.style.left = e.pageX - hero_cta.offsetLeft + "px";
    hero_cta_span.style.top = e.pageY - hero_cta.offsetTop + "px";
    cursor.classList.remove("hide-cursor");
});

// contact cta

const contact_cta = document.querySelector('.contact__cta');
const contact_cta_span = document.querySelector('.contact__cta-span');

contact_cta.addEventListener("mouseover", e => {
    contact_cta_span.style.left = e.pageX - contact_cta.offsetLeft + "px";
    contact_cta_span.style.top = e.pageY - contact_cta.offsetTop + "px";
    cursor.classList.add("hide-cursor");
});

contact_cta.addEventListener("mouseout", e => {
    contact_cta_span.style.left = e.pageX - contact_cta.offsetLeft + "px";
    contact_cta_span.style.top = e.pageY - contact_cta.offsetTop + "px";
    cursor.classList.remove("hide-cursor");
});

// view case

const vastgoed = document.querySelector(".desktop-vastgoed");
const case_study = document.querySelector(".case-study");

vastgoed.addEventListener('mouseover', () => {
    cursor.classList.add("view-case");
    case_study.classList.add("view-case__visible");
})

vastgoed.addEventListener('mouseleave', () => {
    cursor.classList.remove("view-case");
    case_study.classList.remove("view-case__visible");
})

// bezoek website

const phoneroyal = document.querySelector(".desktop-phoneroyal");
const bezoek_website = document.querySelector(".bezoek-website");

phoneroyal.addEventListener('mouseover', () => {
    cursor.classList.add("bezoek-website__hover");
    bezoek_website.classList.add("bezoek-website__visible");
})

phoneroyal.addEventListener('mouseleave', () => {
    cursor.classList.remove("bezoek-website__hover");
    bezoek_website.classList.remove("bezoek-website__visible");
})

const jasper = document.querySelector(".desktop-jasper");

jasper.addEventListener('mouseover', () => {
    cursor.classList.add("bezoek-website__hover");
    bezoek_website.classList.add("bezoek-website__visible");
})

jasper.addEventListener('mouseleave', () => {
    cursor.classList.remove("bezoek-website__hover");
    bezoek_website.classList.remove("bezoek-website__visible");
})

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