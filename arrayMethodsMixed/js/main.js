function menFromBoys(arr){
    let evens = []
    let odds = []
    arr.forEach(el => {
      if (Math.abs(el) % 2 === 0){
        if (!evens.includes(el)){
          evens.push(el)
        }
      }
      if (Math.abs(el) % 2 === 1){
        if (!odds.includes(el)){
          odds.push(el)
        }
      }
    })
    
    return evens.sort((a,b) => a-b).concat(odds.sort((a,b) => b - a))
  }