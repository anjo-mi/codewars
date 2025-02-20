 
function sortedBrands(history){
  const totals = history.reduce((a,el) => {
    a[el.brand]= (a[el.brand] || 0) + 1;
    return a;
  }, {})
  return Object.keys(totals).sort((a,b) => totals[b] - totals[a]);
}