const largeNumberinNestedArr = (arr, max = -Infinity) => {
    if (arr.length < 0) {
        return
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            return largeNumberinNestedArr(arr[i]) 
        } else if (max > arr[i]) {
            max = arr[i]
        }
    }
}

console.log('Largest Number in the given Array :', largeNumberinNestedArr([1,2,3,[4,5,6,[7,8,9]]]));
