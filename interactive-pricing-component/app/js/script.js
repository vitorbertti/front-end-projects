'use strict'

const rangeInput = document.querySelector(".myrange")
const views = document.querySelector(".number")
const cost = document.querySelector(".amount")
const discount = document.querySelector(".discountNumber")

const data = [
   {
      pageviews: "10k",
      monthlycost: 8,
      leftpercentage: 0,
   },
   {
      pageviews: "50k",
      monthlycost: 12,
      leftpercentage: 25,
   },
   {
      pageviews: "100k",
      monthlycost: 16,
      leftpercentage: 50,
   },
   {
      pageviews: "500k",
      monthlycost: 24,
      leftpercentage: 75,
   },
   {
      pageviews: "1M",
      monthlycost: 36,
      leftpercentage: 100,
   },
]

const getData = function () {
   const { pageviews, monthlycost, leftpercentage } = data[rangeInput.value - 1]
 
   if(rangeInput.value == 1) {
      rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0,hsl(174, 77%, 80%) 0%,hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)"
   }else if(rangeInput.value == 2) {
      rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0,hsl(174, 77%, 80%) 25%,hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)"
   }else if(rangeInput.value == 3) {
      rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0,hsl(174, 77%, 80%) 50%,hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)"
   }else if(rangeInput.value == 4) {
      rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0,hsl(174, 77%, 80%) 75%,hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)"
   }else if(rangeInput.value == 5) {
      rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0,hsl(174, 77%, 80%) 100%,hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)"
   }
   
   views.innerHTML = pageviews
   cost.innerHTML = monthlycost.toFixed(2)
   discount.innerHTML = leftpercentage
}
