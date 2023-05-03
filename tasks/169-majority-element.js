/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const target = nums.length / 2
  const map = new Map()

  for(let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
          map.set(nums[i], map.get(nums[i]) + 1)
      } else {
          map.set(nums[i], 1)
      }
  }

  for (let i = 0; i < nums.length; i++) {
      if (map.get(nums[i]) >= target) {
          return nums[i]
      }
  }
};