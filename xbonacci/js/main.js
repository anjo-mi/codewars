function Xbonacci(sign,n){
    if (sign.length >= n){
      return sign.slice(0, n)
    }
    let startLength = sign.length
    let i = 0
    while (sign.length < n){
      let nextBin = sign.slice(sign.length - startLength ,sign.length).reduce((a,el) => a + el, 0)
      sign.push(nextBin)
      i++
    }
    return sign
  }