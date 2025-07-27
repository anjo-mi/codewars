 
function pattern(n){
  if (n <= 0) return '';
  let s = '';
  for (let i = 1 ; i <= n ; i++){
    s += i;
  }
  const res = [];
  for (let i = 1 ; i <= n ; i++){
    res.push(s);
    const l = i.toString().length;
    const front = s.slice(0,l);
    const back = s.slice(l);
    s = s.slice(l) + s.slice(0,l);
  }
  return res.join('\n');
}