const pangram = (str) => {
    const char = new Set();
    str = str.toLowerCase()
    for (let i = 0; i < str.length - 1; i++) {
        let word = str.charCodeAt(i) - 96;
        char.add(word)
    }
    return char.size === 26 ? 'Pangram' : "Not a Pangram"
}

console.log(('Pangram :', pangram('The quick brown fox jumps over the lazy dog'))); // true
console.log(('Pangram :', pangram('Coding gives you superpowers'))); // false

