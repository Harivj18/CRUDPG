const arr1 = [1,2,3,4,5,6];
const arr2 = [10,5,7,9,1,8];
const result = []

const commonElement = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            result.push(arr2[i])
        }
    }
    return result;
}

console.log('Common Element on Both Array', commonElement(arr1, arr2));
