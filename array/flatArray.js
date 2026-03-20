const flattenDeep = (arr) => {
    let result = []

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenDeep(item))
        } else {
            result.push(item)
        }
    }

    return result
}
console.log('Flattent Array :', flattenDeep([1, 2, 3, [4, 5, 6, [7, 8, 9]]], []));
console.log('Flattent Array :', ([1, 2, 3, [4, 5, 6, [7, 8, 9]]].flat(Infinity)));
