 
function abundantNumber(num) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num) ; i++){
    if ( !( num % i ) ){
      if (num % i !== i) divisors.push(i, num/i);
      else {divisors.push(i)}
    }
  }
  const abundancy = divisors.reduce((a,el) => a + el, 0);
  return abundancy - num > num;
}