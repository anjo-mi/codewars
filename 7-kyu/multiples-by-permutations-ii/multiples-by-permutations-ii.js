 
const compareDigits = (n1,n2) => {
  const digs1 = n1.toString().split('').reduce((a,el,i) => {
    if (!a[el]) a[el] =0;
    a[el]++;
    return a;
  },{})
  const digs2 = n2.toString().split('').reduce((a,el,i) => {
    if (!a[el]) a[el] = 0;
    a[el]++;
    return a;
  },{})
  for (const [key,val] of Object.entries(digs1)){
    if (!(key in digs2) || digs2[key] !== val) return false;
  }
  for (const [key,val] of Object.entries(digs2)){
    if (!(key in digs1) || digs1[key] !== val) return false;
  }
  return true;
}
​
function findLowestInt(k) {
  let x = 1;
  while (!compareDigits(k*x, (k+1) * x)) x++;
  return x;
}