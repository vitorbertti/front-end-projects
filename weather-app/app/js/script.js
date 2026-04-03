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

async function getWeatherData(lat, lon) {
  let tempUnit = "celsius"
  let windUnit = "kmh"
  let precipUnit = "mm"

  if (ddlUnits.value === "F") {
    tempUnit = "fahrenheit"
    windUnit = "mph"
    precipUnit = "inch"
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,precipitation,wind_speed_10m&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    weatherData = await response.json()

    loadCurrentWeather(weatherData)
    loadDailyForecast(weatherData)
    loadHourlyForecast(weatherData)
  } catch (error) {
    console.error(error.message)
  }
}

function loadCurrentWeather() {
  dvCurrTemp.textContent = Math.round(weatherData.current.temperature_2m)
  pFeelsLike.textContent = Math.round(weatherData.current.apparent_temperature)
  pHumidity.textContent = weatherData.current.relative_humidity_2m
  pWind.textContent = `${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m.replace("mp/h", "mph")}`
  pPrecipitation.textContent = `${weatherData.current.precipitation} ${weatherData.current_units.precipitation.replace("inch", "in")}`
}