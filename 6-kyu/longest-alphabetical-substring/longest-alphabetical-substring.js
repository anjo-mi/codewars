 
const alpha = 'abcdefghijklmnopqrstuvwxyz'
const order = alpha.split('').reduce((a,el,i) => {
  a[el] = i;
  return a;
}, {});
​
function longest(str) {
  let longest = '',
      j = 1;
  while (j <= str.length){
    let curr = '';
    while (j <= str.length && ( !curr || order[str[j-1]] >= order[curr[curr.length-1]] )){
      curr += str[j-1];
      j++;
    }
    if (curr.length > longest.length) longest = curr;
  }
  return longest;
}