 
function diff(str){
  let max = 0,
      res;
  for (const eq of str){
    const [a,b] = eq.split('-');
    if (Math.abs(a-b) > max){
      max = Math.abs(a-b);
      res = eq;
    }
  }
  return res ? res : false;
}