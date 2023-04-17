/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let curMax = 0
  let newMax = 0
  let output = 0

  for (let i = 0; i < nums.length - 1; i++) {
    newMax = Math.max(nums[i] + i, newMax)
    if (i === curMax) {
        output++
        curMax = newMax
    }
  }
  
  return output
};