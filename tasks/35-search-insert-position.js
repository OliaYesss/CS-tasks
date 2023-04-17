/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  
  if (target > nums[nums.length - 1]) {
      return nums.length
  } else if (target < nums[0]){
      return 0
  }
  
  while (start <= end) {
      let mid = Math.floor((start + end) / 2)
      
      if (nums[mid] === target) {
          return mid
      } else if (nums[mid + 1] && target > nums[mid] && target < nums[mid + 1]) {
          return mid + 1
      } else if (nums[mid] < target) {
          start = mid + 1
      } else {
          end = mid - 1
      }
  }
};