 
function seqlist(f,c,l) {
  const arr = [];
  for (let i = f ; arr.length < l ; i += c) arr.push(i);
  return arr;
}