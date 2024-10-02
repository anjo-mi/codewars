Math.round = function(num) {
    if (Number.isInteger(num)) return num
    return +num.toFixed(0)
  };
  
  Math.ceil = function(num) {
    if (Number.isInteger(num)) return num
    let round = +num.toFixed(0)
    return round - num > 0 ? round : round + 1
  };
  
  Math.floor = function(num) {
    if (Number.isInteger(num)) return num
    let round = Math.round(num)
    return round - num < 0 ? round : round - 1
  };


console.log(Math.round(0.4), 0, 'Math.round(0.4)');
console.log(Math.round(0.5), 1, 'Math.round(0.5)');
console.log(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
console.log(Math.ceil(0.5), 1, 'Math.ceil(0.5)');
console.log(Math.floor(0.4), 0, 'Math.floor(0.4)');
console.log(Math.floor(0.5), 0, 'Math.floor(0.5)');