const sortLinkedList = (head) => {
    if (!head || !head.next) {
        return head
    }
    let prev = null, fast = head, slow = head;
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    console.log('prev',prev);
    
    prev.next = null

    let head1 = sortLinkedList(head);
    let head2 = sortLinkedList(slow);

    return mergeLinkdList(head1, head2)
}

const mergeLinkdList = (l1, l2) => {
    let dummy = {
        val: -1,
        next: null
    }
    let current = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2;
            l2 = l2.next
        }
        current = current.next
    }

    current.next = l1 || l2
    return dummy.next
}

let node1 = { val: 1, next: null }
let node2 = { val: 2, next: null }
let node3 = { val: 4, next: null }
let node4 = { val: 5, next: null }
let node5 = { val: 3, next: null }

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let head = node1;

let result = sortLinkedList(head);

while (result) {
    console.log('Sorted list:', result.val);
    result = result.next
}