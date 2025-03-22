 
function nthterm(first, n, c){
  const seq = [];
  for (let i = 0 ; i <= n ; i++){
    if (i === 0) seq[i] = first
    else {seq[i] = seq[i-1] + c}
  }
  return seq[n];
}