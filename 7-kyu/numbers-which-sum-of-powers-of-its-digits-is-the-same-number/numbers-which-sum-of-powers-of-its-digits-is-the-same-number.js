 
const sumOfExps = (n,e) => n.toString().split('').map(Number).reduce((a,el) => a + (el**e),0);
function eqSumPowdig(hMax, exp) {
  const results = [];
  const exped = sumOfExps(hMax,exp);
  for (let i = 2 ; i <= hMax ; i++){
    if (i === sumOfExps(i,exp)) results.push(i);
  }
  return results;
}