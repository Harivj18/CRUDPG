const difference = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return max - min;
}

console.log('Difference', difference([1,2,3,4,5,10]));
