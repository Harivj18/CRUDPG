const flatArray = (arr) => {
    if (arr.length < 1) {
        return
    }
    let result = []
    for (let i = 0; i < arr.length; i++) {
       if (Array.isArray(arr)) {
            result = [...result, flatArray(arr[i])]
       } else {
            result.push(arr[i])
       }
    }
    return result
}

console.log('Flattent Array :', flatArray([1,2,3,[4,5,6,[7,8,9]]]));
