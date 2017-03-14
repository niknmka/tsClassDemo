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
