const unionIntersection = (arr1, arr2) => {
    let union = []
    let intersection = []
    arr1 = arr1.sort((a,b) => a - b);
    arr2 = arr2.sort((a,b) => a - b);
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i])
            }
            i++
        } else if (arr2[j] < arr1[i]) {
            if (union[union.length - 1] !== arr1[i]) {
                union.push(arr2[j])
            }
            j++
        } else {
            if (intersection[intersection.length - 1] !== arr1[i]) {
                intersection.push(arr1[i])
            }
            if (union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i])
            }
            i++
            j++
        }
    }
    while (i < arr1.length) {
        if (union[union.length - 1] !== arr1[i]) {
            union.push(arr1[i])
        }
        i++
    }
    while (j < arr2.length) {
        if (union[union.length - 1] !== arr2[j]) {
            union.push(arr2[j])
        }
        j++
    }
    return [union, intersection]
}

console.log(unionIntersection([1, 2, 3, 4, 5, 6, 7, 22, 11, 22, 33, 121, 19], [1, 3, 4, 6, 7, 9, 10, 18, 19]))

const union = (a, b) => {
    return [...new Set([...a, ...b])]
}

const intersection = (a, b) => {
    const common = a.filter((val) => b.includes(val))
    return common
}

console.log(union([1, 2, 3, 4, 5, 6, 7, 22, 11, 22, 33, 121, 19], [1, 3, 4, 6, 7, 9, 10, 18, 19]))
console.log(intersection([1, 2, 3, 4, 5, 6, 7, 22, 11, 22, 33, 121, 19], [1, 3, 4, 6, 7, 9, 10, 18, 19]))
