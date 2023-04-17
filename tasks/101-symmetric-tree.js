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
const helper = (rL, rR) => {
  if ((!rL && rR) || (rL && !rR) || (rL && rR && rL.val !== rR.val)) {
      return false
  }
  if (rL && rR) {
      return (
          helper(rL.left, rR.right) 
          && helper(rL.right, rR.left)
      )
  }
  return true
}

var isSymmetric = function(root) {
  if (!root) {
      return true
  }
  
  return helper(root.left, root.right)
  
};