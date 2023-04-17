/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (i = 0; i < haystack.length; i++) {
      let match = true
      for (j = 0; j < needle.length; j++) {
          if (haystack[i+j] !== needle[j]) {
              match = false
              break
          }
      }
      if (match) {
          return i
      }
  }
return -1
};