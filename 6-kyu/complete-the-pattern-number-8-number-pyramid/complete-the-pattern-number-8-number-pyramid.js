function pattern(n, l = null, arr = []){
  if (n <= 0 && !l) return '';
  if (!n) return arr.join('\n');
  let s = '';
  for (let i = 1 ; i < n ; i++){
    s += i % 10;
  }
  s = s + (n % 10) + s.split('').reverse().join('');
  if (!l) l = s.length;
  while(s.length < l) s = ' ' + s + ' ';
  arr = [s].concat(arr);
  return pattern(n-1,l,arr);
}
​