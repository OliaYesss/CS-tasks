/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let str = ''
  // nums.map(value => str += value.toString())

  let elSum = 0
  let digitSum = 0

  for (let i = 0; i < nums.length; i++) {
      elSum += nums[i]
      str += nums[i].toString()
  }

  let digits = str.split('').map(value => parseInt(value))

  for (let i = 0; i < digits.length; i++) {
      digitSum += digits[i]
  }

  return Math.abs(elSum - digitSum)
};