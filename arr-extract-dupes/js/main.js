function duplicates(arr) {
    const dupes = []
    arr.reduce((a,el) => {
      if (a.includes(el) && !dupes.includes(el)){
        dupes.push(el)
      }
      a.push(el)
      return a
    }, [])
    return dupes
  }

console.log(duplicates([1, 2, 3, 4, 5]), [], "arr = [1, 2, 3, 4, 5]");
console.log(duplicates([]), [], "arr = []");
console.log(duplicates(['no', 'duplicates', 'here']), [], "arr = ['no', 'duplicates', 'here']");
console.log(duplicates([1, 2, 3, 4, 3]), [3], "arr = [1, 2, 3, 4, 3]");
console.log(duplicates([1, 2, 3, 3, 2, 1]), [3, 2, 1], "arr = [1, 2, 3, 3, 2, 1]");
console.log(duplicates([1, 2, 1, 2, 1, 2, 1]), [1, 2], "arr = [1, 2, 1, 2, 1, 2, 1]");
console.log(duplicates([1, 2, 3, 4, '3']), [], "arr = [1, 2, 3, 4, '3']");
console.log(duplicates(['1', 2, 3, 3, '2', 1]), [3], "arr = ['1', 2, 3, 3, '2', 1]");
console.log(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut'], "arr = ['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']");