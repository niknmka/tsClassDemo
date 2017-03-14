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
