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

const depth = (root) => {
  if (root === null) {
      return 0
  }

  return Math.max(
      depth(root.left) + 1, depth(root.right) + 1 
  )
}

const sum = (root, depth, max) => {
  if (root === null) {
      return 0
  }

  if (depth === max) {
      return root.val
  }
  return sum(root.left, depth + 1, max) + sum(root.right, depth + 1, max)
}

var deepestLeavesSum = function(root) {
  let max = depth(root)

  return sum(root, 0, max - 1)
};