/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function(vals, edges, k) {
  // map = {
  //   3 : {weight: 4, destinations: [0,1,2,6,5,4]}
  // }

  const map = new Map()

  for (let i = 0; i < vals.length; i++) {
    map.set(i, {
      weight: vals[i],
      destinations: []
    })
  }

  for (let i = 0; i < edges.length; i++) {
    map.get(edges[i][0]).destinations.push(edges[i][1])
    map.get(edges[i][1]).destinations.push(edges[i][0])
  }

  const keys = [...map.keys()]
  let output = -Infinity

  // console.log(map)

  for (let i = 0; i < keys.length; i++) {
    let curWeightArr = []
    let curDestArr = map.get(keys[i]).destinations

    for (let j = 0; j < curDestArr.length; j++) {
      curWeightArr.push(vals[curDestArr[j]])
    }

    curWeightArr.sort((a, b) => b - a)
    curWeightArr = curWeightArr.slice(0, k)

    let max = map.get(keys[i]).weight

    for (let j = 0; j < curWeightArr.length; j++) {
      if (curWeightArr[j] < 0) {
        break
      }

      max += curWeightArr[j]
    }

    // console.log(i, curWeightArr, max)

    output = Math.max(output, max)
    // console.log(output, max)
  }

  return output
};