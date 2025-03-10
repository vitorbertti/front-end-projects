const countdownDate = new Date("Mar 31, 2025 23:52:00").getTime()

let x = setInterval(() => {
  const today = new Date().getTime()
  let distance = countdownDate - today
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
 }, 1000)