export default class DailyForecast {
  constructor(condition, date, maxTempC, maxTempF, minTempC, minTempF) {
    this.condition = condition;
    this.date = date;
    this.maxTempC = maxTempC;
    this.maxTempF = maxTempF;
    this.minTempC = minTempC;
    this.minTempF = minTempF;
  }
}
