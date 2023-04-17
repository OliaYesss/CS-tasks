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
 * @return {boolean}
 */

var height = function(root) {
  if (!root) return 0

  const left = height(root.left)
  const right = height(root.right)
  // console.log(left)
  // console.log(right)

  if (left === false || right === false || (Math.abs(left - right) > 1)) {
      return false
  }

  return Math.max(left, right) + 1
}

var isBalanced = function(root) {
  if (!root) return true

  return height(root) !== false
};