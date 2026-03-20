const avgNumber = (input) => {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum+=input[i]
    }
    console.log('ss',sum);
    
    return sum/input.length;
}

console.log('Average of Number', avgNumber([1,2,3,4,5]));
