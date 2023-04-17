/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const map = new Map()
  let output = []

  for (let i = 0; i < groupSizes.length; i++) {
      if (map.has(groupSizes[i])) {
          map.get(groupSizes[i]).push(i)
      } else {
          map.set(groupSizes[i], [i])
      } 
  }

  let keysArr = [...map.keys()]

  for (let i = 0; i < keysArr.length; i++) {
      while (map.get(keysArr[i]).length !== 0) {
          output.push(map.get(keysArr[i]).splice(0, keysArr[i]))
      }
  }

  return output
};