const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});