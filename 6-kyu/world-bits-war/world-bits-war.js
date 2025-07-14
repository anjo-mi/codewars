 
const countBits = (acc, num) =>{
  const bin = num.toString(2);
  let total = 0;
  for (const char of bin){
    if (char === '1') total++;
  }
  return num >= 0 ? acc + total : acc - total;
}
​
function bitsWar(nums) {
  const evens = nums.filter(el => !(el % 2));
  const odds = nums.filter(el => el % 2);
  const evenCount = evens.reduce(countBits,0);
  const oddCount = odds.reduce(countBits,0);
  return evenCount > oddCount ? 'evens win' : 
         oddCount > evenCount ? 'odds win' : 'tie';
}
​