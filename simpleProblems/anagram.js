const anagram = (input1, input2) => {
    const word1 = input1.split('').sort().join('');
    const word2 = input2.split('').sort().join('');

    return word1 === word2;
    
}

console.log('Given Word is Anagram :', anagram('hari', 'hair'));
