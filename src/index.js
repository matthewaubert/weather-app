import getWeatherData from './weather-data';
import { renderCurrentWeather, renderForecast } from './render-controller';

// cache DOM
const form = document.querySelector('form');
const searchInput = form.querySelector('#search-input');

// add event listeners
form.addEventListener('submit', handleSearch);

initApp();

// init page to philadelphia weather
async function initApp() {
  const weatherData = await getWeatherData('philadelphia');
  renderCurrentWeather(weatherData.current);
  renderForecast(weatherData.forecast);
}

// prevent form submission and fetch weather
async function handleSearch(e) {
  e.preventDefault();
  const weatherData = await getWeatherData(searchInput.value);
  renderCurrentWeather(weatherData.current);
  renderForecast(weatherData.forecast);
}
