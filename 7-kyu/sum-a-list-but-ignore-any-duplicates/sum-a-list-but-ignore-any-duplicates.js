function sumNoDuplicates(nums) {
  const totals = nums.reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  return nums.reduce((a,el) => {
    if (totals[el] === 1){
      a += el;
    }
    return a;
  }, 0)
}