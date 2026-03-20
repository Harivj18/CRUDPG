const mergeLinkList = (l1, l2) => {
    let dummy = {
        val: -1,
        next: null
    }
    let current = dummy;
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
    current.next = l1 || l2;
    return dummy.next
}
let node1 = { val: 1, next: null }
let node3 = { val: 3, next: null }
let node5 = { val: 5, next: null }

node1.next = node3;
node3.next = node5;

let node2 = { val: 2, next: null }
let node4 = { val: 4, next: null }

node2.next = node4;

let head1 = node1;
let head2 = node2;

let result = mergeLinkList(head1, head2);

while (result) {
    console.log('Result of MergedLink List :', result.val);
    result = result.next
}

