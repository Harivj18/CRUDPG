class performStack {
    constructor () {
        this.val = []
    }
    push (val) {
        this.val.push(val)
        console.log('Stack Result After Pushing Element :', this.val);
        return this.val
    }

    pop () {
        this.val.pop()
        console.log('Stack Result After Removing Element :', this.val);
        return this.val
    }

    peek () {
        console.log('Top Element on the stack:', this.val[this.val.length - 1]);
        return this.val
    }

    size () {
        console.log('Top Element on the stack:', this.val[this.val.length - 1]);
        return this.val
    }

    empty () {
        this.val = []
        console.log('Stack Result After Emptying Element :', this.val);
        return this.val = []
    }
}
const stack = new performStack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.peek()
stack.size()
stack.empty()
