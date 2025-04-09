 
function insideOut(x){
  return x.split(' ').map(flipWord).join(' ');
}
​
function flipWord(w){
  if (w.length <= 3) return w;
  const mid = Math.floor(w.length / 2);
  const front = w.slice(0,mid);
  const back = w.length % 2 ? w.slice(mid + 1) : w.slice(mid);
  return w.length % 2 
          ? front.split('').reverse().join('') + w[mid] + back.split('').reverse().join('')
          : front.split('').reverse().join('') + back.split('').reverse().join('')
}