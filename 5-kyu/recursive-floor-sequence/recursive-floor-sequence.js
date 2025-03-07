function f(k, n) {
  const seq = [1];
  for (let i = 1 ; i <= n ; i++){
    seq.push( seq[i-1] + seq[Math.floor(i/k)] );
  }
  return seq[n];
}