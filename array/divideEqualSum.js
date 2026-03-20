function divideEqualSum(arr) {
    const result = [];
    const total = arr.reduce((a,b) => a + b, 0);
    const target = Math.ceil(total / Math.sqrt(arr.length));

    let current = [];
    let sum = 0;

    for (let num of arr) {
        current.push(num);
        sum += num;

        if (sum >= target) {
            result.push(current);
            current = [];
            sum = 0;
        }
    }

    if (current.length) result.push(current);

    return result;
}

console.log(divideEqualSum([1,2,3]));
console.log(divideEqualSum([1,2,3,4,5]));