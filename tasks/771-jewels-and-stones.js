/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const set = new Set(jewels)
  let count = 0

  for (let i = 0; i < stones.length; i++) {
      if (set.has(stones[i])) {
          count += 1
      }
  }

  return count
};