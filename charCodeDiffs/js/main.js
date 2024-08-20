function calc(x){
    let str1 = ''
    let str2 = ''
    for (let char of x){
      let numAsStr = char.charCodeAt(0).toString()
      str1 += numAsStr
    }
    str1 = str1.split('')
    str2 = str1.map(el => {
        if (el === '7'){
            return '1'
        }else{
            return el
        }
    })
    str1 = str1.map(Number)
    str2 = str2.map(Number)
    let total1 = str1.reduce((a,el) => a + el , 0)
    let total2 = str2.reduce((a,el) => a + el , 0)

    return total1 - total2
  }

  console.log(calc('abcdef'))