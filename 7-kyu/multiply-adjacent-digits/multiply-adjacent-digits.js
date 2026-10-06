 
function digitMultiplication(exp) {
  let sum = 0, prod = 1, sign = 1;
  for (const ch of exp) {
    if (ch === '+' || ch === '-') {
      sum += sign * prod;
      prod = 1;
      sign = ch === '-' ? -1 : 1;
    } else prod *= ch;
  }
  return sum + sign * prod;
}