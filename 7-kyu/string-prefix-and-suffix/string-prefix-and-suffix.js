 
function solve(s){
  if (s.length <= 1) return 0;
  const median = Math.floor(s.length / 2);
  let pre = s.slice(0,median);
  let suff = s.slice(-median);
  while (pre !== suff){
    pre = pre.slice(0,pre.length - 1);
    suff = suff.length === 1 ? '' : suff.slice(-(suff.length -1));
  }
  return pre.length;
}