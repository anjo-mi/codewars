function workOnStrings(a,b){
  const aTotals = a.toLowerCase().split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  const bTotals = b.toLowerCase().split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {})
  function switchCase(char){
    return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
  }
  const newA = a.split('').map(char => {
    const lower = char.toLowerCase();
    if (lower in bTotals){
      return bTotals[lower] % 2 === 1 ? switchCase(char) : char;
    }
    return char;
  }).join('');
  const newB = b.split('').map(char => {
    const lower = char.toLowerCase();
    if (lower in aTotals){
      return aTotals[lower] % 2 === 1 ? switchCase(char) : char;
    }
    return char;
  }).join('');
  return newA + newB;
}
​