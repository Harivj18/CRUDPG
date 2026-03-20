const alphabetGap = (input) => {
    let sum = 0;
    input = input.toLowerCase();
    for (let i = 0; i < input.length - 1; i++) {
        let word1 = input.charCodeAt(i) - 96;
        let word2 = input.charCodeAt(i + 1) - 96;
        
        sum += Math.abs(word1 - word2)
    }
    return sum
}

console.log('Alphabet gap in given String :', alphabetGap('Carrot'));
console.log('Alphabet gap in given String :', alphabetGap('Code'));
