 
function sum(num, max = num, memo = {}) {
  const k = num+';'+max;
  if (k in memo) return memo[k];
  if (!num) return 1;
  if (num < 0) return 0;
  
  let count = 0;
  for (let i = 1 ; i <= Math.min(num,max) ; i++){
    count += sum(num - i, i, memo);
  }
  
  return memo[k] = count;
}