/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const xArr = nums.slice(0, n)
  const yArr = nums.slice(n, nums.length)
  let ans = []

  for (let i = 0; i < n; i++) {
      ans.push(xArr[i], yArr[i])
  }
  
  return ans
};