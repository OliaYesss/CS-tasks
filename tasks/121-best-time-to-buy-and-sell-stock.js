/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buyMin = [prices[0]]
  let sellMax = [prices[prices.length - 1]]


  for (let i = 1; i < prices.length; i++) {
    buyMin.push(Math.min(prices[i], buyMin[buyMin.length - 1]))
  }

  for (let i = prices.length - 2; i >= 0; i--) {
     sellMax.unshift(Math.max(prices[i], sellMax[0]))
  }

  let profit = -Infinity
  for (let i = 0; i < prices.length; i++) {
    profit = Math.max(profit, sellMax[i] - buyMin[i])
  }
    
  return Math.max(profit, 0)
};