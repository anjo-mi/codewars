 
function isVeryEvenNumber(n) {
  while (n.toString().length > 1){
    console.log(n)
    n = n.toString().split('').map(Number).reduce((a,el) => a + el, 0);
    console.log(n)
  }
  return n % 2 === 0;
}