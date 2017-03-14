import count1 from './count1'
import count2 from './count2'
import clickCounter from './clickCounter'

document.getElementById("p1").style.color="blue";
document.getElementById("p1").style.font="large";
document.getElementById("p1").style.background="";
document.getElementById("button").style.color="red";

let count: number = 0;
let clickNumber: number = 0;
let span = document.getElementById('span');
let span2 = document.getElementById('span2');
let countOne = new count1(count);
let countTwo = new count2(count);
let clickCount = new clickCounter();

class doAction {




    window.['doActionFunc'] = function () {
    let results = clickCount.clickCounterFunc(clickNumber, clickNumber % 2 == 0 ? countOne.countFunc1() : countTwo.countFunc2(), count);
    clickNumber = results[0];
    count = results[1];
    console.log(count, clickNumber);
    span.innerHTML = count.toString();
    span2.innerHTML = clickNumber.toString();
    }

}
