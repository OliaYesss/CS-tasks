/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = 1
  
  for (let i = 0; i < nums.length; i++) {
      if (val === nums[i]) {
          nums.splice(i, 1)
          i--
      } else {
          k++
      }
  }
  return k
};