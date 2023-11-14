import getWeatherData from './weather-data';
import { renderWeather, toggleLoadingComponent } from './render-controller';

// cache DOM
const form = document.querySelector('form');
const searchInput = form.querySelector('#search-input');

// add event listeners
form.addEventListener('submit', handleSearch);

initApp('philadelphia');

// init page to philadelphia weather
async function initApp(location) {
  toggleLoadingComponent(); // show loading component
  const weatherData = await getWeatherData(location);
  if (weatherData !== null) renderWeather(weatherData);
  toggleLoadingComponent(); // hide loading component
}

// prevent form submission and fetch weather
async function handleSearch(e) {
  e.preventDefault();
  initApp(searchInput.value);
}
