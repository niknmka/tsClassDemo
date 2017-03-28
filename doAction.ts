import { Count1 } from './count1'
import { Count2 } from './count2'
import { ClickCounter } from './clickCounter'

document.getElementById("p1").style.color="blue";
document.getElementById("p1").style.font="large";
document.getElementById("p1").style.background="";
document.getElementById("button").style.color="red";



let count: number = 0;
let clickNumber: number = 0;
let span = document.getElementById('span');
let span2 = document.getElementById('span2');
let countOne = new Count1();
let countTwo = new Count2();
let clickCount = new ClickCounter();


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
class DoAction {
    doActionFunc() {
     // Pass objects instead of functions here.
    let results = clickCount.clickCounterFunc(clickNumber, clickNumber % 2 == 0 ? countOne : countTwo, count);
    clickNumber = results[0];
    count = results[1];
    console.log(count, clickNumber);
    span.innerHTML = count.toString();
    span2.innerHTML = clickNumber.toString();
    }
}

const doAction = new DoAction();
window['doAction'] = doAction;
