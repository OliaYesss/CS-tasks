/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const map = new Map()
  const graph = dfs(node, map)

  // console.log(graph)

  return graph
};

const dfs = (node, map) => {
  if (!node) {
      return
  }

  if (map.has(node)) {
      return map.get(node)
  }

  const newNode = new Node(node.val)

  map.set(node, newNode)

  for (let nei of node.neighbors) {
      newNode.neighbors.push(dfs(nei, map))
  }

  return newNode
} 