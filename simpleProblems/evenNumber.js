const evenNumber = (n) => {
    if (n <= 0) {
        return 'Invalid Input'
    }
    return n % 2 === 0 ?? false;
}

console.log('Given Number is even number :', evenNumber(10));
