 
function toCurrency(price){
  let priceArr = price.toString().split('');
  const curr = [];
  while (priceArr.length) curr.unshift(priceArr.splice(-3).join(''))
  return curr.join(',');
}