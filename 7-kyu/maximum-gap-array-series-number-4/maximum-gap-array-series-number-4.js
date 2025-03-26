 
function maxGap (nums){
  nums.sort((a,b) => a-b);
  let max = -Infinity;
  for (let i = 0 ; i < nums.length - 1 ; i++){
    const diff = Math.abs(nums[i+1] - nums[i]);
    if (diff > max) max = diff; 
  }
  return max;
}