 
var mispelled = (w1, w2) => {
  const l1 = w1.length;
  const l2 = w2.length;
  if (Math.abs(l1-l2) > 1) return false;
  if (Math.abs(l1-l2) === 1){
    if (w1.slice(1) === w2 || 
        w2.slice(1) === w1 || 
        w1.slice(0,w1.length-1) === w2 ||
        w2.slice(0,w2.length-1) === w1) return true;
  }
  let off = 0;
  for (let i = 0 ; i < w1.length ; i++){
    if (w1[i] !== w2[i]) off++;
  }
  return off < 2
}