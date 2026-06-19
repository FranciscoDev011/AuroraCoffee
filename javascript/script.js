/* Navbar Scroll */
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* Observer */
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
    }, {threshold: 0.4 }
)  

const animated = document.querySelectorAll('.hidden, .hidden-border');
animated.forEach((element) => myObserver.observe(element));