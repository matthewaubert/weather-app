import { fetchWeather, processData } from './weather-data';

// cache DOM
const form = document.querySelector('form');
const searchInput = form.querySelector('#search-input');

// add event listeners
form.addEventListener('submit', handleSearch);

// prevent form submission and fetch weather
async function handleSearch(e) {
  e.preventDefault();

  const response = await fetchWeather(searchInput.value);
  console.log(response);
  const data = processData(response, 'current');
  console.log(data);
}
