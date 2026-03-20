const consecutiveDuplicate = (num) => {
    num = num.toString().split('');
    let result = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== num[i-1]) {
            result.push(num[i])
        }
    }
    return result.join('')
}

console.log('consecutiveDuplicate :', consecutiveDuplicate(11223345)); // 12345
console.log('consecutiveDuplicate :', consecutiveDuplicate(1122331156)); // 123156

// remove only consecutive dup
