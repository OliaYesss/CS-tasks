/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var helper = function(root, count) {
  if (!root) {
      return count
  }

  count++
  return Math.max(helper(root.left, count), helper(root.right, count))
}
var maxDepth = function(root) {
  let count = 0
  
  return helper(root, count)
};