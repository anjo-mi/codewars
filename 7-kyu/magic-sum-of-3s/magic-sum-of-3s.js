 
function magicSum(nums) {
  return nums.reduce((threes,num) => {
    if (num.toString().includes('3') && num % 2) threes += num;
    return threes;
  }, 0)
}