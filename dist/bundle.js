/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css_normalize_css__ = __webpack_require__(/*! normalize.css/normalize.css */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalize_css_normalize_css__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_styles_scss__ = __webpack_require__(/*! ../styles/styles.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_styles_scss__);\n\n\n\nconst fahrenheit = true; // use ternary operators for ? temp : (temp - 32) * 5 / 9;\n\n\n// app icons - use a default\n// clear-day\n// clear-night\n// rain\n// snow\n// sleet\n// wind\n// fog\n// cloudy\n// partly-cloudy-day\n// partly-cloudy-night\n\nfunction fetchData(lat, long) {\n  const url = `https://api.darksky.net/forecast/ae4574e6f3db656bc32a6df7cf73842c/${lat},${long}`;\n\n  fetch(url).then(res => {\n    if (!res.ok) {\n      throw Error(res.status);\n    }\n    return res;\n  }).then(res => {\n    return res.json();\n  }).then(res => {\n    console.log(res);\n  }).catch(e => {\n    alert('There was an error with your request:', e);\n  });\n}\n\nnavigator.geolocation.getCurrentPosition(data => {\n  const { latitude, longitude } = data.coords;\n\n  fetchData(latitude, longitude);\n}, e => {\n  alert(e, 'We need your location to fetch your weather');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG5jb25zdCBmYWhyZW5oZWl0ID0gdHJ1ZTsgLy8gdXNlIHRlcm5hcnkgb3BlcmF0b3JzIGZvciA/IHRlbXAgOiAodGVtcCAtIDMyKSAqIDUgLyA5O1xuXG5cbi8vIGFwcCBpY29ucyAtIHVzZSBhIGRlZmF1bHRcbi8vIGNsZWFyLWRheVxuLy8gY2xlYXItbmlnaHRcbi8vIHJhaW5cbi8vIHNub3dcbi8vIHNsZWV0XG4vLyB3aW5kXG4vLyBmb2dcbi8vIGNsb3VkeVxuLy8gcGFydGx5LWNsb3VkeS1kYXlcbi8vIHBhcnRseS1jbG91ZHktbmlnaHRcblxuZnVuY3Rpb24gZmV0Y2hEYXRhKGxhdCwgbG9uZykge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuZGFya3NreS5uZXQvZm9yZWNhc3QvYWU0NTc0ZTZmM2RiNjU2YmMzMmE2ZGY3Y2Y3Mzg0MmMvJHtsYXR9LCR7bG9uZ31gO1xuXG4gIGZldGNoKHVybClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICB0aHJvdyBFcnJvcihyZXMuc3RhdHVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgIGFsZXJ0KCdUaGVyZSB3YXMgYW4gZXJyb3Igd2l0aCB5b3VyIHJlcXVlc3Q6JywgZSk7XG4gICAgfSk7XG59XG5cbm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKGRhdGEpID0+IHtcbiAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBkYXRhLmNvb3JkcztcblxuICBmZXRjaERhdGEobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG59LCAoZSkgPT4ge1xuICBhbGVydChlLCAnV2UgbmVlZCB5b3VyIGxvY2F0aW9uIHRvIGZldGNoIHlvdXIgd2VhdGhlcicpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/NGIzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3M/ZDllMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);