 
function geometricSequenceElements(a, r, n){
  if (n === 1) return a;
  const arr = [a]
  for (let i = 1 ; i < n ; i++){
    arr[i] = arr[i-1] * r;
  }
  return arr.join(', ')
}