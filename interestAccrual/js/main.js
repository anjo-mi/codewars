function calculateYears(prin, int, tax, des) {
    let years = 0
    while(prin < des){
      let intAmt = prin * int
      let taxAmt = tax * intAmt
      prin += intAmt - taxAmt
      years++
    }
    return years
  }