/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let tmp = strs[0]
  let answ = ""
  
  for (let i = 0; i < tmp.length; i++) {   //m
      let isBreak = false
      for (let j = 1; j < strs.length; j++) {
          if (strs[j][i] !== tmp[i]) {
              isBreak = true
              break
              // return answ
          }
      }
      if (isBreak) {
          break
      } else {
          answ += tmp[i]
      }
  }
  return answ
};