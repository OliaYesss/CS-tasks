/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
      let goal = target - nums[i]
      
      if (map.has(goal)) {
          return [i, map.get(goal)]
      } else {
          map.set(nums[i], i)
      }
  }
};