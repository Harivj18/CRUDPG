const firstLetterCaps = (input) => {
    let words = input.split(' ')
    
    for (let i=0; i<words.length; i++) {
        console.log('words[i].substr(1)',words[i].substr(1));
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
        
    }
    return words.join(' ')    
}

console.log('Convert the First Letter As Capital :', firstLetterCaps('hello i am hariharan'));
