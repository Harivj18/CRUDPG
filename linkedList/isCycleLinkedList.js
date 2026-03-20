class linkedlist {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

const isCycle = (head) => {
    let fast = head
    let slow = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
}

let node1 = new linkedlist(1);
let node2 = new linkedlist(2);
let node3 = new linkedlist(3);
let node4 = new linkedlist(4);
let node5 = new linkedlist(5);

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node3

let head = node1

const result = isCycle(head)

console.log('Is linked list is cycle :', result);
