const substrnoRepeat = (str) => {
    let start = 0;
    const map = new Map();
    let result = '';
    let maxLength = 0;
    for (let end = 0; end < str.length; end++) {
        if (map.has(str[end]) && map.get(str[end]) >= start) {
            start = map.get(str[end]) + 1
        }
        map.set(str[end], end)
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength
}

console.log('substrnoRepeat', substrnoRepeat('abcdabcbb')); // 3
console.log('substrnoRepeat', substrnoRepeat('bbbbb')); // 1
