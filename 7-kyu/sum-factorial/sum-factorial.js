 
function sumFactorial(arr){
  let result = 0;
  let f = 1
  const max = Math.max(...arr);
  const a = Array(max);
  for (let i = 1 ; i <= max ; i++){
    f *= i;
    a[i] = f;
  }
  return arr.reduce((acc,el) => acc + a[el], 0);
}