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
const helper = (root, arr) => {
  if (!root) {
      return 0
  }

  let val = root.val
  let left = helper(root.left)
  let right = helper(root.right)
  
  val = left + right + val

  return val
}

var checkTree = function(root) {
  const output = helper(root) - root.val === root.val ? true : false

  return output
};