function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  a1.sort((a,b) => a.length - b.length);
  a2.sort((a,b) => a.length - b.length);
  return Math.max( Math.abs(a1[0].length - a2[a2.length-1].length) , Math.abs(a1[a1.length-1].length - a2[0].length) )
}