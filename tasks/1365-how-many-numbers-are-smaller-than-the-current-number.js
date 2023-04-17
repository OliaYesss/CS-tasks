/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  res = []

  for (let i = 0; i < nums.length; i++) {
      let count = 0

      for (let j = 0; j < nums.length; j++) {
          if (nums[i] > nums[j]) {
              count += 1
          } else {
              res[i] = 0
          }
      }
      res[i] = count
      count = 0
  }

  return res
};