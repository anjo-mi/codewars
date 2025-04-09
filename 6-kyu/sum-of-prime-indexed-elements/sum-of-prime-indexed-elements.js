 
function total(arr){
  return arr.filter((el,i) => isPrime(i)).reduce((a,el) => a+el,0);
};
​
const isPrime = (n)=>{
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n) ; i++){
    if (!(n % i)) return false;
  }
  return true;
}