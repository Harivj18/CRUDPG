class stack {
    constructor () {
        this.stack = []
        this.minStack = []
    }
    push (val) {
        this.stack.push(val)
        if (this.minStack.length === 0 || this.minStack.length && this.minStack[this.minStack.length - 1] > val) {
            this.minStack.push(val)
        }
        console.log('Pushed min element of min stack', this.minStack);
    }
    pop () {
        const popElement = this.stack.pop();
        if (popElement === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
        console.log('Popped min element of min stack', this.minStack);
    }
    peek () {
        const top = this.minStack[this.minStack.length - 1];
        console.log('top element of min stack', top);
        return top
    }
    size () {
        console.log('Size of min stack', this.minStack.length);
        return this.minStack.length
    }
    getMin () {
        if (this.minStack.length) {
            console.log('Min element of min stack', this.minStack[this.minStack.length - 1]);
            return this.minStack[this.minStack.length - 1]
        }
        return []
    }
}
let minStack = new stack()
minStack.push(4)
minStack.push(1)
minStack.push(2)
minStack.peek()
minStack.pop()
minStack.size()
minStack.getMin()

