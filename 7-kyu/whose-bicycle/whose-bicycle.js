 
function whoseBicycle(d1, d2, d3) {
  const order = [d3,d2,d1].sort((a,b) => {
    const totalA = Array.from(Object.values(a)).reduce((acc,el) => acc + el, 0);
    const totalB = Array.from(Object.values(b)).reduce((acc,el) => acc + el, 0);
    return totalB - totalA;
  })
  const number = order[0] === d1 
                  ? 'first' : 
                 order[0] === d2 
                  ? 'second' 
                  : 'third';
  return `I need to buy a bicycle for my ${number} son.`
}