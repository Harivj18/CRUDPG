class createCounter {
    constructor () {
        this.queue = []
    }

    ping (val) {
        this.queue.push(val)
        const lower = val - 3000

        while (this.queue.length && this.queue[0] < lower) {
            this.queue.shift()
        }

        return this.queue
    }
}

const counter = new createCounter()
counter.ping(1)
counter.ping(100)

console.log('counter',counter.ping(3002));
