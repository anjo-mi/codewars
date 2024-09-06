function findDigit(num, nth) {
    num = Math.abs(num)
    num = num.toString().split('').map(Number).reverse()
    if (nth < 0 || nth === 0) return -1
    if (nth > num.length) return 0
    return num[nth - 1]
  }


  console.log(findDigit(5673, 4), 5)
  console.log(findDigit(129, 2), 2);
  console.log(findDigit(-2825, 3), 8);
  console.log(findDigit(-456, 4), 0);
  console.log(findDigit(0, 20), 0);
  console.log(findDigit(65, 0), -1);
  console.log(findDigit(24, -8), -1);