import { format } from 'date-fns';

// cache DOM
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
const currentSecondaryDisplay = document.querySelector('.current-secondary');
const currentSecondary = {
  highLow: currentSecondaryDisplay.querySelector('.high-low').lastElementChild,
  chanceRain:
    currentSecondaryDisplay.querySelector('.chance-rain').lastElementChild,
  humidity: currentSecondaryDisplay.querySelector('.humidity').lastElementChild,
  wind: currentSecondaryDisplay.querySelector('.wind').lastElementChild,
  cloud: currentSecondaryDisplay.querySelector('.cloud').lastElementChild,
  uv: currentSecondaryDisplay.querySelector('.uv-index').lastElementChild,
  sunrise: currentSecondaryDisplay.querySelector('.sunrise').lastElementChild,
  sunset: currentSecondaryDisplay.querySelector('.sunset').lastElementChild,
  moonPhase:
    currentSecondaryDisplay.querySelector('.moon-phase').lastElementChild,
};

const imperial = {
  temp: 'F',
  speed: 'Mph',
};
// const metric = {
//   temp: 'C',
//   speed: 'Kph',
// };
const system = imperial;

// run all render funcs to display weather data
export default function renderWeatherData(data) {
  renderLocation(data);
  renderCurrentWeatherPrimary(data);
  renderCurrentWeatherSecondary(data);
}

// render location display with weather data
function renderLocation(data) {
  location.city.innerText = data.location.city;
  location.region.innerText = data.location.region;
  location.country.innerText = data.location.country;
  location.time.innerText = format(data.time, 'PPPPp');
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

// render secondary current weather info
function renderCurrentWeatherSecondary(data) {
  currentSecondary.highLow.innerText = `${data[`maxTemp${system.temp}`]}° / ${data[`minTemp${system.temp}`]}°`;
  currentSecondary.chanceRain.innerText = `${data.chanceOfRain}%`;
  currentSecondary.humidity.innerText = `${data.humidity}%`;
  currentSecondary.wind.innerText = `${
    data[`wind${system.speed}`]
  } ${system.speed.toLowerCase()}`;
  currentSecondary.cloud.innerText = `${data.cloud}%`;
  currentSecondary.uv.innerText = data.uv;
  currentSecondary.sunrise.innerText = data.sunrise;
  currentSecondary.sunset.innerText = data.sunset;
  currentSecondary.moonPhase.innerText = data.moonPhase;
}
