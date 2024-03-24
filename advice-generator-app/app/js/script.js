const url = "https://api.adviceslip.com/advice"
const button = document.querySelector(".dice")
const adviceID = document.querySelector(".advice")
const adviceText = document.querySelector(".textAdvice")

async function getUrl() {
   const response = await fetch(url)
   const data = await response.json()
   adviceID.innerHTML = data.slip.id
   adviceText.innerHTML = data.slip.advice
}