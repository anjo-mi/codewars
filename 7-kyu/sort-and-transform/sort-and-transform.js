 
const getStr = (arr) => arr.map(num => String.fromCharCode(num)).join('');
const addToRes = (a,res) => res.push(getStr(a.slice(0,2)) + getStr(a.slice(-2)));
​
function sortTransform(a){
  const res = [];
  addToRes(a,res);
  a.sort((x,y) => x-y);
  addToRes(a,res);
  a.sort((x,y) => y-x);
  addToRes(a,res);
  const b = a.map(code => getStr([code])).sort();
  res.push(b.slice(0,2).join('') + b.slice(-2).join(''));
  return res.join('-');
}