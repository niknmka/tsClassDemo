export class ClickCounter {
    clickCounterFunc (someArg, callSomeFunc, value) {
        // Use a function from the object here.
        return [someArg + 1, callSomeFunc(value)];
    }
}
