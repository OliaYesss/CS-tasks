/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let output = []

  for (let i = 0; i < index.length; i++) {
      output.splice(index[i], 0, nums[i])
  }

  return output

};