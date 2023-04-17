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

var sumOfLeftLeaves = function(root) {
  const helper = (root, isLeft) => {
      if (!root) {
          return 0
      }
      
      const right = helper(root.right, false)
      const left = helper(root.left, true)
      const val = root.val

      return right + left + (isLeft && !root.left && !root.right ? val : 0)
  }
  return helper(root, false)
};