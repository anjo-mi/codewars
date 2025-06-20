 
function closest(arr){
  let minDist = Infinity;
  let nums = [];
  for (const num of arr){
    const diff = Math.abs(0-num)
    if (diff < minDist){
      minDist = diff;
      nums = [num]
    }else if(diff === minDist){
      nums.push(num);
    }
  }
  console.log({nums})
  const set = new Set(nums);
  return set.size > 1 ? null : nums[0];
}