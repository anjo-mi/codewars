 
const arraySum = (arr) => {
  return arr.flat(Infinity).reduce((a,el) => a + (typeof el === 'number' ? el : 0), 0);
}