 
function binaryPyramid(m,n){
  const arr = [];
  for (let i = m ; i <= n ; i++){
    arr.push(+i.toString(2));
  }
  const total = arr.reduce((tot, bin) => tot + bin, 0);
  return total.toString(2);
}