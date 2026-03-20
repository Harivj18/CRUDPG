const sortFrequency = (num) => {
    const map = new Map();
    for (let i = 0; i < num.length; i++) {
        map.set(num[i], (map.get(num[i]) || 0) + 1)
    }
    let result = [...map.entries()].sort((a,b) => b[1] - a[1]);
    result = result.flatMap(([index, val]) => Array(val).fill(index))
    return result
}

console.log('Sort Frequency :', sortFrequency([2, 3, 2, 4, 5, 12, 2, 3, 3, 3, 12])); // [3,3,3,3,2,2,2,12,12,4,5]

// most freq comes first, if two element has same frequency place small one first
