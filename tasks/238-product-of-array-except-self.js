/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let answArr = new Array(nums.length).fill(1)
  let product = 1
  
  for (let i = 0; i < nums.length; i++) {
      answArr[i] = product
      product *= nums[i]
  }

  product = 1
  for (let i = nums.length - 1; i >= 0; i--) {
      answArr[i] *= product
      product *= nums[i]
  }

  return answArr
};