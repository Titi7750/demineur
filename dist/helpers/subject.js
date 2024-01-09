export class Subject {
    constructor() {
        this.listeners = [];
    }
    listen(listener) {
        this.listeners.push(listener);
    }
    raise(event) {
        for (var listener of this.listeners)
            listener(event);
    }
}
