class LinkedList {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

const oddEven = (head) => {
    let odd = head
    let even = odd.next;
    let evenHead = even
    while (even && even.next) {
        odd.next = even.next
        odd = odd.next

        even.next = odd.next
        even = even.next
    }
    odd.next = evenHead
    return head
}

let node1 = new LinkedList(1)
let node2 = new LinkedList(2)
let node3 = new LinkedList(3)
let node4 = new LinkedList(4)
let node5 = new LinkedList(5)
let node6 = new LinkedList(6)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

let head = node1
let result = oddEven(head);
while (result) {
    console.log('Result', result.val);
    result = result.next
}



// console.log('Result of odd even :', oddEven([1, 2, 3, 4, 5]));
// console.log('Result of odd even :', oddEven([2, 1, 3, 5, 6, 4, 7]));
