const anagramGrouper = (input) => {
    const map = new Map();

    for (const word of input) {
        const key = word.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }

    return Array.from(map.values());
};

console.log('anagramGrouper',  anagramGrouper(['ant', 'tan', 'nat', 'ex', 'xe', 'ok', 'ko']))