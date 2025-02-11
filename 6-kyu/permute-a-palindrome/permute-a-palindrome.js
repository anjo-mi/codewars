function permuteAPalindrome (input) {
  const counts = input.split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  let odds = 0;
  for (let totals in counts){
    if (counts[totals] % 2 === 1){
      odds++;
    }
  }
  return odds > 1 ? false : true;
}
​