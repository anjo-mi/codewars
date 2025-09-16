 
function ìsZeroBalanced(n){
  if (!n.length) return false;
  const nums = {};
  for (let num of n){
    if (!num) nums[num] = 0;
    else if (num > 0) nums[num] = (nums[num] || 0) + num;
    else{
      num = Math.abs(num);
      nums[num] = (nums[num] || 0) - num;
    }
  }
  return !(n.reduce((a,el) => a +el,0)) && !Object.values(nums).every(Boolean);
}