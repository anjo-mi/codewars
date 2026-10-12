 
function changeMe(money){
  let n = money.startsWith('£') ? parseInt(money.slice(1)) : parseInt(money);
  if (!n || money.includes(' ')) return money;
  if (money.startsWith('£')) n *= 100;
  if (n <= 10 || n > 500) return money;
  let i = 0;
  const monies = ['20p', '10p'];
  const divs =   [20,    10];
  while (divs[i] >= n) i++;
  const res = [];
  while (n > 0 && i < monies.length){
    if (divs[i] <= n){
      res.push(monies[i]);
      n -= divs[i];
    }else i++;
  }
  return res.join(' ');
}