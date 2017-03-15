export class ClickCounter {
    clickCounterFunc (someArg, callSomeFunc, value) {
        return [someArg + 1, callSomeFunc(value)];
    }
}