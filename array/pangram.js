const pangram = (str) => {
    const set = new Set();
    str = str.toLowerCase()
    for (let i = 0; i < str.length - 1; i++) {
        let char = str.charCodeAt(i) - 96
        set.add(char)
    }
    return set.size === 26
}
console.log(('Pangram :', pangram('The quick brown fox jumps over the lazy dog'))); // true
console.log(('Pangram :', pangram('Coding gives you superpowers'))); // false

