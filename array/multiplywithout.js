const multiplywithout = (a, b) => {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    let sum = 0;
    for (let i = 0; i < min; i++) {
        sum += max
    }
    return sum
}
console.log('multiplywithout :', multiplywithout(3, 4)); //12