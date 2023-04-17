/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  const rule = {
      type: 0,
      color: 1,
      name: 2
  }

  let output = 0

  for (let i = 0; i < items.length; i++) {
      if (ruleValue === items[i][rule[ruleKey]]) {
          output++
      }
  }

  return output
};