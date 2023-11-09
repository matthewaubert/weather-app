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
const currentDisplay = document.querySelector('.current');
const current = {
  icon: currentDisplay.querySelector('.condition-icon'),
  text: currentDisplay.querySelector('.condition-text'),
  temp: currentDisplay.querySelector('.current-temp'),
  feelsLike: currentDisplay.querySelector('.current-feelslike'),
};
const todayDisplay = document.querySelector('.today');
const today = {
  highLow: todayDisplay.querySelector('.high-low').lastElementChild,
  chanceRain: todayDisplay.querySelector('.chance-rain').lastElementChild,
  humidity: todayDisplay.querySelector('.humidity').lastElementChild,
  wind: todayDisplay.querySelector('.wind').lastElementChild,
  cloud: todayDisplay.querySelector('.cloud').lastElementChild,
  uv: todayDisplay.querySelector('.uv-index').lastElementChild,
  sunrise: todayDisplay.querySelector('.sunrise').lastElementChild,
  sunset: todayDisplay.querySelector('.sunset').lastElementChild,
  moonPhase: todayDisplay.querySelector('.moon-phase').lastElementChild,
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
  current.icon.innerText = data.isDay
    ? wiMap.day[data.condition.code]
    : wiMap.night[data.condition.code]; // render icon
  current.text.innerText = data.condition.text; // render condition text
  current.temp.innerText = `${data[`temp${system.temp}`]}°${system.temp}`; // render current temp
  current.feelsLike.innerText = `Feels like ${
    data[`feelsLike${system.temp}`]
  }°${system.temp}`; // render current feelslike
}

// render secondary current weather info
function renderCurrentWeatherSecondary(data) {
  today.highLow.innerText = `${data[`maxTemp${system.temp}`]}° / ${
    data[`minTemp${system.temp}`]
  }°`;
  today.chanceRain.innerText = `${data.chanceOfRain}%`;
  today.humidity.innerText = `${data.humidity}%`;
  today.wind.innerText = `${
    data[`wind${system.speed}`]
  } ${system.speed.toLowerCase()}`;
  today.cloud.innerText = `${data.cloud}%`;
  today.uv.innerText = data.uv;
  today.sunrise.innerText = data.sunrise;
  today.sunset.innerText = data.sunset;
  today.moonPhase.innerText = wiMap.moonPhase[data.moonPhase];
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
