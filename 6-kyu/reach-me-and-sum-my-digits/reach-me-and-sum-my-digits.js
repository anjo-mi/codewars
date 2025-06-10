 
function sumDigNthTerm(init, pattern, n) {
  const seq = [init];
  let turn = 0;
  for (let i = 0 ; i < n ; i++){
    seq[i+1] = seq[i] + pattern[turn % pattern.length];
    turn++;
  }
  const digits = seq[n-1].toString().split('').map(Number);
  return digits.reduce((a,el) => a + el, 0);
}