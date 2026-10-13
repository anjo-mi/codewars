 
function findAdded(s1, s2){
  const c1 = s1.split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  const c2 = s2.split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  let res = '';
  for (const char in c2){
    if (!(char in c1)){
      res += char.repeat(c2[char]);
    }else{
      let diff = c2[char] - c1[char];
      res += diff > 0 ? char.repeat(diff) : '';
    }
  }
  return res;
}