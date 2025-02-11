function decomp(n) {
  const arr = [];
  for(let i = 2 ; i <= n ; i++){
    arr.push(i);
  }
  const totals = arr.map(getPrimeFactors).flat(2)
                    .reduce((a,el) => {
                      a[el] = (a[el] || 0) + 1;
                      return a;
                    }, {});
  const results = [];
  for (let factors in totals){
    results.push(`${factors}^${totals[factors]}`);
  }
  
  return results.map(el => {
    if (el.split('^')[1] === '1'){
      return el.split('^')[0];
    }
    return el;
  }).join(' * ');
}
​
function getPrimeFactors(num){
  const factors = [];
  
  while (num % 2 === 0){
    factors.push(2);
    num = num / 2;
  }
  
  for (let i = 3 ; i <= Math.sqrt(num) ; i++){
    while (num % i === 0){
      factors.push(i);
      num = num / i;
    }
  }
  
  if (num > 2){
    factors.push(num);
  }
  
  return factors;
}