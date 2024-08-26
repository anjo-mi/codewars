function strong(n) {
    let arrOfDigits = n.toString().split('').map(Number)
    let total = 0
    arrOfDigits.forEach(el => {
        let arr = []
        for (let i = el ; i > 0 ; i--){
            arr.push(i)
        }
        total += arr.reduce((a,el) => a * el, 1)
    })
    return n === total ? "STRONG!!!!" : "Not Strong !!" ;
  }




console.log(strong(1) )
// "STRONG!!!!"
console.log(strong(2))
// "STRONG!!!!"
console.log(strong(145) )
// "STRONG!!!!"
console.log(strong(7) )
// "Not Strong !!"
console.log(strong(93) )
// "Not Strong !!"
console.log(strong(185) )
// "Not Strong !!"