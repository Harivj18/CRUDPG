const delMidLinkedList = (head) => {
    let fast = head, slow = head, prev = null;
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    if (slow.next) {
        prev.next = slow.next
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
// node5.next = node3;

let head = node1;

let result = delMidLinkedList(head);

console.log('r',result);


let temp = result;

while (temp) {
    console.log('mid of linked list:', temp.val);
    temp = temp.next
}


