 
const alpha = 'abcdefghijklmnopqrstuvwxyz'
const order = alpha.split('').reduce((a,el,i) => {
  a[el] = i;
  return a;
}, {});
​
function longest(str) {
  let i = 0,
      longest = '';
  while (i < str.length){
    let curr = '';
    while (i < str.length && ( !curr || order[str[i]] >= order[curr[curr.length-1]] )){
      curr += str[i];
      i++;
    }
    if (curr.length > longest.length) longest = curr;
  }
  return longest;
}