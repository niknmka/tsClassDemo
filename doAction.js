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
var countOne = new count1_1.count1(count);
var countTwo = new count2_1.count2(count);
var clickCount = new clickCounter_1.сlickCounter();
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
        var results = clickCount.clickCounterFunc(clickNumber, clickNumber % 2 == 0 ? countOne.countFunc1() : countTwo.countFunc2(), count);
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
