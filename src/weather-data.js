import { parse } from 'date-fns';
import CurrentWeather from './classes/current-weather';
import Forecast from './classes/forecast';

// fetch and process weather data;
// input: location;
// output: obj which contains CurrentWeather instance and array of Forecast instances
export default async function getWeatherData(location) {
  const response = await fetchWeather(location);
  console.log(response);
  const weatherData = processData(response);
  console.log(weatherData);

  return weatherData;
}

// fetch data from weather API; input: location
async function fetchWeather(location) {
  const apiKey = 'ab36ae6f835d44c781e191306230411';

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`,
    { mode: 'cors' }
  );
  const weatherData = await response.json();
  // HANDLE ERRORS!

  return weatherData;
}

// process weather API json data into data which app can read
// input: weather API json data
// output: obj which contains CurrentWeather instance and array of Forecast instances
function processData(weatherData) {
  const current = new CurrentWeather(
    weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
    weatherData.current.cloud,
    {
      code: weatherData.current.condition.code,
      text: weatherData.current.condition.text,
    },
    // weatherData.current.condition,
    Math.round(weatherData.current.feelslike_c),
    Math.round(weatherData.current.feelslike_f),
    weatherData.current.humidity,
    weatherData.current.is_day,
    {
      city: weatherData.location.name,
      country: formatCountry(weatherData.location.country),
      region: weatherData.location.region,
    },
    Math.round(weatherData.forecast.forecastday[0].day.maxtemp_c),
    Math.round(weatherData.forecast.forecastday[0].day.maxtemp_f),
    Math.round(weatherData.forecast.forecastday[0].day.mintemp_c),
    Math.round(weatherData.forecast.forecastday[0].day.mintemp_f),
    weatherData.forecast.forecastday[0].astro.moon_phase,
    weatherData.forecast.forecastday[0].astro.sunrise,
    weatherData.forecast.forecastday[0].astro.sunset,
    Math.round(weatherData.current.temp_c),
    Math.round(weatherData.current.temp_f),
    new Date(),
    weatherData.current.uv,
    weatherData.current.wind_degree,
    Math.round(weatherData.current.wind_kph),
    Math.round(weatherData.current.wind_mph)
  );

  const forecast = [];
  // iterate over all forecast days
  weatherData.forecast.forecastday.forEach((day) => {
    // create new Forecast instance and push to forecasts array
    forecast.push(
      new Forecast(
        {
          code: day.day.condition.code,
          text: day.day.condition.text,
        },
        parse(day.date, 'yyyy-MM-dd', new Date()),
        Math.round(day.day.maxtemp_c),
        Math.round(day.day.maxtemp_f),
        Math.round(day.day.mintemp_c),
        Math.round(day.day.mintemp_f)
      )
    );
  });

  return { current, forecast };
}

// reformat weatherApi icon link to work with locally hosted icons
// function formatIconLink(iconLink) {
//   const splitLink = iconLink.split('/');
//   return `./icons/${splitLink[5]}/${splitLink[6]}`;
// }

// abbreviate USA
function formatCountry(country) {
  if (country.includes('United States of America')) return 'USA';
  return country;
}
