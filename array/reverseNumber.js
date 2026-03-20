const rotateLeft = (num, k) => {
    num = num.toString()
    return num.slice(k) + num.slice(0, k)
}

const rotateRight = (num, k) => {
    num = num.toString()
    return num.slice(-k) + num.slice(0, -k)
}

console.log('Rotate left number :', rotateLeft(12345, 1));
console.log('Rotate left number :', rotateRight(12345, 2));
