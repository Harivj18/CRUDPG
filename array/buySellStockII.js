const buySellStockII = (nums) => {
    let buy = 0;
    let sell = 1;
    let profit = 0;
    while (sell < nums.length) {
        if (nums[buy] < nums[sell]) {
            profit += nums[sell] - nums[buy];
        }
        buy++
        sell++
    }
    return profit
}
console.log('Max profit attained from stocks :', buySellStockII([7, 1, 5, 3, 6, 4]));
console.log('Max profit attained from stocks :', buySellStockII([1, 2, 3, 4, 5]));
console.log('Max profit attained from stocks :', buySellStockII([7, 6, 4, 3, 1]));
