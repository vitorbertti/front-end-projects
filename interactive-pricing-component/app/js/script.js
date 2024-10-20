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
