# Weather App

This project was built as part of <a href="https://www.theodinproject.com/lessons/node-path-javascript-weather-app">The Odin Project: JavaScript course</a> in order to practice what I've learned about asynchronous JavaScript, including Promises, async/await, and working with APIs.

## Understanding the Problem

Create a weather application with a user interface. The user should be able to search for a specific location, view the weather, and toggle the data to display in Fahrenheit or Celsius.

The look of the page should change based on the data - perhaps by changing the background color or by adding images that describe the weather.

## Plan

1. Project startup:
   1. Initialize my project to create a package.json file
   1. Install webpack
   1. Set up my directories according to convention
   1. Set up an HTML doc with appropriate links to CSS and JS

1. Write functions that hit the API. They should take a location and return weather data for that location. To start, simply console.log() the information.

1. Write functions that _process_ the JSON data I will receive from the API and return an object with only the data that I require for the app
   - current data:
     - chanceOfRain
     - cloud
     - condition
     - feelsLikeC
     - feelsLikeF
     - humidity
     - isDay
     - lastUpdated
     - moonPhase,
     - sunrise,
     - sunset,
     - tempC
     - tempF
     - uv
     - windDegree
     - windKph
     - windMph
   - daily forecast data:
     - condition
     - date
     - maxTempC
     - maxTempF
     - minTempC
     - minTempF
   - hourly forecast data:
     - condition
     - time
     - tempC
     - tempF
     - time

1. Set up a simple form that enables the user to input their location. The app should then fetch the weather info based on the input location (still simply console.log() the info).

1. Display the information on the webpage

1. Add styling

1. Optional: Add a 'loading' component that displays from the time the form is submitted until the info comes back from the API. (Use DevTools to test for low-end devices.)

### Credits

Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>