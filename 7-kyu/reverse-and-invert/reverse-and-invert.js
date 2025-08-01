 
function reverseInvert(arr){
  const ints = arr.filter(el => Number.isInteger(el));
  const reverse = ints.map(num => {
    let digs = num.toString().split('').reverse().join('');
    let pos = true;
    if (digs[digs.length - 1] === '-'){
      digs = digs.slice(0,-1);
      pos = false
    }
    return pos ? digs * - 1 : +digs;
  })
  return reverse;
}