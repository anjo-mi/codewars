 
function lowestProduct(input) {
  if (input.length < 4) return 'Number is too small';
  input = input.split('').map(Number);
  let min = Infinity;
  for ( let i = 0 ; i < input.length - 3 ; i++ ){
    const prod = input[i] * input[i + 1] * input[i + 2] * input [i + 3];
    if (prod < min) min = prod;
  }
  return min;
}