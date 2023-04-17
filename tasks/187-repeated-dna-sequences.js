/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const set = new Set()
  const outputSet = new Set()

  for (let i = 0; i < s.length - (s.length % 10); i++) {
      const key = s.slice(i, i + 10)
      if (set.has(key)) {
          outputSet.add(key)
      } else {
          set.add(key)
      }
  }

  // console.log(output)
  return Array.from(outputSet)
};