import { fetchWeather, processData } from './weather-data';

// cache DOM
const form = document.querySelector('form');
const search = form.querySelector('#search');

// add event listeners
form.addEventListener('submit', handleSearch);

// prevent for submission and fetch weather
async function handleSearch(e) {
  e.preventDefault();

  const response = await fetchWeather(search.value);
  console.log(response);
  const data = processData(response, 'hourly');
  console.log(data);
}
