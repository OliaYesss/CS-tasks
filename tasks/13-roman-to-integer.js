/**
 * @param {string} s
 * @return {number}
 */
roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

var romanToInt = function(s) {
    let count = 0
    
    for (let i = 0; i < s.length; i++) {
        let cur = roman[s[i]]
        let next = roman[s[i+1]]
        
        if (cur >= next || !next) {
            count += cur
        } else {
            count -= cur
        }
    }
    return count
};