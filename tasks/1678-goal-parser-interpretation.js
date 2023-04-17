/**
 * @param {string} command
 * @return {string}
 */

var interpret = function(command) {
  const map = new Map()

  map.set("G", "G")
  map.set("()", "o")
  map.set("(al)", "al")
  
  let cur = ""
  let res = ""

  for (let i = 0; i < command.length; i++) {
      cur += command[i]

      if (map.has(cur)) {
          res += map.get(cur)
          cur = ""
      } 
  }

  return res
  

};