/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (!stones) {
      return 0
  }

  stones.sort((a,b)=> {return a - b})

  while (stones.length > 1) {
      let stoneY = stones.pop()
      let stoneX = stones.pop()

      if (stoneX !== stoneY) {
          stoneY = stoneY - stoneX
          stones.push(stoneY)
          stones.sort((a,b)=> {return a - b})
      } else if (stoneX === stoneY) {
          stones.push(0)
          stones.sort((a,b)=> {return a - b})
      }
  }
  console.log(stones)
  return stones

};