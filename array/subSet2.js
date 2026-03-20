const subSet = (nums) => {
    const result = []
    const formSubset = (index, subSet) => {
        if (index === nums.length) {
            result.push([...subSet])
            return
        }
        subSet.push(nums[index]);
        formSubset(index + 1, subSet)
        subSet.pop()
        formSubset(index + 1, subSet)
    }
    formSubset(0, [])
    return result
}
console.log('subset of given array :', subSet([1, 2, 3]))
console.log('subset of given array :', subSet([0]))