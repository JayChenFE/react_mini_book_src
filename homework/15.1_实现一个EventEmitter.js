class EventEmitter {

    events = {}

    on(evt, handler) {

        if (typeof handler !== 'function') {
            throw new TypeError('handler is not a function!');
            return
        }

        this.events[evt] = this.events[evt] || [];
        this.events[evt].push(handler);
    }

    emit(evt, ...args) {
        if (!this.events[evt]) {
            return
        }

        this.events[evt].forEach(handler => {
            handler(...args);
        })
    }

    off(evt, handler) {

        if (typeof handler !== 'function') {
            throw new TypeError('handler is not a function!')
            return
        }

        const handlerArr = this.events[evt]
        const index = handlerArr.indexOf(handler)

        if (index !== -1) {
            this.events[evt] = [...handlerArr.slice(0, index), ...handlerArr.slice(index + 1)]
        }
    }
}