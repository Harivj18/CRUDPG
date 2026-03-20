const insertLinkedList = (head, val) => {
    if (head && head.val > val) {
        let current = {
            val,
            next: head
        }
        return current
    }
    let current = head;
    while (current && current.next && current.next.val < val) {
        current = current.next
    }
    if (current && current.next) {
        current.next = {
            val,
            next: current.next.next
        }
    } else {
        current.next = {
            val,
            next: null
        }
    }
    return head
}
let node1 = { val: 1, next: null };
let node2 = { val: 2, next: null };
let node3 = { val: 3, next: null };
let node4 = { val: 4, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;

let head = node1;

let result = insertLinkedList(head, 5);

console.log('linked list insertion result :', result);

let temp = result

while (temp) {
    console.log('Inserted Result', temp.val);
    temp = temp.next;
}
