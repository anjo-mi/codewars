 
function top3(prd, amt, pr) {
  const objs = prd.map((el,i) => {
    return {
      name: prd[i],
      amount: amt[i],
      price: pr[i],
      revenue: amt[i] * pr[i],
      i
    };
  });
  return objs
    .sort((a,b) => b.revenue - a.revenue || a.i - b.i)
    .map(el => el.name).slice(0,3);
}