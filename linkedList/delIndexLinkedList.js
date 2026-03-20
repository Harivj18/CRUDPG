const delIndexLinkedlist = (head, index) => {
    if (index === 0) {
        return head.next
    }
    let current = head;
    let i = 1
    while (i !== index && current && current.next) {
        current = current.next
        i++
    }
    if (current.next) {
        current.next = current.next.next
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

let result = delIndexLinkedlist(head, 4);

while (result) {
    console.log('Deletion of linked list', result.val);
    result = result.next;
}