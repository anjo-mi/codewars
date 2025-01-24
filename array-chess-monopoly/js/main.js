function game(n) {
    const arr = [];
    for (let i = 1 ; i <= n ; i++){
      let line = [];
      for (let j = 1 ; j <= n ; j++){
        line.push([j, i + j])
      }
      arr.push(line)
    }
    const final = arr.reduce((a,el) => {
      a += el.reduce((acc, i) => {
        acc += i[0] / i[1]
        return acc
      },0)
      return a
    }, 0)
    console.log(final)
    function decToFraction(decimal) {
      // Handle obvious integers and round very close numbers
      if (Math.abs(Math.round(decimal) - decimal) < 1e-10) {
          return [Math.round(decimal)];
      }
      
      // Use a smaller precision for large numbers
      const precision = decimal > 1e6 ? 1e6 : 1e12;
      let numerator = Math.round(decimal * precision);
      let denominator = precision;
      
      const gcd = (a, b) => b ? gcd(b, a % b) : a;
      const divisor = gcd(Math.abs(numerator), denominator);
      
      numerator = numerator/divisor;
      denominator = denominator/divisor;
      
      return denominator === 1 ? [numerator] : [numerator, denominator];
    }
    return decToFraction(final)
  }