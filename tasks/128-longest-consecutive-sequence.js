/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numSet = new Set(nums)
  let maxScore = 0

  for (let i = 0; i < nums.length; i++) {
    const prevNum = nums[i] - 1

    if (numSet.has(prevNum)) {
      continue
    }
    let [currNum, score] = [nums[i], 1]

    while (numSet.has(currNum + 1)) {
      currNum++
      score++
    }

    maxScore = Math.max(maxScore, score)
  }

  return maxScore
};