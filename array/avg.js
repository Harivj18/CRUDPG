const avgNumberReduce = (nums) => {
   let avg = nums.reduce((curr, prev) => curr + prev, 0)
   return avg / nums.length
}

const avgIterate = (nums) => {
   let sum = 0, avg = 0;
   for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
   }
   avg = sum / nums.length
   return avg
}
console.log('Average of Number', avgNumberReduce([1, 2, 3, 4, 5]));
console.log('Average of Number', avgIterate([1, 2, 3, 4, 5]));

