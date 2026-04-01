const ddlUnits = document.querySelector("#ddlUnits")
const ddlDay = document.querySelector("#ddlDay")
const txtSearch = document.querySelector("#txtSearch")
const btnSearch = document.querySelector("#btnSearch")
const dvCityCountry = document.querySelector("#dvCityCountry")
const dvCurrDate = document.querySelector("#dvCurrDate")
const dvCurrTemp = document.querySelector("#dvCurrTemp")
const pFeelsLike = document.querySelector("#pFeelsLike")
const pHumidity = document.querySelector("#pHumidity")
const pWind = document.querySelector("#pWind")
const pPrecipitation = document.querySelector("#pPrecipitation")
let cityName, countryName, weatherData

async function getGeoData() {
   let search = txtSearch.value
 
   const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`
   try {
     const response = await fetch(url)
     if (!response.ok) {
       throw new Error(`Response status: ${response.status}`)
     }
 
     const result = await response.json()
 
     let lat = result[0].lat
     let lon = result[0].lon
 
     loadLocationData(result)
     getWeatherData(lat, lon)

   } catch (error) {
     console.error(error.message)
   }
 }

 function loadLocationData(locationData) {
  let location = locationData[0].address
  cityName = location.city
  countryName = location.country_code.toUpperCase()

  let dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  }

  let currDate = new Intl.DateTimeFormat("pt-BR", dateOptions).format(new Date())

  dvCityCountry.textContent = `${cityName}, ${countryName}`
  dvCurrDate.textContent = currDate
}