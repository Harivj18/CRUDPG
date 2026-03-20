const canAttendMeetings = (nums) => {
    nums = nums.sort((a,b) => a[0] - b[0])
    let currentArr = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let newArr = nums[i];        
        if (newArr[0] < currentArr[1]) {
            return 'Meeting was overlapped'
        }
        currentArr = nums[i]
    }
    return 'Meeting Scheduled Properly'
}
console.log('Meeting room 1 :', canAttendMeetings([[0, 30], [10, 110], [115, 202]]));
console.log('Meeting room 1 :', canAttendMeetings([[0, 30], [101, 110], [115, 202]]));

