const nextGreaterCircular = (nums) => {
    const arr = new Array(nums.length).fill(-1);
    const n = nums.length;
    const stack = []
    for (let i = 0; i < n * 2; i++) {
        const index = i % n;
        while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
            const top = stack.pop()
            arr[top] = nums[index]
        }
        stack.push(i)
    }
    return arr
  }
  console.log('Next greater element of array :', nextGreaterCircular([1, 3, 4, 2])); // [3,4,-1,3]
  console.log('Next greater element of array :', nextGreaterCircular([1, 2, 3, 4, 3])); // [2,3,4,-1,4]
  