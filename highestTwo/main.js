const largestPairSum = nums => {
  nums.sort((a,b) => b - a);
  return nums[0] + nums[1];
}