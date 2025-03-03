function sumOrProduct(array, n) {
  array.sort((a,b) => a-b);
  const prodOfMin = array.slice(0,n).reduce((a,el) => a * el, 1);
  const sumOfMax = array.slice(-n).reduce((a,el) => a + el, 0);
  return prodOfMin > sumOfMax 
          ? 'product'
        :prodOfMin < sumOfMax
          ? 'sum' 
          : 'same'
}