 
function swap(s, n){
  const alpha = new Set('abcdefghijklmnopqrstuvwxyz');
  n = n.toString(2);
  let x = -1;
  return s.split('').map((el,i) =>{
    if ( alpha.has( s[i].toLowerCase() )){
      x++;
      const ni = x % n.length
      if ( +(n[ni]) ){
        return s[i] === s[i].toUpperCase() ? s[i].toLowerCase() : s[i].toUpperCase();
      }
    }
    return s[i];
  }).join('');
}