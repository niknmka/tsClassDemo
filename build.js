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

Object.defineProperty(exports, "__esModule", { value: true });
var ClickCounter = (function () {
    function ClickCounter() {
    }
    ClickCounter.prototype.clickCounterFunc = function (someArg, callSomeFunc, value) {
        return [someArg + 1, callSomeFunc(value)];
    };
    return ClickCounter;
}());
exports.ClickCounter = ClickCounter;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Count1 = (function () {
    function Count1() {
    }
    Count1.prototype.countFunc1 = function (value) {
        return (value + 1);
    };
    return Count1;
}());
exports.Count1 = Count1;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Count2 = (function () {
    function Count2() {
    }
    Count2.prototype.countFunc2 = function (value) {
        return (value + 2);
    };
    return Count2;
}());
exports.Count2 = Count2;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
var countOne = new count1_1.Count1();
var countTwo = new count2_1.Count2();
var clickCount = new clickCounter_1.ClickCounter();
/*
 
 It needs to be exactly the same as in Java syntacticly. Please look carefully at the examples in the documentation.
 
 class SomeClass {
    someFunc() {
    }
 }
 
 // We are diviating from Java here (in Java it would be placed into the main static method of the class):
 
 const someObj = new SomeClass()
 
 window['somObj'] = someObj

 */
// Javascript doesn't have the following syntax structure:
var DoAction = (function () {
    function DoAction() {
    }
    DoAction.prototype.doActionFunc = function () {
        var results = clickCount.clickCounterFunc(clickNumber, clickNumber % 2 == 0 ? countOne.countFunc1 : countTwo.countFunc2, count);
        clickNumber = results[0];
        count = results[1];
        console.log(count, clickNumber);
        span.innerHTML = count.toString();
        span2.innerHTML = clickNumber.toString();
    };
    return DoAction;
}());
var doAction = new DoAction();
window['doAction'] = doAction;


/***/ })
/******/ ]);