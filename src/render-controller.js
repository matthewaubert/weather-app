import { format } from 'date-fns';
import wiMap from './wi-map';

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
const forecastDisplay = document.querySelector('.forecast');
const forecast = [
  {
    title: forecastDisplay.querySelector('.day0').children[0],
    high: forecastDisplay.querySelector('.day0 .high'),
    low: forecastDisplay.querySelector('.day0 .low'),
    icon: forecastDisplay.querySelector('.day0').children[2],
    condition: forecastDisplay.querySelector('.day0').children[3],
  },
  {
    title: forecastDisplay.querySelector('.day1').children[0],
    high: forecastDisplay.querySelector('.day1 .high'),
    low: forecastDisplay.querySelector('.day1 .low'),
    icon: forecastDisplay.querySelector('.day1').children[2],
    condition: forecastDisplay.querySelector('.day1').children[3],
  },
  {
    title: forecastDisplay.querySelector('.day2').children[0],
    high: forecastDisplay.querySelector('.day2 .high'),
    low: forecastDisplay.querySelector('.day2 .low'),
    icon: forecastDisplay.querySelector('.day2').children[2],
    condition: forecastDisplay.querySelector('.day2').children[3],
  },
];

// measurement systems
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
export default function renderWeather(data) {
  renderLocation(data.current);
  renderCurrentWeatherPrimary(data.current);
  renderCurrentWeatherSecondary(data.current);
  renderForecast(data.forecast);
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
  currentPrimary.icon.innerText = data.isDay
    ? wiMap.day[data.condition.code]
    : wiMap.night[data.condition.code]; // render icon
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
  currentSecondary.highLow.innerText = `${data[`maxTemp${system.temp}`]}° / ${
    data[`minTemp${system.temp}`]
  }°`;
  currentSecondary.chanceRain.innerText = `${data.chanceOfRain}%`;
  currentSecondary.humidity.innerText = `${data.humidity}%`;
  currentSecondary.wind.innerText = `${
    data[`wind${system.speed}`]
  } ${system.speed.toLowerCase()}`;
  currentSecondary.cloud.innerText = `${data.cloud}%`;
  currentSecondary.uv.innerText = data.uv;
  currentSecondary.sunrise.innerText = data.sunrise;
  currentSecondary.sunset.innerText = data.sunset;
  currentSecondary.moonPhase.innerText = wiMap.moonPhase[data.moonPhase];
}

// render forecast weather info
function renderForecast(data) {
  console.log(data);
  // iterate over each day in forecast
  forecast.forEach((day, i) => {
    // render title
    if (day.title.innerText !== 'Today')
      day.title.innerText = format(data[i].date, 'cccc');
    day.high.innerText = `${data[i][`maxTemp${system.temp}`]}°`; // render high
    day.low.innerText = `/ ${data[i][`minTemp${system.temp}`]}°`; // render low
    day.icon.innerText = wiMap.day[data[i].condition.code]; // render icon
    day.condition.innerText = data[i].condition.text; // render condition
  });
}
