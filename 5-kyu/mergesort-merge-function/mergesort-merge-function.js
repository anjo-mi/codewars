 
function mergesorted(a, b) {
  const res = [];
  let i = 0, j = 0;
  while (i < a.length || j < b.length){
    if (i === a.length) res.push( b[j++] );
    else if (j === b.length) res.push( a[i++] );
    else{
      if (a[i] <= b[j]) res.push( a[i++] );
      else res.push( b[j++] );
    }
  }
  return res;
}