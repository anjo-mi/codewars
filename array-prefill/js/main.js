function prefill(n, v = undefined) {
    if (+n < 0 || 
        isNaN(n) || 
        n === '.' || 
        !isFinite(+n) || 
        !Number.isInteger(+n) || 
        typeof n === 'boolean') throw new TypeError(`${n} is invalid`)
    if (+n === 0) return []
    return Array(+n).fill('').map((el => el = v))
  }


console.log(prefill(3,1), [1,1,1]);
console.log(prefill(2,'abc'), ['abc','abc']);
console.log(prefill('1',1), [1]);
console.log(prefill(3, prefill(2,'2d')), [['2d','2d'],['2d','2d'],['2d','2d']]);
try {prefill('xyz', 1)}
catch(e) {
  console.log(e.name, "TypeError");
  console.log(e.message, "xyz is invalid");
  errorThrown = true;
}
console.log(errorThrown, "prefill did not throw an error");