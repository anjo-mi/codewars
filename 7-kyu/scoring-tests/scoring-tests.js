 
function scoreTest(arr, right, omit, wrong){
  const totals = arr.reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a
  }, {});
  const total = ((totals['0'] * right) || 0) + ((totals['1'] * omit) || 0) - ((totals[2] * wrong) || 0);
  return total;
}