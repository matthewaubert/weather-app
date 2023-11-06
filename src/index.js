// fetch data from weather API; take location as input
async function fetchWeather(location) {
  const apiKey = 'ab36ae6f835d44c781e191306230411';

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&alerts=yes`
  );
  const weatherData = await response.json();
  // HANDLE ERRORS!

  return weatherData;
}


// fetchWeather('philadelphia', 'current').then(res => console.log(res));
fetchWeather('philadelphia').then(res => console.log(res));
