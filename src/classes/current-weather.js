export default class CurrentWeather {
  constructor(
    chanceOfRain,
    cloud,
    condition,
    feelsLikeC,
    feelsLikeF,
    humidity,
    isDay,
    time,
    location,
    moonPhase,
    sunrise,
    sunset,
    tempC,
    tempF,
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
    this.isDay = isDay === 1;
    this.time = time;
    this.location = location;
    this.moonPhase = moonPhase;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.tempC = tempC;
    this.tempF = tempF;
    this.uv = uv;
    this.windDegree = windDegree;
    this.windKph = windKph;
    this.windMph = windMph;
  }
}
