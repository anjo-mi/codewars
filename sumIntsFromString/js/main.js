function sumOfIntegersInString(s) {
    if (s === '') return 0
    let numsInStr = ''
    let arrOfNums = []
    for ( let i = 0 ; i < s.length ; i++ ){
        if (!isNaN(s[i])){
        numsInStr += s[i]
      }
      if (numsInStr && (isNaN(s[i + 1]) || i === s.length - 1)){
        arrOfNums.push(+numsInStr)
        numsInStr = ''
      }
    }
    if (arrOfNums.length === 0) return 0
    if (arrOfNums.length === 1) return arrOfNums[0]
    return arrOfNums.reduce((a,el) => a + el, 0)
  }