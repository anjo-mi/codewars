function jumpingNumber(n){
    if (n.length === 1) return 'Jumping!!'
    n = n.toString().split('').map(Number)
    let onlyOffOne = 0
    for (let i = 0 ; i < n.length - 1 ; i++){
      if (Math.abs(n[i] - n[i+1]) === 1){
        onlyOffOne++
      }
    }
    return onlyOffOne === n.length - 1 ? 'Jumping!!' : 'Not!!'
  }