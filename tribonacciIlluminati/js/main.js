function tribonacci(sign,n){
    if (n === 0) return []
    if (n === 1) return [sign[0]]
    if (n === 2) return [sign[0], sign[1]]
    while (sign.length < n){
      let nextTri = sign.slice(-3).reduce((a,el) => a + el)
      sign.push(nextTri)
    }
    return sign
  }