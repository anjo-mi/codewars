 
function runningAverage() {
  let total = 0;
  let inputs = [];
  return function(n){
    inputs.push(n);
    total += n;
    return Math.round((total / inputs.length) * 100) /100;
  }
}