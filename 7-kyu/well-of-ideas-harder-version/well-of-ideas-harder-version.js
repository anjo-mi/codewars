 
function well(x){
  const goods = x.flat().reduce((a,el) => {
    if (typeof el === 'string' && el.toLowerCase() === 'good') a++
    return a
  },0);
  return goods < 1 ? 'Fail!' : 
         goods < 3 ? 'Publish' : 'I smell a series!';
}