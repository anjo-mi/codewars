 
function reverseFactorial(num) {
  if (num <= 0) return 'None'
  const x = num;
  const fac = (n) => {
    if (n <= 1) return 1;
    return n * fac(n-1);
  }
  let i = 0;
  while (fac(i) <= num){
    i++;
  }
  i--;
  let j = i;
  let tooLow = false;
  while (j >= 1){
    if (num === 2 && j === 1) tooLow = true;
    num = num / j;
    j--;
  }
  return (Number.isInteger(num) && !tooLow) ? i + '!' : 'None'
}