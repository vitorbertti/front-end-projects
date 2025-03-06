const countdownDate = new Date("Mar 31, 2025 23:52:00").getTime()

let x = setInterval(() => {
   const today = new Date().getTime()
   let distance = countdownDate - today
 }, 1000)