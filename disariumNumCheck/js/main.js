function disariumNumber(n){
    let converted = n.toString().split('').map(Number)
    let possDis = converted.reduce((a, el, i) => {
      return a + el ** (i+1)
    }, 0)
    return possDis === n ? 'Disarium !!' : 'Not !!'
  }