let button = document.querySelector(".button")
let continueButton = document.querySelector(".continue")
let cardHolderName = document.querySelector(".cardHolderNameInput")
let cardHolderNumber = document.querySelector(".cardHolderNumberInput")
let month = document.querySelector(".month")
let year = document.querySelector(".year")
let cvc = document.querySelector(".cvc")
let backNumber = document.querySelector(".backNumber")
let cardNumber = document.querySelector(".frontNumber")
let cardName = document.querySelector(".name")
let monthCard = document.querySelector(".mm")
let yearCard = document.querySelector(".yy")
let inputs = document.querySelectorAll("input")
let form = document.querySelector(".form")
let thankyou = document.querySelector(".center")

let numberError = document.querySelector(".numberError")
let monthYearError = document.querySelector(".monthYearError")
let cvcError = document.querySelector(".cvcError")

button.addEventListener("click", function (e) {
   if(cardNameFun() === true && cardNumberFun() === true && monthFun() === true && yearFun() === true && cvcFun() === true) {
      cardNameFun()
      cardNumberFun()
      monthFun()
      yearFun()
      cvcFun()
      form.style.display = "none"
      thankyou.style.display = "block"
   } else {
      cardNameFun()
      cardNumberFun()
      monthFun()
      yearFun()
      cvcFun()
   }
})