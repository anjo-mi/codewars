function createDict(keys, vals){
    return keys.reduce((a,el,i) => {
      if (i < vals.length){
        a[el] = vals[i]
      }else { a[el] = null }
      return a
    }, {})
  }


console.log(createDict(['a', 'b', 'c'], [1, 2, 3]), {'a': 1, 'b': 2, 'c': 3})
console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4]), {'a': 1, 'b': 2, 'c': 3})
console.log(createDict(['a', 'b', 'c','d'], [1, 2, 3]), {'a': 1, 'b': 2, 'c': 3, 'd':null})

console.log(createDict(['a', 'b', 'c'], [1, 2, 3]), {'a': 1, 'b': 2, 'c': 3})
console.log(createDict([], []), {}, "empty keys arguments should return '{}'")
console.log(createDict([], [1]), {}, "empty keys arguments should return '{}'")
console.log(createDict(['a', 'b'], [1, 2, 3, 4]), {'a': 1, 'b': 2},"if not enough keys ignore rest of values")
console.log(createDict(['a'], []), {'a': null}, " if not enough values, value is 'null'")
console.log(createDict(['a', 'b', 'c', 'd', 'e'], [1, 2]), {'a': 1, 'b': 2, 'c': null, 'd': null, 'e': null}, "if not enough values, value is 'null' . . . ")
console.log(createDict(['a', 'b', 'c', 'd', 'e'], [1, 2, 0, false, ""]), {'a': 1, 'b': 2, 'c': 0, 'd': false, 'e':""}, "'0', 'false' or`\"\" (an empty string) are valid values")