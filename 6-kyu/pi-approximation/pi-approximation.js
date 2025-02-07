 
function iterPi(eps) {
  const symbols = {
    '+' : (a,b) => a + b,
    '-' : (a,b) => a - b
  };
  let num = 0;
  let den = 1;
  let i = 0;
  while (Math.abs(Math.PI - num * 4) > eps){
    if (i % 2 === 0){
      num = symbols['+'](num , 1 / den);
    }else{
      num = symbols['-'](num , 1 / den);
    }
    i++;
    den += 2;
  }
  return [i, parseFloat((num * 4).toFixed(10))]
}