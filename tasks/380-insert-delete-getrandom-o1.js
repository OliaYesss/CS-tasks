var RandomizedSet = function() {
  this.set = new Set()
  this.array = []
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (!this.set.has(val)) {
      this.set.add(val)

      return true
  } else {
      return false
  }
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  return this.set.delete(val)
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  this.array = [...this.set]
  return this.array[Math.floor(Math.random() * this.array.length)]
}; 

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/