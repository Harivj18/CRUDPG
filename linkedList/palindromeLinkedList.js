const buildList = require('./buildLinkedList')
const palidromeLinkedList = (head) => {
    let fast = head, slow = head;
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let current = slow.next;
    let prev = null
    while (current) {
        let next = current.next
        current.next = prev;
        prev = current
        current = next
    }
    let left = head, right = prev;
    while (left && right) {
        if (left.val !== right.val) {
            return false
        }
        left = left.next
        right = right.next
    }
    return true
}
console.log('Palindromic linked list', palidromeLinkedList(buildList.buildLinkedList([1, 2, 1])));
