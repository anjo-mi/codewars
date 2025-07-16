 
function evenAndOdd(num){
  const n = num.toString().split('');
  const evens = n.filter(el => !(el % 2)).join('');
  const odds  = n.filter(el =>  (el % 2)).join('');
  return [+evens,+odds];
}