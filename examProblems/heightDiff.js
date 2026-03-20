const heightDiff = (num) => {
    const map = new Map();
    let sum = 0;
    for (let i = 0; i < num.length - 1; i++) {
        if (num[i] < 0 || num[i+1] < 0) {
            return 'Invalid Input'
        }
        sum = num[i+1] - num[i];
        if (sum < 0) {
            return 'Invalid Input'
        }
        if (map.has(sum)) {
            return sum
        }
        map.set(sum, i)
    }
    return 'None'
}

console.log('Height difference :',heightDiff([2,4,6,7])); //2
console.log('Height difference :',heightDiff([5,10,11,13])); // None
console.log('Height difference :',heightDiff([-1,3,4,5])); // Invalid



// any height -ve, invalid input
// any 2 diff same, return that
// all result diff, return none