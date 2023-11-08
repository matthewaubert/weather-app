import getWeatherData from './weather-data';
import renderWeather from './render-controller';

// cache DOM
const form = document.querySelector('form');
const searchInput = form.querySelector('#search-input');

// add event listeners
form.addEventListener('submit', handleSearch);

initApp();

// init page to philadelphia weather
async function initApp() {
  const weatherData = await getWeatherData('philadelphia');
  renderWeather(weatherData);
}

// prevent form submission and fetch weather
async function handleSearch(e) {
  e.preventDefault();
  const weatherData = await getWeatherData(searchInput.value);
  renderWeather(weatherData);
}
