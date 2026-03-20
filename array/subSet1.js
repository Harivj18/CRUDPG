const subSet = (nums) => {
    let result = [[]];
    for (let i = 0; i < nums.length; i++) {
        let data = result.map((val) => [...val, nums[i]]);
        result.push(...data)
    }
    return result
}
console.log('subset of given array :', subSet([1, 2, 3]))
console.log('subset of given array :', subSet([0]))