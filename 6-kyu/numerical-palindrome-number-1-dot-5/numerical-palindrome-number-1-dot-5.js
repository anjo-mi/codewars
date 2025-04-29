 
function palindrome(num,s) { 
  if (typeof num !== 'number' ||
      typeof s   !== 'number' ||
      s < 0 || num < 0) return 'Not valid';
  const isDrome = n => n === +(n.toString().split('').reverse().join(''))
  const dromes = [];
  for (let i = num > 10 ? num : 11 ; dromes.length < s ; i++){
    if (isDrome(i)) dromes.push(i);
  }
  return dromes;
}