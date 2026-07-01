 
function seqToOne(n){
  if (!Number.isInteger(n)) throw new Error(`Integers only ya big jabroni!`);
  let path = [];
  while (n < 1){
    path.push(n);
    n++;
  }
  while (n > 1){
    path.push(n);
    n--;
  }
  path.push(n);
  return path;
}