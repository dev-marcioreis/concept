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


// Sphere
let x = 1;

while (x <= 12) {

    let plane = document.createElement('div');
    plane.className = `plane plane-${x}`;
    plane.style.transform = `rotateY(${x * 15}deg)`;
    document.querySelector('.sphere').appendChild(plane);

    for (y = 1; y <= 36; y++) {

      let spoke = document.createElement('div');
      spoke.className = `spoke spoke-${y}`;
      spoke.innerHTML = ` <div class="dot" style="background-color:${
        y % 2 === 0 ? 'hsl(87, 62%, 47%)' : 'hsl(0, 0%, 100%)'
      }; animation: pulsate .5s infinite ${aDelay(y)}s alternate both"></div>`;

      spoke.style.transform = `rotateZ(${y}0deg)`;
      document.querySelector(`.plane-${x}`).appendChild(spoke);

    }

    x++;

  }

function aDelay(t) {
    switch (t) {
        case 1:
    case 35:
      return 0.05;
    case 2:
    case 34:
      return 0.1;
    case 3:
    case 33:
      return 0.15;
    case 4:
    case 34:
      return 0.2;
    case 5:
    case 33:
      return 0.25;
    case 6:
    case 30:
      return 0.3;
    case 7:
    case 29:
      return 0.35;
    case 8:
    case 28:
      return 0.4;
    case 9:
    case 27:
      return 0.45;
    case 10:
    case 26:
      return 0.5;
    case 11:
    case 25:
      return 0.55;
    case 12:
    case 24:
      return 0.6;
    case 13:
    case 23:
      return 0.65;
    case 14:
    case 22:
      return 0.7;
    case 15:
    case 21:
      return 0.75;
    case 16:
    case 20:
      return 0.8;
    case 17:
    case 19:
      return 0.85;
    case 18:
      return 0.95;
    case 36:
      return 0;
    default:
      return 1;
    }
}


// Cards
const cards = document.querySelectorAll('.card')

cards.forEach((card, index) => {
  card.addEventListener('click', () => {

    const state = Flip.getState(cards)
    const isCardActive = card.classList.contains('active')

    cards.forEach((otherCard, otherIndex) => {

      otherCard.classList.remove('active')
      otherCard.classList.remove('inactive')

      if(!isCardActive && index !== otherIndex) {
        otherCard.classList.add('inactive')
      }

    })

    if(!isCardActive) card.classList.add('active')

    Flip.from(state, {
      duration: 1,
      ease: "expo.out",
      absolute: true
    })

  })
})