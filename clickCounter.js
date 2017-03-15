"use strict";
var ClickCounter = (function () {
    function ClickCounter() {
    }
    ClickCounter.prototype.clickCounterFunc = function (someArg, callSomeFunc, value) {
        return [someArg + 1, callSomeFunc(value)];
    };
    return ClickCounter;
}());
exports.ClickCounter = ClickCounter;
