const billInput = document.querySelector(".bill-input")
const peopleInput = document.querySelector(".people-input")
const tips = document.querySelectorAll(".tips")
const tipPerPerson = document.getElementById("tip-amount")
const totalPerPerson = document.getElementById("total-amount")
const resetBtn = document.querySelector(".reset")
const tipCustom = document.querySelector(".tip-custom")
const error = document.querySelector(".error")

let billValue = 0.0
let peopleValue = 1
let tipValue = 0.15

billInput.value = "0.0"
peopleInput.value = "1"
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2)
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2)

function calculateTip() {
   if (peopleValue >= 1) {
      let tipAmount = (billValue * tipValue) / peopleValue
      let total = (billValue + tipAmount) / peopleValue
      tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2)
      totalPerPerson.innerHTML = "$" + total.toFixed(2)
   }
}

function billInputFun() {
   billValue = parseFloat(billInput.value)
   calculateTip()
}

function peopleInputFun() {
   peopleValue = parseFloat(peopleInput.value)
 
   if (peopleValue < 1) {
      error.style.display = "flex"
      peopleInput.style.border = "thick solid red"
   } else {
      error.style.display = "none"
      peopleInput.style.border = "none"
      calculateTip()
   }
}

function handleClick(event) {
   tips.forEach(function (val) {
      val.classList.remove("active-tip")
      if (event.target.innerHTML == val.innerHTML) {
         val.classList.add("active-tip")
         tipValue = parseFloat(val.innerHTML) / 100
      }
   })
   calculateTip();
}

function tipInputFun() {
   tipValue = parseFloat(tipCustom.value / 100)
 
   tips.forEach(function (val) {
      val.classList.remove("active-tip")
   })
   calculateTip()
}

function reset() {
   billInput.value = "0.0"
   billInputFun()
   peopleInput.value = "1"
   peopleInputFun()
   tipCustom.value = ""
}

billInput.addEventListener("input", billInputFun)
peopleInput.addEventListener("input", peopleInputFun)
tipCustom.addEventListener("input", tipInputFun)
resetBtn.addEventListener("click", reset)