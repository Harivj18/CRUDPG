const buildCyclicList = (nums) => {
    const map = new Map()
    let head = {
        val: nums[0],
        next: null
    }
    let current = head;
    for (let i = 1; i < nums.length; i++) {
        if (map.has(nums[i])) {
            current.next = map.get(nums[i])
            return head
        }
        current.next = {
            val: nums[i],
            next: null
        }
        map.set(nums[i], current.next)
        current = current.next
    }
    return head
}
let cyclicList = buildCyclicList([1, 2, 3, 4, 5, 3])
// console.log(JSON.stringify(cyclicList));

for (let i = 0; i < 10; i++) {
    console.log('cyclicList',(cyclicList.val));
    cyclicList = cyclicList.next
}

