const longestConsequetiveSequenceSet = (arr) => {
    const set = new Set(arr)
    let maxLength = 0;
    for (const element of set) {
        if (!set.has(element - 1)) {
            let currentLength = 1;
            let currentElement = element;
            while (set.has(currentElement + 1)) {
                currentElement++
                currentLength++
            }
            maxLength = Math.max(currentLength, maxLength)
        }
    }
    return maxLength
}
const longestConsequetiveSequence = (nums) =>  {
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        let index = i;
        let currentElement = nums[index]
        let currentLength = 1;
        while (nums[index + 1] === currentElement + 1) {
            index++
            currentElement++
            currentLength++
        }
        maxLength = Math.max(maxLength, currentLength)
    }
    return maxLength
}

console.log('longestConsequetiveSequence number :', longestConsequetiveSequenceSet([96, 97, 98, 99, 100, 4, 200, 1, 3, 2]));
console.log('longestConsequetiveSequence number :', longestConsequetiveSequence([96, 97, 98, 99, 100, 4, 200, 1, 3, 2]));
// console.log('longestConsequetiveSequence number :', longestConsequetiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log('longestConsequetiveSequence number :', longestConsequetiveSequence([1, 0, 1, 2]));
