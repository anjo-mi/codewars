// function game(n) {
//     const arr = [];
//     for (let i = 1 ; i <= n ; i++){
//       let line = [];
//       for (let j = 1 ; j <= n ; j++){
//         line.push([j, i + j])
//       }
//       arr.push(line)
//     }
//     const final = arr.reduce((a,el) => {
//       a += el.reduce((acc, i) => {
//         acc += i[0] / i[1]
//         return acc
//       },0)
//       return a
//     }, 0)
//     console.log(final)
//     function decToFraction(decimal) {
//       if (Math.abs(Math.round(decimal) - decimal) < 1e-10) {
//           return [Math.round(decimal)];
//       }
      
//       const precision = decimal > 1e6 ? 1e6 : 1e12;
//       let numerator = Math.round(decimal * precision);
//       let denominator = precision;
      
//       const gcd = (a, b) => b ? gcd(b, a % b) : a;
//       const divisor = gcd(Math.abs(numerator), denominator);
      
//       numerator = numerator/divisor;
//       denominator = denominator/divisor;
      
//       return denominator === 1 ? [numerator] : [numerator, denominator];
//     }
//     return decToFraction(final)
//   }

function game(n) {
    var result = n * n;
    if (result % 2 == 0){
      return [result / 2];
    }
    return [result, 2];
  }

  console.log(game(8), [32])
  console.log(game(1), [1, 2])
  console.log(game(0), [0])