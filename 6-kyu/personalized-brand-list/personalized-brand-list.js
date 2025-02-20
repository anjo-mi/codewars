function sortedBrands(history){
  const totals = history.reduce((a,el) => {
    a[el.brand]= (a[el.brand] || 0) + 1;
    return a;
  }, {})
  return Object.keys(totals).sort((a,b) => {
    if (totals[a] !== totals[b]){
      return totals[b] - totals[a];
    }else{
      return history.findIndex(item => item.brand === a) - history.findIndex(item => item.brand === b);
    }
  });
}
