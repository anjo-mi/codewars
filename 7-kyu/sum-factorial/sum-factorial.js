 
const fact = (n , memo ={}) => {
  if (n in memo) return memo[n];
  if (n === 1) return 1;
  return memo[n] = n * fact(n-1,memo);
}
​
function sumFactorial(arr){
  return arr.reduce((a, el) => a + fact(el), 0);
}