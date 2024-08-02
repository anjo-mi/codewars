function chooseBestSum(t, k, ls) {
    function getCombos(arr, length){
      function combine(start, initial){
        if (initial.length === length){
          result.push(initial)
          return
        }
        for (let i = start ; i < arr.length; i++){
          combine(i+1, [...initial, arr[i]])
        }
      }
      let result = []
      combine(0, [])
      return result
    }
  let arr = getCombos(ls, k)
  arr = arr.filter(el => el.reduce((a,el) => a + el,0) <= t)
  if (arr.length === 0){
    return null
  }
  arr.sort((a,b) => a.reduce((a,el) => a + el,0) - b.reduce((a,el) => a + el,0))
  return arr[arr.length-1].reduce((a,el) => a + el)
}

console.log(chooseBestSum(174, 3, [50,55,57,58,60]))