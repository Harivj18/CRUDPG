class List {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next
    };
    return prev;
}

let head = new List(1);
head.next = new List(2);
head.next.next = new List(3);
head.next.next.next = new List(4);

head = reverseLinkedList(head);

let tempResult = head;

while (tempResult) {
    console.log('Result of Reversed Linked List:', tempResult.data);
    tempResult = tempResult.next;
}

