const difference = (nums) => {
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    return max - min
}

console.log('Difference', difference([1, 2, 3, 4, 5, 10]));
