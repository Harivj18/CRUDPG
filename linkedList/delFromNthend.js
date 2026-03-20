const delFromNthEnd = (head, n) => {
    let fast = head;
    let slow = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }

    if (slow.next) {
        slow.next = slow.next.next;
    }
    return head
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

let result = delFromNthEnd(head, 2)

console.log('Delete from nth end:', result);

let temp = result;

while (temp) {
    console.log('Result after deletion', temp.val);
    temp = temp.next
}