const nextGreaterElementI = (num1, num2) => {
    const stack = [];
    const map = new Map()
    for (let i = 0; i < num2.length; i++) {
        while (stack.length && num2[i] > stack[stack.length - 1]) {
            map.set(stack.pop(), num2[i])
        }
        stack.push(num2[i])
    }
    console.log(map);
    return num1.map((val) => map.has(val) ? map.get(val) : -1)
}

console.log('Next Greater element', nextGreaterElementI([4, 1, 2], [1, 3, 4, 2]));
