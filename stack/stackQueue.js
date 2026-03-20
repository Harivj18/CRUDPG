class stackUsingQueue {
    constructor () {
        this.q1 = []
        this.q2 = []
    }

    push (val) {
        this.q2.push(val)
        while (this.q1.length) {
            this.q2.push(this.q1.shift())
        }
        [this.q1, this.q2] = [this.q2, this.q1]
        console.log('Stack after push :',this.q1);
    }

    pop () {
        return this.q1.shift()
    }

    peek () {
        if (this.q1.length) {
            console.log('Peek element of the stack :',this.q1[0]);
            return this.q1[0]
        }
        return []
    }

    size () {
        console.log('Size of the stack :', this.q1);
        return this.q1.length;
    }

    print () {
        console.log('Value of the stack :', this.q1);
        return this.q1
    }

    clear () {
        this.q1 = []
        console.log('Stack after clearing :',this.q1);
        return this.q1
    }
}

const stack = new stackUsingQueue()
stack.push(1)
stack.push(2)
stack.push(3)
stack.peek()
stack.pop()
stack.print()
stack.size()
stack.clear()