// console.log("Never Give Up");


const buttons = document.querySelector('.latest__works--btns');
const allButtons = buttons.children
// console.log(buttons.children);


buttons.addEventListener("click", (e) => {
    const btnClass = e.target.classList;
    console.log(btnClass[0]);

    btnClass.forEach((e) => {
        console.log(e.classList.add('btn-active'));
    })

})

// For Swiper JS 

new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


//For Responsive Swiper

const myJsmedia = (widthSize) => {
    if (widthSize.matches) {
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30
        });
    }
    else {
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30
        });
    }
}


const widthSize = window.matchMedia('(max-width:580px)');

myJsmedia(widthSize)

widthSize.addEventListener('change', myJsmedia)


// For Scroll to Top Button

const headers = document.querySelector('.headers')
const footer = document.querySelector('footer')

const scrollToTop = document.createElement("div")
scrollToTop.classList.add("scroll-to-top");
scrollToTop.innerHTML = `<i class="fa-solid fa-arrow-up fa-3x"></i>`

footer.append(scrollToTop)

scrollToTop.addEventListener('click', () => {
    headers.scrollIntoView({ behavior: "smooth" })
    console.log("clicked");
})



// Smooth Scrolling Behaviour


const contact = document.querySelector('.contact')

document.querySelector('.hero__content--btn').addEventListener('click', (e) => {
    e.preventDefault();
    contact.scrollIntoView({ behavior: "smooth" });
})


// For Animated Number Counter

const counterSection = document.querySelector('.statistics')
const counterObserver = new IntersectionObserver((entries, observer) => {
    const ent = entries[0];

    if (ent.isIntersecting == false) {
        return;
    }


    const counterData = document.querySelectorAll('.counter-data');

    counterData.forEach((curElem) => {
        const animateNum = () => {
            const targetNum = curElem.dataset.number;
            const initialNum = parseInt(curElem.innerText);
            const range = 20;
            const incVal = Math.trunc(targetNum / range)


            if (initialNum < targetNum) {
                curElem.innerText = `${initialNum + incVal}+`;

                setTimeout(animateNum, 50)
            }
        }
        animateNum();
    })


}, {
    root: null,
    threshold: 0
})


counterObserver.observe(counterSection)




// Responsive Navbar

const menuBars = document.querySelector('.menu__bars')

const navMenu = document.querySelector('.nav__menu--lists');
const navBtn = document.querySelector('.hemburger__menu')
console.log(navBtn.children);

navBtn.addEventListener('click', (e) => {
    console.log(navMenu.classList.toggle('responsive__nav--menu'));

    if (navMenu.classList.contains('responsive__nav--menu')) {
        menuBars.classList.replace('fa-xmark', 'fa-bars')
    }
    else {
        menuBars.classList.replace('fa-bars', 'fa-xmark')

    }
})


// Stickey Header
const heroSection = document.querySelector('.hero__section')
const newHeader = document.querySelector('header')

const observer = new IntersectionObserver((entries) => {
    const ent = entries[0]
    if (ent.isIntersecting == false) {
        newHeader.classList.add('stickey')
    } else {
        newHeader.classList.remove('stickey')
    }
}, { root: null, threshold: 0 })


observer.observe(heroSection)





