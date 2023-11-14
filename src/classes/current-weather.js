export default class CurrentWeather {
  constructor(
    chanceOfRain,
    cloud,
    condition,
    feelsLikeC,
    feelsLikeF,
    humidity,
    isDay,
    location,
    maxTempC,
    maxTempF,
    minTempC,
    minTempF,
    moonPhase,
    sunrise,
    sunset,
    tempC,
    tempF,
    time,
    uv,
    windDegree,
    windKph,
    windMph
  ) {
    this.chanceOfRain = chanceOfRain;
    this.cloud = cloud;
    this.condition = condition;
    this.feelsLikeC = feelsLikeC;
    this.feelsLikeF = feelsLikeF;
    this.humidity = humidity;
    this.isDay = isDay;
    this.location = location;
    this.maxTempC = maxTempC;
    this.maxTempF = maxTempF;
    this.minTempC = minTempC;
    this.minTempF = minTempF;
    this.moonPhase = moonPhase;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.tempC = tempC;
    this.tempF = tempF;
    this.time = time; // new Date() instance
    this.uv = uv;
    this.windDegree = windDegree;
    this.windKph = windKph;
    this.windMph = windMph;
  }
}
