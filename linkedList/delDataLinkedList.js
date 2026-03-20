class linkedList {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const deleteData = (node, target) => {
    let head = node;
    if (head.val === target) {
        return head.next
    }
    let current = head;
    while (current && current.next && current.next.val !== target) {
        current = current.next
    }
    if (current.next) {
        current.next = current.next.next
    }
    return head
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

let node = node1
console.log('Linked List before deletion', node);
let result = deleteData(node, 5)
console.log('Linked List after deletion', result);
while (result) {
    console.log('Linked list result',result.val);
    result = result.next
}