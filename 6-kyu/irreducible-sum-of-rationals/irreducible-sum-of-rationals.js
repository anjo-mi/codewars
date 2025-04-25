 
function sumFracts(l) {
  if (!l.length) return null;
  let newDenom = getLCD(l.map(fraction => fraction[1]));
  const nums = l.map(fraction => fraction[0] * (newDenom / fraction[1]));
  let total = nums.reduce((a,el) => a + el, 0);
  const reduce = gcd(total,newDenom);
  total /= reduce;
  newDenom /= reduce;
  return newDenom !== 1 ? [total,newDenom] : total;
}
​
const gcd = (a,b) => b ? gcd(b,a%b) : a;
const lcm = (a,b) => (a*b) / gcd(a,b);
const getLCD = (nums) => {
  
  if (!Array.isArray(nums) || nums.length < 2) return null;
  
  let result  = nums[0];
  for (let i = 1 ; i < nums.length ; i++){
    result = lcm(result, nums[i]);
  }
  return result;
}