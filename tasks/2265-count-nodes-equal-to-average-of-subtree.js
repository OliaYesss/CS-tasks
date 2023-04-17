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

const helper = (root) => {
  if (!root) {
      return [0, 0, 0]
  }
  
  let curVal = root.val
  let [leftRes, leftSum, leftNodeCount] = helper(root.left)
  let [rightRes, rightSum, rightNodeCount] = helper(root.right)

  const sum = curVal + leftSum + rightSum
  const nodeCount = 1 + leftNodeCount + rightNodeCount
  const avg = Math.floor(sum / nodeCount)

  const res = (avg === curVal ? 1 : 0) + leftRes + rightRes
  
  // console.log('node', root)
  // console.log('sum', sum, 'nodeCount', nodeCount, 'res', res)

  return [res, sum, nodeCount]
}

var averageOfSubtree = function(root) {
  const [res] = helper(root)

  return res
};