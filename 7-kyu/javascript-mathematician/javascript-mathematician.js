 
function calculate(...args) {
  let total = args.reduce((a,el) => a + el , 0);
  return function (...otherArgs){
    let otherTotal = otherArgs.reduce((a,el) => a + el , 0);
    return otherTotal + total;
  }
}