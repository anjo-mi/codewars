 
function completeSeries(arr) {
  if (arr.length !== new Set(arr).size) return [0];
  const max = Math.max(...arr);
  const a = [];
  for (let i = 0 ; i <= max ; i++){
    a.push(i);
  }
  return a;
}