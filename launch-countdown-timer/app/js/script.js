const countdownDate = new Date("Mar 31, 2025 23:52:00").getTime()

let x = setInterval(() => {
  const today = new Date().getTime()
  let distance = countdownDate - today
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))

  document.getElementById("days").innerHTML = days
 }, 1000)