 
function meanVsMedian(nums) {
  const midIndex = Math.floor(nums.length / 2);
  const median = nums.sort((a,b) => a-b)[midIndex];
  const mean = nums.reduce((a,el) => a+el,0) / nums.length;
  return mean > median
          ? 'mean'
        :median > mean
          ? 'median'
          : 'same';
}