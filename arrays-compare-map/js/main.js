function getLargerNumbers(a, b) {
    return a.map((el,i) => el >= b[i] ? el : b[i])
  }