/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const findRoot = (nums, start, end) => {
  if (start > end) {
      return null
  }
  
  let mid = Math.ceil((start + end) / 2)
  let node = new TreeNode(nums[mid])
  
  node.left = findRoot(nums, start, mid - 1)

  node.right = findRoot(nums, mid + 1, end)
  
  return node
}

var sortedArrayToBST = function(nums) {
  return findRoot(nums, 0, nums.length - 1)
};