const sumSquareEvenRootOdd = ns => {
    return +(ns.map(el => el % 2 === 0 ? el ** 2 : Math.sqrt(el))
               .reduce((a,el) => a + el, 0).toFixed(2))
  };