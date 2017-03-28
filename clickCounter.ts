export class ClickCounter {
    clickCounterFunc (someArg, someObj, value) {
        // Use a function from the object here.
        someObj = someObj.countFunc(value);
        return [someArg + 1, someObj];
    }
}

