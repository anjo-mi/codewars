function minSum(arr) {
    let total = 0
    while (arr.length > 0){
      let max = Math.max(...arr)
      let min = Math.min(...arr)
      let indexMax = arr.indexOf(max)
      let indexMin = arr.indexOf(min)
      arr.splice(indexMax, 1)
      if (indexMax < indexMin){
        arr.splice(indexMin - 1, 1)
      }else{
        arr.splice(indexMin, 1)
      }
      console.log(max,min)
      total += max * min
    }
    return total
  }