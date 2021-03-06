// ============ show menu ===========
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('navToggle', 'navMenu');


// ======== Remove menu mobile ========
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// ========= scroll to sections by link =========
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive);


// ============== CHANGE BACKGROUND HEADER ================
function scrollHeader(){
  const nav = document.getElementById('header')

  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


// =========== SHOW SCROLL TOP ===========
function scrollTop(){
  const scrollTop = document.getElementById('scrollTop')

  if(this.scrollY >= 560) scrollTop.classList.add('scroll__top'); else scrollTop.classList.remove('scroll__top');
}

window.addEventListener('scroll', scrollTop);


// =============== dark/light theme =================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
});

sr.reveal(`.home-data, .home-img,
            .about-data, .about-img,
            .services-content, .menu-content,
            .app-data, .app-img,
            .contact-data, .contact-button,
            .footer-content`, {
    interval: 200
})