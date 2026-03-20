// swap 
// unique
// missing number

const swap = (a, b) => {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b
    return [a,b]
}
const unique = (nums) => {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]
    }
    return result
}

const missingNumber = (nums) => {
    let xor = 0;
    let xorAll = 0;
    let n = Math.max(...nums);
    for (let i = 0; i <= n; i++) {
        xor^= i
    }
    for (const element of nums) {
        xorAll ^= element
    }
    return xor ^ xorAll
}

console.log(swap(1, 10))
console.log(unique([1, 2, 3, 1, 2]))
console.log(missingNumber([1, 2, 3, 4, 6, 7, 8])); 
console.log(missingNumber([0, 1, 2, 4]));
console.log(missingNumber([3, 0, 1]));  