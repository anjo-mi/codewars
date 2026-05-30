 
Array.range = function(start, count) {
  const arr = [];
  for (let n = start, i = 0 ; i < count ; i++, n++){
    arr.push(n);
  }
  return arr;
}
​
Array.prototype.sum = function() {
  return this.reduce((a,el) => a + el, 0);
}