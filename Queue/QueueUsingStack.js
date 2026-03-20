class Queue {
    constructor () {
        this.pushStack = []
        this.popStack = []
    }

    push (val) {
        this.pushStack.push(val);
    }

    pop () {
        if (this.popStack.length === 0) {
            while (this.pushStack.length > 0) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        return this.popStack[this.popStack.length - 1];
    }

    peek () {
        if (this.popStack.length === 0) {
            while (this.pushStack) {
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack[this.popStack.length - 1]
    }

    isEmpty () {
        return this.pushStack.length === 0
    }

    print () {
        console.log('Push Stack Result', this.pushStack)
        console.log('Pop Stack Result', this.popStack[this.popStack.length - 1])
    }
}

const createQueue = new Queue()
createQueue.push(1)
createQueue.push(2)
createQueue.push(3)

createQueue.print()
createQueue.pop()
createQueue.pop()
createQueue.print()