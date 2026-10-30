 
function remember(str) {
  const res = [];
  const seen = new Set();
  const taken = new Set();
  for (const char of str){
    if (seen.has(char) && !taken.has(char)){
      res.push(char);
      taken.add(char)
    }
    seen.add(char);
  }
  return res;
}