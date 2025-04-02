 
const total = (str, rem) => {
  const filtered = str.split('').map(Number).filter(el => el % 2 === rem);
  return filtered.reduce((a,el) => a + el, 0);
};
​
function evenOrOdd(str) {
  const oddTotal = total(str,1);
  const evenTotal = total(str,0);
  return oddTotal > evenTotal
          ? 'Odd is greater than Even'
        :oddTotal < evenTotal
          ? 'Even is greater than Odd' 
          : 'Even and Odd are the same'
}