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
 * @param {number} targetSum
 * @return {boolean}
 */
const helper = (node, sum, targetSum) => {
  //     if (!node) return false
      
  //     sum += node.val
      
  //     if (sum === targetSum && !node.left && !node.right) return true
      
  //     return (
  //         helper(node.left, sum, targetSum) ||
  //         helper(node.right, sum, targetSum)
  //     ) 
      
      if (node !== null) {
          sum += node.val
          
          if (node.left && node.right) {
              return (
                  helper(node.left, sum, targetSum) ||
                  helper(node.right, sum, targetSum)
              )
          } else {
              return helper(node.right || node.left, sum, targetSum)
          }
      }
      
      if (sum === targetSum) {
          return true
      } else {
          return false
      }
  }
  
  var hasPathSum = function(root, targetSum) {
      let sum = 0
      
      if (!root) {
          return false
      }
      
      // if (root === targetSum && !root.left && !root.right) {
      //     return true
      // }
      
      return helper(root, sum, targetSum)
  };