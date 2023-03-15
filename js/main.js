// Scroll navbar opacity
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrollHeader', window.scrollY)
})

// Menu mobile
const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.closeBtn')
const menu = document.querySelector('.navbar__list')

openBtn.addEventListener('click', () => {
    menu.classList.add('showMenu')
    openBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

const closeMenu = () => {
    menu.classList.remove('showMenu')
    closeBtn.style.display = 'none'
    openBtn.style.display = 'inline-block'
}

closeBtn.addEventListener('click', closeMenu)