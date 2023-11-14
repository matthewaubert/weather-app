import getWeatherData from './weather-data';
import renderWeather from './render-controller';

// cache DOM
const form = document.querySelector('form');
const searchInput = form.querySelector('#search-input');

// add event listeners
form.addEventListener('submit', handleSearch);

initApp('philadelphia');

// init page to philadelphia weather
async function initApp(location) {
  const weatherData = await getWeatherData(location);
  if (weatherData === null) return; // if no weather data, stop
  renderWeather(weatherData);
}

// prevent form submission and fetch weather
async function handleSearch(e) {
  e.preventDefault();
  initApp(searchInput.value);
}
