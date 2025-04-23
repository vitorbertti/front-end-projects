let button = document.querySelector(".button")

let day = document.querySelector(".dayInput")
let month = document.querySelector(".monthInput")
let year = document.querySelector(".yearInput")

let yearNumber = document.querySelector(".yearNumber")
let monthNumber = document.querySelector(".monthNumber")
let dayNumber = document.querySelector(".dayNumber")

let dayClass = document.querySelector(".day")
let monthClass = document.querySelector(".month")
let yearClass = document.querySelector(".year")

let dayError = document.querySelector(".dayError")
let monthError = document.querySelector(".monthError")
let yearError = document.querySelector(".yearError")

day.addEventListener("input", function () {
   if (day.value > 31) {
      dayClass.style.color = "red"
      day.style.borderColor = "red"
      dayError.style.display = "block"
   } else {
      dayClass.style.color = "#716F6F"
      day.style.borderColor = "#716F6F"
      dayError.style.display = "none"
   }
})

month.addEventListener("input", function () {
   if (month.value > 12) {
      monthClass.style.color = "red"
      month.style.borderColor = "red"
      monthError.style.display = "block"
   } else {
      monthClass.style.color = "#716F6F"
      month.style.borderColor = "#716F6F"
      monthError.style.display = "none"
   }
})

year.addEventListener("input", function () {
   if (year.value > (new Date().getFullYear())) {
      yearClass.style.color = "red"
      year.style.borderColor = "red"
      yearError.style.display = "block"
   } else {
      yearClass.style.color = "#716F6F"
      year.style.borderColor = "#716F6F"
      yearError.style.display = "none"
   }
})

button.addEventListener("click", function () {
   const birthDate = new Date(`${year.value}-${month.value}-${day.value}`)
   const today = new Date()
   const ageInMilliseconds = today - birthDate
   const millisecondsInYear = 3.15576e10
   const millisecondsInMonth = millisecondsInYear / 12
   const millisecondsInDay = 24 * 60 * 60 * 1000

   const years = Math.floor(ageInMilliseconds / millisecondsInYear)
   const months = Math.floor((ageInMilliseconds % millisecondsInYear) / millisecondsInMonth)
   const days = Math.floor((ageInMilliseconds % millisecondsInMonth) / millisecondsInDay)

   yearNumber.innerHTML = years
   monthNumber.innerHTML = months
   dayNumber.innerHTML = days
})