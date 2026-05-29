 
function strangeMath(n, k){
  const nums = [];
  for (let i = 0 ; i <= n ; i++){
    nums.push(i);
  }
  nums.sort();
  return nums.indexOf(k);
}