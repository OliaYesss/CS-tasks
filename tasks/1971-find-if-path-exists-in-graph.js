/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const dfs = (cur, destination, map, visited) => {
  if (visited.has(cur)) {
      return false 
  }

  if (cur === destination) {
      return true
  }

  const curDest = map.get(cur)

  visited.add(cur)

  for (let i = 0; i < curDest.length; i++) {
      if (dfs(curDest[i], destination, map, visited)) {
          return true
      }
  }

  return false
}
var validPath = function(n, edges, source, destination) {
if (!edges.length) {
  return true 
}

const map = new Map()

for (let i = 0; i < edges.length; i++) {
    if (map.has(edges[i][0])) {
        map.get(edges[i][0]).push(edges[i][1])
    } else {
        map.set(edges[i][0], [edges[i][1]])
    }

    if (map.has(edges[i][1])) {
        map.get(edges[i][1]).push(edges[i][0])
    } else {
        map.set(edges[i][1], [edges[i][0]])
    }
}

return dfs(source, destination, map, new Set())

};