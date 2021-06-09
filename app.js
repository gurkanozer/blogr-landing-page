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
    dropdownToggles.forEach(dt => {
        dt.classList.remove("active");
    })
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
        let isArrowUp = dropdownToggle.classList.contains("active");
        clearDropdownActive();
        if (!activeItemKeeper)
            activeItem.classList.add("active");
        if (isArrowUp)
            dropdownToggle.classList.remove("active");
        else
            dropdownToggle.classList.add("active");

    });
});

window.addEventListener("mouseup", (e) => {
    let inside = false;
    navItems.forEach(ni => {
        if (!ni.contains(e.target) && inside !== true)
            inside = false
        else inside = true
    });
    if (!inside) {

        clearDropdownActive();
    }
});
