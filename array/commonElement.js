const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 5, 7, 9, 1, 8];
const result = []

const commonElement = (num1, num2) => {
    for (const element of num1) {
        if (num2.includes(element)) {
            result.push(element)
        }
    }
    return result
}

const commonElement1 = (num1, num2) => {
    let commonData = num1.filter((ele) => num2.includes(ele))
    return commonData
}


console.log('Common Element on Both Array', commonElement(arr1, arr2));
console.log('Common Element on Both Array', commonElement1(arr1, arr2));
