 
function sortIt(arr){
  const counts = arr.reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  
  const applyConditions = (a,b) => {
    return counts[a] - counts[b] || b - a;
  }
  
  return arr.slice(0).sort(applyConditions);
  
}