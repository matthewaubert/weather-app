// fetch data from weather API; take location as input
async function fetchWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=ab36ae6f835d44c781e191306230411&q=${location}`
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

fetchWeather();
