function expandedForm(n) {
    let pads = '0'
    n = n.toString().split('')
    let zeroes = 0
    for (let i = n.length - 1 ; i >= 0 ; i--){
        n[i] = n[i] + pads.repeat(zeroes)
        zeroes++
    }
    n = n.filter(el => +el !== 0)
    n = n.join(' + ')
    return n
  }


  console.log(expandedForm(70304))