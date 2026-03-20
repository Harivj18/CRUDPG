const reverseStack = (nums) => {
    const stack = []
    while (nums.length) {
        stack.push(nums.pop())
    }
    return stack
}

const reverseStack1 = (nums) => {
    return nums.reverse()
}
console.log('reverse stack :', reverseStack([1, 2, 3, 4]));
console.log('reverse stack :', reverseStack1([1, 2, 3, 4]));
