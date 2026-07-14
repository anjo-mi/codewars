 
function sumTimesTables(tables, min, max){
  const rangeSum = (max - min + 1) * (min + max) / 2;
  return tables.reduce((a, el) => a + el * rangeSum, 0);
}