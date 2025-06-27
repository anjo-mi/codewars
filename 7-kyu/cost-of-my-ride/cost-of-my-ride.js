 
function insurance(age, size, days){
  const ageFee = age < 25 ? 10 * days : 0;
  const sizeFee = size === 'economy' ? 0 : 
                  size === 'medium'  ? 10 * days : days * 15;
  const baseFee = days * 50;
  return days > 0 ? ageFee + sizeFee + baseFee : 0;
}