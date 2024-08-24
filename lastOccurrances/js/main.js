function solve(arr) {
    let lastOccurrances = []
    for (let i = 0 ; i < arr.length ; i++){
      if (!arr.slice(i + 1).includes(arr[i])){
        lastOccurrances.push(arr[i])
      }
    }
    return lastOccurrances
  }