 
function exchangeWith(a, b) {
  let length = b.length;
  while (a.length) b.unshift(a.shift());
  while (a.length < length) a.push(b.pop());
}