class formLinkedList {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const reverseLinkedList = (head) => {
    let current = head;
    let prev = null
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current
        current = next
    }
    return prev
}
let node1 = new formLinkedList(1)
let node2 = new formLinkedList(2)
let node3 = new formLinkedList(3)
let node4 = new formLinkedList(4)
let node5 = new formLinkedList(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const head = node1

let result = reverseLinkedList(head) 
console.log('head',result);
while (result) {
    console.log('Node Value',result.val);
    result = result.next
}