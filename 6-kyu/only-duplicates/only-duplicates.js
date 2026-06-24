 
function onlyDuplicates(str) {
  const counts = str.split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  return str.split('').filter(char => counts[char] > 1).join('');
}