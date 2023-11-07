/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/current-weather.js":
/*!****************************************!*\
  !*** ./src/classes/current-weather.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CurrentWeather)\n/* harmony export */ });\nclass CurrentWeather {\n  constructor(\n    chanceOfRain,\n    cloud,\n    condition,\n    feelsLikeC,\n    feelsLikeF,\n    humidity,\n    isDay,\n    lastUpdated,\n    moonPhase,\n    sunrise,\n    sunset,\n    tempC,\n    tempF,\n    uv,\n    windDegree,\n    windKph,\n    windMph\n  ) {\n    this.chanceOfRain = chanceOfRain;\n    this.cloud = cloud;\n    this.condition = condition;\n    this.feelsLikeC = feelsLikeC;\n    this.feelsLikeF = feelsLikeF;\n    this.humidity = humidity;\n    this.isDay = isDay === 1;\n    this.lastUpdated = lastUpdated;\n    this.moonPhase = moonPhase;\n    this.sunrise = sunrise;\n    this.sunset = sunset;\n    this.tempC = tempC;\n    this.tempF = tempF;\n    this.uv = uv;\n    this.windDegree = windDegree;\n    this.windKph = windKph;\n    this.windMph = windMph;\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/classes/current-weather.js?");

/***/ }),

/***/ "./src/classes/daily-forecast.js":
/*!***************************************!*\
  !*** ./src/classes/daily-forecast.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DailyForecast)\n/* harmony export */ });\nclass DailyForecast {\n  constructor(condition, date, maxTempC, maxTempF, minTempC, minTempF) {\n    this.condition = condition;\n    this.date = date;\n    this.maxTempC = maxTempC;\n    this.maxTempF = maxTempF;\n    this.minTempC = minTempC;\n    this.minTempF = minTempF;\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/classes/daily-forecast.js?");

/***/ }),

/***/ "./src/classes/hourly-forecast.js":
/*!****************************************!*\
  !*** ./src/classes/hourly-forecast.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HourlyForecast)\n/* harmony export */ });\nclass HourlyForecast {\n  constructor(condition, tempC, tempF, time) {\n    this.condition = condition;\n    this.tempC = tempC;\n    this.tempF = tempF;\n    this.time = time;\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/classes/hourly-forecast.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ \"./src/weather-data.js\");\n\n\n// cache DOM\nconst form = document.querySelector('form');\nconst search = form.querySelector('#search');\n\n// add event listeners\nform.addEventListener('submit', handleSearch);\n\n// prevent for submission and fetch weather\nasync function handleSearch(e) {\n  e.preventDefault();\n\n  const response = await (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(search.value);\n  console.log(response);\n  const data = (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.processData)(response, 'hourly');\n  console.log(data);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather-data.js":
/*!*****************************!*\
  !*** ./src/weather-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather),\n/* harmony export */   processData: () => (/* binding */ processData)\n/* harmony export */ });\n/* harmony import */ var _classes_current_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/current-weather */ \"./src/classes/current-weather.js\");\n/* harmony import */ var _classes_daily_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/daily-forecast */ \"./src/classes/daily-forecast.js\");\n/* harmony import */ var _classes_hourly_forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/hourly-forecast */ \"./src/classes/hourly-forecast.js\");\n\n\n\n\n// fetch data from weather API; take location as input\nasync function fetchWeather(location) {\n  const apiKey = 'ab36ae6f835d44c781e191306230411';\n\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`,\n    { mode: 'cors' }\n  );\n  const weatherData = await response.json();\n  // HANDLE ERRORS!\n\n  return weatherData;\n}\n\n// takes in weatherData, returns a CurrentWeather instance\nfunction processData(weatherData, type) {\n  if (type === 'current') {\n    return new _classes_current_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      weatherData.forecast.forecastday[0].day.daily_chance_of_rain,\n      weatherData.current.cloud,\n      weatherData.current.condition,\n      weatherData.current.feelslike_c,\n      weatherData.current.feelslike_f,\n      weatherData.current.humidity,\n      weatherData.current.is_day,\n      weatherData.current.last_updated,\n      weatherData.forecast.forecastday[0].astro.moon_phase,\n      weatherData.forecast.forecastday[0].astro.sunrise,\n      weatherData.forecast.forecastday[0].astro.sunset,\n      weatherData.current.temp_c,\n      weatherData.current.temp_f,\n      weatherData.current.uv,\n      weatherData.current.wind_degree,\n      weatherData.current.wind_kph,\n      weatherData.current.wind_mph\n    );\n  } else if (type === 'daily') {\n    const forecasts = [];\n    // iterate over all forecast days\n    weatherData.forecast.forecastday.forEach((day) => {\n      // create new DailyForecast instance and push to forecasts array\n      forecasts.push(\n        new _classes_daily_forecast__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n          day.day.condition,\n          day.date,\n          day.day.maxtemp_c,\n          day.day.maxtemp_f,\n          day.day.mintemp_c,\n          day.day.mintemp_f\n        )\n      );\n    });\n\n    return forecasts;\n  } else if (type === 'hourly') {\n    const forecasts = [];\n    // iterate over all forecast hours of first day\n    weatherData.forecast.forecastday[0].hour.forEach((hour) => {\n      // create new HourlyForecast instance and push to forecasts array\n      forecasts.push(\n        new _classes_hourly_forecast__WEBPACK_IMPORTED_MODULE_2__[\"default\"](hour.condition, hour.temp_c, hour.temp_f, hour.time)\n      );\n    });\n\n    return forecasts;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather-data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;