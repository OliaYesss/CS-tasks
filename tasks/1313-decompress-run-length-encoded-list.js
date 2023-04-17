/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let pairsArr = []
  const output = []

  for (let i = 0; i < nums.length; i += 2) {
      pairsArr.push([])
      for (let j = 0; j < nums[i]; j++) {
          pairsArr[pairsArr.length - 1].push(nums[i + 1]) 
      }
  }


  for (let i = 0; i < pairsArr.length; i++) {
      output.push(...pairsArr[i])
  }

  return output
};