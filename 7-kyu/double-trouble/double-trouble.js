 
function trouble(x, t){
  for (let i = 0 ; i < x.length - 1 ; i++){
    if (x[i] + x[i+1] === t){
      x.splice(i+1,1)
      i--;
    }
  }
  return x;
}