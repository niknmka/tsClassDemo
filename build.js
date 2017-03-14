/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var clickCounter = (function () {
    function clickCounter() {
        this.clickCounterFunc = function (someArg, callSomeFunc, value) {
            return [someArg + 1, callSomeFunc(value)];
        };
    }
    return clickCounter;
}());
exports.clickCounter = clickCounter;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var count1 = (function () {
    function count1() {
        this.countFunc1 = function (value) {
            return (value + 1);
        };
    }
    return count1;
}());
exports.count1 = count1;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var count2 = (function () {
    function count2() {
        this.countFunc2 = function (value) {
            return (value + 2);
        };
    }
    return count2;
}());
exports.count2 = count2;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var count1_1 = __webpack_require__(1);
var count2_1 = __webpack_require__(2);
var clickCounter_1 = __webpack_require__(0);
document.getElementById("p1").style.color = "blue";
document.getElementById("p1").style.font = "large";
document.getElementById("p1").style.background = "";
document.getElementById("button").style.color = "red";
var count = 0;
var clickNumber = 0;
var span = document.getElementById('span');
var span2 = document.getElementById('span2');
var countOne = new count1_1.default(count);
var countTwo = new count2_1.default(count);
var clickCount = new clickCounter_1.default();
var doAction = (function () {
    function doAction() {
        this['doActionFunc'] = function () {
            var results = clickCount.clickCounterFunc(clickNumber, clickNumber % 2 == 0 ? countOne.countFunc1() : countTwo.countFunc2(), count);
            clickNumber = results[0];
            count = results[1];
            console.log(count, clickNumber);
            span.innerHTML = count.toString();
            span2.innerHTML = clickNumber.toString();
        };
    }
    return doAction;
}());


/***/ })
/******/ ]);