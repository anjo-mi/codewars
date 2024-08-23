function cubeOdd(arr) {
    if (!arr.every(el => typeof el === 'number')) return undefined
    let odds = arr.filter(el => Math.abs(el % 2) === 1)
    return odds.reduce((a,el) => a + el ** 3 , 0)
  }