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