 
function maxSum(arr,range){
  let max = -Infinity;
  for (let i = 0 ; i < range.length ; i++){
    const sum = arr.slice(range[i][0], range[i][1] + 1).reduce((a,el) => a+ el, 0);
    if (sum > max) max = sum;
  }
  return max;
}