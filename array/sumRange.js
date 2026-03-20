const sumRange = (start, end) => {
    let sum = start + end
    for (let i = start + 1; i < end; i++) {
        sum += i
    }
    return sum
}

console.log('SumRange :', sumRange(2, 7)); // 27
console.log('SumRange :', sumRange(5, 9)); // 35
