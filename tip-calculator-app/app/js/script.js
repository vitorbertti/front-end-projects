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