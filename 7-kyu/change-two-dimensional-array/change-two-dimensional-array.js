 
function matrix(a) {
  for (let i = 0 ; i< a.length ; i++){
    a[i][i] = a[i][i] < 0 ? 0 : 1;
  }
  return a;
}