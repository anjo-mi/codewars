function amIWilson(p) {
    function factorial(num, sq) {
      if (num === 1) return false
      let result = 1
      for (let i = 2 ; i < num ; i++){
        result = (result * i) % sq
        }
      return result;
      }
    return (factorial( p , p * p ) + 1 ) % (p * p) === 0   
  }


  console.log(amIWilson(5), true)
  console.log(amIWilson(9), false)
  console.log(amIWilson(6), false)