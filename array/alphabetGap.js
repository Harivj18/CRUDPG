const alphabetGap = (str) => {
    str = str.toLowerCase();
    let sum = 0;
    for (let i = 0; i < str.length - 1; i++) {
        let char1 = str.charCodeAt(i) - 96;
        
        let char2 = str.charCodeAt(i + 1) - 96;
        sum += Math.abs(char2 - char1);
    }
    return sum
}
console.log('Alphabet gap in given String :', alphabetGap('Carrot'));
console.log('Alphabet gap in given String :', alphabetGap('Code'));
