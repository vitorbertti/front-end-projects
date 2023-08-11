const steps = document.querySelectorAll(".stp")
const circleSteps = document.querySelectorAll(".step")
const formInputs = document.querySelectorAll(".step-1 form input")
const plans = document.querySelectorAll(".plan-card")
const switcher = document.querySelector(".switch")
const addons = document.querySelectorAll(".box")
const total = document.querySelector(".total b")
const planPrice = document.querySelector(".plan-price")

let time
let currentStep = 1
let currentCircle = 0

const obj = {
   plan: null,
   kind: null,
   price: null,
}

steps.forEach((step) => {
   const nextBtn = step.querySelector(".next-stp")
   const prevBtn = step.querySelector(".prev-stp")

   if (prevBtn) {
      prevBtn.addEventListener("click", () => {
         document.querySelector(`.step-${currentStep}`).style.display = "none"
         currentStep--
         document.querySelector(`.step-${currentStep}`).style.display = "flex"
         circleSteps[currentCircle].classList.remove("active")
         currentCircle--
      })
   }
   
   nextBtn.addEventListener("click", () => {
      document.querySelector(`.step-${currentStep}`).style.display = "none"

      if (currentStep < 5 && validateForm()) {
         currentStep++
         currentCircle++
         setTotal()
      }

      document.querySelector(`.step-${currentStep}`).style.display = "flex"
      circleSteps[currentCircle].classList.add("active")
      summary(obj)
   })
})

function summary(obj) {
   const planName = document.querySelector(".plan-name")
   const planPrice = document.querySelector(".plan-price")

   planPrice.innerHTML = `${obj.price.innerText}`
   planName.innerHTML = `${obj.plan.innerText} (${
      obj.kind ? "yearly" : "monthly"
   })`
}