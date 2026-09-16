 
function deleteNth(arr,n){
  const res = [];
  const counts = {};
  for (const el of arr){
    counts[el] = (counts[el] || 0) + 1;
    if (counts[el] <= n) res.push(el);
  }
  return res;
}