function moreZeros(s){
  const binaries = s.split('').reduce((a,el) => {
    a[el] = el.charCodeAt(0)
              .toString(2)
              .split('')
              .reduce((acc, i) => {
                acc[i] = (acc[i] || 0) + 1;
                return acc;
    }, {});
    return a;
  }, {});
  const arr = [];
  for (let key in binaries){
    if (binaries[key]['0'] > binaries[key]['1']){
      arr.push(key);
    }
  }
  return arr;
}