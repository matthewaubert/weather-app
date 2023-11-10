import { format } from 'date-fns';
import wiMap from './wi-map';
import colorMap from './color-map';

// cache DOM
const root = document.documentElement;
const systemToggle = document.querySelector('#system-toggle');
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
  precip: todayDisplay.querySelector('.precip').lastElementChild,
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

// add event listeners
systemToggle.addEventListener('change', switchSystem);

// variable to hold weather data cache
let weatherDataCache;

// measurement systems
const imperial = {
  temp: 'F',
  speed: 'Mph',
};
const metric = {
  temp: 'C',
  speed: 'Kph',
};
let system = imperial;

// switch system between imperial and metric
function switchSystem() {
  system = system === imperial ? metric : imperial;
  renderWeather(weatherDataCache);
}

// run all render funcs to display weather data
export default function renderWeather(data) {
  weatherDataCache = data; // cache weather data for later use
  renderLocation(data.current);
  renderCurrentWeatherPrimary(data.current);
  renderCurrentWeatherSecondary(data.current);
  renderForecast(data.forecast);
  renderColorScheme(data.current);
}

// render location display with weather data
function renderLocation(data) {
  location.city.innerText = data.location.city;
  location.region.innerText = data.location.region
    ? `${data.location.region},`
    : '';
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
  today.precip.innerText = `${data.chanceOfRain}%`;
  today.humidity.innerText = `${data.humidity}%`;
  today.wind.innerText = `${
    data[`wind${system.speed}`]
  } ${system.speed.toLowerCase()}`;
  today.cloud.innerText = `${data.cloud}%`;
  today.uv.innerText = `${data.uv} of 11`;
  today.sunrise.innerText = data.sunrise;
  today.sunset.innerText = data.sunset;
  today.moonPhase.innerText = wiMap.moonPhase[data.moonPhase];
}

// render forecast weather info
function renderForecast(data) {
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

// render correct colors based on weather code
function renderColorScheme(data) {
  const colors = {
    day: {
      bg: 'var(--sky-600), var(--sky-900)',
      searchBar: 'var(--sky-800)',
      textLight: 'var(--sky-300)',
    },
    night: {
      bg: 'var(--blue-800), var(--blue-975)',
      searchBar: 'var(--blue-950)',
      textLight: 'var(--blue-400)',
    },
    gray: {
      bg: 'var(--gray-600), var(--gray-900)',
      searchBar: 'var(--gray-800)',
      textLight: 'var(--gray-400)',
    },
    bad: {
      bg: 'var(--purple-700), var(--purple-950)',
      searchBar: 'var(--purple-900)',
      textLight: 'var(--purple-400)',
    },
  };

  const dayOrNight = data.isDay ? 'day' : 'night'

  root.style.setProperty(
    '--bg-gradient',
    colors[colorMap[dayOrNight][data.condition.code]].bg
  );
  root.style.setProperty(
    '--search-bar',
    colors[colorMap[dayOrNight][data.condition.code]].searchBar
  );
  root.style.setProperty(
    '--text-light',
    colors[colorMap[dayOrNight][data.condition.code]].textLight
  );
}
