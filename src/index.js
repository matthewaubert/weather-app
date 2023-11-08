import { format, parse } from 'date-fns';
import getWeatherData from './weather-data';

// cache DOM
const form = document.querySelector('form');
const searchInput = form.querySelector('#search-input');
const locationDisplay = document.querySelector('.location');
const location = {
  city: locationDisplay.querySelector('.city'),
  region: locationDisplay.querySelector('.region'),
  country: locationDisplay.querySelector('.country'),
  time: locationDisplay.querySelector('.time'),
};

// add event listeners
form.addEventListener('submit', handleSearch);

initApp();

// init page to philadelphia weather
async function initApp() {
  const currentWeatherData = await getWeatherData('philadelphia', 'current');
  updateApp(currentWeatherData);
}

// prevent form submission and fetch weather
async function handleSearch(e) {
  e.preventDefault();
  const weatherData = await getWeatherData(searchInput.value, 'current');
  updateApp(weatherData);
}

// run all funcs to update display of weather data
function updateApp(data) {
  updateLocation(data);
}

// update location display with weather data
function updateLocation(data) {
  location.city.innerText = data.location.city;
  location.region.innerText = data.location.region;
  location.country.innerText = data.location.country;
  location.time.innerText = format(
    parse(data.time, 'yyyy-MM-dd kk:mm', new Date()),
    'PPPPp'
  );
}
