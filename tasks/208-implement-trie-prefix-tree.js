var TrieNode = function() {
  this.data = {}
  this.endOfWord = false
};

var Trie = function() {
  this.root = new TrieNode()
}
/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let cur = this.root
  
  if (word) {
      for (let i = 0; i < word.length; i++) {
          if (!cur.data[word[i]]) {
              cur.data[word[i]] = new TrieNode()
          }
          cur = cur.data[word[i]]
      }
  }
  cur.endOfWord = true
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let cur = this.root

  if (word) {
      for (let i = 0; i < word.length; i++) {
          if (!cur.data[word[i]]) {
              return false
          }
          cur = cur.data[word[i]]
      }
  }
  return cur.endOfWord
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let cur = this.root

  if (prefix) {
      for (let i = 0; i < prefix.length; i++) {
          if (!cur.data[prefix[i]]) {
              return false
          }
          cur = cur.data[prefix[i]]
      }
  }
  return true
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/