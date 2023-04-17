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
// var depthCalc = function(root) {
//     if (!root) return 0

//     return Math.max(depthCalc(root.left), depthCalc(root.right)) + 1
// } 

var helper = function(root) {
  if (!root) return [0, 0]

  // const depthLeft = depthCalc(root.left)
  // const depthRight = depthCalc(root.right)

  const [diameterLeft, depthLeft] = helper(root.left)
  const [diameterRight, depthRight] = helper(root.right)

  const diameter = depthLeft + depthRight
  const depth = Math.max(depthLeft, depthRight)

  // console.log(root.val, dLeft + dRight)

  return [
      Math.max(
          diameter, 
          diameterLeft, 
          diameterRight
      ),
      1 + depth
  ]
}

var diameterOfBinaryTree = function(root) {
  const [diameter] = helper(root)
  return diameter
};