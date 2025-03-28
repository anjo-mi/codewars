 
function bitsBattle(nums) {
  let odds = nums.filter(n => n % 2 === 1).map(n => n.toString(2));
  let evens = nums.filter(n => n > 0 && n % 2 === 0).map(n => n.toString(2));
  odds = odds.reduce((ones,bin) => {
    for (let i = 0 ; i < bin.length ; i++){
      if (bin[i] === '1') ones++;
    }
    return ones;
  }, 0);
  evens = evens.reduce((zeros,bin) => {
    for (let i = 0 ; i < bin.length ; i++){
      if (bin[i] === '0') zeros++;
    }
    return zeros;
  }, 0);
  return evens > odds
          ? 'evens win'
        :odds > evens
          ? 'odds win'
          : 'tie';
}