/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  const set = new Set()

  for (let i = 0; i < edges.length; i++) {
    if (set.has(edges[i][0])) {
      return edges[i][0]

    } else {
      set.add(edges[i][0])
    }
    
    if (set.has(edges[i][1])) {
      return edges[i][1]

    } else {
      set.add(edges[i][1])
    }
  }
};