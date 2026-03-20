const rotateRight = (head, n) => {
    if (!head) {
        return null
    }
    let node = head;
    while (node && node.next) {
        node = node.next
    }
    node.next = head
    let current = head
    for (let i = 0; i < n; i++) {
        current = current.next;
    }
    let newHead = current.next;
    current.next = null
    return newHead
}

let node1 = { val: 1, next: null }
let node2 = { val: 2, next: null }
let node3 = { val: 3, next: null }
let node4 = { val: 4, next: null }
let node5 = { val: 5, next: null }

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let head = node1;

let result = rotateRight(head, 2);

console.log('res', JSON.stringify(result));
