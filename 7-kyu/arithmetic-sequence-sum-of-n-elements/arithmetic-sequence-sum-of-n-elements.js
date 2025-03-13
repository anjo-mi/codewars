 
function ArithmeticSequenceSum(a, r, n) {
  if (n === 1) return a;
  const result = a + (r * (n - 1));
  return result + ArithmeticSequenceSum(a,r,n-1);
}