const sqrt = (num) => {
    let left = 0;
    let right = num;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let val = mid * mid;
        if (val === num) {
            return mid;
        } else if (val > num) {
            right --;
        } else {
            left ++;
        }
    }
    return right;
}
console.log('SQRT of number', sqrt(8));
