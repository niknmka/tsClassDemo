"use strict";
exports.__esModule = true;
var ClickCounter = (function () {
    function ClickCounter() {
    }
    ClickCounter.prototype.clickCounterFunc = function (someArg, someObj, value) {
        // Use a function from the object here.
        someObj = someObj.countFunc(value);
        return [someArg + 1, someObj];
    };
    return ClickCounter;
}());
exports.ClickCounter = ClickCounter;
