let button = document.querySelector(".button")
let ratings = document.querySelectorAll("#circle")
let number = document.querySelector(".number")
let endState = document.querySelector(".endState")
let startState = document.querySelector(".startState")
let currentClickedElement = null

ratings.forEach((element) => {
   element.addEventListener('click' , () => {
      if(currentClickedElement){
         currentClickedElement.style.backgroundColor = ""
      }

      element.style.backgroundColor ="#979797"
      element.style.color ="white"
      currentClickedElement =element

      button.addEventListener('click', function(){
         endState.style.display = "flex"
         startState.style.display = "none"
         number.innerHTML = element.innerHTML  
      })
   })
})