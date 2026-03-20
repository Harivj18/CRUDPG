const buildList = require('./buildLinkedList')

const reOrderLinkedList = (head) => {
    if (!head) {
        return null
    }
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let current = slow.next;
    slow.next = null;
    let prev = null
    while (current) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    let left = head, right = prev;
    console.log('l',left);
    console.log('r',right);
    
    while (left && right) {
        let val1 = left.next
        let val2 = right.next

        left.next = right
        right.next= val1

        left = val1
        right = val2
    }
    return head
}
console.log('Re order linked list', JSON.stringify(reOrderLinkedList(buildList.buildLinkedList([1,2,3,4,5]))));
