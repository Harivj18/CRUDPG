class circularQueue {
    constructor (size) {
        this.capacity = size;
        this.queue = new Array(size)
        this.front = -1;
        this.rear = -1
        this.size = 0;
    }

    push (val) {
        if (this.isFull()) {
            return "Queue size is full"
        }
        if (this.isEmpty()) {
            this.front = 0
        }
        this.rear = (this.rear + 1) % this.capacity
        this.queue[this.rear] = val
        this.size++
    }

    pop () {
        if (this.isEmpty()) {
            'Queue is empty'
        }
        const val = this.queue[this.front]
        if (this.front === this.rear) {
            this.front = -1
            this.rear = -1
        } else {
            this.front = (this.front + 1) % this.capacity
        }
        this.size --
        return val
    }

    isFull () {
        console.log(this.queue === this.size)
        return this.queue.length === this.size
    }

    isEmpty () {
        console.log(this.queue === this.size)
        return this.queue.length === 0
    }    

}

const queue = new circularQueue(3)
// queue.push(1)
queue.isFull()