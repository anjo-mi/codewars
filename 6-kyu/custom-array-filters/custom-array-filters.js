 
Array.prototype.even = function() {
  let arr = this.filter(el => typeof el === 'number' && el !== '.' && Number.isInteger(el));
  return arr.filter(el => !(el % 2));
}
​
Array.prototype.odd = function() {
  let arr = this.filter(el => typeof el === 'number' && el !== '.' && Number.isInteger(el));
  return arr.filter(el => (el % 2));
​
}
​
Array.prototype.under = function(n) {
  let arr = this.filter(el => typeof el === 'number' && el !== '.' && Number.isInteger(el));
  return arr.filter(el => el < n);
​
}
​
Array.prototype.over = function(n) {
  let arr = this.filter(el => typeof el === 'number' && el !== '.' && Number.isInteger(el));
  return arr.filter(el => el > n);
}
​
Array.prototype.inRange = function(a,b) {
  let arr = this.filter(el => typeof el === 'number' && el !== '.' && Number.isInteger(el));
  return arr.filter(el => el <= b && el >= a);
}