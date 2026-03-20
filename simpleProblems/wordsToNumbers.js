const { wordsToNumbers } = require('words-to-numbers');

function convertWordInput(input) {
  return wordsToNumbers(input.toLowerCase());
}

// Examples
console.log(convertWordInput("five hundred"));          // 500
console.log(convertWordInput("five hundred thousand")); // 500000
console.log(convertWordInput("three hundred million")); // 300000000
