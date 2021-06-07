const navItems = document.querySelectorAll(".nav-item");
const dropdownToggles = document.querySelectorAll(".nav-item .toggle-dropdown");
const dropdownItems = document.querySelectorAll(".dropdown");
const navToggle = document.querySelector(".header__toggle-btn");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");

const clearDropdownActive = () => {
    dropdownItems.forEach(di => {
        di.classList.remove("active");
    });
}

navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navToggle.classList.toggle("active");
});

dropdownToggles.forEach(dropdownToggle => {
    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const activeItem = dropdownToggle.parentElement.querySelector(".dropdown");
        let activeItemKeeper = activeItem.classList.contains("active")
        clearDropdownActive();
        if (!activeItemKeeper)
            activeItem.classList.add("active");
    });
});

window.addEventListener("mouseup", (e) => {
    let inside = false;
    navItems.forEach(ni => {
        if (!ni.contains(e.target) && inside !== true)
            inside = false
        else inside = true
    });
    if (!inside)
        clearDropdownActive();
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    }
    else header.classList.remove("scrolled");
});
