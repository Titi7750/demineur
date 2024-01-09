export class Subject<T> {
    private listeners: ((t: T) => void)[] = [];

    listen(listener: (t: T) => void) {
        this.listeners.push(listener);
    }

    raise(event: T) {
        for (var listener of this.listeners)
            listener(event);
    }
}