const slidingWindowBrute = (nums, k) => {
    const queue = []
    const result = []
    for (let i = 0; i < nums.length; i++) {
        // while (queue.length && queue[0] <= i - k) {
        //     queue.shift()
        // }

        while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop()
        }
        queue.push(i)

        if (i >= k - 1) {
            result.push(nums[queue[queue.length - 1]])
        }
    }
}

console.log('Sliding window result', slidingWindowBrute([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
