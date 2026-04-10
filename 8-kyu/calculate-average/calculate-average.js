 
function findAverage(arr) {
  return arr.length
          ? arr.reduce((a,el) => a + el, 0) / arr.length
          : 0;
}