const nonOverlappingInterval = (intervals) =>  {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let sortedArr = [intervals[0]];
    let count = 0;
    for (let i = 1; i < intervals.length; i++) {
        let currentArr = intervals[i];
        let prevArr = sortedArr[sortedArr.length - 1];
        if (prevArr[1] > currentArr[0]) {
            count++
        }
        sortedArr.push(intervals[i])
    }
    return count
}
console.log('Result of nonOverlappingInterval :', nonOverlappingInterval([[1, 2], [2, 3], [3, 4], [1, 3]]));
console.log('Result of nonOverlappingInterval :', nonOverlappingInterval([[1, 2], [1, 2], [1, 2]]));
console.log('Result of nonOverlappingInterval :', nonOverlappingInterval([[1, 2], [2, 3]]));
