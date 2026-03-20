const largeNumberinNestedArr = (nums) => {
    let max = -Infinity

    for (let item of nums) {
        if (Array.isArray(item)) {
            max = Math.max(max, largeNumberinNestedArr(item))
        } else {
            max = Math.max(max, item)
        }
    }

    return max
}
console.log('Largest Number in the given Array :', largeNumberinNestedArr([1, 2, 3, [4, 5, 6, [17, 8, 9]]]));
