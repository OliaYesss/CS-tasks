/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const data = {
 '(' : ')',
 '[' : ']',
 '{' : '}'
}
const stack = []

for (let i = 0; i < s.length; i++) {
 if (data[s[i]]) {
   stack.push(data[s[i]])
 } else if (stack.length > 0 && stack[stack.length - 1] === s[i]){
   stack.pop()
 } else {
   return false
 }
}
return stack.length === 0
};