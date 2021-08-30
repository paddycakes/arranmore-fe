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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "build/js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api */ \"./src/services/api.js\");\n\n\nconst btnLogin = document.querySelector('.login__btn');\nconst deviceIdInput = document.querySelector('.login__input--deviceid');\n\nconst account1 = {\n  owner: 'SeamusBonner',\n};\n\n// const user = 'Seamus Bonner'; //sb\n// const username = account1.owner\n//   .toLowerCase()\n//   .split(' ')\n//   .map((name) => name[0])\n//   .join('');\n\nconsole.log(account1.owner);\nconst password = {\n  id: 'arranmoreIoT',\n};\n\nconst deviceId = deviceIdInput.value;\n\n//Base64 Handler\nconst userPass = `${account1.owner}:${password.id}`;\nconst apiKey = btoa(userPass);\n\nbtnLogin.addEventListener('click', async function (e) {\n  //prevent form submitting\n  e.preventDefault();\n\n  console.log(deviceId);\n\n  if (deviceId !== '') {\n    console.log(apiKey);\n    console.log(userPass);\n\n    const metrics = await Object(_services_api__WEBPACK_IMPORTED_MODULE_0__[\"fetchSensorMetrics\"])(apiKey);\n\n    console.log(`Sensor metrics: ${JSON.stringify(metrics)}`);\n  } else {\n    document.querySelector('.login__input--deviceid').value = 'Incorrect ID';\n    // alert('Incorrect Password!');\n  }\n});\nconsole.log(apiKey);\nconsole.log(userPass);\nconsole.log(deviceId);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoU2Vuc29yTWV0cmljcyB9IGZyb20gJy4vc2VydmljZXMvYXBpJztcblxuY29uc3QgYnRuTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2J0bicpO1xuY29uc3QgZGV2aWNlSWRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbl9faW5wdXQtLWRldmljZWlkJyk7XG5cbmNvbnN0IGFjY291bnQxID0ge1xuICBvd25lcjogJ1NlYW11c0Jvbm5lcicsXG59O1xuXG4vLyBjb25zdCB1c2VyID0gJ1NlYW11cyBCb25uZXInOyAvL3NiXG4vLyBjb25zdCB1c2VybmFtZSA9IGFjY291bnQxLm93bmVyXG4vLyAgIC50b0xvd2VyQ2FzZSgpXG4vLyAgIC5zcGxpdCgnICcpXG4vLyAgIC5tYXAoKG5hbWUpID0+IG5hbWVbMF0pXG4vLyAgIC5qb2luKCcnKTtcblxuY29uc29sZS5sb2coYWNjb3VudDEub3duZXIpO1xuY29uc3QgcGFzc3dvcmQgPSB7XG4gIGlkOiAnYXJyYW5tb3JlSW9UJyxcbn07XG5cbmNvbnN0IGRldmljZUlkID0gZGV2aWNlSWRJbnB1dC52YWx1ZTtcblxuLy9CYXNlNjQgSGFuZGxlclxuY29uc3QgdXNlclBhc3MgPSBgJHthY2NvdW50MS5vd25lcn06JHtwYXNzd29yZC5pZH1gO1xuY29uc3QgYXBpS2V5ID0gYnRvYSh1c2VyUGFzcyk7XG5cbmJ0bkxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgLy9wcmV2ZW50IGZvcm0gc3VibWl0dGluZ1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc29sZS5sb2coZGV2aWNlSWQpO1xuXG4gIGlmIChkZXZpY2VJZCAhPT0gJycpIHtcbiAgICBjb25zb2xlLmxvZyhhcGlLZXkpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJQYXNzKTtcblxuICAgIGNvbnN0IG1ldHJpY3MgPSBhd2FpdCBmZXRjaFNlbnNvck1ldHJpY3MoYXBpS2V5KTtcblxuICAgIGNvbnNvbGUubG9nKGBTZW5zb3IgbWV0cmljczogJHtKU09OLnN0cmluZ2lmeShtZXRyaWNzKX1gKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2lucHV0LS1kZXZpY2VpZCcpLnZhbHVlID0gJ0luY29ycmVjdCBJRCc7XG4gICAgLy8gYWxlcnQoJ0luY29ycmVjdCBQYXNzd29yZCEnKTtcbiAgfVxufSk7XG5jb25zb2xlLmxvZyhhcGlLZXkpO1xuY29uc29sZS5sb2codXNlclBhc3MpO1xuY29uc29sZS5sb2coZGV2aWNlSWQpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/environment.js":
/*!****************************!*\
  !*** ./src/environment.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  baseUrl: 'https://arranmore-api-qwnop46tpa-nw.a.run.app',\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW52aXJvbm1lbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnQuanM/Mzg1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGJhc2VVcmw6ICdodHRwczovL2FycmFubW9yZS1hcGktcXdub3A0NnRwYS1udy5hLnJ1bi5hcHAnLFxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/environment.js\n");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: fetchSensorMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSensorMetrics\", function() { return fetchSensorMetrics; });\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment */ \"./src/environment.js\");\n\nconst baseUrl = _environment__WEBPACK_IMPORTED_MODULE_0__[\"default\"].baseUrl;\n\nconst fetchSensorMetrics = async (deviceId, apiKey) => {\n  const headers = {\n    'Content-Type': 'application/json',\n  };\n\n  try {\n    const response = await fetch(`${baseUrl}/api/sensor/${deviceId}/metrics`, {\n      headers,\n    });\n    const metrics = await response.json();\n    return metrics;\n  } catch (e) {\n    console.log(`Error: ${e}`);\n    return e;\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS5qcz83NDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuLi9lbnZpcm9ubWVudCc7XG5jb25zdCBiYXNlVXJsID0gZW52aXJvbm1lbnQuYmFzZVVybDtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2Vuc29yTWV0cmljcyA9IGFzeW5jIChkZXZpY2VJZCwgYXBpS2V5KSA9PiB7XG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpL3NlbnNvci8ke2RldmljZUlkfS9tZXRyaWNzYCwge1xuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgICBjb25zdCBtZXRyaWNzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBtZXRyaWNzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coYEVycm9yOiAke2V9YCk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.js\n");

/***/ })

/******/ });