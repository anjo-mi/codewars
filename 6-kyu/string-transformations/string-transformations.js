 
function stringTransformation(str, trans) {
  const counts = trans.reduce((a,el) => {
    if (el === 'R') a[el] = (a[el] || 0) + 1;
    if (el === 'D') a[el] = (a[el] || 1) * 2;
    return a;
  }, {});
  if (counts['R']) str = counts['R'] % 2 ? str.split('').reverse().join('') : str;
  if (counts['D']) str = str.split('').map(el => el.repeat(counts['D'])).join('');
  const u = trans.findLastIndex(el => el === 'U');
  const l = trans.findLastIndex(el => el === 'L');
  if (l >= 0 || u >= 0){
    const last = trans[Math.max(l,u)];
    str = last === 'U' ? str.toUpperCase() : str.toLowerCase();
  }
  return str;
}