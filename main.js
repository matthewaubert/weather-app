/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// fetch data from weather API; take location as input\nasync function fetchWeather(location) {\n  const apiKey = 'ab36ae6f835d44c781e191306230411';\n\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&alerts=yes`\n  );\n  const weatherData = await response.json();\n  // HANDLE ERRORS!\n\n  return weatherData;\n}\n\n\n// fetchWeather('philadelphia', 'current').then(res => console.log(res));\nfetchWeather('philadelphia').then(res => console.log(res));\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;