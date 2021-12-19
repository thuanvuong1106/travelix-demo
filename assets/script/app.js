// Active Navbar
const listActives = document.querySelectorAll(".nav-list li a");

listActives.forEach(listActive => {
    listActive.addEventListener("click", () => {
        document.querySelector(".nav-list li a.active").classList.remove("active");
        listActive.classList.add("active");
    })
})

// Active Hero
const heroActives = document.querySelectorAll('.hero-tab-item')

heroActives.forEach(heroActive => {
    heroActive.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.hero-tab-item.active').classList.remove('active');
        heroActive.classList.add('active');
    })
});

// Scroll
const headerTop = document.querySelector(".header .header__top")
const headerBottom = document.querySelector(".header .header__bottom")
const btnScroll = document.querySelector(".btn-scroll")

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerTop.classList.add("hide")
        headerBottom.classList.add("shrink")
    } else {
        headerTop.classList.remove("hide")
        headerBottom.classList.remove("shrink")
    }
})

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnScroll.classList.add("active")
    } else {
        btnScroll.classList.remove("active")
    }
})

btnScroll.addEventListener("click", () => {
    window.scroll(0, 0)
})