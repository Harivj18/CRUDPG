const selfProduct = (nums) => {
    let pre = [];
    let suff = [];
    let val = 1;
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0) {
            val *= nums[i-1]
        }
        pre.push(val)
    }
    val = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i !== nums.length - 1) {
            val *= nums[i+ 1]
        }
        pre[i] = Math.abs(pre[i] * val)
    }
    return pre
}
console.log('Result after Product except self', selfProduct([1, 2, 3, 4]));
console.log('Result after Product except self', selfProduct([-1, 1, 0, -3, 3]));

const selfProduct2 = (nums) => {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        let val = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                val *= nums [j]
            }
        }
        result.push(val)
    }
    return result
}
console.log('Result after Product except self2', selfProduct2([1, 2, 3, 4]));
console.log('Result after Product except self2', selfProduct2([-1, 1, 0, -3, 3]));
