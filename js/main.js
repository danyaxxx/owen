const HTML = document.documentElement;
const BODY = document.body;
const header = document.querySelector('.section-header');


function headerActive() {
    if (HTML.scrollTop > 49 || BODY.scrollTop > 49) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

window.addEventListener('scroll', (e) => {
    headerActive();
});


let sliderPrev = '<img src="./img/lnr-chevron-left.svg" />';
let sliderNext = '<img src="./img/lnr-chevron-right.svg" />';
let sliderSettings = {
    items: 1,
    nav: true,
    loop: true,
    modNavElement: true,
    modNavPrev: sliderPrev,
    modNavNext: sliderNext,
};
TDC('#banner', {...sliderSettings, dots: true});
TDC('#testimonials', sliderSettings);


let feedbackClose = document.getElementById('feedback__close');
feedbackClose.addEventListener('click', () => {
    BODY.classList.remove('feedback-open');
});

let signUp = document.querySelectorAll('.signup');
signUp.forEach((item) => {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        BODY.classList.add('feedback-open');
    });
});


let nav = document.querySelector('.nav');
let navLinks = document.querySelectorAll('.nav-item__link.scroll');

nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('scroll')) {
        navLinks.forEach((item) => {
            if (e.target === item) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
});
