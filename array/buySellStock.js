const buySellStock = (nums) => {
    let buy = 0;
    let sell = 1;
    let maxProfit = 0;
    while (sell < nums.length) {
        if (nums[buy] < nums[sell]) {
            const profit = nums[sell] - nums[buy];
            if (profit > maxProfit) {
                maxProfit = profit
            }
            sell ++;
        } else {
            buy++
            sell++
        }
    }
    return maxProfit
}
console.log('Max Profit after buying and selling stock :', buySellStock([7, 1, 5, 3, 6, 4]));
console.log('Max Profit after buying and selling stock :', buySellStock([7, 6, 4, 3, 1, 10, 15]));
