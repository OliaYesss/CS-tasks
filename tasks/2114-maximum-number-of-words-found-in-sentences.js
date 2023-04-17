/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let res = 0

  for (let i = 0; i < sentences.length; i++) {
      // let count = 0
      // for (let j = 0; j < sentences[i].length; j++) {
      //     if (sentences[i][j] === ' ') {
      //         count += 1
      //     }
      // }
      // res = Math.max(count, res)

      res = Math.max(sentences[i].split(' ').length, res)
  }

  // return res + 1
  return res
};