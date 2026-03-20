const anagram = (a1, b1) => {
   let word1 = a1.toLowerCase().split('').sort().join('');
   let word2 = b1.toLowerCase().split('').sort().join('');
   return word1 === word2
}
console.log('Given Word is Anagram :', anagram('Hari', 'hair'));
