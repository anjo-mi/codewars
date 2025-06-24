 
function pattern(n){
  const ptrn = [];
  for (let i = 2 ; i <= n ; i += 2){
    ptrn.push( i.toString().repeat(i) );
  }
  return ptrn.join('\n');
}