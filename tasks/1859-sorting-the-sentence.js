/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  const output = []
  s = s.split(' ')

  for (let i = 0; i < s.length; i++) {
      output[parseInt(s[i][s[i].length - 1]) - 1] = s[i].slice(0, s[i].length - 1)
  }

  return output.join(' ')
};