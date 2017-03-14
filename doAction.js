"use strict";
var count1_1 = require('./count1');
var count2_1 = require('./count2');
var clickCounter_1 = require('./clickCounter');
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
