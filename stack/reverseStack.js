const formReverseArr = (nums, currentElement) => {
    if (nums.length === 0) {
        nums.push(currentElement)
        return
    }
    const top = nums.pop()
    formReverseArr(nums, currentElement)
    nums.push(top)
    return
}

const reverseStack = (nums) => {
    if (nums.length === 0) {
        return
    }
    const top = nums.pop()
    reverseStack(nums)
    formReverseArr(nums, top)
    return nums
}

console.log('Reverse Stack :', reverseStack([1, 2, 3, 4]));
