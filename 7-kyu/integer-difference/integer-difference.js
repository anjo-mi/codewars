 
const intDiff = (arr, n) => {
  if (arr.length <= 1) return 0;
  function countTotals(a){
    const last = a.pop();
    const total = a.reduce((acc,el) => {
      if (Math.abs(el - last) === n) acc++;
      return acc;
    }, 0)
    return total + intDiff(a,n);
  }
  return countTotals(arr);
}