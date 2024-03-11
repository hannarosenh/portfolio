const handleToggleMenu = () => {
    const $hamburger = document.querySelector('.hamburger');
    const $nav = document.querySelector('.nav__list');

    $hamburger.addEventListener("click", () => {
        $hamburger.classList.toggle("active");
        $nav.classList.toggle("active");

    })

    document.querySelectorAll("nav__list-item__link").forEach(n => n.addEventListener("click", () => {
        $hamburger.classList.remove("active");
        $nav.classList.remove("active");
    }))
}

const init = () => {
handleToggleMenu();
}

init();