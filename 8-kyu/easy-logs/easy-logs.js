 
function logs(x , a, b){
  const la = Math.log(a) / Math.log(x);
  const lb = Math.log(b) / Math.log(x);
  return la + lb;
}