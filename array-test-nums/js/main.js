function isIntArray(arr) {
    if (!arr) return false
    
    
    if (arr.some(el => (!el && el !== 0) || 
                          typeof el !== 'number' || 
                          el.toString().includes('.')
                          )) return false
    
    
    if (arr.every(el => !isNaN(el) && 
                        !el.toString().includes('.')
                        )) return true
  
  }

console.log(isIntArray([]), true, "Input: []");
console.log(isIntArray([1, 2, 3, 4]), true, "Input: [1, 2, 3, 4]");
console.log(isIntArray([1, 2, 3, NaN]), false, "Input: [1, 2, 3, NaN]");