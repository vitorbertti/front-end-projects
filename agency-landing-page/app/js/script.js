const btnOpen = document.querySelector('#btnOpen')
const btnClose = document.querySelector('#btnClose')
const media = window.matchMedia('(width < 64rem)')
const topNavMenu = document.querySelector('.header__menu')
const main = document.querySelector('main')
const body = document.querySelector('body')

function openMobileMenu() {
   btnOpen.setAttribute('aria-expanded', 'true')
   topNavMenu.removeAttribute('inert')
   topNavMenu.removeAttribute('style')
   main.setAttribute('inert', '')
   bodyScrollLockUpgrade.disableBodyScroll(body)
   btnClose.focus()
}

function closeMobileMenu() {
   btnOpen.setAttribute('aria-expanded', 'false')
   topNavMenu.setAttribute('inert', '')
   main.removeAttribute('inert')
   bodyScrollLockUpgrade.enableBodyScroll(body)
   btnOpen.focus()
 
   setTimeout(() => {
      topNavMenu.style.transition = 'none'
   }, 500)
}

function setupTopNav(e) {
   if (e.matches) {
      topNavMenu.setAttribute('inert', '')
      topNavMenu.style.transition = 'none'
   } else {
      closeMobileMenu()
      topNavMenu.removeAttribute('inert')
   }
}
 
setupTopNav(media)