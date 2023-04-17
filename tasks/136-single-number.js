/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = new Map()
  let res = []

  for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
          // map.set(nums[i] , map.get(nums[i]) + 1)
          map.delete(nums[i])
      } else {
          map.set(nums[i], 1)
      }
  }

  res = [... map.keys()]

  return res[0]
};