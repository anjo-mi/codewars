 
function findUnique(ns) {
  const counter = ns.reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  for (const num in counter){
    if (counter[num] === 1) return +num;
  }
}
​