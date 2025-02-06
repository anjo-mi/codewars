function numberJoy(n) {
  let num = n.toString().split('').map(Number);
  const total = num.reduce((a,el) => a + el, 0);
  const reverse = +(total.toString().split('').reverse().join(''));
  return n % total === 0 && total * reverse === n;
}