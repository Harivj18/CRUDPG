const mergeSortedArray = (num1, m, num2, n) => {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (num1[i] > num2[j]) {
            num1[k] = num1[i]
            i--;
        } else {
            num1[k] = num2[j];
            j--
        }
        k--
    }
    while (j>=0) {
        num1[k] = num2[j];
        j--
        k--
    }
    return num1
}
console.log('Merged Array', mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log('Merged Array', mergeSortedArray([1], 1, [], 0));
console.log('Merged Array', mergeSortedArray([0], 0, [1], 1));
