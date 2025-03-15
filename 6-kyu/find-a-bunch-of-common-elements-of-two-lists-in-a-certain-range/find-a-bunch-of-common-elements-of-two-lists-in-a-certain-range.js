function findArr(arrA, arrB, rng, wanted) {
  const [min,max] = rng;
  const exp = wanted === 'odd' ? 1 : 0;
  const eligibleA = arrA.filter(num => num >= min && 
                                       num <= max && 
                                       Math.abs(num % 2) === exp);
  const eligibleB = arrB.filter(num => num >= min && 
                                       num <= max && 
                                       Math.abs(num % 2) === exp);
  const totalA = eligibleA.reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  const totalB = eligibleB.reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  const ret = [];
  for (let key in totalA){
    if (totalA[key] > 1 && totalB[key] > 1) ret.push(+key);
  }
  return ret.sort((a,b) => a-b);
}