class linkedList {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class createStack {
    constructor () {
        this.node = null
        this.stackSize = 0
    }

    push (val) {
        const newNode = new linkedList(val)
        newNode.next = this.node
        this.node = newNode
        this.stackSize++
        console.log('Push Stack using linked list :', this.node);
        return newNode
    }

    pop () {
        this.node = this.node.next
        this.stackSize--
        console.log('Stack after popping', this.node);
        return this.node
    }

    peek () {
        console.log('Peek element of the stack :', this.node.val);
        return this.node.val
    }

    size () {
        console.log('Size of the stack :',this.stackSize);
        return this.stackSize
    }

    clear () {
        this.node = null
        console.log('Value of the stack :', this.node);
        return this.node
    }

    print () {
        console.log('Value of the Stack', this.node);
        return
    }
}

const stack = new createStack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.print()
stack.pop()
stack.size()
stack.clear()