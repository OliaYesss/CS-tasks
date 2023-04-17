/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const guess = nums[mid]

    const isTarget = guess === target
    if (isTarget) {
      return mid
    }

    const isTargetGreater = guess < target
    if (isTargetGreater) {
      left = mid + 1
    }

    const isTargetLess = guess > target
    if (isTargetLess) {
      right = mid - 1
    }
  }
  return -1
};