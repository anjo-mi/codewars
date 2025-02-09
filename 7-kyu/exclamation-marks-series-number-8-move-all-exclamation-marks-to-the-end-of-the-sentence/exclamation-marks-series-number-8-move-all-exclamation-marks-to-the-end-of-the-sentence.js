 
function remove (str) {
  const exclaimCount = str.split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  str = str.replaceAll('!', '');
  return str + '!'.repeat(exclaimCount['!']);
}