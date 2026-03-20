class linkedList {
    constructor(val) {
        this.val = val
    }
}

const cycleStartLinkedList = (node) => {
    let head = node
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            
            let start = head;
            while (start !== slow) {
                console.log('s',slow.val);
                slow = slow.next;
                start = start.next
            }
            return slow.val;
        }
    }
    return null
}

let node1 = new linkedList(1)
let node2 = new linkedList(2)
let node3 = new linkedList(3)
let node4 = new linkedList(4)
let node5 = new linkedList(5)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3

let head = node1;
const result = cycleStartLinkedList(head)

console.log('result', result);
