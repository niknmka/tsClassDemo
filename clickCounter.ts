export class clickCounter {
    clickCounterFunc = function (someArg, callSomeFunc, value) {
        return [someArg + 1, callSomeFunc(value)];
    }
}