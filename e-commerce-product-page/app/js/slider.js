const btns = document.querySelectorAll('.btn')
const sliderContainer = document.querySelector('.slider-container')
const slider = document.querySelector('.slider')
const slide = [...document.querySelectorAll('.slide')]
let currentIndex = 0

function moveSlider(dir){
   dir === 'next' ? currentIndex++ : currentIndex --
   slider.style.transform = `translateX(-${100 * currentIndex}%)`

   switch (currentIndex){
      case 0:
         document.querySelector('#prev').classList.add('hidden')
         break
      case slide.length - 1:
         document.querySelector('#next').classList.add('hidden')
         break
      default: 
         btns.forEach(b => b.classList.remove('hidden'))
      break
   }
}