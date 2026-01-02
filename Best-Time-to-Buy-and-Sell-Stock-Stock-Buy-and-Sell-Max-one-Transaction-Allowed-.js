/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_p=0
    let mini=prices[0]
    for (let i=1;i<prices.length;i++){
        let cost=prices[i]-mini
        max_p=Math.max(max_p,cost)
        mini=Math.min(mini,prices[i])
    }
    return max_p
};
