function sumOfN(n) {
    let arr = []
    if (n === 0) return [0]
    if (n > 0){
      for (let i = 0 ; i <= n ; i++){
        arr[i] = ( arr[i-1] || 0 ) + i
      }
    }
    if (n < 0){
      for(let i = 0 ; i >= n ; i--){
        arr[Math.abs(i)] = ( arr[ Math.abs(i) - 1 ] || 0 ) + i
      }
    }
    return arr
  }