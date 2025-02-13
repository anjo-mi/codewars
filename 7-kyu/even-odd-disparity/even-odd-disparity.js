function solve(a){
  return a.reduce((a,el) => Number.isInteger(el) ? (el % 2 === 0 ? a + 1 : a - 1) : a ,0)
}

function solve(a){
  const totals = a.reduce((acc,el) => {
    if (typeof el === 'number'){
      if (el % 2 === 0){
        acc['even'] = (acc['even'] || 0) + 1;
      }else{
        acc['odd'] = (acc['odd'] || 0) + 1;
      }
    }
    return acc;
  }, {})
  if (!totals['even']) totals.even = 0;
  if (!totals['odd']) totals.odd = 0;
  return totals.even - totals.odd;
};
