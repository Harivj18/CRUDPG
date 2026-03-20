const linearSearch = (nums, target) =>  {
     for (let i = 0; i < nums.length; i++) {
          if (nums[i] === target) {
               return 'Target Found'
          }
     }
     return 'Target Not Found'
}
console.log('Result of linear Search :', linearSearch([2, 5, 2, 7, 9, 10], 10));
console.log('Result of linear Search :', linearSearch([2, 5, 2, 7, 9, 10], 100));
