import getWeatherData from './weather-data';
import { renderWeather, toggleLoadingComponent } from './render-controller';
import {
  storageAvailable,
  deserializeLocation,
  serializeLocation,
} from './local-storage';

// cache DOM
const form = document.querySelector('form');
const searchInput = form.querySelector('#search-input');

// add event listeners
document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSearch);

// init app with weather from cached location or philadelphia
function initApp() {
  if (storageAvailable('localStorage') && localStorage.getItem('location')) {
    showWeather(deserializeLocation());
  } else {
    showWeather('philadelphia');
  }
}

// get weather data and render to display
async function showWeather(location) {
  toggleLoadingComponent(); // show loading component
  const weatherData = await getWeatherData(location);
  if (weatherData !== null) {
    renderWeather(weatherData);
    serializeLocation(location); // cache location in localStorage
  }
  toggleLoadingComponent(); // hide loading component
}

// prevent form submission and fetch weather
async function handleSearch(e) {
  e.preventDefault();
  showWeather(searchInput.value);
}
