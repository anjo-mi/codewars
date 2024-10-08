Math.round = function(x){
  let y = +(x.toFixed(0))
  return x < 0 ? y + 1 : y
}


Math.ceil = function (x) {
  if (isNaN(x)) return NaN
  if (!isFinite(x)) return x
  let y = Math.trunc(x)
  return y < x ? y + 1 : y
}

Math.floor = function(x){
  if (isNaN(x)) return NaN
  if (!isFinite(x)) return x
  let y = Math.trunc(x)
  return y > x ? y - 1 : y
}

Math.abs = function (x){
  if (x < 0) { return -x }
  else {return x}
  
}

Math.min() = function(...args){
  if (args.length === 0) return Infinity
  if (args.length === 1 && Array.isArray(args[0])) args = args[0]
  let y = Infinity
  for ( let i = 0 ; i < args.length ; i++){
    if (typeof args[i] !== 'number' || isNaN(args[i])) return NaN
    if (args[i] < y){
      y = args[i]
    }
  }
  return y
}

Math.max() = function(...args){
  if (args.length === 0) return -Infinity
  if (args.length === 1 && Array.isArray(args[0])) args = args[0]
  let y = -Infinity
  for ( let i = 0 ; i < args.length ; i++){
    if (typeof args[i] !== 'number' || isNaN(args[i])) return NaN
    if (args[i] > y){
      y = args[i]
    }
  }
  return y
}

Math.pow = function(x,y){
  if (y === 0) return 1
  let z = 1
  while (y > 0){
    z *= x
    y--
  }
  return z
}

console.log(Math.round(3.5), 4);
console.log(Math.round(3.4), 3);
console.log(Math.round(-3.5), -3);
console.log(Math.ceil(3.1), 4);
console.log(Math.ceil(3.0), 3);
console.log(Math.ceil(-3.1), -3);
console.log(Math.floor(3.9), 3);
console.log(Math.floor(3.0), 3);
console.log(Math.floor(-3.9), -4);
console.log(Math.abs(-5), 5);
console.log(Math.abs(5), 5);
console.log(Math.abs(0), 0);