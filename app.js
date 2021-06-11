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