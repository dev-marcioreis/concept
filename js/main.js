// Navbar mobile
const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.closeBtn')
const navMenu = document.querySelector('.navbar__list')

openBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    openBtn.style.display = 'none'
    closeBtn.style.display = 'block'
})

const closeMenu = () => {
    navMenu.classList.remove('active')
    openBtn.style.display = 'block'
    closeBtn.style.display = 'none'
}

closeBtn.addEventListener('click', closeMenu)

if(window.innerWidth < 1024) {
    document.querySelectorAll('.navbar__list .navbar__link').forEach(navbar => {
        navMenu.addEventListener('click', () => {
            closeMenu()
        })
    })
}

// Navbar scroll
const section = document.querySelectorAll('section')
const navLink = document.querySelectorAll('.navbar .navbar__list .navbar__link a')

window.onscroll = () => {
    
    section.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.navbar .navbar__list .navbar__link a[href*=' + id +']').classList.add('active');
            });
        };
    });
};


