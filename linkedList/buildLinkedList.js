const buildLinkedList = (nums) => {
    let head = {
        val: nums[0],
        next: null
    }
    let current = head;
    for (let i = 1; i < nums.length; i++) {
        current.next = {
            val: nums[i],
            next: null
        }
        current = current.next
    }
    return head
}
const result = buildLinkedList([1, 2, 3, 4, 5])

console.log('Result of linked list', JSON.stringify(result));

module.exports = {
    buildLinkedList
}