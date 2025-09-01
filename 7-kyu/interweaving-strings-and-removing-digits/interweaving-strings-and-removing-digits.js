 
function interweave(s1, s2) {
  const arab = new Set('0123456789');
  let s = '';
  for (let i = 0 ; i < s1.length ; i++){
    if (!arab.has(s1[i])) s += s1[i];
    if (i < s2.length && !arab.has(s2[i])) s+= s2[i];
  }
  return s;
}