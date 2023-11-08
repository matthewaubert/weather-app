import CurrentWeather from './classes/current-weather';
import DailyForecast from './classes/daily-forecast';
import HourlyForecast from './classes/hourly-forecast';

// fetch, process, and return weather data; input: location, weather type (e.g. 'current')
export default async function getWeatherData(location, type) {
  const response = await fetchWeather(location);
  console.log(response);
  const weatherData = processData(response, type);
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

// return instance of Weather class; input: weather API data, weather type (e.g.'current')
function processData(weatherData, type) {
  if (type === 'current') {
    return new CurrentWeather(
      weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
      weatherData.current.cloud,
      weatherData.current.condition,
      weatherData.current.feelslike_c,
      weatherData.current.feelslike_f,
      weatherData.current.humidity,
      weatherData.current.is_day,
      {
        city: weatherData.location.name,
        country: weatherData.location.country,
        region: weatherData.location.region,
      },
      weatherData.forecast.forecastday[0].astro.moon_phase,
      weatherData.forecast.forecastday[0].astro.sunrise,
      weatherData.forecast.forecastday[0].astro.sunset,
      weatherData.current.temp_c,
      weatherData.current.temp_f,
      weatherData.current.last_updated,
      weatherData.current.uv,
      weatherData.current.wind_degree,
      weatherData.current.wind_kph,
      weatherData.current.wind_mph
    );
  } else if (type === 'daily') {
    const forecasts = [];
    // iterate over all forecast days
    weatherData.forecast.forecastday.forEach((day) => {
      // create new DailyForecast instance and push to forecasts array
      forecasts.push(
        new DailyForecast(
          day.day.condition,
          day.date,
          day.day.maxtemp_c,
          day.day.maxtemp_f,
          day.day.mintemp_c,
          day.day.mintemp_f
        )
      );
    });

    return forecasts;
  } else if (type === 'hourly') {
    const forecasts = [];
    // iterate over all forecast hours of first day
    weatherData.forecast.forecastday[0].hour.forEach((hour) => {
      // create new HourlyForecast instance and push to forecasts array
      forecasts.push(
        new HourlyForecast(hour.condition, hour.temp_c, hour.temp_f, hour.time)
      );
    });

    return forecasts;
  }
}
