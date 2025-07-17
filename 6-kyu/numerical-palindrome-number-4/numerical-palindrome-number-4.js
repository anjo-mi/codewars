 
function palindrome(num) { 
  if (typeof num !== 'number' || num < 0) return 'Not valid';
  const n = num.toString();
  if (n.length === 1) return 11;
  if (n === n.split('').reverse().join('') && n.length > 1) return +n;
  let i = n, j = n;
  while ( i !== i.split('').reverse().join('') && 
          j !== j.split('').reverse().join('') ){
    i = (+i + 1).toString();
    j = (+j - 1).toString();
  }
  return i === i.split('').reverse().join('') ? +i : +j;
}