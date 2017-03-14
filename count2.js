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
