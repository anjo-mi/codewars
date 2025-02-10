function mixedFraction(s){
  function reduce(n,d){
    function gcd(a,b){
      return b ? gcd(b, a % b) : a;
    }
    const commonDen = gcd(n,d);
    const reducedNum = n / commonDen;
    const reducedDen = d / commonDen;
    
    return [reducedNum , reducedDen]
  }
  
  let [num,den] = s.split('/').map(Number);
  if (num < 0 && den < 0){
    num = Math.abs(num);
    den = Math.abs(den);
  }else if (den < 0){
    num *= -1;
    den *= -1;
  }
  if (den === 0) throw new Error('cannot divide by 0')
  let wholeNum = num >= 0 ? Math.floor(num / den) : Math.ceil(num / den);
  let rem = num - (wholeNum * den);
  if (rem !== 0){
    const neg = rem < 0;
    [rem,den] = reduce(Math.abs(rem),den);
    if (neg && !wholeNum) rem = -rem
  }
  return  wholeNum  &&  rem ? `${wholeNum} ${rem}/${den}` : 
          wholeNum  && !rem ? `${wholeNum}` : 
          !wholeNum &&  rem ? `${rem}/${den}` : '0';
}
