const closeMenuBtn = document.querySelector('#closeMenu')
const openMenuBtn = document.querySelector('#openMenu')
const navPanelContainer = document.querySelector('.nav__panel-container')

function toggleMenu(){
   navPanelContainer.classList.toggle('expanded')
}