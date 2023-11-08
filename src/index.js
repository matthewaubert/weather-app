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
const currentPrimaryDisplay = document.querySelector('.current-primary');
const currentPrimary = {
  icon: currentPrimaryDisplay.querySelector('.condition-icon'),
  text: currentPrimaryDisplay.querySelector('.condition-text'),
  temp: currentPrimaryDisplay.querySelector('.current-temp'),
  feelsLike: currentPrimaryDisplay.querySelector('.current-feelslike'),
};

// add event listeners
form.addEventListener('submit', handleSearch);

const imperial = {
  temp: 'F',
  speed: 'Mph',
};
// const metric = {
//   temp: 'C',
//   speed: 'Kph',
// };
const system = imperial;

initApp();

// init page to philadelphia weather
async function initApp() {
  const currentWeatherData = await getWeatherData('philadelphia', 'current');
  renderWeatherData(currentWeatherData);
}

// prevent form submission and fetch weather
async function handleSearch(e) {
  e.preventDefault();
  const weatherData = await getWeatherData(searchInput.value, 'current');
  renderWeatherData(weatherData);
}

// run all funcs to update display of weather data
function renderWeatherData(data) {
  renderLocation(data);
  renderCurrentWeatherPrimary(data);
}

// render location display with weather data
function renderLocation(data) {
  location.city.innerText = data.location.city;
  location.region.innerText = data.location.region;
  location.country.innerText = data.location.country;
  location.time.innerText = format(
    parse(data.time, 'yyyy-MM-dd kk:mm', new Date()),
    'PPPPp'
  );
}

// render primary current weather info
function renderCurrentWeatherPrimary(data) {
  currentPrimary.icon.src = data.condition.icon; // set icon src and alt
  currentPrimary.icon.alt = data.condition.text;
  currentPrimary.text.innerText = data.condition.text; // render condition text
  currentPrimary.temp.innerText = `${data[`temp${system.temp}`]}°${
    system.temp
  }`; // render current temp
  currentPrimary.feelsLike.innerText = `Feels like ${
    data[`feelsLike${system.temp}`]
  }°${system.temp}`; // render current feelslike
}
