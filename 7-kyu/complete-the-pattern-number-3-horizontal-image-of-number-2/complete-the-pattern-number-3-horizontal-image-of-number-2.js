 
function pattern(n){
  if (n <= 0) return '';
  let str = '';
  const arr = [];
  while (n){
    str += n;
    arr.push(str);
    n--;
  }
  return arr.join('\n');
}