const commonElement = (arr1, arr2, arr3) => {
    let n1 = arr1.length;
    let n2 = arr2.length;
    let n3 = arr3.length;

    const commonData = []
    let i = 0, j = 0,  k = 0;
    while (i < n1 && j < n2 && k < n3) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            commonData.push(arr1[i])
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++
        } else {
            k++
        }
    }
    return commonData
}
console.log(commonElement([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120]))
